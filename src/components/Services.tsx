import { Shirt, Droplet, Refrigerator, Wind, Flame } from 'lucide-react';

const services = [
  {
    icon: Shirt,
    title: 'Çamaşır Makinesi Servisi Kozan',
    description: 'Tüm markaların çamaşır makinesi tamiri, bakımı ve yedek parça değişimi'
  },
  {
    icon: Droplet,
    title: 'Bulaşık Makinesi Servisi Kozan',
    description: 'Profesyonel bulaşık makinesi arıza tespiti ve onarım hizmeti'
  },
  {
    icon: Refrigerator,
    title: 'Buzdolabı Servisi Kozan',
    description: 'Buzdolabı ve derin dondurucu tamiri, gaz dolumu ve bakım'
  },
  {
    icon: Wind,
    title: 'Klima Servisi Kozan',
    description: 'Klima montaj, bakım, gaz dolumu ve tüm arıza onarımları'
  },
  {
    icon: Flame,
    title: 'Fırın ve Ocak Servisi Kozan',
    description: 'Ankastre fırın, ocak ve davlumbaz teknik servis hizmeti'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Hizmetlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kozan'da tüm beyaz eşya ve klima markaları için profesyonel teknik servis hizmeti sunuyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-10 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-8 shadow-md">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-10 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Diğer Hizmetler
            </h3>
            <p className="mb-8 text-orange-50 text-lg">
              Listelerde olmayan cihazlarınız için de servis hizmeti veriyoruz
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-orange-600 font-semibold px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors text-lg"
            >
              Bize Ulaşın
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
