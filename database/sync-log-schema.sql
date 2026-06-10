-- Sync log table to track Google Sheets sync operations
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

-- Enable RLS
ALTER TABLE public.sync_log ENABLE ROW LEVEL SECURITY;

-- Only admins can view sync logs
CREATE POLICY "Admins can view sync logs" ON public.sync_log
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.members
      WHERE members.user_id = auth.uid()
      AND members.is_admin = true
    )
  );

-- Service role can insert sync logs
CREATE POLICY "Service role can insert sync logs" ON public.sync_log
  FOR INSERT WITH CHECK (true);