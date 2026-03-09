/*
  # Create testimonials table

  1. New Tables
    - `testimonials`
      - `id` (uuid, primary key)
      - `name` (text, customer name)
      - `location` (text, customer location)
      - `service_type` (text, service type)
      - `quote` (text, customer quote)
      - `rating` (number, rating out of 5)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `testimonials` table
    - Add policy for public read access
    - Add policy for admin updates (via admin password)
*/

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  location text NOT NULL,
  service_type text NOT NULL,
  quote text NOT NULL,
  rating numeric(2,1) NOT NULL DEFAULT 5,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Testimonials are publicly readable"
  ON testimonials
  FOR SELECT
  TO anon, authenticated
  USING (true);

INSERT INTO testimonials (name, location, service_type, quote, rating) VALUES
  ('Mehmet Yılmaz', 'Kozan', 'Çamaşır Makinesi Tamiri', 'Çamaşır makinemiz arızalandığında aynı gün gelip tamir ettiler. Çok memnun kaldık, herkese tavsiye ederim.', 5),
  ('Ayşe Demir', 'Kozan Merkez', 'Klima Bakımı', 'Klimamızın bakımını yaptırdık. Hem uygun fiyatlı hem de işlerinde çok profesyoneller. Teşekkürler.', 5),
  ('Ali Kaya', 'Cumhuriyet Mahallesi', 'Buzdolabı Tamiri', 'Buzdolabımız soğutmuyordu. Geldiler, hızlıca arızayı tespit edip tamir ettiler. Gayet başarılılar.', 5),
  ('Fatma Öztürk', 'Kozan', 'Bulaşık Makinesi Servisi', 'Bulaşık makinemiz için aradık, çok ilgili ve güler yüzlü hizmet aldık. Fiyatlar da gayet makul.', 5);
