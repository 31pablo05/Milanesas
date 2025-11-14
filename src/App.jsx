import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import OrderSummary from './components/OrderSummary';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [orderItems, setOrderItems] = useState([]);

  // Número de WhatsApp del emprendimiento (reemplazar con el número real)
  const WHATSAPP_NUMBER = '5491123456789';

  // Productos disponibles
  const products = [
    {
      id: 'pollo',
      name: 'Milanesas de Pollo',
      label: 'Popular',
      description: 'Tiernas y jugosas, perfectas para toda la familia.',
      image: '/imagenes/milapollo.webp',
      hasTypes: true,
      types: ['Pechuga', 'Muslo']
    },
    {
      id: 'carne',
      name: 'Milanesas de Carne',
      label: 'Tradicional',
      description: 'El sabor tradicional de siempre. Corte de nalga de primera calidad, rebozadas artesanalmente.',
      image: '/imagenes/milacarne.webp',
      hasTypes: false
    },
    {
      id: 'cerdo',
      name: 'Milanesas de Cerdo',
      label: 'Especial',
      description: 'Suaves y sabrosas, una opción diferente y deliciosa. Carne magra de cerdo premium.',
      image: '/imagenes/mila 2.webp',
      hasTypes: false
    }
  ];

  // Agregar producto al pedido
  const handleAddToOrder = (item) => {
    setOrderItems([...orderItems, item]);
    
    // Scroll suave hacia el resumen del pedido en móviles
    if (window.innerWidth < 768) {
      setTimeout(() => {
        const orderSummary = document.getElementById('order-summary');
        if (orderSummary) {
          orderSummary.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 100);
    }
  };

  // Eliminar producto del pedido
  const handleRemoveItem = (itemId) => {
    setOrderItems(orderItems.filter(item => item.id !== itemId));
  };

  // Enviar pedido por WhatsApp
  const handleSendWhatsApp = () => {
    if (orderItems.length === 0) {
      alert('Tu pedido está vacío. Por favor agregá productos antes de enviar.');
      return;
    }

    // Construir mensaje de WhatsApp
    let message = '¡Hola! Quiero hacer el siguiente pedido:\n\n';
    
    orderItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      if (item.type) {
        message += `   • Tipo: ${item.type}\n`;
      }
      message += `   • Cantidad: ${item.quantity} kg\n\n`;
    });

    const totalKg = orderItems.reduce((sum, item) => sum + item.quantity, 0);
    message += `📦 Total: ${totalKg} kg\n\n`;
    message += '¡Espero su confirmación! Gracias 😊';

    // Codificar mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Abrir WhatsApp en nueva pestaña
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-beige-light">
      <Navbar />
      <Hero />

      {/* Products Section */}
      <section id="productos" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-brown-light mb-4">
              Nuestros Productos
            </h2>
            <p className="text-lg text-brown-light/70 font-inter max-w-2xl mx-auto">
              Elegí tus milanesas favoritas, seleccioná la cantidad y armá tu pedido. 
              ¡Todas son 100% caseras y listas para freezar!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Products */}
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToOrder={handleAddToOrder}
              />
            ))}

            {/* Order Summary - Desktop: sticky card, Mobile: normal card */}
            <div 
              id="order-summary" 
              className="md:col-span-2 lg:col-span-1 xl:col-span-1"
            >
              <OrderSummary
                orderItems={orderItems}
                onRemoveItem={handleRemoveItem}
                onSendWhatsApp={handleSendWhatsApp}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
