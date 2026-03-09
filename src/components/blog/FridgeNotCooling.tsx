import { ArrowLeft } from 'lucide-react';

export default function FridgeNotCooling() {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Geri Dön
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Buzdolabı Soğutmuyor Ne Yapmalı? Detaylı Çözüm Rehberi
          </h1>
          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <span>Çözüm Merkezi Kozan</span>
            <span>•</span>
            <span>15 Mart 2024</span>
            <span>•</span>
            <span>6 dk okuma</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Buzdolabınız soğutmuyor mu? Bu durum hem yiyeceklerinizin bozulmasına neden olur hem de elektrik faturanızı artırır.
              Bu yazımızda buzdolabı soğutma problemlerinin nedenlerini ve çözüm yöntemlerini adım adım açıklayacağız.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Öncelikle Kontrol Edin</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Güç Kaynağı ve Sıcaklık Ayarı</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Fişin prize takılı olduğunu kontrol edin</li>
              <li>Sıcaklık ayarını çok yüksek yapmadığınızdan emin olun</li>
              <li>Kapı conta contalarının düzgün kapandığını kontrol edin</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Buz Tıkanıklığı</h3>
            <p className="text-gray-700 mb-4">
              Buzdolabının arkasındaki buzluk bölümünde aşırı buzlanma, soğutma sistemini tıkayabilir.
            </p>
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
              <p className="text-red-800 font-medium">Uyarı:</p>
              <p className="text-red-700">Buz çözme işlemini mutlaka fişi çekerek yapın!</p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Gaz Kaçağı</h3>
            <p className="text-gray-700 mb-4">
              Soğutucu gaz kaçağı durumunda buzdolabı soğutamaz. Bu durumda mutlaka uzman müdahalesi gereklidir.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4. Kompresör Sorunu</h3>
            <p className="text-gray-700 mb-4">
              Kompresör arızası, buzdolabının en ciddi sorunlarından biridir. Çalışmama, gürültü yapma gibi belirtilerle anlaşılır.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Çözüm Önerileri</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Hemen Yapabileceğiniz</h4>
                <ul className="text-blue-800 space-y-1">
                  <li>• Fişi kontrol edin</li>
                  <li>• Sıcaklık ayarını düşürün</li>
                  <li>• Kapıların düzgün kapandığını kontrol edin</li>
                  <li>• Arkadaki havalandırmayı temizleyin</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-2">Profesyonel Yardım Gerektiren</h4>
                <ul className="text-orange-800 space-y-1">
                  <li>• Gaz dolumu</li>
                  <li>• Kompresör değişimi</li>
                  <li>• Termostat arızası</li>
                  <li>• Devre kartı sorunu</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Önleyici Bakım</h2>
            <p className="text-gray-700 mb-6">
              Düzenli bakım ile buzdolabınızın ömrünü uzatabilir ve pahalı arızaları önleyebilirsiniz.
              Çözüm Merkezi Kozan olarak profesyonel buzdolabı bakım hizmeti sunuyoruz.
            </p>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-orange-900 mb-2">Hemen Yardım Alın!</h3>
              <p className="text-orange-800 mb-4">
                Çözüm Merkezi Kozan olarak 15 yıllık tecrübemizle tüm buzdolabı sorunlarınızı çözüyoruz.
                Garantili servis hizmetimizle güvenle çalıştırıyoruz.
              </p>
              <div className="flex gap-4">
                <a
                  href="tel:+905427743499"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Ara: 0542 774 34 99
                </a>
                <a
                  href="https://wa.me/905427743499?text=Merhaba%2C%20buzdolabım%20soğutmuyor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  WhatsApp ile Sor
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
