import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";

function AboutHero() {
  return (
    <section className="relative h-[460px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          alt="Interior de clínica médica estética en Santander"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhAoy5ftmy2GSei5DNeRbOnLg6m7W6rIMPn-fTj4vKQMkP8w9GVOa8-Di-gjPbHSEkh8EwcmlujrVxzgH6-kNZecEOopq6Fe_NVhzK1xWSj3klca48BcocJlA33PqYRrnnvw0-tQBFZV6IzlnmaTyNMbn8GJvcz-ALdwQZT5d-rR43DTTO54Juhez0VZRg2N4LXfo6X4P96fnnEYNeWXU9c60yRvLAzxYONNbPjX6ww4YjGikuq9eX9DGndDT31CyoMF1q3JgBrrs"
        />
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" />
      </div>
      <div className="relative z-10 text-center px-6">
        <nav className="flex justify-center space-x-2 text-white/80 text-xs tracking-widest uppercase mb-6">
          <Link className="hover:text-primary transition-colors" href="/">
            Inicio
          </Link>
          <span>&gt;</span>
          <span className="text-white font-semibold">Quiénes Somos</span>
        </nav>
        <h1 className="text-4xl md:text-6xl serif-title text-white max-w-4xl mx-auto leading-tight">
          Excelencia y Bienestar en el Corazón de Santander
        </h1>
      </div>
    </section>
  );
}

