// LeadWidget.tsx
// Active Island — Premium floating CTA → WhatsApp
// Hydration: client:load

export default function LeadWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/521XXXXXXXXXX?text=Hola,%20me%20interesa%20agendar%20un%20recorrido%20para%20conocer%20el%20modelo%20LIVET%20V.2"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-white text-black rounded-full px-6 py-3 font-medium shadow-2xl hover:scale-105 transition-transform duration-200"
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
