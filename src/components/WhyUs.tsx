import { Clock, DollarSign, Award, Shield, MapPin } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Hızlı Servis',
    description: 'Aynı gün veya 24 saat içinde yerinde servis hizmeti'
  },
  {
    icon: DollarSign,
    title: 'Uygun Fiyat',
    description: 'Şeffaf ve rekabetçi fiyatlandırma politikası'
  },
  {
    icon: Award,
    title: 'Deneyimli Usta',
    description: '15 yılı aşkın sektör tecrübesi ve uzmanlık'
  },
  {
    icon: Shield,
    title: 'Garantili Onarım',
    description: 'Yaptığımız tüm onarımlar parça ve işçilik garantisi ile güvence altındadır.'
  },
  {
    icon: MapPin,
    title: 'Yerinde Servis',
    description: 'Kozan ve çevresinde evinizdeki hizmet'
  }
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Neden Bizi Seçmelisiniz?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kozan'da güvenilir ve profesyonel teknik servis hizmetinin adresi
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
