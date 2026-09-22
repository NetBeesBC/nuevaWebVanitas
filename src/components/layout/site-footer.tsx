import Image from "next/image";

const linkClass = "text-white hover:text-secondary-turq transition-colors";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-16 border-b border-secondary-turq/40 pb-16 text-center">
          <div className="space-y-6 flex flex-col items-center">
            <Image
              src="/iconos/7.webp"
              alt="Vanitas Vanitatis"
              width={1080}
              height={760}
              className="h-36 w-auto object-contain"
            />
            <p className="text-xs uppercase tracking-widest text-white/80">Medical Center</p>
            <p className="text-white text-sm leading-relaxed max-w-xs">
              Medicina estética avanzada y bienestar clínico en Santander desde hace más de 15 años.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="font-bold mb-6 text-sm text-white">Unidades médicas</h5>
            <ul className="space-y-3 text-sm text-white">
              <li>
                <a className={linkClass} href="#">
                  Dermoestética facial
                </a>
              </li>
              <li>
                <a className={linkClass} href="#">
                  Remodelación corporal
                </a>
              </li>
              <li>
                <a className={linkClass} href="#">
                  Plataforma láser
                </a>
              </li>
              <li>
                <a className={linkClass} href="#">
                  Medicina regenerativa
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="font-bold mb-6 text-sm text-white">Área institucional</h5>
            <ul className="space-y-3 text-sm text-white">
              <li>
                <a className={linkClass} href="#">
                  Formación académica
                </a>
              </li>
              <li>
                <a className={linkClass} href="#">
                  Dermocosmética online
                </a>
              </li>
              <li>
                <a className={linkClass} href="#">
                  Código ético
                </a>
              </li>
              <li>
                <a className={linkClass} href="#">
                  Publicaciones médicas
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center text-center gap-4 text-xs text-white">
          <div className="flex flex-wrap justify-center gap-8">
            <a className={linkClass} href="#">
              Aviso legal
            </a>
            <a className={linkClass} href="#">
              Privacidad de datos
            </a>
            <a className={linkClass} href="#">
              Política de cookies
            </a>
          </div>
          <p>© 2024 Vanitas Vanitatis. Clínica de Medicina Estética. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
