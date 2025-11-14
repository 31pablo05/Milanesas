import { Package } from 'lucide-react';
import { BUSINESS_INFO } from '../config/businessInfo';

const ProductInfo = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Características del producto */}
        <div className="bg-gradient-to-r from-brown-warm/5 to-golden/5 rounded-2xl p-6 md:p-8 border-2 border-brown-warm/10 animate-fadeIn">
          <div className="flex items-center gap-3 mb-6">
            <Package className="w-8 h-8 text-brown-warm" />
            <h3 className="text-xl md:text-2xl font-poppins font-bold text-brown-warm">
              Información del Producto
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-2">❄️</div>
              <p className="font-poppins font-semibold text-brown-warm mb-1">
                Duración
              </p>
              <p className="text-sm text-brown-light/70">
                {BUSINESS_INFO.producto.duracionFreezer} en el freezer
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-2">📏</div>
              <p className="font-poppins font-semibold text-brown-warm mb-1">
                Separadores
              </p>
              <p className="text-sm text-brown-light/70">
                Individuales para fácil uso
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-2">⏱️</div>
              <p className="font-poppins font-semibold text-brown-warm mb-1">
                Preparación
              </p>
              <p className="text-sm text-brown-light/70">
                {BUSINESS_INFO.producto.preparacion}
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
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

export default ProductInfo;
