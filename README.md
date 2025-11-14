# 🍗 La Casa de las Milas

> Landing page moderna para emprendimiento de milanesas caseras crudas con sistema de pedidos por WhatsApp

![React](https://img.shields.io/badge/React-18.3.1-blue)
![Vite](https://img.shields.io/badge/Vite-6.3.5-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.18-cyan)

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build
```

## 📋 Instrucciones Completas

**⚠️ IMPORTANTE:** Lee el archivo `INSTRUCCIONES.md` para:
- Configurar tu número de WhatsApp
- Personalizar datos de contacto
- Modificar productos y precios
- Cambiar imágenes

## ✨ Características Principales

✅ Diseño responsive (móvil, tablet, desktop)  
✅ Sistema de carrito de compras  
✅ Envío automático de pedidos por WhatsApp  
✅ 3 tipos de milanesas (pollo, carne, cerdo)  
✅ Múltiples variantes y cantidades  
✅ Paleta de colores cálida y atractiva  
✅ Animaciones suaves y modernas  

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| 🍗 Amarillo dorado | `#F9C74F` | Botones principales |
| 🍞 Beige claro | `#FFF8E7` | Fondo |
| 🍅 Rojo suave | `#E63946` | Acentos |
| 🪵 Marrón claro | `#8D6E63` | Texto |
| 🌿 Verde natural | `#4CAF50` | WhatsApp |

## 🛠️ Stack Tecnológico

- **React 18** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **React Icons** - Social Icons

## 📱 Componentes

```
src/
├── components/
│   ├── Navbar.jsx          # Navegación superior
│   ├── Hero.jsx            # Sección principal
│   ├── ProductCard.jsx     # Tarjeta de producto
│   ├── OrderSummary.jsx    # Resumen del pedido
│   └── Footer.jsx          # Pie de página
├── App.jsx                 # Componente principal
└── index.css               # Estilos globales
```

## 📞 Configuración de WhatsApp

Editá `src/App.jsx` línea ~9:

```javascript
const WHATSAPP_NUMBER = '5491123456789'; // Tu número aquí
```

**Formato:** `[código país][código área sin 0][número]`

## 🖼️ Personalización

### Cambiar productos
Editá el array `products` en `src/App.jsx`

### Cambiar imágenes
1. Guardá tus imágenes en `src/assets/`
2. Importalas y reemplazá las URLs

### Cambiar colores
Editá `tailwind.config.js` en la sección `colors`

## 📄 Licencia

Proyecto de código abierto - Libre uso personal y comercial

---

**¡Hecho con ❤️ para que siempre tengas milas en tu freezer!** 🍗
