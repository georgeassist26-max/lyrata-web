// LeadWidget.tsx
// Active Island — Premium floating CTA → WhatsApp
// Hydration: client:load

export default function LeadWidget() {
  const whatsappUrl = "https://wa.me/521XXXXXXXXXX?text=Hola,%20me%20interesa%20agendar%20un%20recorrido%20para%20conocer%20el%20modelo%20LIVET%20V.2";

  const handleWhatsAppClick = (actionName: string) => {
    // Trigger our unified analytics event handler defined globally in BaseLayout
    if (typeof (window as any).trackConversionLead === 'function') {
      (window as any).trackConversionLead(actionName);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3.5 select-none pointer-events-none">
      
      {/* Botón Call to Action de Whatsapp Directo */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleWhatsAppClick("WhatsApp Floating Widget Click")}
        className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 hover:rotate-12 transition-transform duration-200"
        title="Enviar WhatsApp"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          className="w-6 h-6 shrink-0 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 11.966.01c3.182.001 6.176 1.24 8.423 3.492 2.247 2.253 3.483 5.244 3.48 8.43-.005 6.62-5.34 11.956-11.91 11.956-2.005-.001-3.973-.507-5.726-1.472L0 24zm6.59-4.846c1.6.95 3.178 1.455 4.773 1.456 5.385 0 9.766-4.386 9.77-9.774 0-2.61-1.018-5.064-2.868-6.917C16.32 2.067 13.87 1.045 11.26 1.045c-5.39 0-9.774 4.387-9.778 9.777-.001 1.7.45 3.36 1.3 4.801l-.988 3.605 3.743-.981l-.09.052l-.12-.047zm11.367-7.854c-.1-.133-.266-.213-.53-.347-.267-.133-1.58-.78-1.824-.877-.247-.09-.427-.133-.61.134-.183.266-.71.877-.87 1.066-.16.183-.32.21-.58.077-.26-.133-1.12-.413-2.133-1.312-.787-.704-1.32-1.57-1.474-1.836-.15-.26-.01-.4-.145-.533-.11-.122-.26-.307-.4-.453-.13-.146-.18-.244-.26-.414-.09-.16-.04-.307.02-.44.06-.134.61-.71.91-.97.09-.08.18-.17.24-.26.09-.16.12-.27.18-.46c.06-.18.03-.346-.015-.48c-.045-.13-.43-1.026-.59-1.424-.15-.386-.3-.34-.4-.34l-.36-.01c-.13 0-.34.053-.52.24c-.18.18-.7.68-.7 1.66s.5 1.93.57 2.03c.07.1.98 1.5 2.37 2.1c.33.14.59.23.79.29c.33.1.63.09.87.05.27-.04.81-.33 1-.65c.2-.32.2-.6.14-.65s-.24-.1-.5-.24z" />
        </svg>
      </a>

      {/* Botón Agendar tu Recorrido */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleWhatsAppClick("WhatsApp Calendar Agenda Click")}
        className="pointer-events-auto flex items-center gap-2 bg-white text-black rounded-full px-6 py-3 font-medium shadow-2xl hover:scale-105 transition-transform duration-200"
      >
        {/* Calendar icon */}
        <svg
          className="w-4 h-4 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
          />
        </svg>
        Agenda tu recorrido
      </a>

    </div>
  );
}
