// leads.ts — helpers de captura de leads compartidos entre componentes .astro (server) e islas React.
// Toda la configuración vive en src/config/site.config.json.
import siteConfig from '../config/site.config.json';

export const config = siteConfig;

/** true si hay número de WhatsApp configurado */
export const hasWhatsApp = Boolean(siteConfig.whatsapp.number);

/** URL de WhatsApp con mensaje prellenado, o ancla al formulario si no hay número aún. */
export function waHref(message: string): string {
  if (!hasWhatsApp) return '#contacto';
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/** Props comunes para anchors de WhatsApp: abre en pestaña nueva solo si es enlace externo. */
export function waTarget(): { target?: string; rel?: string } {
  return hasWhatsApp ? { target: '_blank', rel: 'noopener noreferrer' } : {};
}
