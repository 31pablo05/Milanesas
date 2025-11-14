import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    '/imagenes/hero.png',
    '/imagenes/milapollo.webp',
    '/imagenes/milacarne.webp',
    '/imagenes/mila 2.webp'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById('productos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative bg-gradient-to-br from-cream via-beige-light to-white pt-20 pb-12 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-4 md:space-y-6 text-center md:text-left order-2 md:order-1">
            <div className="inline-block bg-golden/10 px-4 py-2 rounded-full mb-2">
              <span className="text-golden font-poppins font-semibold text-sm">
                🔥 Más de 500 familias confían en nosotros
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-brown-warm leading-tight">
              Del{' '}
              <span className="text-red-soft">freezer al horno</span>{' '}
              en minutos
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brown-light/90 font-inter">
              Milanesas caseras crudas en Trelew, Chubut. Con separadores individuales, 
              listas para freezar y cocinar cuando quieras. 100% artesanales.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
              <button
                onClick={scrollToProducts}
                className="bg-gradient-to-r from-golden to-golden/90 hover:from-golden/90 hover:to-golden text-white font-poppins font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105"
              >
                Ver Precios y Pedir
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('contacto');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-golden text-golden hover:bg-golden hover:text-white font-poppins font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all"
              >
                Contactanos
              </button>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Images */}
              <div className="relative h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Milanesas caseras ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brown-light p-1.5 md:p-2 rounded-full shadow-lg transition-all z-10"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brown-light p-1.5 md:p-2 rounded-full shadow-lg transition-all z-10"
                aria-label="Imagen siguiente"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide ? 'bg-white w-6 md:w-8' : 'bg-white/50 w-2'
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-gradient-to-br from-red-soft to-red-accent text-white px-4 md:px-6 py-3 md:py-4 rounded-xl shadow-2xl border-4 border-white">
              <p className="font-poppins font-bold text-base md:text-lg">✨ 100% Caseras</p>
              <p className="font-inter text-xs md:text-sm">Con separadores individuales</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-golden/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-red-soft/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
