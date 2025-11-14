import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
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
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('inicio')}>
            <img 
              src="/imagenes/LOGO/logo1.svg" 
              alt="Milanesa de Primo Logo" 
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <span className="text-xl md:text-2xl font-poppins font-bold text-red-soft">
              Milanesa de Primo
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-brown-light hover:text-red-soft font-inter font-medium transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('productos')}
              className="text-brown-light hover:text-red-soft font-inter font-medium transition-colors"
            >
              Productos
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-brown-light hover:text-red-soft font-inter font-medium transition-colors"
            >
              Contacto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brown-light hover:text-red-soft"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left px-3 py-2 text-brown-light hover:bg-beige-light hover:text-red-soft font-inter font-medium transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('productos')}
              className="block w-full text-left px-3 py-2 text-brown-light hover:bg-beige-light hover:text-red-soft font-inter font-medium transition-colors"
            >
              Productos
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-left px-3 py-2 text-brown-light hover:bg-beige-light hover:text-red-soft font-inter font-medium transition-colors"
            >
              Contacto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
