import Image from "next/image";
import Link from "next/link";

type SiteHeaderProps = {
  active?:
    | "inicio"
    | "tratamientos"
    | "laser"
    | "medicina"
    | "bienestar"
    | "tienda"
    | "quienes-somos"
    | "centro-de-referencia";
};

const linkClass = "text-vanitas-black/70 hover:text-primary transition-colors duration-200";
const activeLinkClass = "text-primary transition-colors";
const mobileLinkClass =
  "block px-4 py-3 text-sm font-medium text-vanitas-black/70 hover:bg-black/5 transition-all duration-150";
const mobileActiveLinkClass =
  "block px-4 py-3 text-sm font-semibold bg-primary text-white transition-all duration-150";

export function SiteHeader({ active }: SiteHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 md:px-4">
      {/* ── Desktop ── */}
      <nav
        className="
          hidden lg:flex
          w-fit mx-auto items-center gap-8
          mt-[10px] mb-[10px] h-16
          pl-4 pr-3
          rounded-full
          border border-black/5
          bg-white/90
          backdrop-blur-xl
          shadow-[0_4px_24px_rgba(15,23,23,0.08)]
        "
        style={{ WebkitBackdropFilter: "blur(24px)" }}
      >
        <Link className="flex items-center shrink-0" href="/" aria-label="Vanitas Vanitatis inicio">
          <Image
            src="/iconos/3.webp"
            alt="Logo oficial de Vanitas Vanitatis"
            width={200}
            height={200}
            priority
            className="w-10 h-10"
          />
          <span className="sr-only">Vanitas Vanitatis</span>
        </Link>

        <ul className="flex items-center gap-6 text-sm font-medium whitespace-nowrap">
          <li>
            <Link className={active === "inicio" ? activeLinkClass : linkClass} href="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className={active === "tratamientos" ? activeLinkClass : linkClass} href="/tratamientos">
              Tratamientos
            </Link>
          </li>
          <li>
            <Link className={active === "laser" ? activeLinkClass : linkClass} href="/laser">
              Láser
            </Link>
          </li>
          <li>
            <Link className={active === "medicina" ? activeLinkClass : linkClass} href="/medicina">
              Medicina
            </Link>
          </li>
          <li>
            <Link className={active === "bienestar" ? activeLinkClass : linkClass} href="/bienestar">
              Bienestar
            </Link>
          </li>
          <li>
            <Link className={active === "tienda" ? activeLinkClass : linkClass} href="/tienda">
              Tienda
            </Link>
          </li>
          <li className="relative group">
            <button
              className="inline-flex items-center gap-1 text-vanitas-black/70 hover:text-primary transition-colors duration-200"
              type="button"
              aria-haspopup="true"
            >
              Nosotros
              <span className="material-symbols-outlined text-base leading-none">expand_more</span>
            </button>

            <div
              className="
                absolute left-1/2 -translate-x-1/2 top-full z-50 pt-3
                opacity-0 invisible translate-y-1
                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0
                transition-all duration-200 ease-out
              "
            >
              <div className="min-w-[200px] rounded-xl overflow-hidden border border-black/5 bg-white shadow-lg">
                <Link
                  href="/quienes-somos"
                  className={`block px-5 py-3 text-sm font-medium transition-colors duration-150 ${
                    active === "quienes-somos"
                      ? "bg-primary text-white"
                      : "text-vanitas-black/70 hover:bg-black/5"
                  }`}
                >
                  Quiénes somos
                </Link>
                <Link
                  href="/centro-de-referencia"
                  className={`block px-5 py-3 text-sm font-medium border-t border-black/5 transition-colors duration-150 ${
                    active === "centro-de-referencia"
                      ? "bg-primary text-white"
                      : "text-vanitas-black/70 hover:bg-black/5"
                  }`}
                >
                  Centro de referencia
                </Link>
              </div>
            </div>
          </li>
        </ul>

        <Link
          href="/#contacto"
          className="inline-flex items-center rounded-full bg-primary text-white px-5 py-2.5 text-sm font-semibold hover:bg-vanitas-black transition-colors duration-200 shrink-0"
        >
          Reservar cita
        </Link>
      </nav>

      {/* ── Mobile ── */}
      <div className="lg:hidden">
        <details className="group/details mt-[10px] mb-[10px]">
          <summary
            className="
              list-none h-16 px-4
              flex items-center justify-between gap-3 cursor-pointer
              rounded-full border border-black/5 bg-white/90 backdrop-blur-xl
              shadow-[0_4px_24px_rgba(15,23,23,0.08)]
            "
            style={{ WebkitBackdropFilter: "blur(24px)" }}
          >
            <Link className="flex items-center" href="/" aria-label="Vanitas Vanitatis inicio">
              <Image
                src="/iconos/3.webp"
                alt="Logo oficial de Vanitas Vanitatis"
                width={200}
                height={200}
                className="w-10 h-10"
              />
              <span className="sr-only">Vanitas Vanitatis</span>
            </Link>

            <span className="inline-flex items-center justify-center w-10 h-10 select-none">
              <span className="material-symbols-outlined text-[22px] leading-none text-vanitas-black">menu</span>
            </span>
          </summary>

          {/* Mobile menu panel */}
          <div className="mt-3 rounded-2xl overflow-hidden border border-black/5 bg-white shadow-lg">
            <Link className={active === "inicio" ? mobileActiveLinkClass : mobileLinkClass} href="/">
              Inicio
            </Link>
            <Link className={active === "tratamientos" ? mobileActiveLinkClass : mobileLinkClass} href="/tratamientos">
              Tratamientos
            </Link>
            <Link className={active === "laser" ? mobileActiveLinkClass : mobileLinkClass} href="/laser">
              Láser
            </Link>
            <Link className={active === "medicina" ? mobileActiveLinkClass : mobileLinkClass} href="/medicina">
              Medicina
            </Link>
            <Link className={active === "bienestar" ? mobileActiveLinkClass : mobileLinkClass} href="/bienestar">
              Bienestar
            </Link>
            <Link className={active === "tienda" ? mobileActiveLinkClass : mobileLinkClass} href="/tienda">
              Tienda
            </Link>
            <div className="border-t border-black/5">
              <p className="px-4 pt-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-vanitas-black/40">
                Nosotros
              </p>
              <Link
                className={active === "quienes-somos" ? mobileActiveLinkClass : mobileLinkClass}
                href="/quienes-somos"
              >
                Quiénes somos
              </Link>
              <Link
                className={active === "centro-de-referencia" ? mobileActiveLinkClass : mobileLinkClass}
                href="/centro-de-referencia"
              >
                Centro de referencia
              </Link>
            </div>
            <div className="p-3 border-t border-black/5">
              <Link
                href="/#contacto"
                className="flex items-center justify-center rounded-full bg-primary text-white px-5 py-3 text-sm font-semibold hover:bg-vanitas-black transition-colors duration-200"
              >
                Reservar cita
              </Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
