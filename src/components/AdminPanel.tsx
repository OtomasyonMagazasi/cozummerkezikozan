import { useState, useEffect } from 'react';
import { Save, X, Plus, Trash2 } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  service_type: string;
  quote: string;
  rating: number;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Mehmet Yılmaz',
    location: 'Kozan',
    service_type: 'Çamaşır Makinesi Tamiri',
    quote: 'Çamaşır makinemiz arızalandığında aynı gün gelip tamir ettiler. Çok memnun kaldık, herkese tavsiye ederim.',
    rating: 5
  },
  {
    id: '2',
    name: 'Ayşe Demir',
    location: 'Kozan Merkez',
    service_type: 'Klima Bakımı',
    quote: 'Klimamızın bakımını yaptırdık. Hem uygun fiyatlı hem de işlerinde çok profesyoneller. Teşekkürler.',
    rating: 5
  }
];

export const getTestimonials = (): Testimonial[] => {
  const stored = localStorage.getItem('testimonials');
  return stored ? JSON.parse(stored) : defaultTestimonials;
};

export const getRating = (): number => {
  const stored = localStorage.getItem('testimonials_rating');
  return stored ? parseFloat(stored) : 4.9;
};

export const getCount = (): number => {
  const stored = localStorage.getItem('testimonials_count');
  return stored ? parseInt(stored) : 500;
};

export default function AdminPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(getTestimonials());
  const [rating, setRating] = useState(getRating());
  const [count, setCount] = useState(getCount());
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    location: '',
    service_type: '',
    quote: '',
    rating: 5
  });
  const [loading, setLoading] = useState(false);

  const ADMIN_PASSWORD = 'Qwerty667334';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(true);
        console.log('Admin paneli açılıyor...');
      }
    };
    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, []);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Yanlış şifre!');
    }
  };

  const handleAddTestimonial = () => {
    if (!newTestimonial.name || !newTestimonial.location || !newTestimonial.service_type || !newTestimonial.quote) {
      alert('Lütfen tüm alanları doldurun!');
      return;
    }

    setLoading(true);
    const newItem: Testimonial = {
      ...newTestimonial,
      id: Date.now().toString()
    };
    const updated = [...testimonials, newItem];
    localStorage.setItem('testimonials', JSON.stringify(updated));
    setTestimonials(updated);
    setNewTestimonial({ name: '', location: '', service_type: '', quote: '', rating: 5 });
    alert('Yorum başarıyla eklendi!');
    setLoading(false);
    window.dispatchEvent(new Event('testimonialsUpdated'));
  };

  const handleDeleteTestimonial = (id: string) => {
    if (!confirm('Bu yorumu silmek istediğinizden emin misiniz?')) return;

    setLoading(true);
    const updated = testimonials.filter(t => t.id !== id);
    localStorage.setItem('testimonials', JSON.stringify(updated));
    setTestimonials(updated);
    alert('Yorum başarıyla silindi!');
    setLoading(false);
    window.dispatchEvent(new Event('testimonialsUpdated'));
  };

  const handleUpdateSettings = () => {
    setLoading(true);
    localStorage.setItem('testimonials_rating', rating.toString());
    localStorage.setItem('testimonials_count', count.toString());
    alert('Ayarlar güncellendi!');
    setLoading(false);
    window.dispatchEvent(new Event('testimonialsUpdated'));
  };

  if (!isOpen) {
    return null;
  }

  if (!isAuthenticated) {
    return (
      <div className="fixed bottom-24 right-6 z-50 bg-white rounded-2xl shadow-2xl p-6 w-80">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900">Admin Giriş</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <input
          type="password"
          placeholder="Şifre girin"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition-colors"
        >
          Giriş Yap
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-24 right-6 z-50 bg-white rounded-2xl shadow-2xl p-6 w-96 max-h-[600px] overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-lg text-gray-900">Yönetim Paneli</h3>
        <button
          onClick={() => { setIsOpen(false); setIsAuthenticated(false); setPassword(''); }}
          className="text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Ortalama Puan
          </label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(parseFloat(e.target.value))}
            step="0.1"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Değerlendirme Sayısı
          </label>
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button
          onClick={handleUpdateSettings}
          disabled={loading}
          className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <Save className="w-4 h-4" />
          Ayarları Kaydet
        </button>

        <hr className="my-4" />

        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Yeni Yorum Ekle</h4>
          <input
            type="text"
            placeholder="Ad Soyad"
            value={newTestimonial.name}
            onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2 text-sm focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="Konum"
            value={newTestimonial.location}
            onChange={(e) => setNewTestimonial({ ...newTestimonial, location: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2 text-sm focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="Hizmet Türü"
            value={newTestimonial.service_type}
            onChange={(e) => setNewTestimonial({ ...newTestimonial, service_type: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2 text-sm focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            placeholder="Yorum metni"
            value={newTestimonial.quote}
            onChange={(e) => setNewTestimonial({ ...newTestimonial, quote: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2 text-sm focus:ring-2 focus:ring-purple-500 resize-none"
            rows={2}
          />
          <select
            value={newTestimonial.rating}
            onChange={(e) => setNewTestimonial({ ...newTestimonial, rating: parseFloat(e.target.value) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2 text-sm focus:ring-2 focus:ring-purple-500"
          >
            <option value="5">5 Yıldız</option>
            <option value="4">4 Yıldız</option>
            <option value="3">3 Yıldız</option>
            <option value="2">2 Yıldız</option>
            <option value="1">1 Yıldız</option>
          </select>
          <button
            onClick={handleAddTestimonial}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
          >
            <Plus className="w-4 h-4" />
            Yorum Ekle
          </button>
        </div>

        <hr className="my-4" />

        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Mevcut Yorumlar ({testimonials.length})</h4>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-lg p-3 text-sm">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-xs text-gray-600 mb-1">{testimonial.location} - {testimonial.service_type}</div>
                <div className="text-xs text-gray-700 mb-2">"{testimonial.quote}"</div>
                <button
                  onClick={() => handleDeleteTestimonial(testimonial.id)}
                  disabled={loading}
                  className="text-red-600 hover:text-red-700 disabled:text-gray-400 flex items-center gap-1 text-xs"
                >
                  <Trash2 className="w-3 h-3" />
                  Sil
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
