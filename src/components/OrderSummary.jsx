import { Trash2, ShoppingBag, Send } from 'lucide-react';

const OrderSummary = ({ orderItems, onRemoveItem, onSendWhatsApp }) => {
  const totalKg = orderItems.reduce((sum, item) => sum + item.quantity, 0);

  if (orderItems.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <p className="text-brown-light/60 font-inter text-lg">
          Tu pedido está vacío. ¡Agregá tus milanesas favoritas!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 sticky top-24">
      <div className="flex items-center gap-3 mb-6">
        <ShoppingBag className="w-6 h-6 text-golden" />
        <h3 className="text-2xl font-poppins font-bold text-brown-light">
          Tu Pedido
        </h3>
      </div>

      {/* Order Items */}
      <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
        {orderItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-start gap-4 p-4 bg-beige-light rounded-lg"
          >
            <div className="flex-1">
              <h4 className="font-poppins font-semibold text-brown-light">
                {item.name}
              </h4>
              {item.type && (
                <p className="text-sm text-brown-light/70 font-inter">
                  {item.type}
                </p>
              )}
              <p className="text-sm text-golden font-inter font-semibold mt-1">
                {item.quantity} kg
              </p>
            </div>
            <button
              onClick={() => onRemoveItem(item.id)}
              className="text-red-soft hover:text-red-600 transition-colors"
              aria-label="Eliminar producto"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="border-t-2 border-gray-200 pt-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="font-poppins font-bold text-lg text-brown-light">
            Total:
          </span>
          <span className="font-poppins font-bold text-2xl text-golden">
            {totalKg} kg
          </span>
        </div>
      </div>

      {/* WhatsApp Button */}
      <button
        onClick={onSendWhatsApp}
        className="w-full bg-green-natural hover:bg-green-600 text-white font-poppins font-semibold px-6 py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg"
      >
        <Send className="w-5 h-5" />
        Enviar pedido por WhatsApp
      </button>

      <p className="text-xs text-brown-light/60 font-inter text-center mt-4">
        Te redirigiremos a WhatsApp con tu pedido listo
      </p>
    </div>
  );
};

export default OrderSummary;
