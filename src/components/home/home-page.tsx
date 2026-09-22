import Image from "next/image";
import Link from "next/link";
import { AnimatedCounter } from "@/components/home/animated-counter";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export function HomePage() {
  return (
    <main className="bg-white text-vanitas-black font-display overflow-x-hidden">
      <SiteHeader active="inicio" />

      <section className="relative h-[86vh] min-h-[600px] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="https://lh3.googleusercontent.com/aida-public/AB6AXuAhAoy5ftmy2GSei5DNeRbOnLg6m7W6rIMPn-fTj4vKQMkP8w9GVOa8-Di-gjPbHSEkh8EwcmlujrVxzgH6-kNZecEOopq6Fe_NVhzK1xWSj3klca48BcocJlA33PqYRrnnvw0-tQBFZV6IzlnmaTyNMbn8GJvcz-ALdwQZT5d-rR43DTTO54Juhez0VZRg2N4LXfo6X4P96fnnEYNeWXU9c60yRvLAzxYONNbPjX6ww4YjGikuq9eX9DGndDT31CyoMF1q3JgBrrs"
            aria-label="Video de presentación de Vanitas Vanitatis"
          >
            <source src="/media/Vanitas-Vanitatis-feberro-25-1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-vanitas-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-vanitas-black/70 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-vanitas-black">
              <span className="material-symbols-outlined text-base text-primary">verified</span>
              Formaciones bonificadas FUNDAE
            </div>
            <h1 className="mt-8 serif-title text-4xl md:text-6xl text-white leading-[1.1]">
              Excelencia clínica para tu mejor versión
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-white/85 leading-relaxed">
              Diagnóstico personalizado y tecnología de grado médico en el centro de Santander.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-full bg-white text-vanitas-black px-7 py-4 text-sm font-semibold hover:bg-primary hover:text-white transition-colors duration-200"
              >
                Reservar cita
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
              <Link
                href="/tratamientos"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 text-white px-7 py-4 text-sm font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                Ver tratamientos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 px-6 border-b border-black/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <AnimatedCounter target={15} prefix="+" className="text-4xl font-bold mb-1 text-primary" />
            <p className="text-sm text-vanitas-black/60">años de experiencia clínica</p>
          </div>
          <div className="text-center md:text-left">
            <AnimatedCounter target={3000} suffix="+" className="text-4xl font-bold mb-1 text-primary" />
            <p className="text-sm text-vanitas-black/60">pacientes satisfechos</p>
          </div>
          <div className="text-center md:text-left">
            <AnimatedCounter target={100} suffix="%" className="text-4xl font-bold mb-1 text-primary" />
            <p className="text-sm text-vanitas-black/60">equipo médico certificado</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-4xl font-bold mb-1 text-primary">CE</p>
            <p className="text-sm text-vanitas-black/60">tecnología de vanguardia</p>
          </div>
        </div>
      </section>

      <section id="tratamientos" className="py-24 px-6 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Especialidades</p>
            <h2 className="serif-title text-4xl lg:text-5xl text-vanitas-black mb-4">
              Soluciones clínicas para cada objetivo
            </h2>
            <p className="text-vanitas-black/60">
              Medicina estética y bienestar corporal con protocolos basados en evidencia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "face",
                title: "Faciales",
                text: "Rejuvenecimiento facial, bioestimulación y salud cutánea avanzada.",
                href: "/tratamientos/facial",
              },
              {
                icon: "accessibility_new",
                title: "Corporales",
                text: "Remodelación, tratamiento de celulitis y reafirmación tisular.",
                href: "/tratamientos/corporal",
              },
              {
                icon: "medical_services",
                title: "Depilación",
                text: "Láser clínico de alta potencia para una eliminación permanente y segura.",
                href: "/laser",
              },
              {
                icon: "health_and_safety",
                title: "Medicina estética",
                text: "Procedimientos mínimamente invasivos con resultados naturales.",
                href: "/medicina",
              },
              {
                icon: "spa",
                title: "Masajes",
                text: "Terapia manual y drenaje linfático para recuperación y bienestar.",
                href: "/tratamientos/masajes",
              },
              {
                icon: "self_care",
                title: "Cuerpo & mente",
                text: "Enfoque holístico de salud preventiva y equilibrio interno.",
                href: "/bienestar",
              },
            ].map((item) => {
              const cardContent = (
                <>
                  <span className="material-symbols-outlined text-primary text-4xl mb-5">{item.icon}</span>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-vanitas-black/60 text-sm leading-relaxed">{item.text}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Saber más <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </span>
                </>
              );
              const borderCardClass =
                "bg-white p-8 cursor-pointer group border-8 border-primary/30 rounded-[2rem] hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-300";
              return item.href ? (
                <Link key={item.title} href={item.href} className={`${borderCardClass} block`}>
                  {cardContent}
                </Link>
              ) : (
                <div key={item.title} className={borderCardClass}>
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background-light py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Alta gama</p>
              <h2 className="serif-title text-4xl text-vanitas-black mb-3">Protocolos destacados</h2>
              <p className="text-vanitas-black/60">Tratamientos basados en evidencia clínica y resultados probados.</p>
            </div>
            <div className="flex gap-3">
              <button
                aria-label="Anterior"
                className="w-11 h-11 bg-white flex items-center justify-center border border-black/10 rounded-full hover:border-primary hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-xl">west</span>
              </button>
              <button
                aria-label="Siguiente"
                className="w-11 h-11 bg-white flex items-center justify-center border border-black/10 rounded-full hover:border-primary hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-xl">east</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                tag: "Top ventas",
                title: "HIFU Ultrasonidos",
                text: "Ultrasonidos focalizados de alta intensidad para un tensado cutáneo profundo y regeneración de colágeno.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjPOBUVCEXtB0sj6gbY4wgRx1RCK0tkc8FjXR-R9lg83gWwf_Nvr8Oq9yUrEISx5DKzSr4nfKPKc2ZxQZ5HBCY9PYWxhkW67vDcO5kAuLX4ZWLtPoIlzRRRpRr4hGQTHKAjk3WV3uuqE4d4Sd1zxRd9yyCoaHnGsZwseGSrFVf6UjzSyBXpWLPcCJ0jWkddVGmD225nx2wSK0FgDIlMSQHm0mXYun4PRYr1nkLnZTyU75geGsu8ZGupVJN1ctimoMf4Fl4xXSkK5k",
              },
              {
                tag: "Tecnología",
                title: "Dermapen",
                text: "Inducción de colágeno percutánea para la corrección de imperfecciones y revitalización epidérmica.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjy9Lq5LgJON1ZdIHxHlgAqqEj0HxP0V-iCTMMzF0Bg8k-NAgARCaBTmAIHt5ZKLa4Cj6q81BsRA5t_b8PQf3C0PUL4z8MtOHk818rQMhsAg9WxM66RJVyT4jtKdCXt7djPaO2ymQyk4pRiXoWH6wlf51qRNTc_jRM_dMa2qpT_GGAMX30QjWjZKiSibzX2cN18LVWtdyhovO3R8P56qCM0wz3mBm5ijy-FlndU9JMxj5VT53w5bJKRLA4tiyxB5TmC95nhJXZW9Y",
              },
              {
                tag: "Médico",
                title: "Ácido hialurónico",
                text: "Rellenos dérmicos de alta reticulación para el perfilado y volumetría facial con precisión médica.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD25uqlIApgZCWDLqg5vOJH6qyg84UeeKFI7VatvAQ5UyvRuwvNzHZzd8sSIBE_go9F3B49kEwLATyGeVwH3912vLr4SoJtvA8Q2vqzZsRXBObPwhlE8K5DLpuY93Naui_qXrqFb-er7Qqk1pyYyZZlcWSL8bKEo7gneNrKr0RADAu954El2NPdmOY_B9afNtoyXoxYwxW-um8AahnxAEZGIKMC2aHCGSMUe25ThzpQeoHDzstevcCClUVDvxPTYKAFhjl2FOYcrv0",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-clinical overflow-hidden border border-black/5 group transition-transform duration-300 ease-out hover:scale-[1.04] hover:shadow-xl hover:z-10 relative"
              >
                <div className="h-56 bg-gray-100 overflow-hidden relative">
                  <Image
                    alt={card.title}
                    className="object-cover grayscale-[15%] group-hover:grayscale-0 transition duration-700"
                    src={card.img}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 text-vanitas-black text-xs font-semibold px-3 py-1 rounded-full">
                    {card.tag}
                  </div>
                </div>
                <div className="p-7">
                  <h4 className="font-semibold text-lg mb-2">{card.title}</h4>
                  <p className="text-vanitas-black/60 text-sm mb-6 leading-relaxed">{card.text}</p>
                  <button className="w-full py-3.5 rounded-full border border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-all duration-300">
                    Ver detalles del protocolo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="serif-title text-4xl lg:text-5xl text-vanitas-black mb-4">Compromiso clínico</h2>
            <p className="text-vanitas-black/60 max-w-xl mx-auto">
              Tres pilares fundamentales que definen nuestra excelencia
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: "biotech",
                title: "Diagnóstico de precisión",
                text: "Sistemas de análisis digital de piel para determinar el tratamiento exacto que tu fisonomía requiere.",
              },
              {
                icon: "precision_manufacturing",
                title: "Tecnología certificada",
                text: "Aparatología con marcado CE médico, aprobada por organismos de salud internacionales.",
              },
              {
                icon: "clinical_notes",
                title: "Supervisión médica",
                text: "Protocolos diseñados y supervisados por especialistas en medicina estética.",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-7">
                  <span className="material-symbols-outlined text-primary text-4xl">{item.icon}</span>
                </div>
                <h4 className="text-lg font-semibold mb-3">{item.title}</h4>
                <p className="text-vanitas-black/60 leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-light py-24 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row gap-16 items-stretch">
          <div className="md:w-1/2 flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Unidad avanzada</p>
            <h2 className="serif-title text-4xl lg:text-5xl text-vanitas-black mb-6">
              Medicina estética avanzada
            </h2>
            <p className="text-vanitas-black/60 mb-10 text-lg leading-relaxed">
              Ciencia y arte en equilibrio. Las técnicas más avanzadas para optimizar tu salud estética con la máxima
              seguridad clínica.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
              <div>
                <h5 className="text-primary font-semibold text-sm mb-4">Área facial</h5>
                <ul className="space-y-3 text-sm text-vanitas-black/75">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span> Toxina
                    botulínica
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>{" "}
                    Bioestimuladores
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span> Peeling
                    médico
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-primary font-semibold text-sm mb-4">Área corporal & capilar</h5>
                <ul className="space-y-3 text-sm text-vanitas-black/75">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span> Mesoterapia
                    corporal
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>{" "}
                    Escleroterapia
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>{" "}
                    Bioestimulación capilar
                  </li>
                </ul>
              </div>
            </div>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-vanitas-black transition-all w-fit"
            >
              Consultoría médica gratuita
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </a>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-clinical">
              <Image
                alt="Entorno profesional de procedimiento clínico"
                className="object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsDC1mTM3CwWmUjoMkq77Z20sc9xAMbfmYSrBkHKB1OszWaltzj9C6puM9WEMQs6AocyUDxOUIgCI_bvVHgSef8RQUBGTFIYNjVsaabxYI1F33EjMnfEC1twp27U9Dv0pxJJji4BoFzoyJyOafERcdRfY1x5PxRdyajxQiUuZkc8TizfKM7Z5o5ATL1pnjLP2-qN-YhWX9z8QcZKcd1R8Wb64NjXFGjEhBmPl1_ViMMAxWK8-QIBxu_GfpUbnjmMjSN6CHJV2n0UQ"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 bg-background-light p-8 md:p-10 rounded-clinical">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-3xl text-white">school</span>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-vanitas-black">Vanitas Academy</h2>
              <p className="text-vanitas-black/60 text-sm mt-1">Excelencia en formación estética profesional</p>
            </div>
          </div>
          <button className="bg-primary text-white px-7 py-3.5 rounded-full font-semibold hover:bg-vanitas-black transition-all flex items-center gap-2 text-sm shrink-0">
            Ver programas académicos <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </div>
      </section>

      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="serif-title text-4xl lg:text-5xl text-center mb-16">Voces de confianza</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Elena Rodríguez",
                quote:
                  "La precisión diagnóstica fue la clave. El tratamiento de HIFU superó mis expectativas gracias al equipo clínico.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuHC10AmwghSwatvClnr-HumHArkuWeHOSWYdA22k0qdlF-qL80J3q7RaUqUqQBPZvBunGqlIvWXaq4wiL67Z06-a7E6_HLKYDC6aV-POntseAIBKqo4RnQJKswy41xldUezupLU_fCFG7zMf8KFTNFXmEq-3tD0vLBW-tJItpX3o_TQ3BxpSfuvuBHt5VX2UFdYhfIeyzssY-SK8DCzlFU5otxApFFag3bHJoYmaj2jKhRYkTga3IhMCC77NwfGxqWRtgik_xf5Y",
              },
              {
                name: "Marta García",
                quote:
                  "Años confiando en su tecnología láser. Resultados indoloros y una higiene hospitalaria impecable.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwPR7l6COeInGNW7Dor-vsJSy4ze6X5OaC6qA_3pWfHpXTPJDjggjh5xism-ECrunLSQTFBlxe_9MpZ_Cxl6Fpw8mFf6p5oT8RdI1AvA75jvHlCoohYXrE4luwCetiBo4KHaCoE3Y03b4rGwtU998EwfsqeFNCp41SitUldOi_QYMDcCdfa8vL1UGhig7P68tw2n5UdK8q4hIDGyIX46-wnlKR3cZ4qjNUkZttBK5h5wmzgVTZCDjQB6TJ-SkdsN9l1Qnbd6vhwZk",
              },
              {
                name: "Sonia Martín",
                quote:
                  "Formarse aquí es garantía de excelencia profesional. Su metodología clínica es superior a todo lo que conocía.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqm-FBKyDnJPeir-4MflaUlC3MnvMLwwBsj7Wy1gk85sEh0iQ5HWKaCZbWw9D8BwYjHQ8B0MlWvbNzLhGpoEmIf7qOKXsD3paHTErlmK1YVjQQdgZQVgEoeO3k3q_QvePUBlVCB71YWdqk9V-uY9OSl6KjlqgcLKffH0x319L4u5u2bjYN-VnGmeVgTVkCgITQ7JQ5dmxP8acXFP4irqZ5XI87GZ2GkWUuhoWtbXs8apYsS3zd2rA5s-t0MFOO9HaurY0yr4GiMxE",
              },
            ].map((t) => (
              <div key={t.name} className="bg-white p-8 rounded-clinical border border-black/5 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-50 relative">
                    <Image alt={t.name} className="object-cover" src={t.img} fill sizes="48px" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <div className="flex text-primary text-sm gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-base">
                          star
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-vanitas-black/70 leading-relaxed">&quot;{t.quote}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-light py-24 px-6 border-y border-black/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="serif-title text-4xl lg:text-5xl mb-4 text-center">Prescripción dermoestética</h2>
          <p className="text-vanitas-black/60 mb-14">Continúa tu tratamiento clínico en casa</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14 w-full">
            {[
              { icon: "clinical_notes", label: "Prescripción médica" },
              { icon: "verified_user", label: "Garantía de origen" },
              { icon: "contact_support", label: "Asesoría farmacéutica" },
              { icon: "encrypted", label: "Transacción segura" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white p-7 rounded-clinical flex flex-col items-center text-center border border-black/5"
              >
                <span className="material-symbols-outlined text-primary text-3xl mb-3">{item.icon}</span>
                <h5 className="font-semibold text-sm">{item.label}</h5>
              </div>
            ))}
          </div>
          <button className="bg-primary text-white px-10 py-4 rounded-full font-semibold text-sm hover:bg-vanitas-black transition-all">
            Explorar farmacia clínica
          </button>
        </div>
      </section>

      <section id="contacto" className="py-24 px-6 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Admisión de pacientes</p>
            <h2 className="serif-title text-4xl lg:text-5xl mb-6">Solicita tu consulta</h2>
            <p className="text-vanitas-black/60 mb-10">
              Diagnóstico personalizado con absoluta confidencialidad. Te responderemos en menos de 24 horas.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-vanitas-black/70 mb-2">Nombre completo</label>
                  <input
                    className="w-full border border-black/10 p-3.5 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary bg-background-light/60"
                    placeholder="Nombre y apellidos"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-vanitas-black/70 mb-2">Teléfono</label>
                  <input
                    className="w-full border border-black/10 p-3.5 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary bg-background-light/60"
                    placeholder="600 000 000"
                    type="tel"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-vanitas-black/70 mb-2">Especialidad de interés</label>
                <select className="w-full border border-black/10 p-3.5 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary bg-background-light/60">
                  <option>Diagnóstico facial HIFU</option>
                  <option>Depilación láser clínica</option>
                  <option>Medicina inyectable</option>
                  <option>Tratamiento corporal</option>
                  <option>Consulta general</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-vanitas-black/70 mb-2">
                  Observaciones (opcional)
                </label>
                <textarea
                  className="w-full border border-black/10 p-3.5 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary bg-background-light/60"
                  placeholder="Describe brevemente tus objetivos o consultas..."
                  rows={4}
                />
              </div>
              <button className="bg-primary text-white w-full py-4 rounded-full font-semibold hover:brightness-105 transition-all">
                Programar cita médica
              </button>
            </form>
          </div>
          <div className="flex flex-col">
            <div className="bg-background-light p-10 rounded-clinical mb-8 flex-grow">
              <h4 className="font-semibold text-lg mb-7 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                Sede Santander
              </h4>
              <div className="space-y-7 text-vanitas-black/75">
                <p className="text-lg leading-snug">
                  Calle Juan de Herrera, 12, 1º Izq.
                  <br />
                  39002 Santander, Cantabria
                </p>
                <div className="h-px bg-black/10" />
                <p className="flex items-center gap-3 font-semibold text-primary text-xl">
                  <span className="material-symbols-outlined">call</span> 670 216 216
                </p>
                <div className="pt-1">
                  <p className="text-sm font-medium text-vanitas-black/50 mb-3">Disponibilidad de servicio</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <p>
                      Lun - Vie: <span className="text-vanitas-black font-medium">10:00 - 20:00</span>
                    </p>
                    <p>
                      Sábados: <span className="text-vanitas-black font-medium">10:00 - 14:00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-64 bg-gray-100 rounded-clinical overflow-hidden relative">
              <iframe
                title="Ubicación de Vanitas Vanitatis en Santander"
                src="https://www.google.com/maps?q=43.4629099,-3.8074841&z=17&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://maps.app.goo.gl/fJYVwxczvUFexGMKA"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-white text-vanitas-black text-xs font-semibold px-3 py-2 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-base">directions</span>
                Cómo llegar
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
