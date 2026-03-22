-- Create the calendar_assignments table to store roommate assignments for each day
CREATE TABLE IF NOT EXISTS public.calendar_assignments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  date DATE NOT NULL UNIQUE,
  roommate TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create an index on date for faster lookups
CREATE INDEX IF NOT EXISTS idx_calendar_assignments_date ON public.calendar_assignments(date);

-- Disable RLS since this is a shared household calendar
ALTER TABLE public.calendar_assignments DISABLE ROW LEVEL SECURITY;
