import { Phone, UserCheck, Search, Wrench } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: 'Arayın veya Whatsapp üzerinden mesaj gönderin',
    description: 'Bizi arayın veya Whatsapp üzerinden mesaj gönderin'
  },
  {
    icon: UserCheck,
    title: 'Usta Yönlendirilir',
    description: 'En yakın zamanda uzman teknisyen size atanır'
  },
  {
    icon: Search,
    title: 'Arıza Tespit Edilir',
    description: 'Cihazınız yerinde incelenir ve arıza tespit edilir'
  },
  {
    icon: Wrench,
    title: 'Hızlı Onarım',
    description: 'Orijinal parçalarla profesyonel onarım yapılır'
  }
];

export default function Process() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Çalışma Sürecimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            4 basit adımda sorunlarınızı çözüyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">{index + 1}</span>
                    </div>
                  </div>

                  <div className="mt-8 mb-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M12 8L20 16L12 24" stroke="#F97316" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
