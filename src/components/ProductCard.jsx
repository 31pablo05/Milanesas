import { useState } from 'react';
import { Plus } from 'lucide-react';

const ProductCard = ({ product, onAddToOrder }) => {
  const [selectedType, setSelectedType] = useState(product.hasTypes ? product.types[0] : null);
  const [quantity, setQuantity] = useState(1);

  const handleAddToOrder = () => {
    onAddToOrder({
      productId: product.id,
      name: product.name,
      type: selectedType,
      quantity: quantity,
      pricePerKg: product.pricePerKg,
      id: `${product.id}-${selectedType || 'standard'}-${Date.now()}`
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      {/* Image */}
      <div className="relative h-64 sm:h-72 md:h-64 overflow-hidden group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
        <div className="absolute top-3 right-3 bg-gradient-to-r from-golden to-golden-light text-white px-3 py-1.5 rounded-full font-poppins font-semibold text-xs md:text-sm shadow-lg backdrop-blur-sm border border-white/20">
          ✨ {product.label}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 space-y-3 md:space-y-4">
        <h3 className="text-xl md:text-2xl font-poppins font-bold text-brown-warm">
          {product.name}
        </h3>
        <div className="flex items-baseline gap-2 bg-gradient-to-r from-golden/10 via-golden/5 to-transparent p-3 rounded-xl border border-golden/20">
          <span className="text-2xl md:text-3xl font-poppins font-bold text-golden">
            ${product.pricePerKg.toLocaleString('es-AR')}
          </span>
          <span className="text-sm md:text-base text-brown-light/70 font-inter">por kilo</span>
        </div>
        <p className="text-sm md:text-base text-brown-light/80 font-inter line-clamp-2">
          {product.description}
        </p>

        {/* Type Selection - Only for Pollo */}
        {product.hasTypes && (
          <div className="animate-fadeIn">
            <label className="block text-xs md:text-sm font-inter font-semibold text-brown-warm mb-2">
              🍗 Tipo de Corte
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 md:px-4 py-2.5 md:py-3 border-2 border-golden/30 rounded-lg focus:border-golden focus:ring-2 focus:ring-golden/20 focus:outline-none font-inter transition-all text-sm md:text-base hover:border-golden/60 bg-white"
            >
              {product.types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Quantity Selection */}
        <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
          <label className="block text-xs md:text-sm font-inter font-semibold text-brown-warm mb-2">
            ⚖️ Cantidad
          </label>
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full px-3 md:px-4 py-2.5 md:py-3 border-2 border-golden/30 rounded-lg focus:border-golden focus:ring-2 focus:ring-golden/20 focus:outline-none font-inter transition-all text-sm md:text-base hover:border-golden/60 bg-white"
          >
            <option value={0.5}>0.5 kg</option>
            <option value={1}>1 kg</option>
            <option value={1.5}>1.5 kg</option>
            <option value={2}>2 kg</option>
            <option value={2.5}>2.5 kg</option>
            <option value={3}>3 kg</option>
            <option value={4}>4 kg</option>
            <option value={5}>5 kg</option>
          </select>
        </div>

        {/* Add Button */}
        <button
          onClick={handleAddToOrder}
          className="w-full bg-gradient-to-r from-golden to-golden-light hover:from-golden-light hover:to-golden text-white font-poppins font-semibold px-4 md:px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-xl text-sm md:text-base border border-white/20"
        >
          <Plus className="w-5 h-5 md:w-5 md:h-5 stroke-[3]" />
          <span className="flex-1">Agregar al Pedido</span>
          <span className="bg-white/20 px-2 py-1 rounded-lg font-bold backdrop-blur-sm">
            ${(product.pricePerKg * quantity).toLocaleString('es-AR')}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
