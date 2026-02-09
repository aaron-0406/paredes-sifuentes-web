# CLAUDE.md - Memoria del Proyecto

## Descripcion General

Sitio web de **Paredes Sifuentes Abogados**, un estudio de abogados peruano ubicado en Trujillo con presencia en Chimbote y Huarmey. El sitio esta orientado a **ventas y captacion de clientes**, mostrando servicios legales especializados principalmente en derecho inmobiliario y patrimonial.

**Stack tecnologico:**
- Next.js 12.0.7 (Pages Router)
- React 17.0.2
- SASS/SCSS
- Swiper (sliders)
- react-floating-whatsapp (boton WhatsApp)

---

## Comandos

```bash
npm run dev      # Desarrollo local
npm run build    # Build de produccion (EJECUTAR DESPUES DE CADA CAMBIO)
npm run start    # Iniciar servidor de produccion
npm run export   # Generar sitio estatico
npm run lint     # Linter
```

---

## Estructura del Proyecto

```
src/
├── components/      # Componentes React
├── data/            # Archivos JSON con contenido
├── layouts/         # Layouts (light, main)
├── pages/           # Paginas Next.js
├── common/          # Utilidades JS
└── styles/          # SCSS
public/
└── assets/          # Imagenes, CSS, JS estatico
```

---

## Paginas Activas (EN USO)

| Ruta | Archivo | Descripcion |
|------|---------|-------------|
| `/` | `pages/index.js` → `pages/home/index.jsx` | Pagina principal |
| `/nosotros` | `pages/nosotros/index.jsx` | Sobre el estudio |
| `/servicios` | `pages/servicios/index.jsx` | Lista de servicios |
| `/servicios/[slug]` | `pages/servicios/[name].jsx` | Detalle de servicio (dinamico) |
| `/contacto` | `pages/contacto/index.jsx` | Pagina de contacto |

### Paginas NO usadas (template original)
- `/home2` a `/home7` - Variantes de home
- `/work1`, `/work2`, `/work3` - Portafolios
- `/project-details` - Detalles de proyecto
- `/_demos`, `/_blog-details` - Demos

---

## Componentes Activos (EN USO)

### Globales (en todos los layouts)
- `Navbar` - Menu de navegacion (incluye boton WhatsApp con telefono)
- `Footer` - Pie de pagina con contacto y redes
- `WhatsAppButton` - Boton flotante de WhatsApp
- `Cursor` - Cursor personalizado
- `ScrollToTop` - Boton scroll arriba
- `LoadingScreen` - Pantalla de carga
- `CallToAction` - Componente CTA reutilizable (variants: light/dark)
- `WhyChooseUs` - Seccion "Por que elegirnos" con 3 diferenciadores
- `InstagramFeed` - Feed de Instagram usando Elfsight (requiere ID del widget)
- `TeamExpanded` - Equipo con socios prominentes + equipo soporte
- `Cobertura` - 4 ubicaciones (3 ciudades + virtual)
- `AreasPractica` - 6 areas de practica con iconos

### Home (`/`)
- `IntroWithHorizontal` - Slider principal con 3 slides
- `AboutUs1` - Seccion "Sobre nosotros" con estadisticas
- `WhyChooseUs` - 6 diferenciadores con iconos
- `CallToAction` - CTA "Habla con un abogado" (variant="dark")
- `Process` - "Como trabajamos" (4 pasos)
- `HomeServices` - Grid 3x2 de servicios con iconos y links (fondo crema)
- `InstagramFeed` - Feed de Instagram (fondo blanco)
- `CallToAction` - CTA "Contáctanos ahora" (variant="dark")

### Nosotros (`/nosotros`)
- `PageHeader` - Cabecera de pagina
- `AboutUs4` - Estadisticas (352 casos, 567 clientes, 6 anos) + texto orientado al cliente
- `TeamExpanded` - Socios fundadores con bio + equipo de soporte
- `Cobertura` - Presencia geografica (Trujillo, Chimbote, Huarmey, Virtual)
- `AreasPractica` - Lista simple de 6 areas de practica (sin detalles)

