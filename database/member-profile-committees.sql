-- Member profile and committee foundation.
-- Run this in the Supabase SQL editor before using the committee selector UI.

alter table public.members
  add column if not exists committee_onboarding_completed boolean not null default false,
  add column if not exists committee_onboarding_skipped_at timestamptz;

create table if not exists public.committees (
  id bigserial primary key,
  name text not null unique,
  description text,
  is_active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.member_committees (
  id bigserial primary key,
  member_id bigint not null references public.members(id) on delete cascade,
  committee_id bigint not null references public.committees(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (member_id, committee_id)
);

create table if not exists public.member_dues (
  id bigserial primary key,
  member_id bigint not null references public.members(id) on delete cascade,
  period text not null,
  dues_required numeric(12, 2) not null default 0,
  dues_paid numeric(12, 2) not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (member_id, period)
);

create table if not exists public.meeting_attendance (
  id bigserial primary key,
  member_id bigint not null references public.members(id) on delete cascade,
  meeting_date date not null,
  attended boolean not null default false,
  created_at timestamptz not null default now(),
  unique (member_id, meeting_date)
);

create table if not exists public.volunteer_hours (
  id bigserial primary key,
  member_id bigint not null references public.members(id) on delete cascade,
  activity_name text not null,
  hours numeric(6, 2) not null check (hours >= 0),
  activity_date date not null,
  created_at timestamptz not null default now()
);

create table if not exists public.activities (
  id bigserial primary key,
  title text not null,
  activity_date date not null,
  description text,
  created_at timestamptz not null default now()
);

create table if not exists public.member_activities (
  id bigserial primary key,
  member_id bigint not null references public.members(id) on delete cascade,
  activity_id bigint not null references public.activities(id) on delete cascade,
  attended boolean not null default true,
  created_at timestamptz not null default now(),
  unique (member_id, activity_id)
);

alter table public.committees enable row level security;
alter table public.member_committees enable row level security;
alter table public.member_dues enable row level security;
alter table public.meeting_attendance enable row level security;
alter table public.volunteer_hours enable row level security;
alter table public.activities enable row level security;
alter table public.member_activities enable row level security;

drop policy if exists "Members can view active committees" on public.committees;
create policy "Members can view active committees"
  on public.committees
  for select
  to authenticated
  using (is_active = true or public.is_current_user_admin());

drop policy if exists "Admins can manage committees" on public.committees;
create policy "Admins can manage committees"
  on public.committees
  for all
  to authenticated
  using (public.is_current_user_admin())
  with check (public.is_current_user_admin());

drop policy if exists "Members can view own committee choices" on public.member_committees;
create policy "Members can view own committee choices"
  on public.member_committees
  for select
  to authenticated
  using (
    public.is_current_user_admin()
    or exists (
      select 1
      from public.members m
      where m.id = member_committees.member_id
        and m.user_id = auth.uid()
    )
  );

drop policy if exists "Members can add own committee choices" on public.member_committees;
create policy "Members can add own committee choices"
  on public.member_committees
  for insert
  to authenticated
  with check (
    public.is_current_user_admin()
    or exists (
      select 1
      from public.members m
      where m.id = member_committees.member_id
        and m.user_id = auth.uid()
    )
  );

drop policy if exists "Members can delete own committee choices" on public.member_committees;
create policy "Members can delete own committee choices"
  on public.member_committees
  for delete
  to authenticated
  using (
    public.is_current_user_admin()
    or exists (
      select 1
      from public.members m
      where m.id = member_committees.member_id
        and m.user_id = auth.uid()
    )
  );

drop policy if exists "Members can view own dues" on public.member_dues;
create policy "Members can view own dues"
  on public.member_dues
  for select
  to authenticated
  using (
    public.is_current_user_admin()
    or exists (
      select 1
      from public.members m
      where m.id = member_dues.member_id
        and m.user_id = auth.uid()
    )
  );

drop policy if exists "Members can view own meeting attendance" on public.meeting_attendance;
create policy "Members can view own meeting attendance"
  on public.meeting_attendance
  for select
  to authenticated
  using (
    public.is_current_user_admin()
    or exists (
      select 1
      from public.members m
      where m.id = meeting_attendance.member_id
        and m.user_id = auth.uid()
    )
  );

drop policy if exists "Members can view own volunteer hours" on public.volunteer_hours;
create policy "Members can view own volunteer hours"
  on public.volunteer_hours
  for select
  to authenticated
  using (
    public.is_current_user_admin()
    or exists (
      select 1
      from public.members m
      where m.id = volunteer_hours.member_id
        and m.user_id = auth.uid()
    )
  );

drop policy if exists "Members can view activities" on public.activities;
create policy "Members can view activities"
  on public.activities
  for select
  to authenticated
  using (true);

drop policy if exists "Members can view own activity attendance" on public.member_activities;
create policy "Members can view own activity attendance"
  on public.member_activities
  for select
  to authenticated
  using (
    public.is_current_user_admin()
    or exists (
      select 1
      from public.members m
      where m.id = member_activities.member_id
        and m.user_id = auth.uid()
    )
  );

insert into public.committees (name, description, sort_order)
values
  ('Community Service', 'Local service projects and community impact work.', 10),
  ('International Service', 'International partnerships, global awareness, and cross-club collaboration.', 20),
  ('Professional Service', 'Career growth, leadership development, mentorship, and learning.', 30),
  ('Club Service', 'Club operations, fellowship, member engagement, and internal coordination.', 40),
  ('Public Relations', 'Brand, communications, social media, photography, and storytelling.', 50),
  ('Fundraising Committee', 'Fundraising, sponsorship, and resource mobilization.', 60),
  ('Rotary Foundation', 'Foundation programs, grants, giving, and Rotary priority initiatives.', 70)
on conflict (name) do update
set
  description = excluded.description,
  sort_order = excluded.sort_order,
  is_active = true;

update public.committees
set is_active = false
where name not in (
  'Community Service',
  'International Service',
  'Professional Service',
  'Club Service',
  'Public Relations',
  'Fundraising Committee',
  'Rotary Foundation'
);

create or replace view public.member_profile_summary as
with dues as (
  select
    member_id,
    coalesce(sum(dues_required), 0) as dues_required,
    coalesce(sum(dues_paid), 0) as dues_paid
  from public.member_dues
  group by member_id
),
attendance as (
  select
    member_id,
    count(*)::integer as meetings_recorded,
    (count(*) filter (where attended))::integer as meetings_attended
  from public.meeting_attendance
  group by member_id
),
hours as (
  select
    member_id,
    coalesce(sum(hours), 0) as volunteer_hours
  from public.volunteer_hours
  group by member_id
),
activities_attended as (
  select
    member_id,
    (count(*) filter (where attended))::integer as activities_attended
  from public.member_activities
  group by member_id
)
select
  m.id as member_id,
  coalesce(d.dues_required, 0) as dues_required,
  coalesce(d.dues_paid, 0) as dues_paid,
  greatest(coalesce(d.dues_required, 0) - coalesce(d.dues_paid, 0), 0) as balance,
  coalesce(a.meetings_recorded, 0) as meetings_recorded,
  coalesce(a.meetings_attended, 0) as meetings_attended,
  case
    when coalesce(a.meetings_recorded, 0) = 0 then 0
    else round((a.meetings_attended::numeric / a.meetings_recorded::numeric) * 100, 1)
  end as attendance_rate,
  coalesce(h.volunteer_hours, 0) as volunteer_hours,
  coalesce(aa.activities_attended, 0) as activities_attended,
  round(
    (
      case
        when coalesce(d.dues_required, 0) = 0 then 0
        else least(coalesce(d.dues_paid, 0) / nullif(d.dues_required, 0), 1) * 40
      end
    ) +
    (
      case
        when coalesce(a.meetings_recorded, 0) = 0 then 0
        else (a.meetings_attended::numeric / a.meetings_recorded::numeric) * 35
      end
    ) +
    least(coalesce(h.volunteer_hours, 0) / 20, 1) * 25,
    1
  ) as member_points
from public.members m
left join dues d on d.member_id = m.id
left join attendance a on a.member_id = m.id
left join hours h on h.member_id = m.id
left join activities_attended aa on aa.member_id = m.id;
