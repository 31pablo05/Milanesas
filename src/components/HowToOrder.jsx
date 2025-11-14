import { ShoppingCart, CheckCircle, MessageCircle, Package } from 'lucide-react';
import { BUSINESS_INFO } from '../config/businessInfo';

const HowToOrder = () => {
  const steps = [
    {
      icon: ShoppingCart,
      number: '1',
      title: 'Elegí tus Milanesas',
      description: 'Seleccioná el tipo (pollo, carne o cerdo) y la cantidad en kilogramos que necesitás.',
      color: 'from-golden to-golden-light'
    },
    {
      icon: Package,
      number: '2',
      title: 'Agregá al Carrito',
      description: 'Hacé clic en "Agregar" y revisá tu pedido en el resumen o en el ícono del carrito.',
      color: 'from-red-soft to-red-accent'
    },
    {
      icon: CheckCircle,
      number: '3',
      title: 'Completá tus Datos',
      description: 'Ingresá tu nombre, teléfono, fecha de entrega, forma de pago y si preferís envío o retiro.',
      color: 'from-brown-warm to-brown-light'
    },
    {
      icon: MessageCircle,
      number: '4',
      title: 'Enviá por WhatsApp',
      description: '¡Listo! Te redirigimos a WhatsApp con tu pedido completo para confirmar.',
      color: 'from-green-natural to-green-600'
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12 animate-fadeIn">
          <div className="inline-block bg-golden/10 px-4 py-2 rounded-full mb-4">
            <span className="text-golden font-poppins font-semibold text-sm">
              ¿Primera vez? ¡Es muy fácil!
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-brown-warm mb-4">
            ¿Cómo Hacer tu Pedido?
          </h2>
          <p className="text-base md:text-lg text-brown-light/80 font-inter max-w-2xl mx-auto">
            Seguí estos 4 simples pasos y en minutos tendrás tus milanesas caseras listas para el freezer
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full border-2 border-transparent hover:border-golden/20">
                  {/* Number Badge */}
                  <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform`}>
                    <span className="text-white font-poppins font-bold text-xl">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-poppins font-bold text-brown-warm mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-brown-light/70 font-inter text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow Connector (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-golden to-transparent"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-golden"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Bottom */}
        <div className="text-center mt-10 md:mt-12 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-golden/10 to-green-natural/10 p-6 rounded-2xl border-2 border-golden/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-natural flex items-center justify-center animate-pulse">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-poppins font-bold text-brown-warm">
                  ¿Tenés dudas?
                </p>
                <p className="text-sm text-brown-light/70 font-inter">
                  Escribinos por WhatsApp
                </p>
              </div>
            </div>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent('Hola! Necesito ayuda para hacer un pedido')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-natural hover:bg-green-600 text-white font-poppins font-semibold px-6 py-3 rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg text-sm md:text-base"
            >
              Contactar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