export function QuienesSomosPage() {
  return (
    <main className="bg-white text-slate-800 font-display selection:bg-primary/20">
      <SiteHeader active="quienes-somos" />
      <div>
        <AboutHero />
        <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-2 items-center">
            <div className="space-y-7 relative z-10 lg:pr-6">
              <div className="inline-block px-4 py-1 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase rounded-full">
                Teresa Iglesias
              </div>
              <h2 className="text-3xl md:text-4xl serif-title text-slate-900 leading-tight">
                Vanitas Vanitatis: Un referente en salud y belleza integral
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  Teresa Iglesias, desde su amplia experiencia en la gestión de personas para diversas multinacionales, y como experta en Dirección de Equipos reconocida en el sector, ha creado un nuevo concepto de clínica estética especializada en el mejor cuidado para TI. Tratamientos médico estéticos con la más avanzada tecnología en belleza.
                </p>
                <p>
                  Iglesias emprendedora, manager y HR director en diversas empresas aboga por el talento como el mayor recurso que pueden ofrecer hoy las personas en el ámbito laboral. Talento que va a perdurar y marcar la diferencia también en VV por mucho que la digitalización y la robotización sigan avanzando a pasos agigantados. 
                </p>
              </div>
              <div className="pt-8 border-l-4 border-[#EE7633] pl-8 italic relative">
                <span className="absolute -left-3 -top-4 text-6xl text-[#EE7633]/20 serif-title">&quot;</span>
                <p className="text-xl text-slate-800 serif-title mb-4">
                  &quot;Vanitas es un Centro Médico Estético de salud y belleza situado en pleno centro de Santander.
                   En Vanitas creemos en los tratamientos de belleza que te ayudan a sentirte bien por dentro y por fuera
                  .&quot;
                </p>
                <cite className="text-sm font-bold text-slate-500 uppercase tracking-widest not-italic">
                  — Teresa Iglesias CEO y fundadora de vanitas Vanitatis
                </cite>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end lg:-ml-16 xl:-ml-20">
              <img
                className="w-full max-w-[560px] h-auto object-contain"
                alt="Retrato profesional de Teresa Iglesias en entorno clínico"
                src="/media/Teresa-Iglesias.png"
              />
            </div>
          </div>
        </section>
        <section className="py-24 bg-[#F7F7F7]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl serif-title text-slate-900 mb-4">Nuestra Filosofía</h2>
              <div className="h-1 w-20 bg-primary mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-primary">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Moderna y Rigurosa</h3>
                <p className="text-slate-600 leading-relaxed">
                  Aplicamos protocolos médicos estrictos con la tecnología más avanzada del mercado estético
                  internacional.
                </p>
              </article>
              <article className="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-[#EE7633]">
                <div className="w-12 h-12 bg-[#EE7633]/10 rounded-full flex items-center justify-center text-[#EE7633] mb-6">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Asequible y Cercana</h3>
                <p className="text-slate-600 leading-relaxed">
                  Creemos que la medicina estética de alta calidad debe ser accesible, ofreciendo soluciones honestas
                  para todos.
                </p>
              </article>
              <article className="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-primary">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined">clinical_notes</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Prevención Personalizada</h3>
                <p className="text-slate-600 leading-relaxed">
                  Nos enfocamos en la prevención del envejecimiento mediante tratamientos diseñados exclusivamente para
                  tu piel.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl serif-title text-slate-900 mb-4 uppercase tracking-wider">
              El Equipo de Vanitas
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto italic">
              Profesionales comprometidas con tu bienestar y seguridad clínica.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto justify-items-center">
            <article className="group text-center">
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-primary rounded-full scale-0 group-hover:scale-105 transition-transform duration-500 opacity-20" />
                <img
                  className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg mx-auto"
                  alt="Andrea Peña Fernández, asesora clínica"
                  src="/media/Andrea%20Pe%C3%B1a.jpg"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Andrea Peña Fernández</h3>
            </article>
            <article className="group text-center">
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-primary rounded-full scale-0 group-hover:scale-105 transition-transform duration-500 opacity-20" />
                <img
                  className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg mx-auto"
                  alt="Sonia Mendiguchia, especialista senior"
                  src="/media/Sonia%20Mendiguchia.jpg"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Sonia Mendiguchia</h3>
            </article>
          </div>
        </section>
        <section className="bg-[#FFE864] py-16 px-6 lg:px-12 overflow-hidden relative">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-900">school</span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 uppercase">Vanitas Academy &amp; Formación</h2>
              </div>
              <p className="text-slate-800 text-lg font-medium max-w-2xl">
                Comprometidos con la excelencia profesional. Ofrecemos formaciones bonificadas por{" "}
                <span className="font-bold">FUNDAE</span> para elevar los estándares del sector estético.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="bg-white text-slate-900 px-8 py-4 rounded-lg font-bold text-sm tracking-widest uppercase shadow-xl hover:bg-slate-50 transition-colors">
                Saber más sobre formación
              </button>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full" />
        </section>
        <section className="bg-[#EE7633] py-20 px-6 lg:px-12 text-center text-white relative">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl serif-title mb-8">Ven a conocernos</h2>
            <p className="text-white/90 text-xl mb-12 leading-relaxed">
              Estamos listos para escucharte y diseñar el plan que mejor se adapte a tus objetivos de salud y belleza.
            </p>
            <button className="bg-white text-[#EE7633] px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-slate-100 transition-all shadow-2xl">
              Reserva tu diagnóstico gratuito
            </button>
          </div>
        </section>
        <footer className="bg-slate-50 border-t border-slate-200 w-full py-12 px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
            <div className="text-lg serif-title italic text-[#00B3BA]">Vanitas Vanitatis</div>
            <div className="flex flex-wrap justify-center gap-6">
              <a className="text-xs tracking-wide text-slate-500 hover:text-[#EE7633] underline transition-all" href="#">
                Aviso Legal
              </a>
              <a className="text-xs tracking-wide text-slate-500 hover:text-[#EE7633] underline transition-all" href="#">
                Privacidad
              </a>
              <a className="text-xs tracking-wide text-slate-500 hover:text-[#EE7633] underline transition-all" href="#">
                Cookies
              </a>
              <a className="text-xs tracking-wide text-slate-500 hover:text-[#EE7633] underline transition-all" href="#">
                Instagram
              </a>
            </div>
            <div className="text-xs tracking-wide text-slate-500">
              © 2024 Vanitas Vanitatis Santander. Belleza y Bienestar Premium.
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
