"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CATEGORIES, products } from "@/data/tienda";

const WHATSAPP_BASE =
  "https://api.whatsapp.com/send?phone=34670216216&text=Hola%20Vanitas%20Vanitatis%2C%20me%20gustar%C3%ADa%20consultar%20disponibilidad%20de%3A%20";

export function TiendaPage() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]["key"]>("todos");

  const filtered = category === "todos" ? products : products.filter((p) => p.category === category);

  return (
    <main className="font-display bg-white text-vanitas-black antialiased">
      <SiteHeader active="tienda" />

      <section className="pt-40 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-vanitas-black/50 mb-6">
            <Link className="hover:text-primary transition-colors" href="/">
              Inicio
            </Link>
            <span>/</span>
            <span className="text-vanitas-black font-medium">Tienda</span>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Tienda</p>
          <h1 className="serif-title text-4xl md:text-5xl text-vanitas-black leading-[1.1] mb-6">
            Dermocosmética profesional
          </h1>
          <p className="text-lg text-vanitas-black/60 leading-relaxed max-w-2xl">
            Los mismos productos que usamos en cabina, disponibles para continuar tu tratamiento en casa. Consulta
            disponibilidad y te asesoramos sin compromiso.
          </p>
        </div>
      </section>

      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              onClick={() => setCategory(c.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors ${
                category === c.key
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-vanitas-black/70 border-black/10 hover:border-primary hover:text-primary"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div key={product.slug} className="clinical-card bg-white overflow-hidden flex flex-col">
              <div className="h-48 bg-background-light relative flex items-center justify-center p-6">
                <Image
                  alt={product.name}
                  src={product.image}
                  fill
                  className="object-contain p-6"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{product.brand}</p>
                <h3 className="font-semibold mb-2 flex-grow">{product.name}</h3>
                <p className="text-lg font-bold mb-4">{product.price ?? "Consultar precio"}</p>
                <a
                  href={`${WHATSAPP_BASE}${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center rounded-full border border-primary text-primary text-sm font-semibold py-2.5 hover:bg-primary hover:text-white transition-colors"
                >
                  Consultar disponibilidad
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary to-secondary-turq rounded-clinical px-8 py-14 md:py-16 text-center text-white">
          <h2 className="serif-title text-3xl md:text-4xl mb-6">¿Buscas algo en concreto?</h2>
          <p className="text-white/90 max-w-xl mx-auto mb-10">
            Nuestro catálogo completo incluye packs, tarjetas regalo y líneas de Schrammek, Mesoestetics y Nutrilite.
            Escríbenos y te ayudamos a encontrarlo.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=34670216216&text=Hola%20Vanitas%20Vanitatis%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20vuestro%20cat%C3%A1logo%20de%20productos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-vanitas-black hover:text-white transition-all"
          >
            Hablar con la clínica
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
