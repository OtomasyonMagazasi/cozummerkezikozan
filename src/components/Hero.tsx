import { Phone, Instagram } from 'lucide-react';

export default function Hero() {

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-6">
            <img src="/file_000000001e98720c9f361caa36c551e6.png" alt="Çözüm Merkezi Kozan - Kozan Beyaz Eşya ve Klima Servisi" className="h-40 mx-auto border-4 border-white rounded-full p-3 shadow-2xl" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
            Çözüm Merkezi Kozan
          </h1>

          <p className="text-2xl sm:text-3xl mb-12 text-blue-100 font-light">
            Hızlı, Güvenilir ve Garantili Teknik Servis
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+905427743499"
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-5 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Arayın
            </a>
            <a
              href="https://wa.me/905427743499?text=Merhaba%2C%20servis%20hakkında%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white hover:bg-gray-100 text-blue-700 font-semibold px-10 py-5 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              WhatsApp Mesaj Gönderin
            </a>
            <a
              href="https://instagram.com/cozummerkezikozan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 hover:from-pink-600 hover:via-purple-600 hover:to-orange-600 text-white font-semibold px-10 py-5 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-400">15+</div>
              <div className="text-blue-200 text-base mt-2">Yıl Tecrübe</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400">5000+</div>
              <div className="text-blue-200 text-base mt-2">Mutlu Müşteri</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400">%100</div>
              <div className="text-blue-200 text-base mt-2">Müşteri Memnuniyeti</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400">24/7</div>
              <div className="text-blue-200 text-base mt-2">Destek Hizmeti</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
        </svg>
      </div>
    </section>
  );
}
