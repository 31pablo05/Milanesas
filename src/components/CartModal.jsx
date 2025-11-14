import { X, Trash2, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

const CartModal = ({ isOpen, onClose, orderItems, onRemoveItem, onCheckout, calculateTotal }) => {
  if (!isOpen) return null;

  const totalKg = orderItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = calculateTotal ? calculateTotal() : 0;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center animate-fadeIn">
      <div className="bg-white rounded-t-3xl md:rounded-2xl shadow-2xl w-full md:max-w-2xl md:w-full max-h-[90vh] overflow-hidden flex flex-col animate-slideUp">
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200 bg-gradient-to-r from-golden/5 to-red-soft/5">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="bg-golden/10 p-2 rounded-full">
              <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 text-golden" />
            </div>
            <h2 className="text-xl md:text-2xl font-poppins font-bold text-brown-light">
              Tu Carrito
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-brown-light hover:text-red-soft transition-colors p-2 hover:bg-gray-100 rounded-full"
            aria-label="Cerrar carrito"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          {orderItems.length === 0 ? (
            <div className="text-center py-12 animate-fadeIn">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-10 h-10 text-gray-300" />
              </div>
              <p className="text-brown-light/60 font-inter text-base md:text-lg">
                Tu carrito está vacío
              </p>
              <p className="text-brown-light/40 font-inter text-sm mt-2">
                ¡Agregá tus milanesas favoritas!
              </p>
            </div>
          ) : (
            <div className="space-y-3 md:space-y-4">
              {orderItems.map((item, index) => (
                <div
                  key={item.id}
                  className="flex justify-between items-start gap-3 md:gap-4 p-3 md:p-4 bg-gradient-to-br from-beige-light to-white rounded-xl border border-golden/10 hover:border-golden/30 transition-all animate-fadeIn shadow-sm hover:shadow-md"
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
                    <div className="flex flex-wrap items-center gap-2 mt-2 text-xs md:text-sm">
                      <span className="bg-golden/10 text-golden font-inter font-semibold px-2 py-1 rounded">
                        {item.quantity} kg
                      </span>
                      <span className="text-brown-light/50">×</span>
                      <span className="text-brown-light/70">${item.pricePerKg.toLocaleString('es-AR')}</span>
                      <span className="text-brown-light/50">=</span>
                      <span className="font-poppins font-bold text-golden">
                        ${(item.quantity * item.pricePerKg).toLocaleString('es-AR')}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-soft hover:text-red-600 transition-all p-2 hover:bg-red-50 rounded-lg active:scale-95"
                    aria-label="Eliminar producto"
                  >
                    <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {orderItems.length > 0 && (
          <div className="border-t-2 border-gray-200 p-4 md:p-6 space-y-3 md:space-y-4 bg-gradient-to-b from-white to-beige-light/30">
            <div className="space-y-2">
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
            <button
              onClick={onCheckout}
              className="w-full bg-golden hover:bg-golden/90 text-white font-poppins font-semibold px-4 md:px-6 py-3 md:py-4 rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-lg text-base md:text-lg"
            >
              Continuar con el pedido
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