### Servicios (`/servicios`) - REDISEÑADO 2026-02-06
- `PageHeader` - Cabecera de pagina
- `ServicesHero` - Intro con propuesta de valor y estadisticas
- `ServicesGrid` - Grid de 9 servicios sin paginacion (cards con hover dorado)
- `TrustIndicators` - Estadisticas + testimonios rotativos
- `CallToAction` - CTA (variant="dark")
- `Cobertura` - Transicion al footer (crema)

### Detalle Servicio (`/servicios/[slug]`) - REDISEÑADO 2026-02-06
- `ServiceHero` - Hero 50vh con imagen del servicio, categoria y subtitulo
- `ServiceIntro` - Descripcion + card de beneficios con checkmarks
- `SubservicesList` - Lista expandible de subservicios con codigo (badge dorado)
- `CallToAction` - CTA del servicio (variant="dark")
- `ServiceFAQ` - Accordion de preguntas frecuentes
- `RelatedServices` - 3 servicios relacionados de la misma categoria
- `Cobertura` - Presencia geografica (transicion al footer)

### Contacto (`/contacto`) - REDISEÑADO 2026-01-29
Estructura orientada a conversion (orden importante):
1. `ContactHero` - Hero 60vh con padding-top 100px (evita que navbar tape)
2. `ContactChannels` - 3 cards: WhatsApp (destacado burdeos), Telefono, Email
3. `TrustIndicators` - Estadisticas + testimonios rotativos (5s)
4. `SmartContactForm` - Proceso 4 pasos + formulario Formspree
5. `TeamMini` - Solo 2 fundadores (Piero y Natali)
6. `Cobertura` - 4 ubicaciones (reutilizado)
7. `CallToAction` - CTA urgencia (variant="dark")
8. Mapa Google - Seccion separada con fondo beige

**Patron de colores secciones finales:** beige → burdeos → beige → footer

---

## Componentes NO Usados (del template)

Estos componentes existen pero NO se usan actualmente:
- `About-Us2`, `About-Us3`, `About-Us5`, `About-Us6`, `About-Us7`, `About-Us8`
- `Intro-with-vertical`, `Intro-with-vertical2`, `Intro-with-horizontal2`
- `Intro3`, `Intro4`, `Intro5`
- `Portfolio1`, `Portfolio2`, `Portfolio3`
- `Works1`, `Work-Two-Column`, `Work-Three-Column`, `Work-Four-Column`
- `Blogs1` a `Blogs5`
- `Services2`, `Services3`, `Services4`, `Services5`, `Services6`, `Services7`
- `Team1`, `Team2`, `Team3`
- `Skills2`
- `Testimonials1`, `Testimonials2`
- `Video`, `Video2`, `Video-with-testimonials`
- `Skills-Circle`, `Skills-Circle2`
- `Numbers`, `Pricing-Table`
- `Brands`, `Brands2`
- `After-Before`, `Project-Intro`, `Project-Video`, `Next-Project`

---

## Archivos de Datos Importantes

| Archivo | Uso | Descripcion |
|---------|-----|-------------|
| `app.json` | Global | Logos, mapa iframe |
| `services.json` | `/servicios/[slug]` | **9 servicios completos** con subservicios, FAQ, CTA |
| `blog1.json` | `/servicios` | Lista resumida de 9 servicios para BlogsList |
| `services1.json` | Home | 8 servicios destacados (grid) |
| `about-us1.json` | Home | Contenido AboutUs1 |
| `team1.json` | Nosotros | 4 miembros del equipo |
| `Intro-with-horizontal.json` | Home | 3 slides del hero |

---

## Servicios Legales (9 areas)

1. **Derecho Inmobiliario** - Compra-venta, arrendamientos, prescripcion
2. **Seguro de Desalojo** - Recuperacion de inmuebles, filtracion inquilinos
3. **Tributacion Inmobiliaria** - Asesoria fiscal inmobiliaria
4. **Indecopi / Propiedad Intelectual** - Marcas, reclamos
5. **Derecho Empresarial** - Constitucion, gobierno societario
6. **Derecho de Sucesiones** - Herencias, testamentos
7. **Litigios Civiles y Prevencion** - Familia, propiedad, recuperacion capital
8. **Litigios Penales** - Delitos familia y patrimonio
9. **Inversiones Inmobiliarias** - Remates, flipping, cesiones

