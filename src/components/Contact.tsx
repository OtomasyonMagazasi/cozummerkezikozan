import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            İletişim
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Arayın veya WhatsApp aracılığıyla mesaj gönderin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">İletişim Bilgileri</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                  <a href="tel:+905427743499" className="text-blue-600 hover:text-blue-700 font-medium text-lg">
                    0542 774 3499
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                  <a
                    href="https://wa.me/905427743499?text=Merhaba%2C%20servis%20hakkında%20bilgi%20almak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 font-medium text-lg"
                  >
                    Mesaj Gönderin
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">E-posta</h4>
                  <a href="mailto:info@cozummerkezikozan.com" className="text-blue-600 hover:text-blue-700">
                    info@cozummerkezikozan.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Adres</h4>
                  <p className="text-gray-600">
                    Kozan Merkez<br />
                    Adana, Türkiye
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Çalışma Saatleri</h4>
                  <p className="text-gray-600">
                    Pazartesi - Cumartesi: 08:00 - 20:00<br />
                    Pazar: 09:00 - 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 text-white shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Acil Durum?</h3>
              <p className="text-blue-100 mb-8">
                Acil servis ihtiyacınız için bizi 7/24 arayabilirsiniz. Hızlı ve güvenilir hizmet sunmak için hazırız.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:+905427743499"
                className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-4 rounded-lg transition-colors w-full shadow-md hover:shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Hemen Ara
              </a>
              <a
                href="https://wa.me/905427743499?text=Acil%20servis%20talep%20ediyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-lg transition-colors w-full shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Yazın
              </a>
            </div>
          </div>
        </div>

        {/* Blog Yazıları Bölümü */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Blog Yazılarımız</h3>
            <p className="text-lg text-gray-600">
              Beyaz eşya ve klima sorunlarınız için çözüm önerileri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
                  Çamaşır Makinesi
                </span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Çamaşır Makinesi Su Boşaltmıyor
              </h4>
              <p className="text-gray-600 mb-4">
                Çamaşır makineniz su boşaltmıyor mu? Bu sık karşılaşılan bir sorun. Nedenlerini ve çözüm yöntemlerini öğrenin.
              </p>
              <a
                href="/blog/camasir-makinesi-su-bosaltmiyor"
                className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
              >
                Devamını Oku →
              </a>
            </article>

            <article className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-medium">
                  Buzdolabı
                </span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Buzdolabı Soğutmuyor Ne Yapmalı
              </h4>
              <p className="text-gray-600 mb-4">
                Buzdolabınız soğutmuyor mu? Detaylı çözüm rehberimizle sorunu tespit edin ve çözün.
              </p>
              <a
                href="/blog/buzdolabi-sogutmuyor"
                className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
              >
                Devamını Oku →
              </a>
            </article>

            <article className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <span className="inline-block bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full font-medium">
                  Klima
                </span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Klima Soğutmuyor Sebebi
              </h4>
              <p className="text-gray-600 mb-4">
                Klima soğutmuyor mu? Tüm olası nedenleri ve profesyonel çözüm önerilerini öğrenin.
              </p>
              <a
                href="/blog/klima-sogutmuyor"
                className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
              >
                Devamını Oku →
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
