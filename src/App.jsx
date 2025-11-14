import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowToOrder from './components/HowToOrder';
import ProductCard from './components/ProductCard';
import OrderSummary from './components/OrderSummary';
import ProductInfo from './components/ProductInfo';
import DeliveryInfo from './components/DeliveryInfo';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import CartModal from './components/CartModal';
import CheckoutModal from './components/CheckoutModal';
import { BUSINESS_INFO } from './config/businessInfo';
import './App.css';

function App() {
  const [orderItems, setOrderItems] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  // Número de WhatsApp del emprendimiento desde config
  const WHATSAPP_NUMBER = BUSINESS_INFO.whatsapp;

  // Productos disponibles
  const products = [
    {
      id: 'pollo',
      name: 'Milanesas de Pollo',
      label: 'Popular',
      description: 'Tiernas y jugosas, perfectas para toda la familia.',
      image: '/imagenes/milapollo.webp',
      hasTypes: true,
      types: ['Pechuga', 'Muslo'],
      pricePerKg: 13000
    },
    {
      id: 'carne',
      name: 'Milanesas de Carne',
      label: 'Tradicional',
      description: 'El sabor tradicional de siempre. Corte de nalga de primera calidad, rebozadas artesanalmente.',
      image: '/imagenes/milacarne.webp',
      hasTypes: false,
      pricePerKg: 14000
    },
    {
      id: 'cerdo',
      name: 'Milanesas de Cerdo',
      label: 'Especial',
      description: 'Suaves y sabrosas, una opción diferente y deliciosa. Carne magra de cerdo premium.',
      image: '/imagenes/mila 2.webp',
      hasTypes: false,
      pricePerKg: 12500
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

  // Calcular precio total
  const calculateTotal = () => {
    return orderItems.reduce((sum, item) => {
      const product = products.find(p => p.id === item.productId);
      return sum + (product?.pricePerKg || 0) * item.quantity;
    }, 0);
  };

  // Eliminar producto del pedido
  const handleRemoveItem = (itemId) => {
    setOrderItems(orderItems.filter(item => item.id !== itemId));
  };

  // Abrir modal del carrito
  const handleOpenCart = () => {
    setIsCartModalOpen(true);
  };

  // Proceder al checkout
  const handleCheckout = () => {
    setIsCartModalOpen(false);
    setIsCheckoutModalOpen(true);
  };

  // Confirmar y enviar pedido por WhatsApp
  const handleConfirmOrder = (customerData) => {
    // Construir mensaje de WhatsApp
    let message = '🍽️ *NUEVO PEDIDO - Milanesa de Primo*\n\n';
    
    message += '👤 *Datos del Cliente:*\n';
    message += `Nombre: ${customerData.name}\n`;
    message += `Teléfono: ${customerData.phone}\n`;
    message += `Fecha de entrega: ${new Date(customerData.deliveryDate).toLocaleDateString('es-AR')}\n`;
    message += `Forma de pago: ${customerData.paymentMethod === 'efectivo' ? 'Efectivo' : 'Transferencia'}\n`;
    message += `Tipo de entrega: ${customerData.deliveryType === 'delivery' ? 'Envío a domicilio' : 'Retiro en local'}\n`;
    
    if (customerData.deliveryType === 'delivery') {
      message += `Dirección: ${customerData.address}\n`;
    }
    
    message += '\n📦 *Pedido:*\n';
    
    orderItems.forEach((item, index) => {
      const product = products.find(p => p.id === item.productId);
      const itemPrice = (product?.pricePerKg || 0) * item.quantity;
      message += `${index + 1}. ${item.name}`;
      if (item.type) {
        message += ` - ${item.type}`;
      }
      message += ` (${item.quantity} kg) - $${itemPrice.toLocaleString('es-AR')}\n`;
    });

    const totalKg = orderItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = calculateTotal();
    message += `\n*Total: ${totalKg} kg*\n`;
    message += `*Precio Total: $${totalPrice.toLocaleString('es-AR')}*\n\n`;
    message += '¡Gracias por tu pedido! 😊';

    // Codificar mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Abrir WhatsApp en nueva pestaña
    window.open(whatsappUrl, '_blank');

    // Limpiar carrito y cerrar modal
    setOrderItems([]);
    setIsCheckoutModalOpen(false);
  };

  // Enviar pedido por WhatsApp (método anterior - ahora obsoleto)
  const handleSendWhatsApp = () => {
    if (orderItems.length === 0) {
      alert('Tu pedido está vacío. Por favor agregá productos antes de enviar.');
      return;
    }

    // Redirigir al checkout
    handleCheckout();
  };

  return (
    <div className="min-h-screen bg-beige-light">
      <Navbar cartItemCount={orderItems.length} onCartClick={handleOpenCart} />
      <Hero />
      <HowToOrder />

      {/* Products Section */}
      <section id="productos" className="py-12 md:py-16 bg-gradient-to-b from-white to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 animate-fadeIn">
            <div className="inline-block bg-golden/10 px-4 py-2 rounded-full mb-3">
              <span className="text-golden font-poppins font-semibold text-sm">
                🥩 Calidad Premium
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-brown-warm mb-3 md:mb-4">
              Nuestras Milanesas
            </h2>
            <p className="text-base md:text-lg text-brown-light/80 font-inter max-w-2xl mx-auto px-4">
              Elegí tus favoritas, seleccioná la cantidad en kilos y armá tu pedido. 
              <span className="text-golden font-semibold"> Todas con separadores individuales</span>, listas para freezar hasta 3 meses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {/* Products */}
            {products.map((product, index) => (
              <div key={product.id} className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard
                  product={product}
                  onAddToOrder={handleAddToOrder}
                />
              </div>
            ))}

            {/* Order Summary - Desktop: sticky card, Mobile: hidden (se usa el botón flotante y modales) */}
            <div 
              id="order-summary" 
              className="hidden xl:block xl:col-span-1"
            >
              <OrderSummary
                orderItems={orderItems}
                onRemoveItem={handleRemoveItem}
                onSendWhatsApp={handleSendWhatsApp}
                calculateTotal={calculateTotal}
              />
            </div>
          </div>
        </div>
      </section>

      <ProductInfo />
      <DeliveryInfo />
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsAppButton 
        onClick={handleOpenCart}
        itemCount={orderItems.length}
      />

      {/* Cart Modal */}
      <CartModal
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
        orderItems={orderItems}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
        calculateTotal={calculateTotal}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        orderItems={orderItems}
        onConfirmOrder={handleConfirmOrder}
        calculateTotal={calculateTotal}
      />
    </div>
  );
}

export default App;
