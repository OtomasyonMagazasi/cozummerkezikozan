import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Hakkımızda
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Çözüm Merkezi Kozan olarak, 15 yılı aşkın süredir tecrübemiz ile Kozan ve çevresinde
              beyaz eşya ve klima teknik servis hizmeti sunmaktayız. Müşteri memnuniyetini
              ön planda tutarak, kaliteli ve hızlı hizmet anlayışımızla bölgede güvenilir
              bir marka haline geldik.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Tüm marka ve modellerde uzman kadromuz, orijinal yedek parçalar kullanarak
              cihazlarınıza en iyi bakımı sağlamaktadır. Garantili işçilik ve şeffaf
              fiyatlandırma politikamızla yanınızdayız.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Yetkili Servis</h4>
                  <p className="text-gray-600">Tüm markalarda yetkilendirilmiş servis hizmeti</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Orijinal Yedek Parça</h4>
                  <p className="text-gray-600">Her zaman orijinal ve kaliteli parçalar</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Profesyonel Ekip</h4>
                  <p className="text-gray-600">Deneyimli ve sertifikalı teknisyenler</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-2xl">
              <div className="space-y-6">
                <div className="border-b border-blue-400 pb-6">
                  <div className="text-5xl font-bold text-orange-400 mb-2">15+</div>
                  <div className="text-blue-100">Yıllık Tecrübe</div>
                </div>
                <div className="border-b border-blue-400 pb-6">
                  <div className="text-5xl font-bold text-orange-400 mb-2">5000+</div>
                  <div className="text-blue-100">Tamamlanan Servis</div>
                </div>
                <div className="border-b border-blue-400 pb-6">
                  <div className="text-5xl font-bold text-orange-400 mb-2">%100</div>
                  <div className="text-blue-100">Müşteri Memnuniyeti</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-orange-400 mb-2">7/24</div>
                  <div className="text-blue-100">İletişim Desteği</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
