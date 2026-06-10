-- Run this in Supabase SQL editor to enforce RAC number uniqueness at the database layer.
-- The application also retries on conflicts, but unique indexes are the final safety net.
-- Applicant numbers are auto-assigned as rac026001, rac026002, etc.
-- Admin member numbers can still be manually assigned as rac000001, rac000002, etc.
--
-- The format checks are added as NOT VALID so existing historical rows with older
-- RAC formats do not block the migration. Postgres will still enforce these
-- checks for new inserts and future updates.

select id, rac_number
from public.members
where rac_number is not null
  and rac_number !~ '^rac(000|026)[0-9]{3,}$';

select id, rac_number
from public.join_applications
where rac_number is not null
  and rac_number !~ '^rac026[0-9]{3,}$';

create unique index if not exists members_rac_number_unique
  on public.members (lower(rac_number))
  where rac_number is not null;

create unique index if not exists join_applications_rac_number_unique
  on public.join_applications (lower(rac_number))
  where rac_number is not null;

do $$
begin
  alter table public.members
    drop constraint if exists members_rac_number_format;

  if not exists (
    select 1 from pg_constraint where conname = 'members_rac_number_format'
  ) then
    alter table public.members
      add constraint members_rac_number_format
      check (rac_number ~ '^rac(000|026)[0-9]{3,}$') not valid;
  end if;
end $$;

do $$
begin
  alter table public.join_applications
    drop constraint if exists join_applications_rac_number_format;

  if not exists (
    select 1 from pg_constraint where conname = 'join_applications_rac_number_format'
  ) then
    alter table public.join_applications
      add constraint join_applications_rac_number_format
      check (rac_number is null or rac_number ~ '^rac026[0-9]{3,}$') not valid;
  end if;
end $$;
