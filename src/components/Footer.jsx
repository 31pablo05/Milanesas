import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const phoneNumber = '5491123456789'; // Reemplazar con número real

  return (
    <footer id="contacto" className="bg-brown-light text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-poppins font-bold mb-4 text-golden">
              La Casa de las Milas
            </h3>
            <p className="font-inter text-white/80 mb-4">
              Milanesas caseras crudas de la mejor calidad. Preparadas con amor para que disfrutes
              el sabor auténtico de lo casero.
            </p>
            <p className="font-inter text-sm text-white/60">
              100% artesanales • Listas para freezar • Calidad garantizada
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-poppins font-bold mb-4 text-golden">
              Contacto
            </h4>
            <div className="space-y-3">
              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-golden transition-colors group"
              >
                <FaWhatsapp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-inter">+54 9 11 2345-6789</span>
              </a>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span className="font-inter">011 2345-6789</span>
              </div>
              <a
                href="mailto:contacto@lacasadelasmila.com"
                className="flex items-center gap-3 hover:text-golden transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-inter">contacto@lacasadelasmila.com</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span className="font-inter">Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-poppins font-bold mb-4 text-golden">
              Seguinos
            </h4>
            <p className="font-inter text-white/80 mb-4">
              Unite a nuestra comunidad y enterate de todas las novedades
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-golden p-3 rounded-lg transition-all transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-golden p-3 rounded-lg transition-all transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-green-natural p-3 rounded-lg transition-all transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="font-inter text-white/60 text-sm">
            © {new Date().getFullYear()} La Casa de las Milas. Todos los derechos reservados.
          </p>
          <p className="font-inter text-white/40 text-xs mt-2">
            Diseñado con ❤️ para que siempre tengas milas en tu freezer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
