# DEPLOY.md — Checklist de salida a producción

El sitio compila 100% estático (`dist/`). Cualquier CDN sirve; recomendado Cloudflare Pages (gratis, edge, dominio custom fácil).

## Go-live checklist (en orden)

1. **WhatsApp** — `src/config/site.config.json` → `whatsapp.number` (formato `521XXXXXXXXXX`, sin `+`).
   Mientras esté vacío, todos los CTAs apuntan al formulario `#contacto` (no hay enlaces rotos).
2. **Webhook de leads** (opcional pero recomendado) — `leadWebhook`: URL que recibe POST JSON
   `{type:'lead'|'event', ...}`. Es el punto de integración con OpenClaw / IA de WhatsApp.
3. **Analytics** — en `analytics`: pega solo los IDs reales que tengas (GA4 `G-…`, Meta Pixel numérico).
   Los vacíos NO cargan script (cero peso, cero errores). Para campañas Meta el pixel es indispensable.
4. **Dominio** — `siteUrl` en site.config.json (afecta canonical, OG, sitemap, robots).
   Override sin editar código: variable de entorno `PUBLIC_SITE_URL` al hacer build.
5. **Build**: `npm run build` → verifica `dist/`.

## Cloudflare Pages (CLI)

```sh
npm run build
npx wrangler pages deploy dist --project-name=lyrata-web
# primera vez: npx wrangler login
```

Dominio custom: Pages → Custom domains → agregar (DNS en Cloudflare recomendado).

## Alternativa: Vercel

```sh
npx vercel deploy dist --prod
```

## Después del deploy

- Probar en móvil real: CTA hero → WhatsApp abre con mensaje y línea `Ref: lyrata|…`.
- Enviar un lead de prueba por el formulario y confirmar que llega (webhook o WhatsApp).
- Validar rich results: https://search.google.com/test/rich-results
- Dar de alta el dominio en Meta Business (verificación) antes de campañas.
