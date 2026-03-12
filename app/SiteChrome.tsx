"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/libros", label: "Libros" },
  { href: "/consultoria", label: "Consultoría" },
  { href: "/conferencias", label: "Conferencias" },
  { href: "/sobre-mi", label: "Sobre mí" },
];

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header con mejor espaciado */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex flex-col leading-tight group">
            <span className="text-xl font-black tracking-tighter text-brand-800 uppercase group-hover:text-brand-600 transition-colors">
              Dr. Jacobo Neuman
            </span>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] mt-1">
              Productividad · Calidad · Resultados
            </span>
          </Link>

          {/* Nav con espaciado amplio */}
          <nav className="hidden lg:flex items-center gap-10 text-[11px] font-black uppercase tracking-widest text-gray-500">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href ? "text-brand-600 underline underline-offset-8" : "hover:text-brand-800"
                } transition-all`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="rounded-full bg-brand-800 px-7 py-3 text-white text-[11px] font-black uppercase tracking-[0.15em] hover:bg-brand-600 transition-all shadow-lg shadow-brand-800/20"
            >
              Contacto
            </Link>
          </nav>

          {/* Mobile simple CTA */}
          <div className="lg:hidden">
             <Link href="/contacto" className="text-[10px] font-black uppercase bg-brand-800 text-white px-4 py-2 rounded-full">
               Contacto
             </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      {/* Footer mejorado */}
      <footer className="border-t border-gray-100 bg-gray-50 pt-24 pb-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl font-black text-brand-800 uppercase block mb-6">
                Dr. Jacobo Neuman Praes
              </span>
              <p className="text-base text-gray-500 leading-relaxed max-w-md">
                Experto en mejora continua y autor de "Esquezofrenia". Transformando la cultura organizacional a través de la responsabilidad radical y la búsqueda de la calidad total en México y Latinoamérica.
              </p>
            </div>
            
            <div>
              <p className="text-xs font-black text-brand-800 uppercase tracking-widest mb-8">
                Contenido
              </p>
              <ul className="flex flex-col gap-4">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-gray-500 hover:text-brand-600 font-medium transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-black text-brand-800 uppercase tracking-widest mb-8">
                Trayectoria
              </p>
              <ul className="flex flex-col gap-4 text-sm text-gray-500 font-medium">
                <li>+30 años de experiencia</li>
                <li>8 ediciones de "Esquezofrenia"</li>
                <li>Consultor Estratégico</li>
                <li>Pulso PyME Editorial</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            <p>© {new Date().getFullYear()} Dr. Jacobo Neuman Praes · México</p>
            <div className="flex gap-8">
               <a href="#" className="hover:text-brand-800 transition-colors">LinkedIn</a>
               <a href="https://www.pulsopyme.com" className="hover:text-brand-800 transition-colors">Pulso PyME</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
