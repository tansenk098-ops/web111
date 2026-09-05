/*
# Create bookings table for portfolio scheduling

## Purpose
Allows visitors to Tansen Kumar's portfolio to request a consultation or meeting
directly from the website, similar to a Calendly-style booking flow.

## New Tables
- `bookings`
  - `id` (uuid, primary key)
  - `name` (text, not null) — visitor's full name
  - `email` (text, not null) — visitor's email for follow-up
  - `topic` (text, not null) — what they want to discuss (e.g. "Manuscript review")
  - `preferred_date` (date, not null) — the date they'd like to meet
  - `preferred_time` (text, not null) — time slot label (e.g. "10:00 AM")
  - `message` (text) — optional additional notes
  - `status` (text, default 'pending') — booking status: pending / confirmed / declined
  - `created_at` (timestptz, default now())

## Security
- RLS enabled on `bookings`.
- This is a no-auth public portfolio: visitors submit bookings anonymously.
- INSERT allowed for anon + authenticated (anyone can request a booking).
- SELECT/UPDATE/DELETE restricted to authenticated (only the site owner can
  view and manage bookings after signing in to Supabase dashboard).
- This prevents visitors from reading or modifying other people's bookings
  while still allowing them to submit their own request.
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  topic text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Anyone (including anon visitors) can create a booking request
DROP POLICY IF EXISTS "anon_insert_bookings" ON bookings;
CREATE POLICY "anon_insert_bookings" ON bookings FOR INSERT
  TO anon, authenticated WITH CHECK (true);

-- Only authenticated users (the site owner) can view bookings
DROP POLICY IF EXISTS "auth_select_bookings" ON bookings;
CREATE POLICY "auth_select_bookings" ON bookings FOR SELECT
  TO authenticated USING (true);

-- Only authenticated users (the site owner) can update booking status
DROP POLICY IF EXISTS "auth_update_bookings" ON bookings;
CREATE POLICY "auth_update_bookings" ON bookings FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

-- Only authenticated users (the site owner) can delete bookings
DROP POLICY IF EXISTS "auth_delete_bookings" ON bookings;
CREATE POLICY "auth_delete_bookings" ON bookings FOR DELETE
  TO authenticated USING (true);
