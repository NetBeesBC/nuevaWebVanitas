import { SiteHeader } from "@/components/layout/site-header";

function ReferenceHero() {
  return (
    <section className="relative min-h-[870px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          alt="Interior de clínica estética de alta tecnología en Santander"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRLCTCmjcw04PWeEJ-vG6Fs9wLyDj3Q82D52BUmAZmRtogS3ym7MPO1UVb173LrCb_bOsCsKk7rdRQi7_RD1XXLpGm3eLj_aUTDg26IAdZ6gBMKWNGPk77Y7gvoq0IBHy2oC1jPAHjFqymA39glg7no1hjfh1rEav15-Tg7r_qr7lvB5doFS_FHSubBu0sL75dQ0XptsYpXEBNhVTrEWdviom-Fyzkz_U_zdyx2G2ki7rkdXji_TZUR8hIcTbC--JMEWagWUujjyo"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <span className="inline-block py-1 px-3 bg-rose/40 text-energetic-orange text-xs font-bold tracking-widest uppercase rounded-full mb-6">
            Santander Flagship
          </span>
          <h1 className="serif-title text-5xl md:text-7xl text-slate-900 leading-[1.1] mb-8">
            CENTRO MEDICO ESTETICO DE <span className="text-primary">VANGUARDIA</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            Somos un centro médico estético a la vanguardia en los últimos tratamientos médico-estéticos faciales y
            corporales, con la tecnología más avanzada del mercado para garantizar resultados excepcionales.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:-translate-y-[2px] transition-all">
              Explorar Tratamientos
            </button>
            <button className="bg-white border-2 border-slate-100 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
              Conoce al Equipo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnologySection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="serif-title text-4xl text-slate-900 mb-4">Nuestra Tecnología</h2>
          <div className="h-1.5 w-24 bg-lemon mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <article className="md:col-span-12 bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative bg-primary/10 p-10 min-h-[360px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-white/30 to-rose/20" />
                <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl bg-white shadow-lg border border-slate-100 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Equipo medico Coolite Evo en una clinica moderna"
                    src="/media/Coolive-evo.png"
                  />
                </div>
              </div>

              <div className="p-10 flex flex-col">
                <div className="flex items-start justify-between gap-6 flex-wrap">
                  <div>
                    <h3 className="serif-title text-3xl text-slate-900">COOLITE EVO</h3>
                    <p className="mt-1 text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                      Fiber Optic Laser
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-bold">
                      1200W
                    </span>
                    <span className="inline-flex items-center rounded-full bg-rose/40 text-energetic-orange px-3 py-1 text-xs font-bold">
                      FCD Fibra Optica
                    </span>
                    <span className="inline-flex items-center rounded-full bg-lemon/70 text-slate-900 px-3 py-1 text-xs font-bold">
                      Crystal TEC
                    </span>
                  </div>
                </div>

                <p className="mt-6 text-slate-600 leading-relaxed">
                  La tercera generacion de COOLITE EVO combina precision, potencia y velocidad de trabajo para
                  depilacion profesional en todo tipo de vello y fototipo.
                </p>

                <div className="mt-8 border border-slate-200 rounded-xl overflow-hidden bg-slate-50/70">
                <details className="group border-b border-slate-200">
                  <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between text-sm font-bold text-slate-900">
                    Descripción
                    <span className="material-symbols-outlined text-base text-slate-500 group-open:rotate-180 transition-transform">
                      expand_more
                    </span>
                  </summary>
                  <div className="px-4 pb-4 text-sm text-slate-700 leading-relaxed space-y-3">
                    <p>
                      Mientras el mercado mundial copiaba nuestra primera generación de láser por fibra óptica, GSD
                      Aesthetic, junto con SLYU, lanzó al mercado su tercera generación.
                    </p>
                    <p>
                      Coolite Evo y su tecnología FCD (fibra óptica) ofrece resultados espectaculares en todo tipo de
                      vello y fototipo.
                    </p>
                    <p>
                      Dispone de un potente sistema de refrigeración y alta velocidad de tratamiento para trabajar
                      largas jornadas de forma interrumpida.
                    </p>
                    <p>Trabaja a través de sistema SHR, pulso dinámico y pulso estático.</p>
                  </div>
                </details>

                <details className="group border-b border-slate-200">
                  <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between text-sm font-bold text-slate-900">
                    Características
                    <span className="material-symbols-outlined text-base text-slate-500 group-open:rotate-180 transition-transform">
                      expand_more
                    </span>
                  </summary>
                  <div className="px-4 pb-4 text-sm text-slate-700">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>1200 watts</li>
                      <li>Uniforme en todo el spot</li>
                      <li>Unidireccional sin dispersión</li>
                      <li>Portable, con 22 kg de peso</li>
                    </ul>
                  </div>
                </details>

                <details className="group border-b border-slate-200">
                  <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between text-sm font-bold text-slate-900">
                    Tecnología
                    <span className="material-symbols-outlined text-base text-slate-500 group-open:rotate-180 transition-transform">
                      expand_more
                    </span>
                  </summary>
                  <div className="px-4 pb-4 text-sm text-slate-700 leading-relaxed space-y-2">
                    <p>Tecnología FCD de fibra óptica con modulador en el equipo.</p>
                    <p>Tecnología Crystal TEC para mayor confort y protección de la piel.</p>
                    <p>Manipulo más ligero del mercado, con solo 0.647 kg.</p>
                    <p>Patente de fibra óptica Herber Cube.</p>
                    <p>Modo ultracorto de pulsos: 20 J / 10 ms.</p>
                  </div>
                </details>

                <details className="group border-b border-slate-200">
                  <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between text-sm font-bold text-slate-900">
                    Tratamientos
                    <span className="material-symbols-outlined text-base text-slate-500 group-open:rotate-180 transition-transform">
                      expand_more
                    </span>
                  </summary>
                  <div className="px-4 pb-4 text-sm text-slate-700 leading-relaxed space-y-2">
                    <p>Depilación de todo tipo de vello y fototipo (I-VI).</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Piernas: 19 minutos</li>
                      <li>Brazos: 15 minutos</li>
                      <li>Espalda: 7 minutos</li>
                    </ul>
                    <p>Equipo eficaz, indoloro y rápido.</p>
                  </div>
                </details>

                <details className="group">
                  <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between text-sm font-bold text-slate-900">
                    Certificaciones
                    <span className="material-symbols-outlined text-base text-slate-500 group-open:rotate-180 transition-transform">
                      expand_more
                    </span>
                  </summary>
                  <div className="px-4 pb-4 text-sm text-slate-700 leading-relaxed space-y-2">
                    <p>CE (Europa)</p>
                    <p>Medical Device</p>
                    <p>FDA (Estados Unidos)</p>
                  </div>
                </details>
              </div>

              </div>
            </div>
          </article>

          <article className="md:col-span-12 bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative bg-primary/10 p-10 min-h-[360px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-white/30 to-rose/20" />
                <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl bg-white shadow-lg border border-slate-100 overflow-hidden">
                  <img
                    className="w-full h-full object-contain p-6"
                    alt="Equipo ULTRALIGHT SPE IPL"
                    src="/media/IPL.jpg"
                  />
                </div>
              </div>

              <div className="p-10 flex flex-col">
                <div className="flex items-start justify-between gap-6 flex-wrap">
                  <div>
                    <h3 className="serif-title text-3xl text-slate-900">ULTRALIGHT SPE</h3>
                    <p className="mt-1 text-sm font-bold uppercase tracking-[0.18em] text-slate-400">IPL · Luz Pulsada</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-bold">
                      1500W
                    </span>
                    <span className="inline-flex items-center rounded-full bg-rose/40 text-energetic-orange px-3 py-1 text-xs font-bold">
                      30+ protocolos
                    </span>
                    <span className="inline-flex items-center rounded-full bg-lemon/70 text-slate-900 px-3 py-1 text-xs font-bold">
                      TEC -6ºC
                    </span>
                  </div>
                </div>

                <p className="mt-6 text-slate-600 leading-relaxed">
                  Como un bisturí para un cirujano, esta es la luz pulsada (IPL) para un centro de belleza o médico
                  estético: versátil, precisa y diseñada para trabajar con fluidez.
                </p>

                <div className="mt-8 border border-slate-200 rounded-xl overflow-hidden bg-slate-50/70">
                  <details className="group border-b border-slate-200">
                    <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between text-sm font-bold text-slate-900">
                      Descripción
                      <span className="material-symbols-outlined text-base text-slate-500 group-open:rotate-180 transition-transform">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-sm text-slate-700 leading-relaxed space-y-3">
                      <p>
                        Un equipo muy versátil, con el que podrás trabajar desde depilación hasta tratamientos
                        vasculares, sin complicaciones de parametrización.
                      </p>
                      <p>
                        Desde su pantalla táctil, seleccionas el servicio a realizar y el equipo se ajusta
                        automáticamente.
                      </p>
                      <p>
                        Sus pulsos ultracortos lo convierten en un imprescindible para abarcar hasta 30 tipos de
                        tratamientos de fototerapia y depilación.
                      </p>
                      <p>Además, trabaja a través de sistema SHR, pulso dinámico y pulso estático.</p>
                      <p>Sin lugar a duda, la revolución en el mundo de la fototerapia.</p>
                    </div>
                  </details>

                  <details className="group border-b border-slate-200">
                    <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between text-sm font-bold text-slate-900">
                      Características
                      <span className="material-symbols-outlined text-base text-slate-500 group-open:rotate-180 transition-transform">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-sm text-slate-700">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>1500 watts</li>
                        <li>Uniforme en todo el spot</li>
                        <li>Unidireccional sin dispersión</li>
                        <li>Portable, con 26 kg de peso</li>
                      </ul>
                    </div>
                  </details>

                  <details className="group border-b border-slate-200">
                    <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between text-sm font-bold text-slate-900">
                      Tecnología
                      <span className="material-symbols-outlined text-base text-slate-500 group-open:rotate-180 transition-transform">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-sm text-slate-700 leading-relaxed space-y-3">
                      <p>Tecnología patentada 3C, que emite un flujo constante de carga de corriente.</p>
                      <p>
                        Tecnología SPE: emisión de pulso cuadrado que hace que sea la misma en toda la superficie del
                        spot.
                      </p>
                      <p>Pulsos ultracortos: 2-12 ms y 1-24 J.</p>
                      <p>Sistema de refrigeración TEC, capaz de bajar la temperatura del spot a -6°.</p>
                    </div>
                  </details>

                  <details className="group border-b border-slate-200">
                    <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between text-sm font-bold text-slate-900">
                      Tratamientos
                      <span className="material-symbols-outlined text-base text-slate-500 group-open:rotate-180 transition-transform">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-sm text-slate-700 leading-relaxed space-y-3">
                      <p>Hasta 30 afecciones cutáneas + depilación.</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Rejuvenecimiento facial</li>
                        <li>Lesiones vasculares</li>
                        <li>Lesiones pigmentarias</li>
                        <li>Depilación SHR</li>
                      </ul>
                    </div>
                  </details>

                  <details className="group">
                    <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between text-sm font-bold text-slate-900">
                      Certificaciones
                      <span className="material-symbols-outlined text-base text-slate-500 group-open:rotate-180 transition-transform">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-sm text-slate-700 leading-relaxed space-y-2">
                      <p>CE (Europa)</p>
                      <p>Medical Device</p>
                      <p>FDA (Estados Unidos)</p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </article>

          <article className="md:col-span-12 bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative bg-primary/10 p-10 min-h-[360px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-white/30 to-rose/20" />
                <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl bg-white shadow-lg border border-slate-100 overflow-hidden">
                  <img className="w-full h-full object-contain p-6" alt="Equipo de presoterapia Cocoon" src="/media/Presoterapia.jpg" />
                </div>
              </div>

              <div className="p-10 flex flex-col">
                <div className="flex items-start justify-between gap-6 flex-wrap">
                  <div>
                    <h3 className="serif-title text-3xl text-slate-900">PRESOTERAPIA COCOON</h3>
                    <p className="mt-1 text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Drenaje Linfático</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-bold">
                      4 canales
                    </span>
                    <span className="inline-flex items-center rounded-full bg-rose/40 text-energetic-orange px-3 py-1 text-xs font-bold">
                      12 compartimentos
                    </span>
                    <span className="inline-flex items-center rounded-full bg-lemon/70 text-slate-900 px-3 py-1 text-xs font-bold">
                      20-260 mm Hg
                    </span>
                  </div>
                </div>

                <p className="mt-6 text-slate-600 leading-relaxed">
                  Presoterapia profesional orientada al drenaje linfático y la activación circulatoria para reducir
                  retención de líquidos, grasa y toxinas de forma segura y homogénea.
                </p>

                <div className="mt-8 border border-slate-200 rounded-xl overflow-hidden bg-slate-50/70">
                  <details className="group border-b border-slate-200">
                    <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between text-sm font-bold text-slate-900">
                      Descripción
                      <span className="material-symbols-outlined text-base text-slate-500 group-open:rotate-180 transition-transform">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-sm text-slate-700 leading-relaxed space-y-3">
                      <p>
                        Cocoon trabaja con botas completas (especialmente diseñadas para la presoterapia) que cubren
                        las piernas, la zona abdominal y los glúteos.
                      </p>
                      <p>
                        Las botas completas garantizan mejores resultados, ya que la activación del sistema linfático
                        se realiza de forma homogénea cubriendo la mitad del cuerpo para obtener una reducción de
                        líquidos, grasa y toxinas.
                      </p>
                      <p>
                        Botas de presoterapia con cobertura total de piernas, glúteo, abdomen y pies. Activación del
                        sistema circulatorio, el muscular y el tejido celular.
                      </p>
                    </div>
                  </details>

                  <details className="group border-b border-slate-200">
                    <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between text-sm font-bold text-slate-900">
                      Características
                      <span className="material-symbols-outlined text-base text-slate-500 group-open:rotate-180 transition-transform">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-sm text-slate-700">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Peso bruto: 7,5 kg.</li>
                        <li>Dimensiones de la caja de color: 44,5 x 29 x 24 cm.</li>
                        <li>Salida presión: 20-260 mm Hg.</li>
                        <li>Potencia: 50 l/min 80W.</li>
                        <li>4 canales de salida de presión.</li>
                        <li>12 compartimentos de diseño Súper Airbag.</li>
                        <li>Protección tipo clase II Bf.</li>
                        <li>Voltaje: 120-230V - 50 Hz.</li>
                        <li>4 programas y 3 niveles de intensidad.</li>
                      </ul>
                    </div>
                  </details>

                  <details className="group border-b border-slate-200">
                    <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between text-sm font-bold text-slate-900">
                      Tecnología
                      <span className="material-symbols-outlined text-base text-slate-500 group-open:rotate-180 transition-transform">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-sm text-slate-700 leading-relaxed space-y-3">
                      <p>
                        Adayo trabaja a través de un masaje que activa la circulación, tanto venosa como linfática,
                        obteniendo un efecto de drenaje y estimulando la reabsorción de los fluidos intersticiales que
                        no son reabsorbidos por el sistema venoso.
                      </p>
                      <p>
                        Las contracciones producidas por el masaje permiten la eliminación de líquidos y toxinas
                        retenidos, favoreciendo una correcta circulación sanguínea y ayudando a la nutrición de las
                        células.
                      </p>
                    </div>
                  </details>

                  <details className="group">
                    <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between text-sm font-bold text-slate-900">
                      Tratamientos
                      <span className="material-symbols-outlined text-base text-slate-500 group-open:rotate-180 transition-transform">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-sm text-slate-700">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Puedes aplicarlo cómodamente en tu propia casa.</li>
                        <li>Perfecto para todas las partes del cuerpo.</li>
                        <li>Ayuda a eliminar toxinas.</li>
                        <li>Mejora el drenaje linfático (celulitis).</li>
                        <li>Favorece la reabsorción de líquidos retenidos.</li>
                        <li>Tratamiento para piernas cansadas.</li>
                        <li>Válido para personas de cualquier edad.</li>
                        <li>Sin ningún efecto secundario.</li>
                      </ul>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </article>

          <article className="md:col-span-12 bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative bg-primary/10 p-10 min-h-[360px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-white/30 to-rose/20" />
                <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl bg-white shadow-lg border border-slate-100 overflow-hidden">
                  <img
                    className="w-full h-full object-contain p-6"
                    alt="Equipo Cellactor SC1 Ultra"
                    src="/media/Cellactor.jpg"
                  />
                </div>
              </div>

              <div className="p-10 flex flex-col">
                <div className="flex items-start justify-between gap-6 flex-wrap">
                  <div>
                    <h3 className="serif-title text-3xl text-slate-900">CELLACTOR SC1 ULTRA</h3>
                    <p className="mt-1 text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Acoustic Wave Therapy</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-bold">
                      MTZ + C-ACTOR
                    </span>
                    <span className="inline-flex items-center rounded-full bg-rose/40 text-energetic-orange px-3 py-1 text-xs font-bold">
                      Pantalla 15.6"
                    </span>
                    <span className="inline-flex items-center rounded-full bg-lemon/70 text-slate-900 px-3 py-1 text-xs font-bold">
                      83.3 kg
                    </span>
                  </div>
                </div>

                <p className="mt-6 text-slate-600 leading-relaxed">
                  Esta es la evolución de la terapia de ondas acústicas para clínicas exigentes: un equipo con
                  tecnologías combinadas para remodelación corporal, mejora tisular y protocolos estéticos avanzados.
                </p>

                <div className="mt-8 border border-slate-200 rounded-xl overflow-hidden bg-slate-50/70">
                  <details className="group border-b border-slate-200">
                    <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between text-sm font-bold text-slate-900">
                      Descripción
                      <span className="material-symbols-outlined text-base text-slate-500 group-open:rotate-180 transition-transform">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-sm text-slate-700 leading-relaxed space-y-3">
                      <p>
                        Este es el principio detrás de la creación del CELLACTOR SC1 TOWER ULTRA: un equipo que consta
                        de tres tecnologías de ondas (onda de choque, onda acústica y onda vibracional) que permiten
                        realizar toda clase de tratamientos estéticos en clínicas.
                      </p>
                      <p>
                        Quien ya posee un D-ACTOR Ultra puede adquirir las ONDAS DE CHOQUE por separado (T-top)
                        microscópicas (MTZ).
                      </p>
                    </div>
                  </details>

                  <details className="group border-b border-slate-200">
                    <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between text-sm font-bold text-slate-900">
                      Características
                      <span className="material-symbols-outlined text-base text-slate-500 group-open:rotate-180 transition-transform">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-sm text-slate-700">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Dimensiones sin pantalla táctil (ancho x altura x profundidad): 590 x 1461 x 660 mm.</li>
                        <li>Peso máximo: 83,3 kg.</li>
                        <li>Pantalla táctil 15,6".</li>
                        <li>Ecografía integrada, Doppler color (opcional).</li>
                        <li>Módulo de cajones «Store Case» (opcional).</li>
                      </ul>
                    </div>
                  </details>

                  <details className="group border-b border-slate-200">
                    <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between text-sm font-bold text-slate-900">
                      Tecnología
                      <span className="material-symbols-outlined text-base text-slate-500 group-open:rotate-180 transition-transform">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-sm text-slate-700 leading-relaxed space-y-3">
                      <p>
                        El aplicador C-ACTOR genera ondas de choque que penetran a unos 3,5 centímetros por debajo de
                        la piel, deshaciendo los nódulos de grasa de las capas más profundas (tejido conjuntivo).
                      </p>
                      <p>
                        El D-ACTOR emite ondas acústicas que actúan sobre las capas cercanas a la superficie de la
                        piel (penetrando hasta 2 cm), mejorando elasticidad y tersura.
                      </p>
                      <p>
                        El V-ACTOR produce vibraciones que relajan y fortalecen los músculos.
                      </p>
                    </div>
                  </details>

                  <details className="group">
                    <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between text-sm font-bold text-slate-900">
                      Tratamientos
                      <span className="material-symbols-outlined text-base text-slate-500 group-open:rotate-180 transition-transform">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-sm text-slate-700">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Terapia de la celulitis (estadio I-III).</li>
                        <li>Remodelación del cuerpo.</li>
                        <li>Aplanado de cicatrices.</li>
                        <li>Tratamiento de estrías de embarazo.</li>
                        <li>Mejora de la elasticidad cutánea.</li>
                        <li>Regulación del tono muscular.</li>
                        <li>Arrugas faciales.</li>
                      </ul>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </article>

          <article className="md:col-span-12 bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative bg-primary/10 p-10 min-h-[360px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-white/30 to-rose/20" />
                <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl bg-white shadow-lg border border-slate-100 overflow-hidden">
                  <img
                    className="w-full h-full object-contain p-6"
                    alt="Equipo Dermalux LED Phototherapy"
                    src="/media/Dermalux-Triwave-Machine.jpg"
                  />
                </div>
              </div>

              <div className="p-10 flex flex-col">
                <div className="flex items-start justify-between gap-6 flex-wrap">
                  <div>
                    <h3 className="serif-title text-3xl text-slate-900">DERMALUX LED PHOTOTHERAPY</h3>
                    <p className="mt-1 text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Fototerapia LED</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-bold">
                      415/633/830 nm
                    </span>
                    <span className="inline-flex items-center rounded-full bg-rose/40 text-energetic-orange px-3 py-1 text-xs font-bold">
                      20 protocolos
                    </span>
                    <span className="inline-flex items-center rounded-full bg-lemon/70 text-slate-900 px-3 py-1 text-xs font-bold">
                      4 LED articulados
                    </span>
                  </div>
                </div>

                <p className="mt-6 text-slate-600 leading-relaxed">
                  Dermalux LED Phototherapy es una solución de fototerapia clínica no invasiva para el rejuvenecimiento,
                  la reparación cutánea y el abordaje de múltiples afecciones de la piel con protocolos personalizados.
                </p>

                <div className="mt-8 border border-slate-200 rounded-xl overflow-hidden bg-slate-50/70">
                  <details className="group border-b border-slate-200">
                    <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between text-sm font-bold text-slate-900">
                      Descripción
                      <span className="material-symbols-outlined text-base text-slate-500 group-open:rotate-180 transition-transform">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-sm text-slate-700 leading-relaxed space-y-3">
                      <p>
                        Dermalux LED Phototherapy es una terapia facial no invasiva que utiliza energía lumínica no
                        térmica para accionar los procesos naturales celulares, acelerando el rejuvenecimiento y la
                        reparación de la piel.
                      </p>
                      <p>
                        Utilizando diodos electroluminosos clínicos probados (LED), ofrece resultados excelentes en una
                        amplia gama de preocupaciones comunes de la piel.
                      </p>
                      <p>
                        Incluye tratamientos para envejecimiento cutáneo, acné, rosácea, pigmentación y desórdenes
                        inflamatorios como eccema, dermatitis y psoriasis.
                      </p>
                    </div>
                  </details>

                  <details className="group border-b border-slate-200">
                    <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between text-sm font-bold text-slate-900">
                      Características
                      <span className="material-symbols-outlined text-base text-slate-500 group-open:rotate-180 transition-transform">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-sm text-slate-700">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Tecnología LED de alta potencia de próxima generación.</li>
                        <li>Longitudes de onda clínicamente probadas: 415 nm, 633 nm y 830 nm.</li>
                        <li>Diseño articulado de 4 LED para rostro y cuerpo.</li>
                        <li>Brazo de gravedad cero para un posicionamiento flexible.</li>
                        <li>Regulación de temperatura de refrigeración por aire forzado.</li>
                        <li>Tecnología de flujo de aire activo para la comodidad del paciente.</li>
                        <li>20 protocolos preestablecidos independientes, combinados y posteriores al tratamiento.</li>
                        <li>Protocolos personalizados por julios tiempo entregados.</li>
                        <li>Protocolos de terapia fotodinámica (TFD).</li>
                        <li>Configuraciones de potencia óptica variable.</li>
                        <li>Funcionamiento mediante pantalla táctil capacitiva a todo color.</li>
                        <li>Software totalmente actualizable.</li>
                      </ul>
                    </div>
                  </details>

                  <details className="group border-b border-slate-200">
                    <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between text-sm font-bold text-slate-900">
                      Tecnología
                      <span className="material-symbols-outlined text-base text-slate-500 group-open:rotate-180 transition-transform">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-sm text-slate-700 leading-relaxed space-y-3">
                      <p>
                        Se trata de LED de última generación con longitudes de onda azul 415 nm, roja 633 nm e
                        infrarroja 830 nm, optimizadas para penetración de luz en la piel con efectos
                        antienvejecimiento, antiinflamatorio y antibacteriano.
                      </p>
                      <p>
                        Las diferentes longitudes de onda pueden emitirse de forma individual o simultánea, maximizando
                        resultados y reduciendo tiempos de tratamiento.
                      </p>
                    </div>
                  </details>

                  <details className="group">
                    <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between text-sm font-bold text-slate-900">
                      Tratamientos
                      <span className="material-symbols-outlined text-base text-slate-500 group-open:rotate-180 transition-transform">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-sm text-slate-700">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Rejuvenecimiento facial.</li>
                        <li>Manchas de la cara.</li>
                        <li>Marcas de acné y cicatrices faciales.</li>
                        <li>Acné.</li>
                        <li>Poros, textura y calidad de la piel.</li>
                        <li>Rosácea, cuperosis y otras rojeces.</li>
                        <li>Psoriasis.</li>
                        <li>Celulitis.</li>
                        <li>Flacidez.</li>
                        <li>Estrías y cicatrices corporales.</li>
                        <li>Piernas cansadas.</li>
                      </ul>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </article>

          <article className="md:col-span-12 bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative bg-primary/10 p-10 min-h-[360px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-white/30 to-rose/20" />
                <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl bg-white shadow-lg border border-slate-100 overflow-hidden">
                  <img
                    className="w-full h-full object-contain p-6"
                    alt="Equipo LPG Cellu M6 Integral"
                    src="/media/lpg.jpg"
                  />
                </div>
              </div>

              <div className="p-10 flex flex-col">
                <div className="flex items-start justify-between gap-6 flex-wrap">
                  <div>
                    <h3 className="serif-title text-3xl text-slate-900">LPG</h3>
                    <p className="mt-1 text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Cellu M6 Integral</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-bold">
                      761 kg
                    </span>
                    <span className="inline-flex items-center rounded-full bg-rose/40 text-energetic-orange px-3 py-1 text-xs font-bold">
                      16 Hz
                    </span>
                    <span className="inline-flex items-center rounded-full bg-lemon/70 text-slate-900 px-3 py-1 text-xs font-bold">
                      690 mbar
                    </span>
                  </div>
                </div>

                <p className="mt-6 text-slate-600 leading-relaxed">
                  Endermologie de nueva generación para remodelación corporal y facial, activando el tejido desde
                  dentro para mejorar microcirculación, drenaje y firmeza sin procedimientos invasivos.
                </p>

                <div className="mt-8 border border-slate-200 rounded-xl overflow-hidden bg-slate-50/70">
                  <details className="group border-b border-slate-200">
                    <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between text-sm font-bold text-slate-900">
                      Descripción
                      <span className="material-symbols-outlined text-base text-slate-500 group-open:rotate-180 transition-transform">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-sm text-slate-700 leading-relaxed space-y-3">
                      <p>
                        La nueva aparatología Cellu M6 Integral incorpora rodillos más grandes que estimulan mejor la
                        canalización del sistema linfático y favorecen un drenaje más eficaz para arrastrar toxinas y
                        eliminarlas.
                      </p>
                      <p>
                        Aunque el Cellu M6 Keymodule sigue siendo una gran referencia, las mejoras de tecnología,
                        diseño y resultados de LPG Integral marcan un salto en cuidado corporal.
                      </p>
                      <p>
                        Su tecnología y técnica han mostrado gran eficacia, con resultados que satisfacen tanto a
                        profesionales como a clientes.
                      </p>
                    </div>
                  </details>

                  <details className="group border-b border-slate-200">
                    <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between text-sm font-bold text-slate-900">
                      Características
                      <span className="material-symbols-outlined text-base text-slate-500 group-open:rotate-180 transition-transform">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-sm text-slate-700">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Peso: 761 kg.</li>
                        <li>Dimensiones (longitud x anchura x altura): 78 x 68 x 116 cm.</li>
                        <li>Secuencias: de 1 a 16 Hz.</li>
                        <li>Fuerza de presión: 690 mbar.</li>
                        <li>Caudal: 185 m3/h.</li>
                        <li>Nivel sonoro: 56 dBA.</li>
                        <li>Características eléctricas: 100-240 V / 50-60 Hz / 625-650 W.</li>
                        <li>Pantalla táctil en color: 10,4".</li>
                        <li>Modo de ahorro de energía: sí.</li>
                        <li>Audio: sí.</li>
                        <li>Puerto USB: sí.</li>
                      </ul>
                    </div>
                  </details>

                  <details className="group border-b border-slate-200">
                    <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between text-sm font-bold text-slate-900">
                      Tecnología
                      <span className="material-symbols-outlined text-base text-slate-500 group-open:rotate-180 transition-transform">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-sm text-slate-700 leading-relaxed space-y-3">
                      <p>
                        Endermologie es una tecnología exclusiva de estimulación mecánica de tejidos conjuntivos y
                        musculares (mecanotransducción).
                      </p>
                      <p>
                        LPG Integral reactiva las células inactivas y las estimula para que funcionen de forma natural.
                        El sistema de rodillos controlados actúa sobre la piel y las células grasas, estimulando la
                        lipólisis, así como la producción de colágeno y elastina.
                      </p>
                    </div>
                  </details>

                  <details className="group">
                    <summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between text-sm font-bold text-slate-900">
                      Tratamientos
                      <span className="material-symbols-outlined text-base text-slate-500 group-open:rotate-180 transition-transform">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-sm text-slate-700">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Lipomassage (tratamientos corporales): reduce celulitis y piel de naranja.</li>
                        <li>Favorece liberación y eliminación de grasa localizada.</li>
                        <li>Remodela y redefine la silueta con efecto reafirmante.</li>
                        <li>Estimula circulación y reduce retención de líquidos.</li>
                        <li>Endermolift (tratamientos faciales): rejuvenecimiento natural del rostro.</li>
                        <li>Mejora óvalo facial y reduce arrugas y líneas de expresión.</li>
                        <li>Aporta luminosidad, jugosidad y efecto buena cara inmediato.</li>
                        <li>Reduce ojeras e hinchazón facial.</li>
                        <li>Tratamientos drenantes (también aptos para embarazadas).</li>
                        <li>Protocolos complementarios a inyecciones de ácido hialurónico o toxina botulínica.</li>
                        <li>Estimulación profunda de colágeno y elastina sin cirugía.</li>
                      </ul>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ReferenceCta() {
  return (
    <section className="py-20 bg-rose/10">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="serif-title text-4xl text-slate-900 mb-8">¿Listo para transformar tu bienestar?</h2>
        <p className="text-slate-600 text-lg mb-12">
          Agenda una consulta personalizada con nuestros especialistas y descubre el tratamiento ideal para tus
          necesidades.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a className="px-10 py-5 bg-energetic-orange text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all" href="#">
            Solicitar Cita Ahora
          </a>
          <a
            className="px-10 py-5 bg-white border border-slate-200 text-slate-800 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
            href="tel:+34000000000"
          >
            <span className="material-symbols-outlined">call</span>
            Llamar Directamente
          </a>
        </div>
      </div>
    </section>
  );
}

function ReferenceFooter() {
  return (
    <footer className="bg-slate-50 w-full py-12 border-t border-slate-200 flex flex-col items-center gap-4 px-8">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center gap-8">
        <div className="font-semibold text-slate-900 text-xl tracking-tight">Vanitas Vanitatis</div>
        <div className="flex flex-wrap justify-center gap-8">
          <a className="text-xs font-light text-slate-400 hover:text-primary transition-all" href="#">
            Privacy Policy
          </a>
          <a className="text-xs font-light text-slate-400 hover:text-primary transition-all" href="#">
            Legal Notice
          </a>
          <a className="text-xs font-light text-slate-400 hover:text-primary transition-all" href="#">
            Cookies
          </a>
        </div>
        <div className="flex gap-6">
          <a
            className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all"
            href="#"
          >
            <span className="material-symbols-outlined text-sm">share</span>
          </a>
          <a
            className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all"
            href="#"
          >
            <span className="material-symbols-outlined text-sm">location_on</span>
          </a>
        </div>
        <p className="text-xs font-light text-slate-400 mt-4">
          © 2024 Vanitas Vanitatis Santander. Clinical Excellence.
        </p>
      </div>
    </footer>
  );
}

export function CentroDeReferenciaPage() {
  return (
    <main className="font-display bg-white text-slate-800 antialiased">
      <SiteHeader active="centro-de-referencia" />
      <ReferenceHero />
      <TechnologySection />
      <ReferenceCta />
      <ReferenceFooter />
    </main>
  );
}
