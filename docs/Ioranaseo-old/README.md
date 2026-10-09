# Ioranaseo-old — Snapshot Legacy de Iorana SEO

**Este NO es la web activa de Iorana SEO.**

Este es un **archivo histórico** y **base reutilizable** de la web antigua de Iorana SEO, separado del proyecto actual IORANA SEO 2.0.

---

## 📦 ¿Qué es esto?

**Ioranaseo-old/** es un snapshot **completamente autónomo** de la versión anterior de Iorana SEO, congelado en el commit:

```
b26f8ab3 - chore: snapshot before isolating legacy IoranaSEO site
```

**Fecha del snapshot:** 2026-09-15

**Propósito:**
1. ✅ **ARCHIVO HISTÓRICO** — Conservar la web antigua para referencia
2. ✅ **BASE REUTILIZABLE** — Poder adaptar este diseño/código a otro proyecto en el futuro
3. ✅ **INDEPENDENCIA** — Funciona completamente sin dependencias del proyecto activo

---

## 📋 Estructura

```
Ioranaseo-old/
├── src/
│   ├── app/
│   │   ├── (defaultLayout)/           [Router group de la web antigua]
│   │   │   ├── page.tsx               [HOME antiguo (/)]
│   │   │   ├── about/, contacto/, legal/, planes/, servicios/
│   │   │   └── layout.tsx
│   │   ├── Components/                [Componentes legacy reutilizables]
│   │   │   ├── Header/, Footer/, HeroBanner/
│   │   │   ├── Pricing/, Services/, Blog/
│   │   │   └── [~35 carpetas más]
│   │   ├── Data/                      [Datos en JSON]
│   │   │   ├── faq.json, services*.json
│   │   │   └── testimonials.json
│   │   ├── assets/                    [CSS legacy]
│   │   │   └── main.css
│   │   ├── styles/                    [Design tokens]
│   │   ├── components/                [Componentes globales]
│   │   ├── lib/                       [Utilidades compartidas]
│   │   ├── globals.css                [CSS global con Bootstrap + Tailwind]
│   │   ├── layout.tsx                 [Layout raíz]
│   │   ├── error.tsx, not-found.tsx
│   │   └── favicon.ico
│   ├── components/                    [Componentes utility]
│   └── lib/                           [Funciones helper]
├── public/
│   └── assets/                        [Todas las imágenes legacy]
│       ├── img/
│       │   ├── about/, bg/, blog/, case/
│       │   ├── hero/, icons/, logo/
│       │   ├── service/, servicios/, shapes/
│       │   ├── team/, testimonial/, work/
│       │   └── [más]
├── package.json                       [Dependencias del proyecto]
├── pnpm-lock.yaml                     [Lockfile pnpm]
├── tsconfig.json                      [Configuración TypeScript]
├── next.config.mjs                    [Configuración Next.js]
└── README.md                          [Este archivo]
```

---

## 🚀 Cómo Usar Este Proyecto

### 1. Instalación

```bash
cd Ioranaseo-old
pnpm install
```

**Nota:** Si usas npm en lugar de pnpm:
```bash
npm install
# Pero es preferible pnpm para mantener compatibilidad
```

### 2. Desarrollo Local

```bash
pnpm run dev
```

Abre http://localhost:3005 en tu navegador.

**Puerto:** El proyecto está configurado para puerto 3005 (ver package.json)

### 3. Build para Producción

```bash
pnpm run build
pnpm run start
```

---

## 🔧 Stack Tecnológico

- **Framework:** Next.js 15.1.8
- **React:** 19.0.0
- **TypeScript:** 6.0.3
- **Styling:**
  - Bootstrap 5.3.3 (principal)
  - Tailwind CSS 4.3.1 (preparado pero no principal)
  - CSS personalizado (main.css, iorana-design-tokens.css)
- **Componentes:**
  - React Bootstrap
  - Lucide React (iconografía)
  - React Slick (carruseles)
- **Utilidades:**
  - html-react-parser
  - Next.js Image Optimization

---

## 📑 Páginas Principales (URLs Internas)

Cuando ejecutes este proyecto:

| URL | Archivo | Descripción |
|-----|---------|-------------|
| `/` | (defaultLayout)/page.tsx | HOME |
| `/about` | (defaultLayout)/about/page.tsx | Sobre Nosotros |
| `/contacto` | (defaultLayout)/contacto/page.tsx | Formulario de Contacto |
| `/planes` | (defaultLayout)/planes/page.tsx | Planes de Servicios |
| `/servicios` | (defaultLayout)/servicios/page.tsx | Catálogo de Servicios |
| `/legal` | (defaultLayout)/legal/page.tsx | Términos Legales |
| `/legal/privacidad` | legal/privacidad/page.tsx | Política de Privacidad |
| `/legal/cookies` | legal/cookies/page.tsx | Política de Cookies |

---

## 🎨 Componentes Reutilizables

Estos componentes pueden ser reutilizados en otro proyecto:

### Componentes Principales

- `src/app/Components/Header/` — Encabezado legacy
- `src/app/Components/Footer/` — Pie de página legacy
- `src/app/Components/HeroBanner/` — Sección hero
- `src/app/Components/Pricing/` — Tabla de precios
- `src/app/Components/Services/` — Catálogo de servicios
- `src/app/Components/Testimonial/` — Testimonios
- `src/app/Components/Team/` — Equipo
- `src/app/Components/Blog/` — Blog

### Cómo Reutilizar

1. **Copiar componentes específicos** a tu nuevo proyecto
2. **Adaptar CSS** según tu nuevo diseño token
3. **Reemplazar datos** en `src/app/Data/` con tus propios datos
4. **Mantener estructura** de component props para compatibilidad

---

## 🎨 Design Tokens

El proyecto usa CSS variables para mantener consistencia:

**Ubicación:** `src/app/styles/iorana-design-tokens.css`

Ejemplos:
```css
--io-bg: #ffffff
--io-action: #FF8C00
--io-text-primary: #1a1a1a
--io-text-secondary: #666
```

Para adaptar a otro proyecto, **modifica estos tokens** en lugar de hardcodear colores.

---

## 📊 Datos

Todos los datos de contenido estático están en JSON:

```
src/app/Data/
├── faq.json
├── services*.json
├── testimonials.json
├── blog*.json
└── [más]
```

**Para reutilizar:** Reemplaza estos archivos con tus propios datos, manteniendo la estructura.

---

## 🖼️ Assets

Todas las imágenes están en:
```
public/assets/img/
```

**Carpetas principales:**
- `about/` — Imágenes de sección About
- `bg/` — Fondos
- `blog/` — Imágenes de artículos
- `hero/` — Imágenes hero
- `logo/` — Logos
- `servicios/` — Iconos de servicios
- `shapes/` — Formas SVG
- `testimonial/` — Fotos de testimonios

**Para reutilizar:** Reemplaza estas imágenes con las tuyas manteniendo la misma estructura de carpetas.

---

## 🛠️ Configuración

### next.config.mjs
- Output: standalone
- Optimización de imágenes habilitada
- Headers de SEO y seguridad
- Rewrites y redirects

### tsconfig.json
- Path alias: `@/*` → `src/*`
- Strict mode habilitado

### package.json
- Scripts: `dev`, `build`, `start`, `lint`
- Puerto: 3005

---

## 📝 Lint y Format

```bash
# Ejecutar ESLint
pnpm run lint
```

**Nota:** Las validaciones de tipo y linting están configuradas para ignorar errores durante build (ver next.config.mjs).

---

## 🔐 Variables de Entorno

Si necesitas variables de entorno:

1. **Crear `.env.local`** en la raíz (NO versionado)
2. Ejemplo:
   ```env
   NEXT_PUBLIC_API_URL=https://api.example.com
   ```

**Nunca commits:**
- `.env.local`
- `.env.production`
- Credenciales o API keys

---

## 🚨 Importante: NO Incluido

Este snapshot **NO incluye:**
- `.git/` — No es un repositorio git (copiar `Ioranaseo-old/` y hacer `git init` si necesitas)
- `.next/` — Cache de compilación (se regenera con `pnpm run build`)
- `node_modules/` — Dependencias (instalar con `pnpm install`)
- `.env.local` — Variables locales
- `pnpm-lock.yaml` usa pnpm, pero funciona también con npm

---

## 📈 Roadmap de Reutilización

Si vas a adaptar este diseño a otro proyecto:

### Paso 1: Setup
```bash
cp -r Ioranaseo-old/ MiNuevoProyecto/
cd MiNuevoProyecto/
rm -rf .git  # Comenzar nuevo git
git init
pnpm install
```

### Paso 2: Datos
- Reemplaza `src/app/Data/*.json` con tus datos
- Actualiza metadatos en `src/app/layout.tsx`

### Paso 3: Assets
- Reemplaza `public/assets/` con tus imágenes
- Mantén la misma estructura de carpetas

### Paso 4: Diseño
- Actualiza colores en `src/app/styles/iorana-design-tokens.css`
- Modifica componentes en `src/app/Components/` según necesites

### Paso 5: Deploy
```bash
pnpm run build
# Subir archivo .next/ y public/ a tu servidor
```

---

## 🐛 Troubleshooting

### Build falla con "HTML should not be imported"
**Problema:** Archivo error.tsx o similar importa componentes incorrectamente  
**Solución:** Revisar que los componentes raíz usen `'use client'`

### Imágenes no cargan
**Problema:** Rutas relativas rotas después de mover  
**Solución:** Verificar que `public/assets/` está en lugar correcto

### Estilos no se aplican
**Problema:** Bootstrap o Tailwind no importados  
**Solución:** Verificar `src/app/globals.css` incluye ambas librerías

---

## 📞 Contacto y Créditos

**Proyecto original:** Iorana SEO (https://iorana.dev)  
**Snapshot date:** 2026-09-15  
**Base commit:** b26f8ab3

**Nota:** Este es un archivo histórico. Para cambios o mantenimiento futuro, trabajar independientemente.

---

## 📄 Licencia

Este código es propiedad de **Iorana**. Uso permitido únicamente con autorización.

Para reutilizar en nuevos proyectos, contacta con el equipo.

---

## ✅ Checklist de Funcionalidad

Cuando ejecutes por primera vez:

- [ ] `pnpm install` sin errores
- [ ] `pnpm run build` completado exitosamente
- [ ] `pnpm run dev` inicia servidor en puerto 3005
- [ ] Página principal (`/`) carga sin errores
- [ ] Navegación funciona
- [ ] Imágenes cargan correctamente
- [ ] Formularios interactivos funcionan
- [ ] Estilos CSS se aplican

---

**Última actualización:** 2026-09-15  
**Mantenedor:** Snapshot automatizado  
**Status:** ARCHIVO — No se espera mantenimiento futuro sin instrucción explícita
