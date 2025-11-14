import { X, Send, Calendar, MapPin, Phone, DollarSign, User, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { BUSINESS_INFO } from '../config/businessInfo';

const CheckoutModal = ({ isOpen, onClose, orderItems, onConfirmOrder, calculateTotal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    deliveryDate: '',
    paymentMethod: 'efectivo',
    deliveryType: 'delivery',
    address: ''
  });

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es obligatorio';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Ingresá un teléfono válido (10 dígitos)';
    }
    
    if (!formData.deliveryDate) {
      newErrors.deliveryDate = 'Seleccioná una fecha de entrega';
    }
    
    if (formData.deliveryType === 'delivery' && !formData.address.trim()) {
      newErrors.address = 'La dirección es obligatoria para envío';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onConfirmOrder(formData);
    }
  };

  const totalKg = orderItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = calculateTotal ? calculateTotal() : 0;

  // Get today's date for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start md:items-center justify-center overflow-y-auto">
      <div className="bg-white rounded-t-3xl md:rounded-2xl shadow-2xl w-full md:max-w-2xl md:my-8 min-h-screen md:min-h-0 animate-slideUp">
        {/* Header */}
        <div className="sticky top-0 bg-white rounded-t-3xl md:rounded-t-2xl z-10 flex items-center justify-between p-4 md:p-6 border-b border-gray-200 shadow-sm">
          <h2 className="text-xl md:text-2xl font-poppins font-bold text-brown-light">
            Completá tu Pedido
          </h2>
          <button
            onClick={onClose}
            className="text-brown-light hover:text-red-soft transition-colors p-2 hover:bg-gray-100 rounded-full"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-4 md:space-y-6 pb-safe">
          {/* Name */}
          <div className="animate-fadeIn">
            <label className="flex items-center gap-2 text-sm font-inter font-semibold text-brown-light mb-2">
              <User className="w-4 h-4" />
              Nombre completo
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 md:px-4 py-2.5 md:py-3 border-2 rounded-lg focus:outline-none font-inter transition-all text-base ${
                errors.name ? 'border-red-500 focus:border-red-500 shake' : 'border-gray-200 focus:border-golden'
              }`}
              placeholder="Juan Pérez"
            />
            {errors.name && <p className="text-red-500 text-xs md:text-sm mt-1 animate-fadeIn">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            <label className="flex items-center gap-2 text-sm font-inter font-semibold text-brown-light mb-2">
              <Phone className="w-4 h-4" />
              Teléfono / WhatsApp
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-3 md:px-4 py-2.5 md:py-3 border-2 rounded-lg focus:outline-none font-inter transition-all text-base ${
                errors.phone ? 'border-red-500 focus:border-red-500 shake' : 'border-gray-200 focus:border-golden'
              }`}
              placeholder={BUSINESS_INFO.phone}
            />
            {errors.phone && <p className="text-red-500 text-xs md:text-sm mt-1 animate-fadeIn">{errors.phone}</p>}
          </div>

          {/* Delivery Date */}
          <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <label className="flex items-center gap-2 text-sm font-inter font-semibold text-brown-light mb-2">
              <Calendar className="w-4 h-4" />
              Fecha de entrega
            </label>
            <input
              type="date"
              name="deliveryDate"
              value={formData.deliveryDate}
              onChange={handleChange}
              min={today}
              className={`w-full px-3 md:px-4 py-2.5 md:py-3 border-2 rounded-lg focus:outline-none font-inter transition-all text-base ${
                errors.deliveryDate ? 'border-red-500 focus:border-red-500 shake' : 'border-gray-200 focus:border-golden'
              }`}
            />
            {errors.deliveryDate && <p className="text-red-500 text-xs md:text-sm mt-1 animate-fadeIn">{errors.deliveryDate}</p>}
          </div>

          {/* Payment Method */}
          <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <label className="flex items-center gap-2 text-sm font-inter font-semibold text-brown-light mb-2">
              <DollarSign className="w-4 h-4" />
              Forma de pago
            </label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full px-3 md:px-4 py-2.5 md:py-3 border-2 border-gray-200 rounded-lg focus:border-golden focus:outline-none font-inter transition-all text-base"
            >
              <option value="efectivo">💵 Efectivo</option>
              <option value="transferencia">💳 Transferencia</option>
            </select>
          </div>

          {/* Delivery Type */}
          <div className="animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <label className="flex items-center gap-2 text-sm font-inter font-semibold text-brown-light mb-2">
              <MapPin className="w-4 h-4" />
              Tipo de entrega
            </label>
            <select
              name="deliveryType"
              value={formData.deliveryType}
              onChange={handleChange}
              className="w-full px-3 md:px-4 py-2.5 md:py-3 border-2 border-gray-200 rounded-lg focus:border-golden focus:outline-none font-inter transition-all text-base"
            >
              <option value="delivery">🚚 Envío a domicilio</option>
              <option value="pickup">🏪 Retiro en local</option>
            </select>
          </div>

          {/* Address (only if delivery) */}
          {formData.deliveryType === 'delivery' && (
            <div className="animate-fadeIn">
              <label className="flex items-center gap-2 text-sm font-inter font-semibold text-brown-light mb-2">
                <MapPin className="w-4 h-4" />
                Dirección de entrega
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                className={`w-full px-3 md:px-4 py-2.5 md:py-3 border-2 rounded-lg focus:outline-none font-inter resize-none transition-all text-base ${
                  errors.address ? 'border-red-500 focus:border-red-500 shake' : 'border-gray-200 focus:border-golden'
                }`}
                placeholder={`Ej: ${BUSINESS_INFO.envio.zonas[0]}, Calle y número...`}
              />
              {errors.address && <p className="text-red-500 text-xs md:text-sm mt-1 animate-fadeIn">{errors.address}</p>}
              <p className="text-xs text-brown-light/60 mt-2">
                📍 Zonas de entrega: {BUSINESS_INFO.envio.zonas.join(', ')}
              </p>
            </div>
          )}

          {/* Order Summary */}
          <div className="bg-gradient-to-br from-beige-light to-golden/10 rounded-xl p-4 md:p-5 animate-fadeIn border border-golden/20" style={{ animationDelay: '0.5s' }}>
            <h3 className="font-poppins font-semibold text-brown-light mb-3 flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-golden" />
              Resumen del Pedido
            </h3>
            <div className="space-y-2 text-sm font-inter text-brown-light/80 max-h-40 overflow-y-auto">
              {orderItems.map((item, index) => (
                <div key={item.id} className="flex justify-between gap-2 animate-fadeIn" style={{ animationDelay: `${0.6 + index * 0.05}s` }}>
                  <span className="flex-1 min-w-0">
                    <span className="font-semibold text-brown-light">{item.name}</span>
                    {item.type && <span className="text-xs block text-brown-light/60">{item.type}</span>}
                    <span className="text-xs text-golden">{item.quantity} kg</span>
                  </span>
                  <span className="font-semibold text-brown-light whitespace-nowrap">${(item.quantity * item.pricePerKg).toLocaleString('es-AR')}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-brown-light/20 mt-3 pt-3 space-y-1">
              <div className="flex justify-between items-center text-sm text-brown-light/80">
                <span>Total en kg:</span>
                <span className="font-semibold">{totalKg} kg</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-poppins font-bold text-brown-light">Total a pagar:</span>
                <span className="font-poppins font-bold text-xl md:text-2xl text-golden">${totalPrice.toLocaleString('es-AR')}</span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-natural hover:bg-green-600 text-white font-poppins font-semibold px-4 md:px-6 py-3 md:py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-lg text-base md:text-lg animate-pulse-slow"
          >
            <Send className="w-5 h-5" />
            Enviar pedido por WhatsApp
          </button>

          <p className="text-xs text-brown-light/60 font-inter text-center pb-4">
            Te redirigiremos a WhatsApp con toda la información del pedido
          </p>
        </form>
      </div>
    </div>
  );
};

export default CheckoutModal;
