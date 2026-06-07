// AmenitiesIsland.tsx
// Active Island — Interactive amenities tab gallery
// Hydration: client:visible

import { useState } from 'react';

const amenities = [
  {
    id: 0,
    label: 'Alberca',
    title: 'Alberca climatizada oculta a la calle.',
    description: 'Diseñada para mantener tu privacidad sin sacrificar el lujo. Temperatura perfecta todo el año.',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1000',
  },
  {
    id: 1,
    label: 'Gimnasio & Co-working',
    title: 'Gimnasio equipado y área Co-working.',
    description: 'Entrena o trabaja sin salir de la privada. Espacios diseñados para el estilo de vida moderno.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000',
  },
  {
    id: 2,
    label: 'Sustentabilidad',
    title: 'Diseño inteligente de recolección de residuos.',
    description: 'Un sistema limpio y eficiente que mantiene la privada impecable y reduce el impacto ambiental.',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=1000',
  },
];

export default function AmenitiesIsland() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  function handleSelect(id: number) {
    if (id === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(id);
      setFading(false);
    }, 200);
  }

  const current = amenities[active];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">

      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-xs uppercase tracking-widest text-slate-500 mb-4">Amenidades</p>
        <h2 className="text-4xl md:text-5xl font-light text-white">
          Una extensión de tu casa,<br className="hidden md:block" /> sin las molestias de una.
        </h2>
      </div>

      {/* Tab buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {amenities.map((a) => (
          <button
            key={a.id}
            onClick={() => handleSelect(a.id)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border
              ${active === a.id
                ? 'bg-white text-black border-white'
                : 'bg-transparent text-slate-400 border-white/20 hover:border-white/50 hover:text-white'
              }`}
          >
            {a.label}
          </button>
        ))}
      </div>

      {/* Main display */}
      <div
        className="grid lg:grid-cols-2 gap-10 items-center transition-opacity duration-200"
        style={{ opacity: fading ? 0 : 1 }}
      >
        {/* Image */}
        <div className="aspect-[4/3] rounded-3xl overflow-hidden">
          <img
            key={current.id}
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl md:text-4xl font-light text-white leading-snug">
            {current.title}
          </h3>
          <p className="text-lg text-slate-400 leading-relaxed">
            {current.description}
          </p>
          {/* Dot indicators */}
          <div className="flex gap-2 mt-4">
            {amenities.map((a) => (
              <button
                key={a.id}
                onClick={() => handleSelect(a.id)}
                className={`w-2 h-2 rounded-full transition-all duration-200
                  ${active === a.id ? 'bg-emerald-400 w-6' : 'bg-white/20'}`}
                aria-label={a.label}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
