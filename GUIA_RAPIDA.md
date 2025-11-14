# 🎯 Guía Rápida de Personalización

Esta guía te ayudará a personalizar rápidamente la landing page para tu emprendimiento.

## 1️⃣ CONFIGURAR WHATSAPP (OBLIGATORIO) ⚠️

### Archivo: `src/App.jsx`

**Línea ~9:**
```javascript
const WHATSAPP_NUMBER = '5491123456789'; // ← CAMBIAR AQUÍ
```

**Línea ~14-18 (Footer.jsx):**
```javascript
const phoneNumber = '5491123456789'; // ← CAMBIAR AQUÍ TAMBIÉN
```

### Formato del número:
```
[código país][código área sin 0][número]

Ejemplos:
- Argentina: 549 11 2345-6789 → 5491123456789
- México: 52 1 55 1234-5678 → 5215512345678
- Chile: 56 9 8765-4321 → 56987654321
- Colombia: 57 300 123-4567 → 573001234567
```

---

## 2️⃣ PERSONALIZAR DATOS DE CONTACTO

### Archivo: `src/components/Footer.jsx`

**Email (línea ~47):**
```javascript
<a href="mailto:contacto@lacasadelasmila.com">  // ← Tu email aquí
```

**Teléfono fijo (línea ~53):**
```javascript
<Phone className="w-5 h-5" />
<span className="font-inter">011 2345-6789</span>  // ← Tu teléfono aquí
```

**Dirección (línea ~63):**
```javascript
<MapPin className="w-5 h-5" />
<span className="font-inter">Buenos Aires, Argentina</span>  // ← Tu dirección aquí
```

**Redes Sociales (línea ~79-95):**
```javascript
href="https://instagram.com/tu_usuario"     // ← Tu Instagram
href="https://facebook.com/tu_pagina"       // ← Tu Facebook
```

---

## 3️⃣ CAMBIAR NOMBRE DEL NEGOCIO

### Archivo: `src/components/Navbar.jsx` (línea ~20)
```javascript
<span className="text-2xl font-poppins font-bold text-red-soft">
  La Casa de las Milas  // ← Cambiar nombre aquí
</span>
```

### Archivo: `src/components/Footer.jsx` (línea ~11)
```javascript
<h3 className="text-2xl font-poppins font-bold mb-4 text-golden">
  La Casa de las Milas  // ← Cambiar nombre aquí también
</h3>
```

---

## 4️⃣ MODIFICAR PRODUCTOS

### Archivo: `src/App.jsx` (línea ~15-48)

Cada producto tiene esta estructura:

```javascript
{
  id: 'pollo',                    // ID único (no repetir)
  name: 'Milanesas de Pollo',     // Nombre visible
  label: 'Popular',               // Etiqueta en la tarjeta
  description: '...',             // Descripción del producto
  image: 'https://...',           // URL de la imagen
  types: [                        // Variantes disponibles
    'Clásicas',
    'Con provenzal',
    'Napolitanas',
    // ... agregar más variantes
  ]
}
```

### Para agregar un nuevo producto:
```javascript
{
  id: 'pescado',
  name: 'Milanesas de Pescado',
  label: 'Nuevo',
  description: 'Milanesas de merluza, ligeras y saludables',
  image: 'URL_DE_TU_IMAGEN',
  types: ['Clásicas', 'Con limón y pimienta', 'Rebozadas']
}
```

---

## 5️⃣ CAMBIAR IMÁGENES

### Opción A: Usar tus propias imágenes

1. **Guardá tus imágenes** en `src/assets/`
2. **Importá la imagen** al inicio del archivo:
   ```javascript
   import imagenPollo from './assets/milanesa-pollo.jpg';
   ```
3. **Usá la imagen** en el producto:
   ```javascript
   image: imagenPollo,
   ```

### Opción B: Usar URLs externas
Simplemente copiá la URL de la imagen en el campo `image`:
```javascript
image: 'https://tu-servidor.com/imagen.jpg',
```

### Recomendaciones de imágenes:
- **Resolución:** Mínimo 800x600px
- **Formato:** JPG o PNG
- **Peso:** Menos de 500KB (optimizá antes de subir)
- **Estilo:** Fotos reales de tus productos (genera más confianza)

---

## 6️⃣ MODIFICAR CANTIDADES DISPONIBLES

### Archivo: `src/components/ProductCard.jsx` (línea ~56-60)

Actualmente:
```javascript
<option value={6}>6 unidades</option>
<option value={12}>12 unidades</option>
<option value={24}>24 unidades</option>
```