---

## Informacion de Contacto Actual

- **Telefono/WhatsApp:** +51 952 163 269
- **Email:** paredesifuentes@gmail.com
- **Ubicacion:** Trujillo, Peru
- **Redes:**
  - Facebook: facebook.com/profile.php?id=61573933954882
  - Instagram: @paredes.sifuentes
  - TikTok: @paredes.sifuentes

---

## Equipo

1. **Piero Paredes** - Socio fundador
2. **Natali Sifuentes** - Socio fundador
3. **Aaron Paredes** - Administrador de Sistemas
4. **Brayan Paredes** - Soporte de TI

---

## Layouts

- **LightLayout** (`layouts/light.jsx`) - Usado en Home. Logo claro → oscuro en scroll
- **MainLayout** (`layouts/main.jsx`) - Usado en paginas internas. Logo siempre oscuro

---

## Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| **Burdeos** | `#60202C` | Color principal. Botones, titulos, bordes, acentos |
| **Beige** | `#D4C4AD` | Secundario. Fondos suaves, texto secundario, decorativos |
| **Dorado** | `#B5844F` | Acento. Highlights, etiquetas, fechas, progress bars |
| **Crema** | `#F0ECE1` | Fondos claros, texto sobre fondos oscuros |

### Implementacion en Componentes (inline styles)

```jsx
// Texto claro sobre fondo oscuro
style={{ color: "#F0ECE1" }}

// Etiquetas/fechas destacadas
style={{ color: "#B5844F" }}

// Fondo de seccion
style={{ background: "#F0ECE1" }}
```

### Implementacion en CSS

**style.css** (paginas internas):
- `.btn-curve` background: `#60202C`
- `.section-head` colores: `#B5844F`, `#60202C`
- `.process .item` background: `#D4C4AD`
- `.blog-pg .date` background: `#B5844F`
- Footer background: `#60202C`

**style-light.css** (home):
- `.btn-bord` border/hover: `#60202C`, `#F0ECE1`
- `.caption` text: `#60202C`
- `.slider .setone` background: `#60202C`
- Navbar scroll: `#F0ECE1`

---

## Estilos

- `/public/assets/css/style.css` - Estilos principales (paginas internas)
- `/public/assets/css/style-light.css` - Estilos light (home)
- `src/styles/scss/` - SCSS fuente (compilado a CSS)

---

## Notas de Desarrollo

1. **Siempre ejecutar `npm run build` despues de cambios**
2. El proyecto usa el **Pages Router** de Next.js (no App Router)
3. Los servicios se manejan con rutas dinamicas `[name].jsx`
4. El boton de WhatsApp aparece despues de hacer scroll (150px)
5. Los componentes usan animaciones WOW.js y Splitting.js
6. El formulario de contacto apunta a `contact.php` (no implementado en Next)

---

## Historial de Cambios

### 2026-01-28
- Unificacion de numeros telefonicos a: **952 163 269**
  - Archivos modificados: `WhatsAppButton`, `Footer`, `Contact-info`
  - Se eliminaron referencias a 934 214 849 y 920 250 679
- WhatsAppButton: avatar cambiado a favicon.ico, mensaje "responde en minutos"
- **Nuevo componente `CallToAction`** - CTA reutilizable con variantes light/dark
  - Props: title, subtitle, buttonText, variant
  - Usa paleta de colores del proyecto
- **Navbar actualizado** - Boton WhatsApp con telefono visible en header
- **Home actualizado** - 2 CTAs intercalados entre secciones
- **Nuevo componente `WhyChooseUs`** - 6 diferenciadores con iconos pe-7s
  - Respuesta rapida, Atencion personalizada, Cobertura nacional
  - Especialistas en patrimonio, +350 casos, Consulta sin compromiso
- **Nuevo componente `InstagramFeed`** - Integra widget de Elfsight (plan gratis)
  - Widget ID: `daba3e81-5b11-46df-bcc2-7215403c8b9a`
  - Script: `https://elfsightcdn.com/platform.js`
  - Cuenta: @paredes.sifuentes
