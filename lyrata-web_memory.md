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
- [x] `BentoSpecs.astro` — Bento Grid 3 cols / 4 cards, dark mode, SVG checkmarks
- [x] `index.astro` — Hero + BentoSpecs integrados
- [x] Sistema de memoria jerárquica implementado
- [ ] `GalleryIsland.tsx` — galería interactiva `client:visible`
- [ ] `LeadWidget.tsx` — botón flotante WhatsApp API `client:idle`
- [ ] Sección CTA / contacto
- [ ] Open Graph, sitemap, robots.txt
- [ ] Deploy Edge (Cloudflare o Vercel)
- [ ] Audit Core Web Vitals

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
