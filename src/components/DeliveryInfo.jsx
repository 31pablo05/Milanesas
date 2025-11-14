import { Truck, Store, Clock, MapPin, DollarSign, Package } from 'lucide-react';
import { BUSINESS_INFO } from '../config/businessInfo';

const DeliveryInfo = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-golden-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-brown-warm mb-4">
            Envío y Retiro
          </h2>
          <p className="text-base md:text-lg text-brown-light/80 font-inter max-w-2xl mx-auto">
            Elegí la opción que más te convenga. ¡Te lo ponemos fácil!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Envío a Domicilio */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fadeIn border-2 border-golden/10 hover:border-golden/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-golden to-golden-light flex items-center justify-center shadow-md">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-poppins font-bold text-brown-warm">
                  Envío a Domicilio
                </h3>
                <p className="text-sm text-brown-light/70">
                  Recibilo en tu casa
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-golden mt-1 flex-shrink-0" />
                <div>
                  <p className="font-inter text-brown-warm">
                    <span className="font-semibold">Costo de envío:</span> ${BUSINESS_INFO.envio.costo.toLocaleString('es-AR')}
                  </p>
                  <p className="text-sm text-green-natural font-semibold mt-1">
                    ¡GRATIS en compras superiores a ${BUSINESS_INFO.envio.gratis.toLocaleString('es-AR')}!
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-golden mt-1 flex-shrink-0" />
                <div>
                  <p className="font-inter text-brown-warm font-semibold mb-2">
                    Zonas de entrega:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {BUSINESS_INFO.envio.zonas.map((zona, index) => (
                      <span
                        key={index}
                        className="bg-golden/10 text-golden px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {zona}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-golden mt-1 flex-shrink-0" />
                <div>
                  <p className="font-inter text-brown-warm">
                    <span className="font-semibold">Tiempo de entrega:</span> {BUSINESS_INFO.envio.tiempo}
                  </p>
                </div>
              </div>

              <div className="bg-red-soft/10 border border-red-soft/20 rounded-lg p-3 mt-4">
                <p className="text-sm text-brown-warm font-inter">
                  <span className="font-semibold">Pedido mínimo:</span> ${BUSINESS_INFO.envio.minimo.toLocaleString('es-AR')}
                </p>
              </div>
            </div>
          </div>

          {/* Retiro en Local */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fadeIn border-2 border-green-natural/10 hover:border-green-natural/30" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-natural to-green-600 flex items-center justify-center shadow-md">
                <Store className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-poppins font-bold text-brown-warm">
                  Retiro en Local
                </h3>
                <p className="text-sm text-brown-light/70">
                  Pasá a buscar
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-green-natural mt-1 flex-shrink-0" />
                <div>
                  <p className="font-inter text-brown-warm text-lg">
                    <span className="font-bold text-green-natural">¡SIN COSTO!</span>
                  </p>
                  <p className="text-sm text-brown-light/70 mt-1">
                    Retirá sin pagar envío
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-natural mt-1 flex-shrink-0" />
                <div>
                  <p className="font-inter text-brown-warm font-semibold mb-1">
                    Dirección:
                  </p>
                  <p className="text-brown-light/80">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-sm text-brown-light/60 mt-1">
                    (Te enviamos la dirección exacta por WhatsApp)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-green-natural mt-1 flex-shrink-0" />
                <div>
                  <p className="font-inter text-brown-warm font-semibold mb-2">
                    Horarios de retiro:
                  </p>
                  <div className="space-y-1 text-sm text-brown-light/80">
                    <p>📅 {BUSINESS_INFO.horarios.semana}</p>
                    <p>📅 {BUSINESS_INFO.horarios.sabado}</p>
                    <p>🚫 {BUSINESS_INFO.horarios.domingo}</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-natural/10 border border-green-natural/20 rounded-lg p-3 mt-4">
                <p className="text-sm text-brown-warm font-inter">
                  <span className="font-semibold">Coordiná tu retiro:</span> Avisanos con {BUSINESS_INFO.envio.tiempo} para tener todo listo
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Características del producto */}
        <div className="bg-gradient-to-r from-brown-warm/5 to-golden/5 rounded-2xl p-6 md:p-8 border-2 border-brown-warm/10 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-3 mb-6">
            <Package className="w-8 h-8 text-brown-warm" />
            <h3 className="text-xl md:text-2xl font-poppins font-bold text-brown-warm">
              Información del Producto
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-3xl mb-2">❄️</div>
              <p className="font-poppins font-semibold text-brown-warm mb-1">
                Duración
              </p>
              <p className="text-sm text-brown-light/70">
                {BUSINESS_INFO.producto.duracionFreezer} en el freezer
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-3xl mb-2">📏</div>
              <p className="font-poppins font-semibold text-brown-warm mb-1">
                Separadores
              </p>
              <p className="text-sm text-brown-light/70">
                Individuales para fácil uso
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-3xl mb-2">⏱️</div>
              <p className="font-poppins font-semibold text-brown-warm mb-1">
                Preparación
              </p>
              <p className="text-sm text-brown-light/70">
                {BUSINESS_INFO.producto.preparacion}
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-3xl mb-2">📦</div>
              <p className="font-poppins font-semibold text-brown-warm mb-1">
                Empaque
              </p>
              <p className="text-sm text-brown-light/70">
                Sellado al vacío
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryInfo;
