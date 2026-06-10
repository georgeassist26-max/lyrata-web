# Memoria del Proyecto: Lyrata Edén Urbano

## Objetivo Principal
- Landing Page de ultra-alta conversión para venta de casas residenciales nuevas en León, Guanajuato
- Stack: Astro + Tailwind CSS v4 + React | Arquitectura Híbrida Jamstack Edge
- Meta: carga < 1s móvil | 80% HTML estático (Static Ocean) | 20% Islands React

## Estado Actual
- [x] Scaffold Astro + Tailwind v4 + React
- [x] `ARCHITECTURE.md` — spec de arquitectura
- [x] `propertyData.json` — fuente única de verdad (modelo livet-v2 completo)
- [x] `BaseLayout.astro` — HTML5, SEO meta, JSON-LD SingleFamilyResidence, dark theme
- [x] `Hero.astro` — CSS Sticky Scrollytelling, spotlight mask, top fade sin muro
- [x] `BentoSpecs.astro` — Bento Grid 4 cols, Planta Baja + Planta Alta + Recámara Principal (row-span-2) + Seguridad full-width
- [x] `NatureSection.astro` — split-screen texto + imagen Unsplash
- [x] `SecuritySection.astro` — bg-zinc-950, 3 cards con íconos SVG
- [x] `AmenitiesIsland.tsx` — tabs interactivos con fade, `client:visible`
- [x] `InteriorsSection.astro` — 2 bloques alternados imagen/texto
- [x] `LeadWidget.tsx` — botón flotante premium WhatsApp, `client:load`
- [x] `index.astro` — página completa integrada
- [x] `ModelSelector.astro` — selector de modelos (tabs <a>, cero JS, sticky bajo Hero, blur). Activo: LIVET V2
- [x] Top bar Synexia (logo + texto) centrado en `BaseLayout.astro`
- [x] **Optimización SEO/AEO/CWV (sesión 2026-06-07 21:xx):**
  - LCP: hero PNG 1.75MB → AVIF 42KB / WebP 48KB vía `<picture>` + LQIP blur de fondo + `fetchpriority=high` + `<link rel=preload>`. Bundle total 5.1MB → 536KB (−90%).
  - Eliminados assets muertos: `ss-1.png`, `ss-web.png` (4.4MB). Fuentes de regeneración movidas a `src/assets-source/` (fuera de public/).
  - `<head>` reforzado: canonical, robots(max-image-preview:large), theme-color, favicons, Open Graph + Twitter card (`og-livet-v2.jpg` 1200x630), preload LCP.
  - JSON-LD enriquecido: SingleFamilyResidence + url/image/numberOfBedrooms/seller(RealEstateAgent Synexia).
  - **AEO:** `FaqSection.astro` (acordeón nativo `<details>`, cero JS) + `FAQPage` JSON-LD en BaseLayout. 4 Q&A. Contenido visible = respaldo del schema.
  - CLS: width/height + loading=lazy + decoding=async en TODAS las imágenes (Nature, Interiors, Amenities, logo).
  - `robots.txt` (welcome GPTBot/PerplexityBot/Google-Extended/ClaudeBot) + `@astrojs/sitemap` (sitemap-index.xml). `site` configurado en astro.config.
- [x] Sistema de memoria jerárquica implementado
- [x] `GalleryIsland.tsx` — galería interactiva real con imágenes propias -> No requerida tras integrar imágenes nativas por secciones
- [x] Reemplazar imágenes Unsplash con reales y optimizadas (WebP/AVIF) en Nature, Amenities e Interiors (sesión 2026-06-09)
- [ ] Reemplazar número WhatsApp en `LeadWidget.tsx` (`521XXXXXXXXXX`)
- [ ] Crear páginas de los otros modelos: `/samara-v2`, `/deus-v2`, `/zentia-v1`, `/livet-roof-v2` (hoy marcados `available:false` → placeholder "Próximamente", sin enlace para evitar 404). Al publicarlos: poner `available:true` en `modelLineup` y pasar `activeId` correcto al `<ModelSelector>` de cada página.
- [ ] Sección CTA / formulario de contacto
- [ ] Open Graph tags, sitemap, robots.txt
- [ ] Deploy Edge (Cloudflare o Vercel)
- [ ] Audit Core Web Vitals < 1s móvil

## Notas de Arquitectura y Variables
- **Ruta del proyecto:** `/Users/alfred/.openclaw/workspace/lyrata-web/`
- **Modelo activo:** `livet-v2` — LIVET V.2 | precio: `$3,370,000 MXN` | raw integer: `3370000`
- **Hero image activa:** `public/3-houses-front.png` | respaldo: `public/3-houses-profile.png`
- **Spotlight horizontal:** `transparent 26% → 74%` (ventana central del 48%)
- **Top fade:** `transparent 0–45%` → ease suave hasta `rgba(0,0,0,0.80) 100%`
- **Body:** `bg-black text-slate-200 font-sans antialiased`
- **Cards Bento:** `bg-zinc-900 border border-white/10 rounded-3xl p-8`
- **Accent color:** `text-emerald-400` | Overlines: `text-xs uppercase tracking-widest text-slate-500`
- **Data access pattern:** `propertyData.json` → `development{}` + `models[]` → `.find(m => m.id === 'livet-v2')`
- **BentoSpecs layout:** grid 4 cols | Recámara Principal usa `md:row-span-2` | stat highlight = "2 personas simultáneas"
- **Orden de secciones en index.astro:** Hero → BentoSpecs → NatureSection → SecuritySection → AmenitiesIsland → InteriorsSection → LeadWidget
- **WhatsApp URL:** `https://wa.me/521XXXXXXXXXX?text=Hola,...` — número pendiente de actualizar
- **Lineup de modelos (fuente única):** `propertyData.modelLineup[]` → `{id, label (MAYÚSCULAS), href, available}`. Orden: LIVET V2 (activo) → SAMARA V2 → DEUS V2 → ZENTIA V1 → LIVET CON ROOF V2
- **ModelSelector:** modelo activo = pill blanco `bg-white text-black` + `aria-current="page"`; disponibles = `<a>` borde sutil hover; no disponibles = `<span aria-disabled>` gris, sin enlace. Sticky `top-0 z-40 backdrop-blur-md bg-black/80`. Móvil: scroll horizontal `scrollbar-none`. Regla de oro respetada: cero hidratación React.
- **Logo Synexia:** `public/synexia-logo-transparent.png` (fondo negro removido vía sharp + supersampling, color crema uniforme). Header centrado en BaseLayout.
- **Dominio canónico (placeholder):** `https://synexia.mx` en `astro.config.mjs` (`site`) y `BaseLayout` (`PUBLIC_SITE_URL` env override). ⚠️ ACTUALIZAR cuando el dominio sea definitivo — afecta canonical, OG urls, sitemap y robots.txt.
- **Regeneración de imágenes hero:** fuentes en `src/assets-source/*.png`. Para regenerar AVIF/WebP/OG/LQIP usar `sharp` (ver historial sesión 2026-06-07). LQIP guardado en `src/content/hero-lqip.txt` (importado `?raw` en Hero.astro).
- **Herramienta screenshots:** `playwright-core` NO es dependencia del proyecto. Instalar con `npm i --no-save playwright-core` y usar `executablePath` del Chrome del sistema; borrar tras usar. Chrome headless directo (`--screenshot`) NO captura página completa (solo viewport).
