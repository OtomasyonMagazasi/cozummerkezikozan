import { ArrowLeft } from 'lucide-react';

export default function AirConditionerNotCooling() {
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
            Klima Soğutmuyor Sebebi ve Çözüm Yolları
          </h1>
          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <span>Çözüm Merkezi Kozan</span>
            <span>•</span>
            <span>15 Mart 2024</span>
            <span>•</span>
            <span>7 dk okuma</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Klima soğutmuyor mu? Yaz aylarında en büyük kabusu yaşayanlardan biriyseniz, bu yazımızda klima soğutma
              problemlerinin tüm nedenlerini ve çözüm yöntemlerini detaylıca ele alacağız. Çözüm Merkezi Kozan olarak
              yılların tecrübesiyle sizlere en doğru bilgileri sunuyoruz.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">En Yaygın Nedenler</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Gaz Kaçağı</h3>
            <p className="text-gray-700 mb-4">
              Klimanın soğutma gazı azaldığında veya tamamen kaçtığında cihaz soğutamaz. Bu en sık karşılaşılan sorundur.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-blue-800 font-medium">Belirtileri:</p>
              <p className="text-blue-700">Klima çalışır ama oda ısınmaz, fan dönmeye devam eder.</p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Filtre Tıkanıklığı</h3>
            <p className="text-gray-700 mb-4">
              Hava filtreleri kir ve tozla tıkanınca hava akışı azalır ve soğutma etkisini kaybeder.
            </p>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
              <p className="text-green-800 font-medium">Çözüm:</p>
              <p className="text-green-700">Filtreleri ayda bir temizleyin veya yıkayın.</p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Kompresör Arızası</h3>
            <p className="text-gray-700 mb-4">
              Klimanın kalbi olan kompresör arızalandığında soğutma sistemi tamamen durur. Bu ciddi bir arızadır.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4. Kapasiter Azalması</h3>
            <p className="text-gray-700 mb-4">
              Oda büyüklüğüne göre klima kapasitesi yetersiz kalabilir. Büyük odalarda küçük klima soğutamaz.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5. Kondenser Bobini Kirlenmesi</h3>
            <p className="text-gray-700 mb-4">
              Dış ünite kir ve tozla kaplandığında ısı transferi azalır ve soğutma gücü düşer.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kendiniz Çözebileceğiniz Sorunlar</h2>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Filtre Temizliği</h4>
                <p className="text-gray-600 text-sm">Ayda bir filtreleri çıkarın ve yıkayın</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Dış Ünite Temizliği</h4>
                <p className="text-gray-600 text-sm">Toz ve kirden arındırın</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Kapasite Kontrolü</h4>
                <p className="text-gray-600 text-sm">Oda büyüklüğüne uygun mu?</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Profesyonel Yardım Gerektiren Durumlar</h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Gaz dolumu:</strong> Soğutucu gaz eksikliği</li>
              <li><strong>Kompresör değişimi:</strong> Motor arızası</li>
              <li><strong>Bakım servisi:</strong> Düzenli kontroller</li>
              <li><strong>Devre kartı:</strong> Elektronik arızalar</li>
              <li><strong>Boru temizliği:</strong> Tıkanmış hatlar</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Önleyici Bakım Önerileri</h2>
            <p className="text-gray-700 mb-6">
              Klima soğutma sorunlarını önlemek için düzenli bakım şarttır. Çözüm Merkezi Kozan olarak
              uzman teknisyenlerimizle klimanızı yılda en az bir kez bakıma alırız.
            </p>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-orange-900 mb-2">Hemen Yardım Alın!</h3>
              <p className="text-orange-800 mb-4">
                Çözüm Merkezi Kozan olarak 15 yıllık tecrübemizle tüm klima sorunlarınızı çözüyoruz.
                Hızlı servis, garantili iş, uygun fiyat garantisiyle hizmetinizdeyiz.
              </p>
              <div className="flex gap-4">
                <a
                  href="tel:+905427743499"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Ara: 0542 774 34 99
                </a>
                <a
                  href="https://wa.me/905427743499?text=Merhaba%2C%20klima%20soğutmuyor"
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
