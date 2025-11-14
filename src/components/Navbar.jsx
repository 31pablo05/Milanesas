import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Navbar = ({ cartItemCount, onCartClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 md:space-x-3 cursor-pointer" onClick={() => scrollToSection('inicio')}>
            <img 
              src="/imagenes/LOGO/logo1.svg" 
              alt="Milanesa de Primo Logo" 
              className="w-8 h-8 md:w-10 lg:w-12 md:h-10 lg:h-12 transition-transform hover:scale-110"
            />
            <span className="text-base md:text-xl lg:text-2xl font-poppins font-bold text-red-soft truncate">
              Milanesa de Primo
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-brown-light hover:text-red-soft font-inter font-medium transition-colors relative group"
            >
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-soft transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('productos')}
              className="text-brown-light hover:text-red-soft font-inter font-medium transition-colors relative group"
            >
              Productos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-soft transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-brown-light hover:text-red-soft font-inter font-medium transition-colors relative group"
            >
              Contacto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-soft transition-all group-hover:w-full"></span>
            </button>
            
            {/* Cart Icon */}
            <button
              onClick={onCartClick}
              className="relative text-brown-light hover:text-golden transition-all p-2 hover:bg-golden/10 rounded-full"
              aria-label="Abrir carrito"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-soft text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse shadow-md">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Cart Icon Mobile */}
            <button
              onClick={onCartClick}
              className="relative text-brown-light hover:text-golden transition-all p-2 hover:bg-golden/10 rounded-full active:scale-95"
              aria-label="Abrir carrito"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-soft text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center animate-pulse shadow-md">
                  {cartItemCount}
                </span>
              )}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brown-light hover:text-red-soft p-2 hover:bg-red-soft/10 rounded-lg transition-all active:scale-95"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg animate-slideDown">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left px-4 py-3 text-brown-light hover:bg-gradient-to-r hover:from-beige-light hover:to-transparent hover:text-red-soft font-inter font-medium transition-all rounded-lg"
            >
              🏠 Inicio
            </button>
            <button
              onClick={() => scrollToSection('productos')}
              className="block w-full text-left px-4 py-3 text-brown-light hover:bg-gradient-to-r hover:from-beige-light hover:to-transparent hover:text-red-soft font-inter font-medium transition-all rounded-lg"
            >
              🍽️ Productos
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-left px-4 py-3 text-brown-light hover:bg-gradient-to-r hover:from-beige-light hover:to-transparent hover:text-red-soft font-inter font-medium transition-all rounded-lg"
            >
              📞 Contacto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
