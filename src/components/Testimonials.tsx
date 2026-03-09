import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getTestimonials, getRating, getCount } from './AdminPanel';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  service_type: string;
  quote: string;
  rating: number;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [rating, setRating] = useState(4.9);
  const [count, setCount] = useState(500);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = () => {
      setTestimonials(getTestimonials());
      setRating(getRating());
      setCount(getCount());
      setLoading(false);
    };

    loadData();

    window.addEventListener('testimonialsUpdated', loadData);
    return () => window.removeEventListener('testimonialsUpdated', loadData);
  }, []);

  if (loading) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Binlerce mutlu müşterimizden bazı yorumlar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-orange-200" />

              <div className="flex gap-1 mb-4">
                {[...Array(Math.round(testimonial.rating))].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="pt-4 border-t border-gray-200">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.location}</div>
                <div className="text-xs text-blue-600 mt-1 font-medium">{testimonial.service_type}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-50 px-6 py-3 rounded-full">
            <Star className="w-6 h-6 fill-orange-400 text-orange-400" />
            <span className="text-2xl font-bold text-gray-900">{rating}</span>
            <span className="text-gray-600">/5 - {count}+ Değerlendirme</span>
          </div>
        </div>
      </div>
    </section>
  );
}
