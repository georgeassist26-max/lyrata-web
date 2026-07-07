# Reporte de extracción — Lyrata Edén Urbano (Synexia)

**Fecha:** 2026-07-06
**Fuentes analizadas:**

| Archivo | Tipo | Contenido |
|---|---|---|
| `/Users/alfred/Downloads/All Houses/PRESENTACION LYRATA.pdf` | PDF, 20 págs. (16:9) | Presentación comercial **a nivel desarrollo** (ubicación, entorno urbano, seguridad, casa club, área verde, atributos generales de vivienda). |
| `/Users/alfred/Downloads/Livet/ficha_tecnica_lyrata_livet_v2.pdf` | PDF, 1 pág. | Ficha técnica del modelo **LIVET V.2** (solo referencia de esquema; ya implementado en el sitio). |
| `/Users/alfred/Downloads/All Houses/*.{jpeg,jpg,png}` | 6 imágenes sueltas | Fotografías profesionales de amenidades (alberca, casa club, gym, dog park, entorno, sustentabilidad). |
| `/Users/alfred/Downloads/Livet/*.jpeg` | 2 imágenes sueltas | Interiores profesionales de LIVET (baño principal, sala flex). |

---

## 1. Resultado principal (importante)

**No existe ninguna ficha técnica ni dato específico de los modelos SAMARA V.2, DEUS V.2, ZENTIA V.1 o LIVET CON ROOF V.2 en las carpetas proporcionadas.** La presentación PRESENTACION LYRATA.pdf nunca menciona ningún modelo por nombre; es 100% institucional/del desarrollo. Por instrucción explícita, **no se inventó ningún dato**: `models.json` contiene las 4 entradas con la estructura exacta del esquema y **todos los campos de datos en `null`**.

### Datos faltantes por modelo (los 4 modelos por igual)

Para SAMARA V.2, DEUS V.2, ZENTIA V.1 y LIVET CON ROOF V.2 faltan **todos** los campos:

- `price` (precio MXN)
- `dimensions.lotSize`, `dimensions.landArea`, `dimensions.constructionArea`
- `rooms.bedrooms`, `rooms.bathrooms`, `rooms.parkingSpaces`
- `distribution.groundFloor`, `distribution.upperFloor`
- `finishes.floors`, `finishes.facade`, `finishes.bathrooms`, `finishes.kitchen`
- `equipmentAndInstallations.water`, `.preparations`, `.smartHome`
- Renders exteriores, plantas arquitectónicas y fotos por modelo: **no existen** en las fuentes.

**Acción recomendada:** solicitar a Synexia las fichas técnicas (formato idéntico a `ficha_tecnica_lyrata_livet_v2.pdf`) y la lista de precios vigente de los 4 modelos, además de plantas arquitectónicas y renders individuales.

### Rasgos que la presentación afirma para TODAS las casas de Lyrata

Estos enunciados aplican a toda la línea (útiles como copy general, **no** como sustituto de ficha técnica por modelo):

- Cuarto de servicio independiente y techado, con piso cerámico, lavadero, vertedero, calentador e instalaciones listas.
- Área social en planta baja (sala, comedor y patio) + un espacio de convivencia en planta alta: las viviendas chicas con **Espacio Flex** (home office / home school) y las medianas con **Family Room**; iluminación natural por domo y ventilación por ventanas amplias o terrazas según diseño.
- Espacio interior exclusivo para mascotas ("Doggy", bajo escalera), multifuncional (cava o bodega) — único en su nicho según el desarrollador.
- Cocinas en volumen eficiente: mueble bajo barras, alacena bajo escalera, espacio de refrigerador a medidas comerciales.
- Vestidores con lavabo independiente del WC y regadera (uso simultáneo de 2 personas); accesorios completos (doble portarrollo, banca y doble gancho en regadera); espejos en puertas en vivienda mediana; domos y ventanas con mosquitero.
- Fachadas de bajo mantenimiento: piedra, concreto y pórfido; zoclo de pintura antiviral calidad Vinimex; se entregan luminarias de plafón, arbotantes, candiles, lámparas de acento y tiras LED.
- Azoteas verdes ("quinta fachada"): teja de barro e impermeabilizante color verde; pretiles que ocultan instalaciones.
- Alta prioridad a guardado: muebles de blancos y limpieza, entrepaños de herrería, bodegas interiores y zonas de servicio definidas.

---

## 2. Hallazgos a nivel desarrollo

### Ubicación
- Zona norte de León, Gto.; acceso por dos ejes principales: **Blvd. Hidalgo y Blvd. Morelos**.
- Conexión fácil y rápida a equipamiento y servicios de la ciudad (mapa con radios de 1–5 km incluido en `mapa-ubicacion-leon.png`).

