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
- [x] Sistema de memoria jerárquica implementado
- [x] Git commit final sesión Sun 2026-06-07
- [ ] Reemplazar número WhatsApp en `LeadWidget.tsx` (`521XXXXXXXXXX`)
- [ ] `GalleryIsland.tsx` — galería interactiva real con imágenes propias
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
