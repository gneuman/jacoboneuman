export default function SobreMiPage() {
  return (
    <div className="bg-white">
      <section className="pt-24 pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="bg-gray-100 aspect-[4/5] rounded-[3rem] relative overflow-hidden flex items-center justify-center text-gray-300 font-black uppercase text-xs tracking-widest">
               [ Retrato Dr. Jacobo Neuman ]
            </div>
            <div>
              <span className="text-[11px] font-black text-brand-600 uppercase tracking-[0.4em] block mb-8">Trayectoria y Visión</span>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-10">
                DR. JACOBO <br />
                <span className="text-brand-600 font-serif italic lowercase text-5xl md:text-7xl">neuman praes.</span>
              </h1>
              <div className="space-y-8 text-lg text-gray-500 leading-relaxed font-medium">
                <p>
                  Ingeniero de formación y Doctor por vocación, Jacobo Neuman Praes ha dedicado más de tres décadas a entender y transformar la cultura del trabajo en el mundo de habla hispana.
                </p>
                <p>
                  Como fundador de Joega Editorial y Pulso PyME, ha creado una plataforma para que empresarios y líderes compartan conocimientos sobre productividad, calidad y mejora continua.
                </p>
                <p>
                  Su concepto de "Esquezofrenia" se ha convertido en una referencia obligada en facultades de administración y consejos directivos de todo el continente, sirviendo como un espejo para las organizaciones que buscan la excelencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-brand-800 font-black text-4xl mb-4">30+</h3>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Años de experiencia en consultoría estratégica.</p>
            </div>
            <div>
              <h3 className="text-brand-800 font-black text-4xl mb-4">1000+</h3>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Organizaciones intervenidas y transformadas.</p>
            </div>
            <div>
              <h3 className="text-brand-800 font-black text-4xl mb-4">Pulso PyME</h3>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Editor en jefe y promotor de la cultura empresarial.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-12 text-center">Filosofía de Mejora</h2>
          <div className="space-y-12">
            {[
              { q: 'No hay calidad sin responsabilidad individual.', a: 'El cambio organizacional comienza con el individuo asumiendo sus propios resultados.' },
              { q: 'La excusa es el veneno de la productividad.', a: 'Identificar el "Es que..." es el primer paso para sanar una cultura laboral.' },
              { q: 'La simplicidad es la máxima sofisticación en procesos.', a: 'Buscamos soluciones prácticas que el equipo pueda adoptar y mejorar cada día.' }
            ].map((phil, i) => (
              <div key={i} className="border-l-4 border-brand-800 pl-12">
                <p className="text-xl font-black text-brand-800 uppercase leading-none mb-4 italic font-serif">"{phil.q}"</p>
                <p className="text-gray-500 font-medium">{phil.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
