import Link from 'next/link'

export default function LibrosPage() {
  return (
    <div className="bg-white pt-24 pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-24">
          <span className="text-[11px] font-black text-brand-600 uppercase tracking-[0.4em] block mb-6">Bibliografía y Publicaciones</span>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8">
            OBRAS PARA LA <br />
            <span className="text-brand-600 font-serif italic lowercase text-5xl md:text-7xl">excelencia.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl leading-relaxed">
            Los libros del Dr. Jacobo Neuman han sido adoptados por cientos de organizaciones en México y Latinoamérica como herramientas fundamentales de cambio cultural.
          </p>
        </header>

        <div className="space-y-32">
          {/* Libro 1: Esquezofrenia */}
          <section className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="bg-gray-100 aspect-[3/4] rounded-[3rem] flex items-center justify-center text-gray-300 font-black uppercase text-xs tracking-widest border border-gray-200">
               [ Portada Esquezofrenia ]
            </div>
            <div>
              <span className="bg-brand-800 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-8 inline-block">Best Seller</span>
              <h2 className="text-4xl font-black text-gray-900 uppercase mb-6 tracking-tight leading-none">
                ESQUEZOFRENIA <br />
                <span className="text-brand-600 font-serif italic lowercase text-3xl italic">Un manual para una nueva vida</span>
              </h2>
              <div className="space-y-6 text-gray-500 text-lg leading-relaxed mb-10">
                <p>
                  ¿Por qué las cosas no suceden? ¿Por qué los proyectos se detienen? La respuesta suele ser la misma: una acumulación de excusas que el Dr. Neuman ha diagnosticado como <strong>Esquezofrenia</strong>.
                </p>
                <p>
                  Este libro no solo identifica la enfermedad, sino que ofrece un tratamiento práctico para líderes y equipos que desean alcanzar su máximo potencial eliminando la impuntualidad, la mediocridad y la falta de compromiso.
                </p>
              </div>
              <ul className="grid grid-cols-2 gap-6 mb-12">
                 {['Diagnóstico de excusas', 'Mejora continua', 'Cultura de puntualidad', 'Responsabilidad Individual'].map(point => (
                   <li key={point} className="flex items-center gap-3 text-sm font-bold text-gray-900 uppercase tracking-tight">
                     <span className="w-2 h-2 bg-brand-600 rounded-full"></span>
                     {point}
                   </li>
                 ))}
              </ul>
              <Link href="https://www.pulsopyme.com" className="bg-brand-800 text-white px-10 py-5 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-brand-600 transition-all shadow-xl shadow-brand-800/20">
                Comprar en Pulso PyME →
              </Link>
            </div>
          </section>

          {/* Libro 2: Tour de Francia */}
          <section className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="lg:order-2 bg-gray-100 aspect-[3/4] rounded-[3rem] flex items-center justify-center text-gray-300 font-black uppercase text-xs tracking-widest border border-gray-200">
               [ Portada Tour de Francia ]
            </div>
            <div className="lg:order-1">
              <span className="bg-brand-100 text-brand-800 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-8 inline-block">Novela Empresarial</span>
              <h2 className="text-4xl font-black text-gray-900 uppercase mb-6 tracking-tight leading-none">
                TOUR DE FRANCIA <br />
                <span className="text-brand-600 font-serif italic lowercase text-3xl">Calidad, productividad y cultura</span>
              </h2>
              <div className="space-y-6 text-gray-500 text-lg leading-relaxed mb-10">
                <p>
                  A través de una narrativa cautivadora, el Dr. Neuman explora los desafíos de implementar sistemas de calidad en entornos corporativos complejos.
                </p>
                <p>
                  "Tour de Francia" es más que una novela; es un estudio de caso sobre cómo la cultura mexicana y latinoamericana puede evolucionar hacia estándares internacionales de eficiencia sin perder su esencia humana.
                </p>
              </div>
              <Link href="https://www.pulsopyme.com" className="border-2 border-brand-800 text-brand-800 px-10 py-5 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-brand-50 transition-all">
                Saber más de esta obra →
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
