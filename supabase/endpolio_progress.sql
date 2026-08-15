-- End Polio Content Calendar Tracker — persistent progress
-- Run this in the Supabase SQL editor (Tables > SQL Editor > New Query).

create table if not exists public.endpolio_progress (
  device_key text primary key,
  user_id uuid references auth.users(id) on delete cascade,
  progress jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.endpolio_progress enable row level security;

-- The tracker is a public tool; progress is keyed by an anonymous device id
-- stored in the visitor's localStorage. Policies are deliberately permissive.
create policy "endpolio_read_all"
  on public.endpolio_progress for select using (true);

create policy "endpolio_insert_all"
  on public.endpolio_progress for insert with check (true);

create policy "endpolio_update_all"
  on public.endpolio_progress for update using (true);