// LeadForm.tsx
// Active Island — Formulario de captura de leads con triple ruta de entrega:
//   1) leadWebhook configurado → POST JSON (pipeline propio / OpenClaw)
//   2) sin webhook pero con WhatsApp → abre chat con los datos prellenados
//   3) sin ninguno → mailto al correo de respaldo (el lead nunca se pierde)
// Hydration: client:visible
import { useState } from 'react';
import siteConfig from '../../config/site.config.json';

type Status = 'idle' | 'sending' | 'done' | 'mailto' | 'error';

const BUY_MODES = [
  'Crédito bancario',
  'INFONAVIT / Cofinavit',
  'Recursos propios (contado)',
  'Aún no lo sé',
];

function getAttribution(): Record<string, unknown> {
  const fn = (window as any).getLeadAttribution;
  return typeof fn === 'function' ? fn() ?? {} : {};
}

export default function LeadForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [buyMode, setBuyMode] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [phoneError, setPhoneError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // bot

    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setPhoneError(true);
      return;
    }
    setPhoneError(false);
    setStatus('sending');

    const lead = {
      type: 'lead',
      site: siteConfig.siteId,
      development: siteConfig.siteName,
      model: siteConfig.activeModelId,
      name: name.trim(),
      phone: cleanPhone,
      buyMode: buyMode || 'No especificado',
      page: window.location.pathname,
      timestamp: new Date().toISOString(),
      attribution: getAttribution(),
    };

    if (typeof (window as any).trackConversionLead === 'function') {
      (window as any).trackConversionLead('Lead Form Submit', { buyMode: lead.buyMode });
    }

    // Ruta 1: webhook propio
    if (siteConfig.leadWebhook) {
      try {
        const res = await fetch(siteConfig.leadWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(lead),
        });
        if (res.ok) {
          setStatus('done');
          return;
        }
      } catch {
        // cae a la siguiente ruta
      }
    }

    // Ruta 2: WhatsApp con datos prellenados
    if (siteConfig.whatsapp.number) {
      const attr = lead.attribution as any;
      const source = attr?.last?.utm_source || attr?.utm_source || 'directo';
      const msg =
        `Hola, soy ${lead.name}. Me interesa el modelo LIVET V.2 de ${siteConfig.siteName}. ` +
        `Forma de compra: ${lead.buyMode}. Mi teléfono: ${lead.phone}.` +
        `\n\nRef: ${siteConfig.siteId}|${source}|form`;
      window.open(
        `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(msg)}`,
        '_blank',
        'noopener'
      );
      setStatus('done');
      return;
    }

    // Ruta 3: mailto de respaldo. NO afirmamos "recibimos tus datos" — la entrega depende de
    // que el visitante tenga cliente de correo Y pulse "enviar". Estado honesto e intermedio.
    if (siteConfig.fallbackEmail) {
      const subject = `Nuevo lead ${siteConfig.siteName} — ${lead.name}`;
      const body =
        `Nombre: ${lead.name}\nTeléfono: ${lead.phone}\nForma de compra: ${lead.buyMode}\n` +
        `Modelo: ${lead.model}\nAtribución: ${JSON.stringify(lead.attribution)}\nFecha: ${lead.timestamp}`;
      window.location.href = `mailto:${siteConfig.fallbackEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus('mailto');
      return;
    }

    setStatus('error');
  };

  const hasWhatsApp = Boolean(siteConfig.whatsapp.number);

  if (status === 'done') {
    return (
      <div className="flex flex-col items-center text-center gap-3 py-10">
        <div className="w-14 h-14 rounded-full bg-emerald-400/15 border border-emerald-400/40 flex items-center justify-center">
          <svg className="w-7 h-7 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <p className="text-white text-xl font-medium">¡Listo, {name.split(' ')[0] || 'gracias'}!</p>
        <p className="text-slate-400 text-sm max-w-xs">
          Recibimos tus datos. Un asesor de {siteConfig.brandName} te contactará hoy mismo.
        </p>
      </div>
    );
  }

  if (status === 'mailto') {
    return (
      <div className="flex flex-col items-center text-center gap-3 py-10">
        <div className="w-14 h-14 rounded-full bg-amber-400/15 border border-amber-400/40 flex items-center justify-center">
          <svg className="w-7 h-7 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>
        <p className="text-white text-xl font-medium">Casi listo, {name.split(' ')[0] || ''}</p>
        <p className="text-slate-400 text-sm max-w-xs">
          Se abrió tu app de correo con tus datos — <strong className="text-slate-200">pulsa “Enviar”</strong> para
          que un asesor de {siteConfig.brandName} te contacte.
        </p>
        {hasWhatsApp && (
          <a
            href={`https://wa.me/${siteConfig.whatsapp.number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium"
          >
            ¿No se abrió? Escríbenos por WhatsApp
          </a>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      {/* honeypot anti-spam: invisible para humanos */}
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden"
      />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="lead-name" className="text-xs uppercase tracking-widest text-slate-500">
          Nombre
        </label>
        <input
          id="lead-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tu nombre"
          autoComplete="name"
          className="bg-black/60 border border-white/15 focus:border-emerald-400/60 outline-none rounded-2xl px-5 py-3.5 text-white placeholder:text-slate-600 transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="lead-phone" className="text-xs uppercase tracking-widest text-slate-500">
          WhatsApp / Teléfono
        </label>
        <input
          id="lead-phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="10 dígitos"
          autoComplete="tel"
          inputMode="numeric"
          className={`bg-black/60 border ${phoneError ? 'border-red-400/70' : 'border-white/15'} focus:border-emerald-400/60 outline-none rounded-2xl px-5 py-3.5 text-white placeholder:text-slate-600 transition-colors`}
        />
        {phoneError && (
          <span className="text-red-400 text-xs">Ingresa un teléfono de 10 dígitos</span>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="lead-buymode" className="text-xs uppercase tracking-widest text-slate-500">
          ¿Cómo planeas comprar?
        </label>
        <select
          id="lead-buymode"
          value={buyMode}
          onChange={(e) => setBuyMode(e.target.value)}
          className="bg-black/60 border border-white/15 focus:border-emerald-400/60 outline-none rounded-2xl px-5 py-3.5 text-white transition-colors appearance-none"
        >
          <option value="" className="bg-zinc-900">Selecciona una opción (opcional)</option>
          {BUY_MODES.map((mode) => (
            <option key={mode} value={mode} className="bg-zinc-900">
              {mode}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-2 inline-flex items-center justify-center gap-2 py-4 px-6 bg-emerald-400 hover:bg-emerald-300 disabled:opacity-60 text-black font-semibold rounded-2xl shadow-lg shadow-emerald-400/20 transition-colors duration-200"
      >
        {status === 'sending' ? 'Enviando…' : 'Quiero que me contacten'}
      </button>

      {status === 'error' && (
        <p className="text-red-400 text-sm text-center">
          {hasWhatsApp ? (
            <>
              No pudimos enviar tus datos.{' '}
              <a
                href={`https://wa.me/${siteConfig.whatsapp.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-emerald-400"
              >
                Escríbenos por WhatsApp
              </a>
              .
            </>
          ) : (
            'No pudimos enviar tus datos. Por favor inténtalo de nuevo en un momento.'
          )}
        </p>
      )}

      <p className="text-slate-600 text-xs text-center leading-relaxed">
        Al enviar aceptas que {siteConfig.brandName} use tu nombre y teléfono para contactarte sobre
        este desarrollo. Sin spam. Consulta nuestro{' '}
        <a href="/aviso-de-privacidad" className="underline hover:text-slate-400">
          Aviso de Privacidad
        </a>
        .
      </p>
    </form>
  );
}