Podés agregar o cambiar:
```javascript
<option value={4}>4 unidades</option>
<option value={8}>8 unidades</option>
<option value={10}>10 unidades</option>
<option value={20}>20 unidades</option>
<option value={50}>50 unidades (mayorista)</option>
```

---

## 7️⃣ PERSONALIZAR TEXTOS PRINCIPALES

### Hero Section - `src/components/Hero.jsx`

**Título principal (línea ~18):**
```javascript
<h1 className="...">
  ¡Pedí tus{' '}
  <span className="text-red-soft">milas caseras</span>{' '}
  para tener siempre algo rico en el freezer!
</h1>
```

**Subtítulo (línea ~22):**
```javascript
<p className="...">
  Milanesas caseras crudas de la mejor calidad...
</p>
```

---

## 8️⃣ CAMBIAR COLORES

### Archivo: `tailwind.config.js` (línea ~10-16)

```javascript
colors: {
  'golden': '#F9C74F',           // Amarillo principal
  'beige-light': '#FFF8E7',      // Fondo
  'red-soft': '#E63946',         // Acentos
  'brown-light': '#8D6E63',      // Texto
  'green-natural': '#4CAF50',    // WhatsApp
}
```

Reemplazá los códigos HEX con tus colores preferidos.

**Herramientas útiles:**
- [Coolors.co](https://coolors.co/) - Generador de paletas
- [Color Hunt](https://colorhunt.co/) - Paletas prediseñadas

---

## 9️⃣ MENSAJE DE WHATSAPP

### Archivo: `src/App.jsx` (línea ~61-72)

Podés personalizar el formato del mensaje:

```javascript
let message = '¡Hola! Quiero hacer el siguiente pedido:\n\n';

orderItems.forEach((item, index) => {
  message += `${index + 1}. ${item.name}\n`;
  message += `   • Tipo: ${item.type}\n`;
  message += `   • Cantidad: ${item.quantity} unidades\n\n`;
});

message += `📦 Total: ${totalItems} unidades\n\n`;
message += '¡Espero su confirmación! Gracias 😊';
```

---

## 🔟 AGREGAR HORARIOS DE ATENCIÓN

### Archivo: `src/components/Footer.jsx`

Agregá esta sección después de las redes sociales:

```javascript
<div>
  <h4 className="text-xl font-poppins font-bold mb-4 text-golden">
    Horarios
  </h4>
  <div className="font-inter text-white/80 space-y-1">
    <p>Lunes a Viernes: 9:00 - 20:00</p>
    <p>Sábados: 9:00 - 14:00</p>
    <p>Domingos: Cerrado</p>
  </div>
</div>
```

Y cambiá el grid a 4 columnas:
```javascript
<div className="grid md:grid-cols-4 gap-8">  // Era md:grid-cols-3
```

---

## ✅ CHECKLIST ANTES DE PUBLICAR

- [ ] ✅ Número de WhatsApp configurado correctamente
- [ ] ✅ Email de contacto actualizado
- [ ] ✅ Dirección y teléfono cambiados
- [ ] ✅ Enlaces de redes sociales funcionando
- [ ] ✅ Nombre del negocio actualizado
- [ ] ✅ Productos con descripciones correctas
- [ ] ✅ Imágenes propias (o de buena calidad)
- [ ] ✅ Cantidades adaptadas a tu negocio
- [ ] ✅ Probado en móvil y desktop
- [ ] ✅ Probado el botón de WhatsApp

---

## 🚀 COMANDOS IMPORTANTES

```bash
# Ver en navegador (desarrollo)
npm run dev

# Compilar para publicar
npm run build

# Vista previa de la compilación
npm run preview
```

---

## 🆘 AYUDA RÁPIDA

### El sitio no arranca
```bash
npm install
npm run dev
```

### Los cambios no se ven
1. Guardá el archivo (Ctrl + S)
2. Refrescá el navegador (Ctrl + R)
3. Si no funciona, detené el servidor (Ctrl + C) y ejecutá `npm run dev` de nuevo

### WhatsApp no funciona
- Verificá que el número esté sin espacios ni guiones
- Debe tener código de país (ej: 549...)
- Probá en un celular real (no siempre funciona en desktop)

---

## 📞 ¿Necesitás más ayuda?

Consultá el archivo `INSTRUCCIONES.md` para información más detallada.

---

**¡Listo! Tu landing page está lista para atraer clientes 🎉**
