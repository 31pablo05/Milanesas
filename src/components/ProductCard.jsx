import { useState } from 'react';
import { Plus } from 'lucide-react';

const ProductCard = ({ product, onAddToOrder }) => {
  const [selectedType, setSelectedType] = useState(product.hasTypes ? product.types[0] : null);
  const [quantity, setQuantity] = useState(1);

  const handleAddToOrder = () => {
    onAddToOrder({
      name: product.name,
      type: selectedType,
      quantity: quantity,
      id: `${product.id}-${selectedType || 'standard'}-${Date.now()}`
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-golden text-white px-3 py-1 rounded-full font-poppins font-semibold text-sm">
          {product.label}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-poppins font-bold text-brown-light">
          {product.name}
        </h3>
        <p className="text-brown-light/70 font-inter">
          {product.description}
        </p>

        {/* Type Selection - Only for Pollo */}
        {product.hasTypes && (
          <div>
            <label className="block text-sm font-inter font-semibold text-brown-light mb-2">
              Tipo
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-golden focus:outline-none font-inter"
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
        <div>
          <label className="block text-sm font-inter font-semibold text-brown-light mb-2">
            Cantidad (kg)
          </label>
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-golden focus:outline-none font-inter"
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
          className="w-full bg-golden hover:bg-golden/90 text-white font-poppins font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105"
        >
          <Plus className="w-5 h-5" />
          Agregar al pedido
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