### Diseño del entorno urbano
- Trazo urbano orgánico integrado a los árboles existentes de talla grande (atmósfera de calidez, luces y sombras en andadores y zonas de estar).
- Árboles en arriates de banqueta: flama china y trueno (talla mediana, rápido crecimiento, bajo riego).
- Argumento de venta: otros fraccionamientos requieren ~10 años de mantenimiento para lograr vegetación equivalente.

### Acceso, control y seguridad
- Pórtico de acceso con sistema de seguridad **ADV** y **reconocimiento facial**; plumas de acceso y portones de herrería.
- Bardas perimetrales de 3.00 a 4.60 m con **malla electrificada de 5 líneas (1,400 V)** y alarma antisabotaje.
- CCTV: **23 cámaras en interior de Terrario, 11 en pórtico, 2 PTZ hacia colindancias, 8 en casa club y 8 sobre Blvd. Lyrata** (52 en total).
- Sistema de alarma en casa club; acceso a casa club también por reconocimiento facial.
- Nota: el clúster/privada aparece nombrado como **"Terrario"** en la señalética del pórtico.

### Casa club
- Salón de usos múltiples equipado (sala de estar, pantalla, barra de servicio, mesas baja/alta, barra co-working) con vista a la alberca.
- Baños para hombres y mujeres; oficina de administrador; vertedero y muebles de servicio.
- **Gimnasio equipado con terraza**; **alberca climatizada con chapoteadero** (oculta desde la calle); regadera exterior e interior con espacio para cambiarse.

### Área verde
- Pista de caminata perimetral; zona de juegos infantiles con pasto sintético; 2 palapas con mesas tipo picnic; **cancha de básquetbol con 4 aros**; **Pet Park con lavadero para mascotas**.
- Cuarto para desechos de basura de diseño oculto (el recolector no entra al clúster), puertas de cierre automático, interior forrado de cerámico.
- 2 áreas comunes adicionales a la de casa club.

### Financiamiento, precios, fechas de entrega y terrenos
- **NO se encontró** en ninguna fuente: precios (de ningún modelo), listas de precios, planes de pago/financiamiento, fechas de entrega, ni información de **terrenos/lotes en venta**.
- **NO hay masterplan / mapa de lotificación** en la presentación (solo el mapa de ubicación urbana).

---

## 3. Inventario de imágenes exportadas

Total: **47 imágenes de desarrollo** (`images/desarrollo/`) + **2 de LIVET V.2** (`images/livet-v2/`). Las extraídas del PDF se exportaron a PNG en su resolución nativa embebida; las 6 fotografías profesionales sueltas se copiaron en su formato original (máxima calidad). Se corrigió la rotación de 6 imágenes que el PDF almacenaba giradas.

### Nivel A — Calidad profesional / lista para hero (retocadas, alta resolución)

| Archivo | Resolución | Notas |
|---|---|---|
| `casa-club-completa-jardin-alberca.jpg` | 6000x4000 | Foto profesional diurna de casa club + alberca + jardín. **La mejor imagen del paquete**; sobrada para hero. |
| `alberca-atardecer-profesional.jpeg` | 2528x1684 | Alberca al atardecer, retoque profesional. Hero-ready. |
| `gimnasio-casa-club-profesional.jpeg` | 2528x1684 | Gimnasio al atardecer, profesional. Hero-ready. |
| `arboles-entorno-natural-andador.jpeg` | 2730x1536 | Andador con mezquites, cielo retocado. Hero-ready. |
| `dog-park-lifestyle-globos.png` | 1327x886 | Lifestyle (mujer+perro mirando el desarrollo, globos aerostáticos). Excelente para banner emocional; resolución media. |
| `sustentabilidad-cuarto-reciclaje.png` | 1524x704 | Cuarto orgánico/inorgánico al atardecer, formato panorámico. Buena para franja/sección. |
| `images/livet-v2/bano-principal-vestidor-livet.png` | 2528x1684 | Baño principal LIVET, profesional. |
| `images/livet-v2/sala-flex-livet.png` | 1264x842 | Sala flex LIVET, profesional; resolución media (suficiente para tarjeta, justa para hero). |

### Nivel B — Extraídas del PDF, alta resolución (fotos de obra/casa muestra, sin retoque)

