import Link from "next/link";

type SiteHeaderProps = {
  active?: "inicio" | "quienes-somos" | "centro-de-referencia";
};

const activeLinkClass =
  "text-primary border-b-2 border-primary pb-1 transition-colors";
const linkClass =
  "hover:text-primary transition-colors duration-200";
const mobileLinkClass =
  "block px-4 py-3 text-sm font-bold uppercase tracking-wider text-gray-700 hover:bg-primary/10 hover:text-primary transition-all duration-150";
const mobileActiveLinkClass =
  "block px-4 py-3 text-sm font-bold uppercase tracking-wider bg-primary text-white transition-all duration-150";

export function SiteHeader({ active }: SiteHeaderProps) {
  return (
<header className="fixed top-0 left-0 right-0 z-50 px-3 md:px-4">
      <nav
        className="
          relative max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-0
          mt-[10px] mb-[10px]
          h-[60px]
          rounded-[4416px]
          border border-white/40
          bg-white/60
          backdrop-blur-2xl
          shadow-[0_8px_32px_rgba(0,0,0,0.10),0_1.5px_0_rgba(255,255,255,0.7)_inset]
          ring-1 ring-white/30
          transition-shadow duration-300
        "
        style={{ WebkitBackdropFilter: "blur(24px)" }}
      >
        {/* ── Desktop ── */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6 h-full">
          {/* Left links */}
          <ul className="flex items-center justify-end gap-6 text-[12px] font-bold uppercase tracking-widest text-gray-600">
            <li>
              <Link
                className={active === "inicio" ? activeLinkClass : linkClass}
                href="/"
              >
                Inicio
              </Link>
            </li>
            <li>
              <a className={linkClass} href="#">
                Tratamientos
              </a>
            </li>
            <li>
              <a className={linkClass} href="#">
                Láser
              </a>
            </li>
          </ul>

          {/* Logo */}
          <Link
            className="flex items-center justify-center"
            href="/"
            aria-label="Vanitas Vanitatis inicio"
          >
            <img
              src="/media/logo-vanitas-oficial.svg"
              alt="Logo oficial de Vanitas Vanitatis"
              className="w-auto h-[44px] drop-shadow-sm"
            />
            <span className="sr-only">Vanitas Vanitatis</span>
          </Link>

          {/* Right links */}
          <ul className="flex items-center justify-start gap-6 text-[12px] font-bold uppercase tracking-widest text-gray-600">
            <li>
              <a className={linkClass} href="#">
                Medicina
              </a>
            </li>
            <li>
              <a className={linkClass} href="#">
                Bienestar
              </a>
            </li>

            {/* Dropdown — Nosotros */}
            <li className="relative group">
              <button
                className="inline-flex items-center gap-1 uppercase text-gray-600 hover:text-primary transition-colors duration-200"
                type="button"
                aria-haspopup="true"
              >
                Nosotros
                <span className="material-symbols-outlined text-base leading-none">
                  expand_more
                </span>
              </button>

              {/* Dropdown panel */}
              <div
                className="
                  absolute left-0 top-full z-50 pt-3
                  opacity-0 invisible translate-y-1
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                  group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0
                  transition-all duration-200 ease-out
                "
              >
                <div
                  className="
                    min-w-[220px] rounded-xl overflow-hidden
                    border border-white/50
                    bg-white/70 backdrop-blur-2xl
                    shadow-[0_8px_32px_rgba(0,0,0,0.12)]
                    ring-1 ring-white/30
                  "
                  style={{ WebkitBackdropFilter: "blur(24px)" }}
                >
                  <Link
                    href="/quienes-somos"
                    className={`block px-5 py-3 text-xs font-bold tracking-wider uppercase transition-colors duration-150 ${
                      active === "quienes-somos"
                        ? "bg-primary text-white"
                        : "text-gray-700 hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    Quiénes somos
                  </Link>
                  <Link
                    href="/centro-de-referencia"
                    className={`block px-5 py-3 text-xs font-bold tracking-wider uppercase border-t border-white/50 transition-colors duration-150 ${
                      active === "centro-de-referencia"
                        ? "bg-primary text-white"
                        : "text-gray-700 hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    Centro de referencia
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* ── Mobile ── */}
        <div className="lg:hidden h-full">
          <details className="group/details h-full">
            <summary className="list-none h-full flex items-center justify-between gap-3 cursor-pointer">
              <Link
                className="flex items-center"
                href="/"
                aria-label="Vanitas Vanitatis inicio"
              >
                <img
                  src="/media/logo-vanitas-oficial.svg"
                  alt="Logo oficial de Vanitas Vanitatis"
                  className="w-[150px] h-auto drop-shadow-sm"
                />
                <span className="sr-only">Vanitas Vanitatis</span>
              </Link>

              {/* Toggle button */}
              <span
                className="
                  inline-flex items-center justify-center
                  w-10 h-10
                  select-none
                "
              >
                <span className="material-symbols-outlined text-[22px] leading-none text-[#08aabf]">
                  menu
                </span>
              </span>
            </summary>

            {/* Mobile menu panel */}
            <div
              className="
                mt-3 rounded-2xl overflow-hidden
                border border-white/40
                bg-white/70 backdrop-blur-2xl
                shadow-[0_8px_32px_rgba(0,0,0,0.10)]
                ring-1 ring-white/20
              "
              style={{ WebkitBackdropFilter: "blur(24px)" }}
            >
              <Link
                className={active === "inicio" ? mobileActiveLinkClass : mobileLinkClass}
                href="/"
              >
                Inicio
              </Link>
              <a className={mobileLinkClass} href="#">
                Tratamientos
              </a>
              <a className={mobileLinkClass} href="#">
                Láser
              </a>
              <a className={mobileLinkClass} href="#">
                Medicina
              </a>
              <a className={mobileLinkClass} href="#">
                Bienestar
              </a>
              <div className="border-t border-white/40">
                <p className="px-4 pt-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Nosotros
                </p>
                <Link
                  className={
                    active === "quienes-somos"
                      ? mobileActiveLinkClass
                      : mobileLinkClass
                  }
                  href="/quienes-somos"
                >
                  Quiénes somos
                </Link>
                <Link
                  className={
                    active === "centro-de-referencia"
                      ? mobileActiveLinkClass
                      : mobileLinkClass
                  }
                  href="/centro-de-referencia"
                >
                  Centro de referencia
                </Link>
              </div>
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
