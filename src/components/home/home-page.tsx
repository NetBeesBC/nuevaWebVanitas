import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";

export function HomePage() {
  return (
    <main className="bg-white text-vanitas-black font-display overflow-x-hidden">
      <SiteHeader active="inicio" />

      <section className="relative h-[72vh] min-h-[560px] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Video de presentación de Vanitas Vanitatis"
          >
            <source src="/media/Vanitas-Vanitatis-feberro-25-1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/45 via-primary/15 to-black/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-xl bg-lemon px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-vanitas-black shadow-lg">
              <span className="material-symbols-outlined text-base">verified</span>
              Formaciones Bonificadas FUNDAE
            </div>
            <h2 className="mt-8 serif-title text-4xl md:text-6xl text-white leading-[1.05] drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              Excelencia clínica para <br />
              <span className="text-lemon">tu mejor versión</span>
            </h2>
            <p className="mt-6 max-w-2xl border-l-4 border-lemon pl-5 text-base md:text-xl text-white/95 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
              Combinamos tecnología de grado médico con la máxima experiencia profesional en Santander.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary py-10 px-6 border-y-4 border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center text-white border-r border-white/20 last:border-0 py-4">
            <p className="text-5xl font-extrabold mb-1 tracking-tighter">+15</p>
            <p className="text-[11px] font-bold opacity-80 uppercase tracking-[0.2em]">
              años de experiencia clínica
            </p>
          </div>
          <div className="text-center text-white border-r border-white/20 last:border-0 py-4">
            <p className="text-5xl font-extrabold mb-1 tracking-tighter">3k+</p>
            <p className="text-[11px] font-bold opacity-80 uppercase tracking-[0.2em]">
              pacientes satisfechos
            </p>
          </div>
          <div className="text-center text-white border-r border-white/20 last:border-0 py-4">
            <div className="flex justify-center mb-2">
              <span className="material-symbols-outlined text-4xl">workspace_premium</span>
            </div>
            <p className="text-[11px] font-bold opacity-80 uppercase tracking-[0.2em]">
              equipo medico certificado
            </p>
          </div>
          <div className="text-center text-white py-4">
            <div className="flex justify-center mb-2">
              <span className="material-symbols-outlined text-4xl">biotech</span>
            </div>
            <p className="text-[11px] font-bold opacity-80 uppercase tracking-[0.2em]">
              tecnología de vanguardia
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="serif-title text-4xl lg:text-5xl text-vanitas-black mb-4">Especialidades Clínicas</h2>
              <p className="text-gray-500 font-medium">Soluciones integrales de medicina estética y bienestar corporal.</p>
            </div>
            <div className="h-[2px] flex-grow bg-gray-100 mb-4 mx-8 hidden lg:block" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="clinical-card bg-white p-10 hover:shadow-2xl transition-all duration-300 group cursor-pointer border-gray-200">
              <span className="material-symbols-outlined text-primary text-5xl mb-6 group-hover:scale-105 transition-transform">
                face
              </span>
              <h3 className="text-xl font-extrabold mb-3 uppercase tracking-tight">Faciales</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Unidad especializada en rejuvenecimiento facial, bioestimulación y salud cutánea avanzada.
              </p>
              <div className="w-10 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
            </div>
            <div className="clinical-card bg-white p-10 hover:shadow-2xl transition-all duration-300 group cursor-pointer border-gray-200">
              <span className="material-symbols-outlined text-primary text-5xl mb-6 group-hover:scale-105 transition-transform">
                accessibility_new
              </span>
              <h3 className="text-xl font-extrabold mb-3 uppercase tracking-tight">Corporales</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Protocolos de remodelación, tratamiento de celulitis y reafirmación tisular mediante aparatología médica.
              </p>
              <div className="w-10 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
            </div>
            <div className="clinical-card bg-white p-10 hover:shadow-2xl transition-all duration-300 group cursor-pointer border-gray-200">
              <span className="material-symbols-outlined text-primary text-5xl mb-6 group-hover:scale-105 transition-transform">
                medical_services
              </span>
              <h3 className="text-xl font-extrabold mb-3 uppercase tracking-tight">Depilación</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Unidad de láser clínico de alta potencia para una eliminación permanente segura y eficaz.
              </p>
              <div className="w-10 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
            </div>
            <div className="clinical-card bg-white p-10 hover:shadow-2xl transition-all duration-300 group cursor-pointer border-gray-200">
              <span className="material-symbols-outlined text-primary text-5xl mb-6 group-hover:scale-105 transition-transform">
                health_and_safety
              </span>
              <h3 className="text-xl font-extrabold mb-3 uppercase tracking-tight">Medicina Estética</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Procedimientos mínimamente invasivos bajo estricta supervisión facultativa con resultados naturales.
              </p>
              <div className="w-10 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
            </div>
            <div className="clinical-card bg-white p-10 hover:shadow-2xl transition-all duration-300 group cursor-pointer border-gray-200">
              <span className="material-symbols-outlined text-primary text-5xl mb-6 group-hover:scale-105 transition-transform">
                spa
              </span>
              <h3 className="text-xl font-extrabold mb-3 uppercase tracking-tight">Masajes</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Terapia manual y drenaje linfático especializado para recuperación y bienestar terapéutico.
              </p>
              <div className="w-10 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
            </div>
            <div className="clinical-card bg-white p-10 hover:shadow-2xl transition-all duration-300 group cursor-pointer border-gray-200">
              <span className="material-symbols-outlined text-primary text-5xl mb-6 group-hover:scale-105 transition-transform">
                self_care
              </span>
              <h3 className="text-xl font-extrabold mb-3 uppercase tracking-tight">Cuerpo &amp; Mente</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Enfoque holístico de salud preventiva y equilibrio interno para una belleza integral.
              </p>
              <div className="w-10 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-rose py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-black/5 pb-8">
            <div>
              <h2 className="serif-title text-4xl text-vanitas-black mb-3">Protocolos de Alta Gama</h2>
              <p className="text-gray-700 font-medium">Tratamientos destacados basados en evidencia clínica y resultados probados.</p>
            </div>
            <div className="flex gap-3 mt-6 md:mt-0">
              <button className="w-12 h-12 bg-white flex items-center justify-center border border-gray-300 rounded-clinical hover:bg-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined">west</span>
              </button>
              <button className="w-12 h-12 bg-white flex items-center justify-center border border-gray-300 rounded-clinical hover:bg-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined">east</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-clinical overflow-hidden shadow-md border border-gray-100 group">
              <div className="h-56 bg-gray-200 overflow-hidden relative">
                <img
                  alt="HIFU Ultrasonidos procedure"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjPOBUVCEXtB0sj6gbY4wgRx1RCK0tkc8FjXR-R9lg83gWwf_Nvr8Oq9yUrEISx5DKzSr4nfKPKc2ZxQZ5HBCY9PYWxhkW67vDcO5kAuLX4ZWLtPoIlzRRRpRr4hGQTHKAjk3WV3uuqE4d4Sd1zxRd9yyCoaHnGsZwseGSrFVf6UjzSyBXpWLPcCJ0jWkddVGmD225nx2wSK0FgDIlMSQHm0mXYun4PRYr1nkLnZTyU75geGsu8ZGupVJN1ctimoMf4Fl4xXSkK5k"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm">
                  Top Ventas
                </div>
              </div>
              <div className="p-8">
                <h4 className="font-black text-xl mb-3 uppercase tracking-tight">HIFU Ultrasonidos</h4>
                <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                  Tecnología de ultrasonidos focalizados de alta intensidad para un tensado cutáneo profundo y regeneración de colágeno.
                </p>
                <button className="w-full py-4 rounded-clinical border-2 border-energetic-orange text-energetic-orange font-black text-xs uppercase tracking-widest hover:bg-energetic-orange hover:text-white transition-all duration-300">
                  Detalles del Protocolo
                </button>
              </div>
            </div>
            <div className="bg-white rounded-clinical overflow-hidden shadow-md border border-gray-100 group">
              <div className="h-56 bg-gray-200 overflow-hidden relative">
                <img
                  alt="Dermapen clinical micro-needling"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjy9Lq5LgJON1ZdIHxHlgAqqEj0HxP0V-iCTMMzF0Bg8k-NAgARCaBTmAIHt5ZKLa4Cj6q81BsRA5t_b8PQf3C0PUL4z8MtOHk818rQMhsAg9WxM66RJVyT4jtKdCXt7djPaO2ymQyk4pRiXoWH6wlf51qRNTc_jRM_dMa2qpT_GGAMX30QjWjZKiSibzX2cN18LVWtdyhovO3R8P56qCM0wz3mBm5ijy-FlndU9JMxj5VT53w5bJKRLA4tiyxB5TmC95nhJXZW9Y"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm">
                  Tecnología
                </div>
              </div>
              <div className="p-8">
                <h4 className="font-black text-xl mb-3 uppercase tracking-tight">Dermapen</h4>
                <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                  Inducción de colágeno percutánea para la corrección de imperfecciones, cicatrices y revitalización epidérmica integral.
                </p>
                <button className="w-full py-4 rounded-clinical border-2 border-energetic-orange text-energetic-orange font-black text-xs uppercase tracking-widest hover:bg-energetic-orange hover:text-white transition-all duration-300">
                  Detalles del Protocolo
                </button>
              </div>
            </div>
            <div className="bg-white rounded-clinical overflow-hidden shadow-md border border-gray-100 group">
              <div className="h-56 bg-gray-200 overflow-hidden relative">
                <img
                  alt="Medical filler procedure"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD25uqlIApgZCWDLqg5vOJH6qyg84UeeKFI7VatvAQ5UyvRuwvNzHZzd8sSIBE_go9F3B49kEwLATyGeVwH3912vLr4SoJtvA8Q2vqzZsRXBObPwhlE8K5DLpuY93Naui_qXrqFb-er7Qqk1pyYyZZlcWSL8bKEo7gneNrKr0RADAu954El2NPdmOY_B9afNtoyXoxYwxW-um8AahnxAEZGIKMC2aHCGSMUe25ThzpQeoHDzstevcCClUVDvxPTYKAFhjl2FOYcrv0"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm">
                  Médico
                </div>
              </div>
              <div className="p-8">
                <h4 className="font-black text-xl mb-3 uppercase tracking-tight">Ácido Hialurónico</h4>
                <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                  Rellenos dérmicos de alta reticulación para el perfilado, volumetría facial y tratamiento de surcos con precisión médica.
                </p>
                <button className="w-full py-4 rounded-clinical border-2 border-energetic-orange text-energetic-orange font-black text-xs uppercase tracking-widest hover:bg-energetic-orange hover:text-white transition-all duration-300">
                  Detalles del Protocolo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="serif-title text-4xl lg:text-5xl text-vanitas-black mb-4">Compromiso Clínico</h2>
            <p className="text-gray-500 font-medium max-w-2xl mx-auto uppercase tracking-widest text-xs">
              Tres pilares fundamentales que definen nuestra excelencia
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 border-3 border-energetic-orange/20 rounded-clinical flex items-center justify-center mb-8 rotate-3 hover:rotate-0 transition-all duration-500">
                <span className="material-symbols-outlined text-energetic-orange text-5xl">biotech</span>
              </div>
              <h4 className="text-xl font-black mb-4 uppercase tracking-tighter">Diagnóstico de Precisión</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                Utilizamos sistemas de análisis digital de piel para determinar el tratamiento exacto que su fisonomía requiere.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 border-3 border-energetic-orange/20 rounded-clinical flex items-center justify-center mb-8 -rotate-3 hover:rotate-0 transition-all duration-500">
                <span className="material-symbols-outlined text-energetic-orange text-5xl">precision_manufacturing</span>
              </div>
              <h4 className="text-xl font-black mb-4 uppercase tracking-tighter">Tecnología Certificada</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                Solo utilizamos aparatología con marcado CE Médico y aprobada por organismos de salud internacionales.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 border-3 border-energetic-orange/20 rounded-clinical flex items-center justify-center mb-8 rotate-3 hover:rotate-0 transition-all duration-500">
                <span className="material-symbols-outlined text-energetic-orange text-5xl">clinical_notes</span>
              </div>
              <h4 className="text-xl font-black mb-4 uppercase tracking-tighter">Supervisión Médica</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                Todos nuestros protocolos estéticos están diseñados y supervisados por especialistas en medicina estética.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background-light py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row gap-20 items-stretch">
          <div className="md:w-1/2 flex flex-col justify-center">
            <div className="inline-block w-16 h-1 bg-primary mb-8" />
            <h2 className="serif-title text-4xl lg:text-5xl text-vanitas-black mb-8">
              Unidad de Medicina <br />
              Estética Avanzada
            </h2>
            <p className="text-gray-600 mb-12 text-lg leading-relaxed font-medium">
              Ciencia y arte en equilibrio. Disponemos de las técnicas más avanzadas para optimizar su salud estética con la máxima seguridad clínica.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
              <div className="border-l-2 border-primary/30 pl-6">
                <h5 className="text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-5">Área Facial</h5>
                <ul className="space-y-4 text-sm font-bold text-gray-700">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span> Toxina Botulínica
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span> Bioestimuladores
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span> Peeling Médico
                  </li>
                </ul>
              </div>
              <div className="border-l-2 border-primary/30 pl-6">
                <h5 className="text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-5">Área Corporal &amp; Capilar</h5>
                <ul className="space-y-4 text-sm font-bold text-gray-700">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span> Mesoterapia Corporal
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span> Escleroterapia
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span> Bioestimulación Capilar
                  </li>
                </ul>
              </div>
            </div>
            <button className="bg-energetic-orange text-white px-12 py-5 rounded-clinical font-black shadow-xl hover:translate-y-[-2px] transition-all uppercase tracking-widest text-sm w-fit">
              Consultoría Médica Gratuita
            </button>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4 rounded-clinical" />
            <div className="relative h-full min-h-[500px] overflow-hidden rounded-clinical shadow-2xl border border-white">
              <img
                alt="Clinical procedure professional environment"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsDC1mTM3CwWmUjoMkq77Z20sc9xAMbfmYSrBkHKB1OszWaltzj9C6puM9WEMQs6AocyUDxOUIgCI_bvVHgSef8RQUBGTFIYNjVsaabxYI1F33EjMnfEC1twp27U9Dv0pxJJji4BoFzoyJyOafERcdRfY1x5PxRdyajxQiUuZkc8TizfKM7Z5o5ATL1pnjLP2-qN-YhWX9z8QcZKcd1R8Wb64NjXFGjEhBmPl1_ViMMAxWK8-QIBxu_GfpUbnjmMjSN6CHJV2n0UQ"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-lemon py-16 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 bg-white p-8 md:p-12 border border-gray-200 shadow-xl rounded-clinical">
          <div className="flex items-center gap-8">
            <div className="w-20 h-20 bg-vanitas-black rounded-clinical flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-5xl text-lemon">school</span>
            </div>
            <div>
              <h2 className="text-3xl font-black text-vanitas-black uppercase tracking-tight">Vanitas Academy</h2>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-[11px] mt-1">
                Excelencia en formación estética profesional
              </p>
            </div>
          </div>
          <button className="bg-vanitas-black text-white px-10 py-5 rounded-clinical font-black hover:bg-gray-800 transition-all flex items-center gap-3 uppercase tracking-widest text-sm">
            Ver Programas Académicos <span className="material-symbols-outlined">arrow_right_alt</span>
          </button>
        </div>
      </section>

      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="serif-title text-4xl lg:text-5xl text-center mb-20">Voces de Confianza</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-clinical shadow-sm border border-gray-100 flex flex-col relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full border-2 border-primary p-0.5 overflow-hidden bg-gray-50">
                  <img
                    alt="Medical clinic patient avatar"
                    className="w-full h-full object-cover rounded-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuHC10AmwghSwatvClnr-HumHArkuWeHOSWYdA22k0qdlF-qL80J3q7RaUqUqQBPZvBunGqlIvWXaq4wiL67Z06-a7E6_HLKYDC6aV-POntseAIBKqo4RnQJKswy41xldUezupLU_fCFG7zMf8KFTNFXmEq-3tD0vLBW-tJItpX3o_TQ3BxpSfuvuBHt5VX2UFdYhfIeyzssY-SK8DCzlFU5otxApFFag3bHJoYmaj2jKhRYkTga3IhMCC77NwfGxqWRtgik_xf5Y"
                  />
                </div>
                <div>
                  <p className="font-black text-sm uppercase tracking-widest">Elena Rodríguez</p>
                  <div className="flex text-lemon text-xs">
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed mb-6 font-medium">
                &quot;La precisión diagnóstica fue la clave. El tratamiento de HIFU superó mis expectativas gracias al equipo clínico.&quot;
              </p>
              <span className="absolute top-10 right-10 material-symbols-outlined text-gray-100 text-6xl rotate-180">
                format_quote
              </span>
            </div>
            <div className="bg-white p-10 rounded-clinical shadow-sm border border-gray-100 flex flex-col relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full border-2 border-primary p-0.5 overflow-hidden bg-gray-50">
                  <img
                    alt="Medical clinic patient avatar"
                    className="w-full h-full object-cover rounded-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwPR7l6COeInGNW7Dor-vsJSy4ze6X5OaC6qA_3pWfHpXTPJDjggjh5xism-ECrunLSQTFBlxe_9MpZ_Cxl6Fpw8mFf6p5oT8RdI1AvA75jvHlCoohYXrE4luwCetiBo4KHaCoE3Y03b4rGwtU998EwfsqeFNCp41SitUldOi_QYMDcCdfa8vL1UGhig7P68tw2n5UdK8q4hIDGyIX46-wnlKR3cZ4qjNUkZttBK5h5wmzgVTZCDjQB6TJ-SkdsN9l1Qnbd6vhwZk"
                  />
                </div>
                <div>
                  <p className="font-black text-sm uppercase tracking-widest">Marta García</p>
                  <div className="flex text-lemon text-xs">
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed mb-6 font-medium">
                &quot;Años confiando en su tecnología láser. Resultados indoloros y una higiene hospitalaria impecable.&quot;
              </p>
              <span className="absolute top-10 right-10 material-symbols-outlined text-gray-100 text-6xl rotate-180">
                format_quote
              </span>
            </div>
            <div className="bg-white p-10 rounded-clinical shadow-sm border border-gray-100 flex flex-col relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full border-2 border-primary p-0.5 overflow-hidden bg-gray-50">
                  <img
                    alt="Medical clinic patient avatar"
                    className="w-full h-full object-cover rounded-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqm-FBKyDnJPeir-4MflaUlC3MnvMLwwBsj7Wy1gk85sEh0iQ5HWKaCZbWw9D8BwYjHQ8B0MlWvbNzLhGpoEmIf7qOKXsD3paHTErlmK1YVjQQdgZQVgEoeO3k3q_QvePUBlVCB71YWdqk9V-uY9OSl6KjlqgcLKffH0x319L4u5u2bjYN-VnGmeVgTVkCgITQ7JQ5dmxP8acXFP4irqZ5XI87GZ2GkWUuhoWtbXs8apYsS3zd2rA5s-t0MFOO9HaurY0yr4GiMxE"
                  />
                </div>
                <div>
                  <p className="font-black text-sm uppercase tracking-widest">Sonia Martín</p>
                  <div className="flex text-lemon text-xs">
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed mb-6 font-medium">
                &quot;Formarse aquí es garantía de excelencia profesional. Su metodología clínica es superior a todo lo que conocía.&quot;
              </p>
              <span className="absolute top-10 right-10 material-symbols-outlined text-gray-100 text-6xl rotate-180">
                format_quote
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-rose py-24 px-6 border-y border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="serif-title text-4xl lg:text-5xl mb-6 text-center">Prescripción Dermoestética</h2>
          <p className="text-gray-700 font-bold uppercase tracking-[0.2em] text-xs mb-16">
            Continúe su tratamiento clínico en el hogar
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 w-full">
            <div className="bg-white p-8 rounded-clinical flex flex-col items-center text-center shadow-sm border border-gray-100">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">clinical_notes</span>
              <h5 className="font-black text-xs uppercase tracking-widest">Prescripción Médica</h5>
            </div>
            <div className="bg-white p-8 rounded-clinical flex flex-col items-center text-center shadow-sm border border-gray-100">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">verified_user</span>
              <h5 className="font-black text-xs uppercase tracking-widest">Garantía de Origen</h5>
            </div>
            <div className="bg-white p-8 rounded-clinical flex flex-col items-center text-center shadow-sm border border-gray-100">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">contact_support</span>
              <h5 className="font-black text-xs uppercase tracking-widest">Asesoría Farmacéutica</h5>
            </div>
            <div className="bg-white p-8 rounded-clinical flex flex-col items-center text-center shadow-sm border border-gray-100">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">encrypted</span>
              <h5 className="font-black text-xs uppercase tracking-widest">Transacción Segura</h5>
            </div>
          </div>
          <button className="bg-energetic-orange text-white px-16 py-6 rounded-clinical font-black text-sm shadow-xl hover:brightness-105 transition-all uppercase tracking-[0.2em]">
            Explorar Farmacia Clínica
          </button>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <div className="inline-block w-12 h-1 bg-primary mb-6" />
            <h2 className="serif-title text-4xl lg:text-5xl mb-6">Admisión de Pacientes</h2>
            <p className="text-gray-600 mb-12 font-medium">
              Solicite una consulta inicial para un diagnóstico personalizado. Nuestro equipo médico evaluará su caso con absoluta confidencialidad.
            </p>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">
                    Nombre Completo
                  </label>
                  <input
                    className="w-full border-gray-200 p-4 focus:ring-primary focus:border-primary bg-gray-50/50"
                    placeholder="Nombre y Apellidos"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">
                    Teléfono de Contacto
                  </label>
                  <input
                    className="w-full border-gray-200 p-4 focus:ring-primary focus:border-primary bg-gray-50/50"
                    placeholder="600 000 000"
                    type="tel"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">
                  Especialidad de Interés
                </label>
                <select className="w-full border-gray-200 p-4 focus:ring-primary focus:border-primary bg-gray-50/50">
                  <option>Diagnóstico Facial HIFU</option>
                  <option>Depilación Láser Clínica</option>
                  <option>Medicina Inyectable</option>
                  <option>Tratamiento Corporal</option>
                  <option>Consulta General</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">
                  Observaciones Clínicas (Opcional)
                </label>
                <textarea
                  className="w-full border-gray-200 p-4 focus:ring-primary focus:border-primary bg-gray-50/50"
                  placeholder="Describa brevemente sus objetivos o consultas..."
                  rows={4}
                />
              </div>
              <button className="bg-primary text-white w-full py-5 rounded-clinical font-black text-sm shadow-lg hover:brightness-105 transition-all uppercase tracking-[0.2em]">
                Programar Cita Médica
              </button>
            </form>
          </div>
          <div className="flex flex-col">
            <div className="bg-background-light p-12 border border-gray-200 rounded-clinical mb-10 flex-grow">
              <h4 className="font-black text-xl uppercase tracking-tighter mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
                Sede Santander
              </h4>
              <div className="space-y-8 text-gray-700">
                <p className="font-bold text-lg leading-snug">
                  Calle Juan de Herrera, 12, 1º Izq.
                  <br />
                  39002 Santander, Cantabria
                </p>
                <div className="h-[1px] bg-gray-200" />
                <p className="flex items-center gap-3 font-black text-primary text-xl">
                  <span className="material-symbols-outlined">call</span> 670 216 216
                </p>
                <div className="pt-2">
                  <p className="font-black text-[10px] uppercase tracking-widest text-gray-400 mb-4">
                    Disponibilidad de Servicio
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm font-bold">
                    <p>
                      Lun - Vie: <span className="text-vanitas-black">10:00 - 20:00</span>
                    </p>
                    <p>
                      Sábados: <span className="text-vanitas-black">10:00 - 14:00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-72 bg-gray-200 rounded-clinical overflow-hidden relative border border-gray-200 shadow-inner">
              <img
                alt="Map location santander clinic"
                className="w-full h-full object-cover grayscale opacity-50"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFD8P0QEWv7-0oiqn_0-3jcadLp9Jo2K4feaZX4B3g6RNfDx9OuqfDlpH0jA-O-TJV8XtfCy5Z91Nn67EzUWj8YeI_DLYNpaPL2sETCYkfc03rc8_e9AChXPbmMffZiA6ra3VTzBLWvk7LCQkPpYIhg0xdrnzYj9XiLxPf2krl3kT9HnCxviM6J_iMYzI23bH2bT6bCqtOFDj5BcGJUGsJwmCrhCethm7sTINy4qMil1SdKPMTDH2RyE2NkMtlhZp0nNMvthjT8p8"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded-full border-2 border-white shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20 border-b border-white/10 pb-20">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-4xl">medical_services</span>
                <div>
                  <h2 className="font-black text-3xl tracking-tighter leading-none">VANITAS</h2>
                  <p className="text-[9px] font-bold opacity-70 tracking-[0.2em] uppercase">Medical Center</p>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed font-medium">
                Líderes en medicina estética avanzada y bienestar clínico en Santander. Una trayectoria de más de 15 años fundamentada en la precisión y la confianza.
              </p>
            </div>
            <div>
              <h5 className="font-black mb-8 text-vanitas-black/90 uppercase text-xs tracking-widest">Unidades Médicas</h5>
              <ul className="space-y-4 text-sm font-bold text-white/80">
                <li>
                  <a className="hover:text-vanitas-black transition-colors" href="#">
                    Dermoestética Facial
                  </a>
                </li>
                <li>
                  <a className="hover:text-vanitas-black transition-colors" href="#">
                    Remodelación Corporal
                  </a>
                </li>
                <li>
                  <a className="hover:text-vanitas-black transition-colors" href="#">
                    Plataforma Láser
                  </a>
                </li>
                <li>
                  <a className="hover:text-vanitas-black transition-colors" href="#">
                    Medicina Regenerativa
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-black mb-8 text-vanitas-black/90 uppercase text-xs tracking-widest">Área Institucional</h5>
              <ul className="space-y-4 text-sm font-bold text-white/80">
                <li>
                  <a className="hover:text-vanitas-black transition-colors" href="#">
                    Formación Académica
                  </a>
                </li>
                <li>
                  <a className="hover:text-vanitas-black transition-colors" href="#">
                    Dermocosmética Online
                  </a>
                </li>
                <li>
                  <a className="hover:text-vanitas-black transition-colors" href="#">
                    Código Ético
                  </a>
                </li>
                <li>
                  <a className="hover:text-vanitas-black transition-colors" href="#">
                    Publicaciones Médicas
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-start gap-8">
              <div className="bg-white p-5 rounded-clinical border border-white/20 w-full md:w-fit">
                <img
                  alt="Government digital grant badge"
                  className="h-10 w-auto object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxX4JofYfh2bx4NMFNYL8HeA2gECA-7KPnM7j2CF4uH9OnWlwlDOeVtdWtBtpZKTayxPPm4eXsyPWipJ7WnykCfrdZDglLnmgz91T8s2YOocTt6lWxNuuoCteUX7NGZYBXdU1PfMoJXx8Fog-2NGhE6Xm-HZ-9ag4TzcqMVQxeeC_mF0HhB739zrjspTrQ-4m2esWp21MpmYno6McBsb7v_aSfLBEeLKhmapeL1bPtdlzpOfN137By-lhVn24t8ymn7QKhkDoS2Tk"
                />
                <p className="text-[9px] text-gray-500 mt-3 text-center uppercase font-black tracking-widest">Kit Digital 2024</p>
              </div>
              <div className="flex gap-5">
                <a
                  className="w-11 h-11 rounded-clinical border-2 border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300"
                  href="#"
                >
                  <span className="material-symbols-outlined text-xl">brand_awareness</span>
                </a>
                <a
                  className="w-11 h-11 rounded-clinical border-2 border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300"
                  href="#"
                >
                  <span className="material-symbols-outlined text-xl">social_leaderboard</span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-bold text-white/50 uppercase tracking-widest">
            <p>© 2024 Vanitas Vanitatis. Clínica de Medicina Estética. Todos los derechos reservados.</p>
            <div className="flex gap-10">
              <a className="hover:text-white transition" href="#">
                Aviso Legal
              </a>
              <a className="hover:text-white transition" href="#">
                Privacidad de Datos
              </a>
              <a className="hover:text-white transition" href="#">
                Política de Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
