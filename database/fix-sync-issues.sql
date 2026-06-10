-- Fix sync issues for Google Sheets integration

-- 1. Add unique constraint to activities table for upsert to work
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint 
    WHERE conname = 'activities_title_activity_date_key'
  ) THEN
    ALTER TABLE public.activities 
    ADD CONSTRAINT activities_title_activity_date_key 
    UNIQUE (title, activity_date);
  END IF;
END $$;

-- 2. Add unique constraint to volunteer_hours table (optional, for upsert support)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint 
    WHERE conname = 'volunteer_hours_member_activity_date_key'
  ) THEN
    ALTER TABLE public.volunteer_hours 
    ADD CONSTRAINT volunteer_hours_member_activity_date_key 
    UNIQUE (member_id, activity_name, activity_date);
  END IF;
END $$;

-- 3. Fix RLS policies to allow service role full access
-- Activities: allow service role to manage all
DROP POLICY IF EXISTS "Service role can manage activities" ON public.activities;
CREATE POLICY "Service role can manage activities" ON public.activities
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Member dues: allow service role to manage all
DROP POLICY IF EXISTS "Service role can manage dues" ON public.member_dues;
CREATE POLICY "Service role can manage dues" ON public.member_dues
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Meeting attendance: allow service role to manage all
DROP POLICY IF EXISTS "Service role can manage attendance" ON public.meeting_attendance;
CREATE POLICY "Service role can manage attendance" ON public.meeting_attendance
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Volunteer hours: allow service role to manage all
DROP POLICY IF EXISTS "Service role can manage volunteer hours" ON public.volunteer_hours;
CREATE POLICY "Service role can manage volunteer hours" ON public.volunteer_hours
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Member activities: allow service role to manage all
DROP POLICY IF EXISTS "Service role can manage member activities" ON public.member_activities;
CREATE POLICY "Service role can manage member activities" ON public.member_activities
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- 4. Create sync_log table if not exists
CREATE TABLE IF NOT EXISTS public.sync_log (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  sync_type TEXT NOT NULL DEFAULT 'google_sheets',
  sheet_name TEXT,
  records_processed INTEGER DEFAULT 0,
  success BOOLEAN DEFAULT true,
  errors TEXT[],
  last_sync TIMESTAMPTZ DEFAULT now(),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_sync_log_type_sync ON public.sync_log(sync_type, last_sync DESC);
CREATE INDEX IF NOT EXISTS idx_sync_log_sheet ON public.sync_log(sheet_name);

-- Enable RLS on sync_log
ALTER TABLE public.sync_log ENABLE ROW LEVEL SECURITY;

-- Service role can do everything
DROP POLICY IF EXISTS "Service role can manage sync log" ON public.sync_log;
CREATE POLICY "Service role can manage sync log" ON public.sync_log
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Admins can view sync logs
DROP POLICY IF EXISTS "Admins can view sync logs" ON public.sync_log;
CREATE POLICY "Admins can view sync logs" ON public.sync_log
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.members
      WHERE members.user_id = auth.uid()
      AND members.is_admin = true
    )
  );