- **Hero mejorado** - Propuesta de valor clara + CTA de conversion
  - Slides con enfoque en especialidad (Derecho Inmobiliario)
  - 2 CTAs: "CONSULTA" (WhatsApp, color dorado) + "Ver servicios"
- **Pagina /nosotros refactorizada** - Enfocada en ventas
  - `AboutUs4` - Texto orientado al cliente, no al estudio
  - **Nuevo `TeamExpanded`** - Socios con biografia + equipo soporte pequeno
  - **Nuevo `Cobertura`** - 4 cards: Trujillo, Chimbote, Huarmey, Virtual
  - **Nuevo `AreasPractica`** - 6 areas con iconos + boton "Ver servicios"
  - Eliminados: `Services3`, `Skills2`, `Team2` (reemplazados)
- **TeamExpanded mejorado**
  - Fotos de socios: altura 400px, minHeight 580px para tarjetas iguales
  - `objectPosition: "center 20%"` para mostrar rostros correctamente
  - Equipo soporte en formato circular pequeno
- **AreasPractica mejorado**
  - Boton con estilos inline completos (no usar btn-curve por ancho fijo)
  - Hover: fondo burgundy + texto blanco
- **Numeros/estadisticas rediseñados** (AboutUs1 y AboutUs4)
  - Estilo elegante con separadores verticales (#D4C4AD)
  - Numeros grandes en playfont (#60202C)
  - Prefijo "+" en dorado (#B5844F)
  - Labels en mayusculas con letter-spacing
- **Hero slider aclarado**
  - `data-overlay-dark="4"` (antes era "6", 60% oscuro)

---

## Notas Tecnicas Importantes

### Iconos pe-7s (pe-icon-7-stroke)
Archivo: `/public/assets/css/pe-icon-7-stroke.css`

**Iconos validos usados:**
- `pe-7s-home` - Casa (Derecho Inmobiliario)
- `pe-7s-users` - Usuarios (Familia)
- `pe-7s-note2` - Nota (Sucesiones)
- `pe-7s-wallet` - Billetera (Empresarial)
- `pe-7s-hammer` - Martillo (Litigios)
- `pe-7s-light` - Foco (Propiedad Intelectual)
- `pe-7s-clock` - Reloj
- `pe-7s-map-marker` - Ubicacion
- `pe-7s-global` - Mundo
- `pe-7s-call`, `pe-7s-mail`, `pe-7s-phone`

**Iconos que NO existen:**
- `pe-7s-briefcase` - NO EXISTE (usar `pe-7s-wallet`)

### Clases CSS problemáticas

**`.btn-curve`** (style.css linea 1460):
- Tiene `width: 170px` FIJO - el texto largo se desborda
- El `span` interno tiene `position: absolute`
- Para botones con texto largo, usar estilos inline completos

**`.btn-lit`**:
- Hace el fondo blanco y texto oscuro
- En hover, texto se vuelve blanco - problematico en fondos claros

**Solucion para botones personalizados:**
```jsx
<a
  style={{
    display: "inline-block",
    padding: "15px 40px",
    border: "2px solid #60202C",
    color: "#60202C",
    fontSize: "14px",
    fontWeight: "500",
    letterSpacing: "1px",
    textTransform: "uppercase",
    transition: "all 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#60202C";
    e.currentTarget.style.color = "#fff";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.color = "#60202C";
  }}
>
  Texto del boton
</a>
```

### Overlay del Hero
Atributo `data-overlay-dark` en el slider:
- `"6"` = 60% oscuro (muy oscuro)
- `"4"` = 40% oscuro (actual, mas claro)
- `"3"` = 30% oscuro (aun mas claro)

### Posicionamiento de imagenes
Para fotos de personas donde se debe mostrar el rostro:
```jsx
style={{
  objectFit: "cover",
  objectPosition: "center 20%", // Muestra desde 20% del top
}}
```
- `"top"` = muy arriba, corta cabezas
- `"center"` = centrado, puede cortar caras
- `"center 20%"` = balance ideal para retratos

### Estructura de /nosotros (flujo de ventas)
1. **PageHeader** - Titulo
2. **AboutUs4** - Metricas + texto orientado al cliente
3. **TeamExpanded** - Confianza (socios con bio)
4. **Cobertura** - Presencia geografica (sin datos contacto)
5. **AreasPractica** - Mencion de servicios (sin detalles, esos van en /servicios)

### Principios de copywriting aplicados
- Texto orientado al CLIENTE, no al estudio
- "Cuando tienes un problema legal, necesitas mas que un abogado"
- Evitar: "Brindamos...", "Ofrecemos...", "Somos..."
- Preferir: "Necesitas...", "Obtienes...", "Te ayudamos a..."

### Separacion de contenido entre paginas
- **/nosotros**: Quien somos, equipo, cobertura geografica (sin detalles de contacto)
- **/servicios**: Detalles completos de cada servicio
- **/contacto**: Pagina de conversion completa con multiples CTAs

### 2026-01-29 - Rediseno pagina /contacto
Nueva estructura orientada a conversion (8 secciones):

1. **ContactHero** - Hero 60vh, padding-top 100px, 2 CTAs (WhatsApp pulsante + Llamar)
2. **ContactChannels** - 3 cards (WhatsApp destacado en burdeos)
3. **TrustIndicators** - Estadisticas + testimonios rotativos cada 5s
4. **SmartContactForm** - Proceso "que sigue" + formulario 4 campos
5. **TeamMini** - Solo fundadores con foto circular
6. **Cobertura** - 4 ubicaciones (reutilizado)
7. **CallToAction** - CTA urgencia "No dejes tu problema..."
8. **Mapa** - Seccion separada con fondo beige (transicion suave al footer)

Componentes nuevos:
- `src/components/ContactHero/index.jsx`
- `src/components/ContactChannels/index.jsx`
- `src/components/TrustIndicators/index.jsx`
- `src/components/SmartContactForm/index.jsx`
- `src/components/TeamMini/index.jsx`

CSS agregado en `style.css`:
- `@keyframes pulse` - Boton WhatsApp pulsante
- `@keyframes spin` - Spinner loading formulario
- `.cta-button` - Responsive: horizontal desktop, vertical mobile

**Formspree:** ID `mzdgrnza`

### 2026-02-06 - Rediseno paginas /servicios
Nueva estructura visual para lista y detalle de servicios:

**Pagina `/servicios` (lista):**
1. **PageHeader** - Cabecera estandar
2. **ServicesHero** - Subtitulo dorado + titulo burdeos + estadisticas (9 areas, +350 casos)
3. **ServicesGrid** - Grid 3 columnas de 9 servicios (cards con hover dorado)
4. **TrustIndicators** - Reutilizado de /contacto (blanco)
5. **CallToAction** - CTA (burdeos)
6. **Cobertura** - Transicion al footer (crema)

**Pagina `/servicios/[slug]` (detalle):**
1. **ServiceHero** - Hero 50vh con imagen, overlay burdeos, categoria badge
2. **ServiceIntro** - 2 columnas: descripcion + card beneficios (checkmarks)
3. **SubservicesList** - Cards expandibles con codigo badge dorado
4. **CallToAction** - CTA del servicio (burdeos)
5. **ServiceFAQ** - Accordion preguntas frecuentes (blanco)
6. **RelatedServices** - 3 servicios relacionados por categoria (crema)
7. **Cobertura** - Transicion al footer (crema)

Componentes nuevos:
- `src/components/ServicesHero/index.jsx`
- `src/components/ServicesGrid/index.jsx`
- `src/components/ServiceHero/index.jsx`
- `src/components/ServiceIntro/index.jsx`
- `src/components/SubservicesList/index.jsx`
- `src/components/ServiceFAQ/index.jsx`
- `src/components/RelatedServices/index.jsx`

**Flujo de colores (respeta transicion al footer):**
- /servicios: crema → crema → blanco → burdeos → crema (Cobertura) → footer
- /servicios/[slug]: imagen → blanco → crema → burdeos → blanco → crema → crema (Cobertura) → footer

---

## Preferencias del Cliente (IMPORTANTE)

### Lo que NO hacer:
- **NUNCA decir "consulta gratuita"** - El cliente no quiere ofrecer eso
- **NO cambiar el color del Footer** - Debe mantenerse burdeos (#60202C)
- **NO usar `<style jsx>`** - ESLint lo rechaza, usar CSS externo

### Preferencias de diseño:
- **Patron de colores en secciones consecutivas:** Alternar beige-burdeos para separacion visual
- **Heroes con padding-top** para evitar que el navbar los tape (minimo 100px)
- **Botones en mobile:** Deben ser verticales (flex-direction: column)
- **Botones grandes:** Padding generoso (18px 50px), texto visible sin desborde

### Orden de secciones pre-footer:
Cuando hay CTA + Mapa antes del footer, el orden correcto es:
1. Contenido (beige)
2. CTA (burdeos)
3. Mapa (beige) ← Crea transicion suave
4. Footer (burdeos)

Esto evita que dos secciones burdeos queden juntas (CTA + Footer)

---

## Paginas de Referencia (Inspiracion)

Sitios web de estudios juridicos usados como referencia para el diseño:

### 1. Grecia Sanchez Medina
**URL:** https://greciasanchezmedina.com/
- **Estilo:** Profesional, limpio, WordPress + Elementor
- **Contacto:** Multiples CTAs "Haz tu consulta", telefono/email visibles
- **Conversion:** Estadisticas impactantes (+10,000 casos, 98% exito), testimonios
- **Destacable:** Schema.org FAQ, video testimonios, Google Analytics

### 2. Veritas Hub Legal
**URL:** https://veritashlegal.com/
- **Estilo:** Moderno, digital-first, minimalista
- **Contacto:** Header con telefono/email/horario, formulario, Calendly, WhatsApp flotante
- **Conversion:** Proceso de 3 pasos, "Agenda una llamada", testimonios con nombre
- **Destacable:** Enfoque 100% digital, integracion Calendly, seccion "Por que contratar"

### 3. Ponce & Ponce Abogados
**URL:** https://ponceyponceec.com/
- **Estilo:** Corporativo, monocromatico (blanco/gris), WordPress + Elementor
- **Contacto:** Boton header, footer con direccion/telefono/email
- **Conversion:** "Por que elegirnos" (6 puntos), testimonios con logos empresas
- **Destacable:** Enfasis en proteccion de datos, alcance internacional

### 4. Video de Marketing Juridico (Loom)
**URL:** https://www.loom.com/share/fcd92df72a1f4038b22bd5f9cec4f91a
- **Contenido:** Casos de exito de campanas Google/Meta Ads para abogados
- **Dato clave:** Abogados generando 90-450 conversiones mensuales
- **Aprendizaje:** Importancia de multiples puntos de contacto y CTAs claros

### Patrones comunes identificados:
1. **Multiples CTAs** - No un solo boton, sino varios puntos de conversion
2. **Telefono/WhatsApp visible** en header siempre
3. **Formulario simple** - Pocos campos (nombre, email, telefono, mensaje)
4. **Estadisticas de confianza** - Casos resueltos, anos experiencia
5. **Proceso claro** - 3-4 pasos de como trabajar con ellos
6. **Testimonios** - Con nombres reales y/o logos de empresas
7. **Horario de atencion** visible
8. **Integracion Calendly** - Agendar llamadas directamente

---

## Investigacion UX (Estadisticas 2025-2026)

Datos utiles para decisiones de diseno:

- **78%** de consumidores legales investigan antes de contactar
- **65%** eligen abogado por resenas online
- **96%** empiezan con busqueda en Google
- Paginas que cargan **>3 segundos** tienen alto bounce rate
- La opinion se forma en los **primeros segundos**

### Elementos que reducen bounce:
- Micro-interacciones (hover, animaciones sutiles)
- Social proof (testimonios con nombres reales)
- CTAs claros y multiples
- Formularios simplificados (max 4 campos)
- Progressive disclosure (informacion incremental)
- WhatsApp prominente como canal principal

### Lo que hace una pagina ABURRIDA (evitar):
- Solo un formulario generico
- Mucho texto sin estructura visual
- Sin testimonios ni prueba social
- Sin personalidad (fotos genericas)
- CTAs escondidos o debiles
- Informacion de contacto dificil de encontrar
