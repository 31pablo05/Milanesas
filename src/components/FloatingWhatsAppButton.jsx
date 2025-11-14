import { MessageCircle } from 'lucide-react';

const FloatingWhatsAppButton = ({ onClick, itemCount }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-green-natural hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-95 z-50 flex items-center gap-2 animate-bounce-slow"
      aria-label="Abrir carrito de WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-red-soft text-white text-xs font-bold rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center animate-pulse shadow-lg border-2 border-white">
          {itemCount}
        </span>
      )}
    </button>
  );
};

export default FloatingWhatsAppButton;