| Archivo | Resolución | Notas |
|---|---|---|
| `fachada-cochera-porfido.png` | 3264x1504 | Cochera semitechada con pórfido y piedra. Usable como hero de sección "fachada". |
| `interior-sala-comedor-cocina.png` | 3264x1504 | Sala-comedor-cocina de casa muestra decorada. Usable en secciones. |
| `interior-espacio-mascotas-doggy.png` | 3264x1504 | Espacio "Doggy" bajo escalera — USP único. |
| `azoteas-verdes-rotonda.png` | 2931x1351 | Vista elevada: rotonda de pórfido + casa con techo verde. Buena para sección "azoteas verdes". |
| `mapa-ubicacion-leon.png` | 1996x1544 | Mapa satelital con radios 1–5 km y vialidades. Para sección ubicación. |
| `interior-family-room.png` | 1955x901 | Family room amueblado (foto ligeramente inclinada, recortable). |
| `hero-bosque-logo-lyrata.png` | 1663x936 | Fotograma de video con logo Lyrata sobre bosque (logo incrustado). |
| `viviendas-fachadas-roof-garden.png` | 1663x936 | Fachadas dobles con **roof garden visible** — la única imagen donde se aprecia el producto tipo "Livet con Roof". |
| `entorno-arbol-esquina-calle.png` | 1663x936 | Esquina arbolada del fraccionamiento. |
| `portico-acceso-terrario.png` / `barda-perimetral-blvd-lyrata.png` | 1588x731/733 | Pórtico de acceso y barda perimetral con cactus. |

### Nivel C — Extraídas del PDF, resolución media (1320x608, colages de la presentación)

`acceso-monumento-lyrata`, `andador-arbolado-barda`, `area-verde-arboles-viviendas`, `area-verde-juegos-arboles`, `calle-portico-viviendas`, `cancha-basquetbol`, `casa-club-alberca`, `casa-club-exterior-acceso`, `casa-club-gimnasio`, `casa-club-jardin`, `casa-club-salon-usos-multiples`, `cuarto-desechos-basura`, `entorno-arboles-banqueta`, `juegos-infantiles-palapas`, `pet-park`, `vivienda-esquina-piedra`, `viviendas-calle-cocheras`.
Aptas para tarjetas, mosaicos y galerías; **no** recomendadas para hero a pantalla completa.

### Nivel D — Detalles interiores (resolución baja-media, fotos de celular)

| Archivo | Resolución | Contenido |
|---|---|---|
| `cocina-general-barras.png` | 567x1231 (vertical) | Cocina con barra y bancos |
| `cocina-espacio-refrigerador.png` | 567x1231 (vertical) | Nicho de refrigerador a medida |
| `cocina-pendientes-estufa.png` | 567x1231 (vertical) | Cocina con lámparas colgantes |
| `cocina-barra-granito.png` / `cocina-granito-tarja.png` | 963x444 | Barras de granito natural |
| `cuarto-servicio-lavadero.png` / `cuarto-servicio-calentador.png` | ~943x434 | Cuarto de servicio y calentadores |
| `vestidor-lavabo-independiente.png` | 1285x592 | Vestidor con lavabo independiente |
| `vestidor-walk-in-closet.png` | 691x1499 (vertical) | Walk-in closet |
| `bano-doble-espejo.png` | 1285x591 | Baño con doble espejo |
| `bano-regadera-marmol.png` | 691x1499 (vertical) | Regadera con mármol y banca |
| `interior-home-office.png` | 690x1499 (vertical) | Rincón home office |
| `seguridad-lector-facial.png` | 382x828 | Lector facial ZKTeco del pórtico |

**No exportado por irrelevante:** botón de salida "EXIT" (p.7), 4 miniaturas rotadas de áreas de guardado (p.16, muy baja calidad).

---

## 4. Activos adicionales detectados FUERA de las carpetas indicadas

En `/Users/alfred/Downloads/` (raíz) existen archivos relevantes que **no** se exportaron por estar fuera del alcance indicado, pero que conviene aprovechar:

- **`3 houses front.png` (1793 KB)** — render/foto profesional al atardecer de **tres fachadas contiguas, la izquierda con roof garden** (posible LIVET CON ROOF). Calidad hero.
- **`3 houses profile.png` (1655 KB)** — misma escena en ángulo; se leen letreros de modelo **"LIVET"** y **"MANTRA"** frente a las casas (⚠️ "MANTRA" no está en el lineup del sitio; confirmar con Synexia si es nombre anterior/alterno de algún modelo).
- **`/Users/alfred/Downloads/LOGO/`** — carpeta con material de logotipo.

---

## 5. Conclusiones y siguientes pasos

1. **Bloqueante para las páginas de modelo:** pedir a Synexia fichas técnicas + precios de SAMARA V.2, DEUS V.2, ZENTIA V.1 y LIVET CON ROOF V.2 (y plantas/renders por modelo). Sin ello, `models.json` queda con `null`.
2. El material de **desarrollo/amenidades es abundante y de buena calidad**: alcanza para construir por completo las secciones de privada, seguridad, casa club, área verde y entorno.
3. Preguntar también por: lista de precios general, planes de financiamiento, fechas de entrega, disponibilidad de **terrenos** (nada de esto aparece en los documentos) y el masterplan/lotificación.
4. Confirmar la relación LIVET ↔ LIVET CON ROOF: si el "con roof" es la misma planta más roof garden, las fotos interiores de LIVET (en `images/livet-v2/`) podrían reutilizarse con la debida aclaración — decisión editorial pendiente de confirmación del desarrollador.
