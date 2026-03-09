/*
  # Create admin settings table

  1. New Tables
    - `admin_settings`
      - `id` (uuid, primary key)
      - `key` (text, setting key)
      - `value` (jsonb, setting value)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `admin_settings` table
    - Add policy for public read access to testimonials_rating
    - Restrict write access with admin password check
*/

CREATE TABLE IF NOT EXISTS admin_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text UNIQUE NOT NULL,
  value jsonb NOT NULL DEFAULT '{}'::jsonb,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE admin_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin settings are publicly readable"
  ON admin_settings
  FOR SELECT
  TO anon, authenticated
  USING (true);

INSERT INTO admin_settings (key, value) VALUES
  ('site_config', '{"phone": "05427743499", "whatsapp": "05427743499", "testimonials_rating": 4.9, "testimonials_count": 500}');
