import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { BUSINESS_INFO } from '../config/businessInfo';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-gradient-to-br from-[#6B4423] to-[#5A3A1F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl md:text-3xl font-poppins font-bold mb-4 text-golden">
              {BUSINESS_INFO.name}
            </h3>
            <p className="font-inter text-white/90 mb-4 leading-relaxed">
              Milanesas caseras crudas de la mejor calidad en Trelew, Chubut. 
              Preparadas con amor y dedicación para que disfrutes el sabor auténtico de lo casero.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-golden/20 text-golden px-3 py-1 rounded-full text-sm font-semibold">
                ✨ 100% Caseras
              </span>
              <span className="bg-golden/20 text-golden px-3 py-1 rounded-full text-sm font-semibold">
                ❄️ Listas para Freezar
              </span>
              <span className="bg-golden/20 text-golden px-3 py-1 rounded-full text-sm font-semibold">
                📏 Con Separadores
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-poppins font-bold mb-4 text-golden">
              Contacto
            </h4>
            <div className="space-y-3">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-golden transition-colors group"
              >
                <FaWhatsapp className="w-5 h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="font-inter text-sm md:text-base">{BUSINESS_INFO.whatsappDisplay}</span>
              </a>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="font-inter text-sm md:text-base">{BUSINESS_INFO.phone}</span>
              </div>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-3 hover:text-golden transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="font-inter text-sm md:text-base break-all">{BUSINESS_INFO.email}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="font-inter text-sm md:text-base">{BUSINESS_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Horarios y Redes */}
          <div>
            <h4 className="text-xl font-poppins font-bold mb-4 text-golden">
              Horarios
            </h4>
            <div className="space-y-2 mb-6">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <p className="font-inter text-sm text-white/90">
                  {BUSINESS_INFO.horarios.semana}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <p className="font-inter text-sm text-white/90">
                  {BUSINESS_INFO.horarios.sabado}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <p className="font-inter text-sm text-white/70">
                  {BUSINESS_INFO.horarios.domingo}
                </p>
              </div>
            </div>

            <h4 className="text-lg font-poppins font-bold mb-3 text-golden">
              Seguinos
            </h4>
            <div className="flex gap-3">
              <a
                href={BUSINESS_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-golden p-3 rounded-lg transition-all transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={BUSINESS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-golden p-3 rounded-lg transition-all transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-green-natural p-3 rounded-lg transition-all transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-inter text-white/70 text-sm text-center md:text-left">
              © {new Date().getFullYear()} {BUSINESS_INFO.name}. Todos los derechos reservados.
            </p>
            <p className="font-inter text-white/50 text-xs text-center md:text-right">
              Trelew, Chubut, Argentina 🇦🇷
            </p>
          </div>
          <p className="font-inter text-white/40 text-xs mt-4 text-center">
            Diseñado con ❤️ para que siempre tengas milanesas caseras en tu freezer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
