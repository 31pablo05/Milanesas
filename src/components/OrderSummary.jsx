import { Trash2, ShoppingBag, Send } from 'lucide-react';

const OrderSummary = ({ orderItems, onRemoveItem, onSendWhatsApp, calculateTotal }) => {
  const totalKg = orderItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = calculateTotal ? calculateTotal() : 0;

  if (orderItems.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 text-center animate-fadeIn">
        <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <ShoppingBag className="w-8 h-8 text-gray-300" />
        </div>
        <p className="text-brown-light/60 font-inter text-base md:text-lg">
          Tu pedido está vacío
        </p>
        <p className="text-brown-light/40 font-inter text-sm mt-2">
          ¡Agregá tus milanesas favoritas!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 lg:p-8 md:sticky md:top-24 animate-fadeIn">
      <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
        <div className="bg-golden/10 p-2 rounded-full">
          <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 text-golden" />
        </div>
        <h3 className="text-xl md:text-2xl font-poppins font-bold text-brown-light">
          Tu Pedido
        </h3>
      </div>

      {/* Order Items */}
      <div className="space-y-3 md:space-y-4 mb-4 md:mb-6 max-h-64 md:max-h-96 overflow-y-auto custom-scrollbar">
        {orderItems.map((item, index) => (
          <div
            key={item.id}
            className="flex justify-between items-start gap-3 p-3 md:p-4 bg-gradient-to-br from-beige-light to-white rounded-lg border border-golden/10 hover:border-golden/30 transition-all animate-fadeIn shadow-sm"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="flex-1 min-w-0">
              <h4 className="font-poppins font-semibold text-brown-light text-sm md:text-base truncate">
                {item.name}
              </h4>
              {item.type && (
                <p className="text-xs md:text-sm text-brown-light/70 font-inter mt-0.5">
                  {item.type}
                </p>
              )}
              <div className="flex flex-wrap items-center gap-1.5 mt-2 text-xs md:text-sm">
                <span className="bg-golden/10 text-golden font-inter font-semibold px-2 py-0.5 rounded">
                  {item.quantity} kg
                </span>
                <span className="text-brown-light/50">×</span>
                <span className="text-brown-light/70">${item.pricePerKg.toLocaleString('es-AR')}</span>
              </div>
            </div>
            <button
              onClick={() => onRemoveItem(item.id)}
              className="text-red-soft hover:text-red-600 transition-all p-1.5 md:p-2 hover:bg-red-50 rounded-lg active:scale-95"
              aria-label="Eliminar producto"
            >
              <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="border-t-2 border-gray-200 pt-3 md:pt-4 mb-4 md:mb-6 space-y-2">
        <div className="flex justify-between items-center text-sm md:text-base text-brown-light">
          <span className="font-inter">Total en kg:</span>
          <span className="font-poppins font-semibold">{totalKg} kg</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-golden/5 rounded-lg">
          <span className="font-poppins font-bold text-base md:text-lg text-brown-light">
            Total a pagar:
          </span>
          <span className="font-poppins font-bold text-xl md:text-2xl text-golden animate-pulse-slow">
            ${totalPrice.toLocaleString('es-AR')}
          </span>
        </div>
      </div>

      {/* WhatsApp Button */}
      <button
        onClick={onSendWhatsApp}
        className="w-full bg-green-natural hover:bg-green-600 text-white font-poppins font-semibold px-4 md:px-6 py-3 md:py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-lg text-sm md:text-base"
      >
        <Send className="w-4 h-4 md:w-5 md:h-5" />
        Enviar pedido por WhatsApp
      </button>

      <p className="text-xs text-brown-light/60 font-inter text-center mt-3 md:mt-4">
        Te redirigiremos a WhatsApp con tu pedido listo
      </p>
    </div>
  );
};

export default OrderSummary;
