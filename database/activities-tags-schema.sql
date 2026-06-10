-- Activities and Tags Schema
-- Run this in the Supabase SQL editor to add tags and activity_tags tables

-- Create tags table for categorizing activities
create table if not exists public.tags (
  id bigserial primary key,
  name text not null unique,
  color text default '#E8175D',
  created_at timestamptz not null default now()
);

-- Create activity_tags junction table for many-to-many relationship
create table if not exists public.activity_tags (
  id bigserial primary key,
  activity_id bigint not null references public.activities(id) on delete cascade,
  tag_id bigint not null references public.tags(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (activity_id, tag_id)
);

-- Enable RLS on new tables
alter table public.tags enable row level security;
alter table public.activity_tags enable row level security;

-- Policies for tags
drop policy if exists "Anyone can view tags" on public.tags;
create policy "Anyone can view tags"
  on public.tags
  for select
  to authenticated
  using (true);

drop policy if exists "Admins can manage tags" on public.tags;
create policy "Admins can manage tags"
  on public.tags
  for all
  to authenticated
  using (public.is_current_user_admin())
  with check (public.is_current_user_admin());

-- Policies for activity_tags
drop policy if exists "Anyone can view activity tags" on public.activity_tags;
create policy "Anyone can view activity tags"
  on public.activity_tags
  for select
  to authenticated
  using (true);

drop policy if exists "Admins can manage activity tags" on public.activity_tags;
create policy "Admins can manage activity tags"
  on public.activity_tags
  for all
  to authenticated
  using (public.is_current_user_admin())
  with check (public.is_current_user_admin());

-- Insert some default tags
insert into public.tags (name, color) values
  ('Community Service', '#E8175D'),
  ('Fundraising', '#F5A623'),
  ('Professional Development', '#4A90D9'),
  ('Social', '#7ED321'),
  ('International', '#9013FE'),
  ('Training', '#50E3C2')
on conflict (name) do nothing;

-- Create useful indexes
create index if not exists idx_activity_tags_activity_id on public.activity_tags(activity_id);
create index if not exists idx_activity_tags_tag_id on public.activity_tags(tag_id);
create index if not exists idx_volunteer_hours_member_id on public.volunteer_hours(member_id);
create index if not exists idx_meeting_attendance_member_id on public.meeting_attendance(member_id);
create index if not exists idx_member_dues_member_id on public.member_dues(member_id);
create index if not exists idx_activities_activity_date on public.activities(activity_date);