import { ArrowLeft } from 'lucide-react';

export default function WashingMachineWaterNotDraining() {
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
            Çamaşır Makinesi Su Boşaltmıyor - Sorunu Çözmenin Yolları
          </h1>
          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <span>Çözüm Merkezi Kozan</span>
            <span>•</span>
            <span>15 Mart 2024</span>
            <span>•</span>
            <span>5 dk okuma</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Çamaşır makineniz su boşaltmıyor mu? Bu sık karşılaşılan bir problem ve genellikle basit çözümlerle giderilebilir.
              Bu yazımızda çamaşır makinesi su boşaltma problemlerinin nedenlerini ve çözüm yöntemlerini detaylıca ele alacağız.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">En Sık Görülen Nedenler</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Tıkanmış Filtresi</h3>
            <p className="text-gray-700 mb-4">
              Çamaşır makinelerinin çoğunda ön panelin alt kısmında bulunan pompa filtresi, zamanla kir, saç ve küçük eşyalarla tıkanabilir.
              Bu tıkanma suyun dışarı atılmasını engeller.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-blue-800 font-medium">Çözüm:</p>
              <p className="text-blue-700">Makinenin fişini çekin ve su vanasını kapatın. Filtreyi temizleyin ve yeniden deneyin.</p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Boru Tıkanıklığı</h3>
            <p className="text-gray-700 mb-4">
              Evinizdeki atık su borusunda biriken kir ve yağ, çamaşır makinesi suyunun akışını engelleyebilir.
            </p>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
              <p className="text-green-800 font-medium">Çözüm:</p>
              <p className="text-green-700">Boru temizleyici kullanın veya profesyonel yardım alın.</p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Pompa Arızası</h3>
            <p className="text-gray-700 mb-4">
              Su pompası arızası durumunda makine suyu boşaltamaz. Bu durumda profesyonel müdahale gereklidir.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Profesyonel Yardım Alın</h2>
            <p className="text-gray-700 mb-6">
              Yukarıdaki yöntemleri denediğiniz halde sorun devam ediyorsa, Çözüm Merkezi Kozan olarak uzman teknisyenlerimizle
              size yardımcı olabiliriz. Hızlı ve güvenilir servis hizmetimizle çamaşır makinenizi kısa sürede çalışır hale getiririz.
            </p>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-orange-900 mb-2">Hemen Yardım Alın!</h3>
              <p className="text-orange-800 mb-4">
                Çözüm Merkezi Kozan olarak 15 yıllık tecrübemizle tüm çamaşır makinesi sorunlarınızı çözüyoruz.
              </p>
              <div className="flex gap-4">
                <a
                  href="tel:+905427743499"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Ara: 0542 774 34 99
                </a>
                <a
                  href="https://wa.me/905427743499?text=Merhaba%2C%20çamaşır%20makinem%20su%20boşaltmıyor"
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
