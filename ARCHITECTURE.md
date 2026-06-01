# ARCHITECTURE.md — Lyrata Edén Urbano

## Visión General

Landing Page de ultra-alta conversión para venta de casas nuevas residenciales.
Arquitectura Híbrida Jamstack basada en el Edge: **Astro + Tailwind CSS + React**.

---

## Dos Pilares Técnicos

### 1. GEO & SEO Técnico — El Océano Estático (80%)
- Carga < 1 segundo en móvil para maximizar Quality Score en campañas publicitarias.
- HTML puro renderizado en servidor mediante componentes `.astro`.
- JSON-LD expuesto directamente en el markup para rastreadores de IA (ChatGPT, Perplexity, etc.).

### 2. Islands Architecture — Las Islas Activas (20%)
- Componentes React (`.tsx`) **exclusivamente** para micro-interacciones que requieren estado en cliente.
- Galería de imágenes interactiva.
- Widget flotante de captura de leads → API de WhatsApp.
- Todo el contenido y especificaciones de la casa centralizado en `propertyData.json` como **fuente única de verdad**.

---

## Estructura de Componentes

```
src/
├── layouts/
│   └── BaseLayout.astro          # Tags globales (<head>, meta, Open Graph) + Schema JSON-LD (GEO)
│
├── components/
│   ├── static/                   # Océano Estático — HTML puro, cero JS en cliente
│   │   ├── Hero.astro            # Sección principal con headline, subheadline y CTA primario
│   │   └── BentoSpecs.astro      # Grid de especificaciones técnicas de la propiedad
│   │
│   └── islands/                  # Islas Activas — componentes React con estado en cliente
│       ├── GalleryIsland.tsx     # Galería de imágenes interactiva (lightbox, carrusel)
│       └── LeadWidget.tsx        # Botón flotante / widget de captura de leads → WhatsApp API
│
└── content/
    └── propertyData.json         # Fuente única de verdad: specs, precios, imágenes, copy
```

---

## Notas de Implementación

| Capa | Tecnología | Renderizado | Hidratación |
|---|---|---|---|
| Layout global | `.astro` | SSG/Edge | Ninguna |
| Componentes estáticos | `.astro` | SSG/Edge | Ninguna |
| Islas interactivas | `.tsx` (React) | SSG + client hydration | `client:visible` / `client:idle` |
| Datos | `propertyData.json` | Build-time import | N/A |

> **Regla de oro:** Si un componente no necesita estado en el cliente, va en `static/` como `.astro`. Si necesita estado, va en `islands/` como `.tsx` y usa la directiva de hidratación más conservadora posible.
