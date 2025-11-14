# 🍗 La Casa de las Milas - Landing Page

Landing page moderna y atractiva para el emprendimiento gastronómico **"La Casa de las Milas"**, especializado en la venta de milanesas caseras crudas para freezar.

## ✨ Características

- **Diseño moderno y responsive** optimizado para todos los dispositivos
- **Sistema de pedidos** con carrito de compras integrado
- **Integración con WhatsApp** para envío automático de pedidos
- **Paleta de colores cálida y apetitosa** que transmite confianza
- **Componentes interactivos** con animaciones suaves
- **3 tipos de milanesas**: Pollo, Carne y Cerdo
- **Múltiples variantes**: Clásicas, con provenzal, napolitanas, rellenas, etc.

## 🎨 Diseño

### Paleta de Colores
- 🍗 **Amarillo dorado:** `#F9C74F` - Botones y detalles principales
- 🍞 **Beige claro:** `#FFF8E7` - Fondo principal
- 🍅 **Rojo suave:** `#E63946` - Acentos y títulos
- 🪵 **Marrón claro:** `#8D6E63` - Texto secundario
- 🌿 **Verde natural:** `#4CAF50` - Botón de WhatsApp

### Tipografía
- **Poppins Bold** para titulares
- **Inter Regular** para texto general

## 🚀 Instalación y Uso

### Requisitos Previos
- Node.js (v14 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio** (si aplica)
```bash
git clone [tu-repositorio]
cd Milanesas
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar número de WhatsApp**
   
   Editá el archivo `src/App.jsx` y buscá la siguiente línea (línea ~9):
   ```javascript
   const WHATSAPP_NUMBER = '5491123456789';
   ```
   
   Reemplazá `5491123456789` con tu número de WhatsApp en formato internacional:
   - **Formato:** `[código país][código área][número]`
   - **Ejemplo Argentina:** `5491123456789` (54 = Argentina, 9 = celular, 11 = Buenos Aires)
   - **Ejemplo México:** `5215512345678` (52 = México, 1 = celular)
   
   También podés actualizar el número en el `Footer.jsx` (línea ~4):
   ```javascript
   const phoneNumber = '5491123456789';
   ```

4. **Configurar datos de contacto**
   
   En `src/components/Footer.jsx`, personalizá:
   - Email: `contacto@lacasadelasmila.com`
   - Dirección: `Buenos Aires, Argentina`
   - Redes sociales (Instagram, Facebook)

5. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

6. **Compilar para producción**
```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

## 📱 Componentes Principales

### 1. Navbar
- Logo y nombre del emprendimiento
- Enlaces de navegación (Inicio, Productos, Contacto)
- Menú responsive para móviles

### 2. Hero Section
- Imagen destacada de milanesas
- Texto principal llamativo
- Botones de acción (Hacer Pedido, Contactanos)

### 3. ProductCard
- Imagen del producto
- Descripción y características
- Selector de tipo de milanesa
- Selector de cantidad (6, 12 o 24 unidades)
- Botón "Agregar al pedido"

### 4. OrderSummary
- Lista de productos seleccionados
- Total de unidades
- Botón para eliminar productos
- Botón "Enviar pedido por WhatsApp"

### 5. Footer
- Información de contacto
- Dirección y teléfonos
- Enlaces a redes sociales
- Copyright

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework principal
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Framework de estilos
- **Lucide React** - Iconos modernos
- **React Icons** - Iconos adicionales (WhatsApp, redes sociales)

## 📦 Productos Configurables

Los productos se definen en `src/App.jsx`. Podés agregar, modificar o eliminar productos editando el array `products`:

```javascript
const products = [
  {
    id: 'pollo',
    name: 'Milanesas de Pollo',
    label: 'Popular',
    description: 'Descripción del producto...',
    image: 'URL_DE_LA_IMAGEN',
    types: ['Clásicas', 'Con provenzal', 'Napolitanas', ...]
  },
  // Agregar más productos aquí
];
```

## 🎯 Flujo de Pedido

1. Usuario navega por los productos
2. Selecciona tipo y cantidad para cada producto
3. Hace clic en "Agregar al pedido"
4. Los productos se agregan al resumen
5. Al completar la selección, hace clic en "Enviar pedido por WhatsApp"
6. Se genera automáticamente un mensaje con el detalle del pedido
7. Se abre WhatsApp con el mensaje listo para enviar

### Ejemplo de mensaje generado:
```
¡Hola! Quiero hacer el siguiente pedido:

1. Milanesas de Pollo
   • Tipo: Napolitanas
   • Cantidad: 12 unidades

2. Milanesas de Carne
   • Tipo: Clásicas
   • Cantidad: 24 unidades

📦 Total: 36 unidades

¡Espero su confirmación! Gracias 😊
```

## 🖼️ Personalización de Imágenes

Las imágenes actuales son de Unsplash (placeholder). Para usar tus propias imágenes:

1. Guardá las imágenes en `src/assets/`
2. Importalas en los componentes:
```javascript
import imagenPollo from './assets/pollo.jpg';
```
3. Reemplazá las URLs en el array de productos

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 Móviles (320px - 767px)
- 📱 Tablets (768px - 1023px)
- 💻 Desktop (1024px+)

## 🐛 Solución de Problemas

### El botón de WhatsApp no funciona
- Verificá que el número esté en formato internacional correcto
- Asegurate de que el navegador permita abrir enlaces externos

### Las imágenes no cargan
- Verificá que las URLs de las imágenes sean válidas
- Si usás imágenes locales, asegurate de importarlas correctamente

### Los estilos no se aplican
- Ejecutá `npm install` para instalar todas las dependencias
- Verificá que Tailwind esté configurado correctamente en `tailwind.config.js`

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso personal y comercial.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encontrás algún error o tenés sugerencias de mejora, no dudes en abrir un issue o pull request.

## 📞 Contacto

Para consultas sobre el desarrollo o personalización de este sitio, podés contactarme a través de GitHub.

---

**Hecho con ❤️ para que siempre tengas milas en tu freezer** 🍗
