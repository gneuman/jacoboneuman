import Link from 'next/link'

export default function ConsultoriaPage() {
  return (
    <div className="bg-white">
      <header className="pt-24 pb-32 bg-gray-50 border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-6">
          <span className="text-[11px] font-black text-brand-600 uppercase tracking-[0.4em] block mb-8">Servicios Corporativos</span>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-10">
            ELEVA LA <br />
            <span className="text-brand-600 font-serif italic lowercase text-5xl md:text-7xl">productividad organizacional.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl leading-relaxed">
            Intervenciones estratégicas diseñadas para transformar la cultura del trabajo, eliminar ineficiencias y establecer una base sólida de calidad total.
          </p>
        </div>
      </header>

      <section className="py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                t: 'Diagnóstico de Esquezofrenia', 
                d: 'Evaluación profunda de los hábitos y vicios culturales que detienen el crecimiento de tu empresa. Identificamos los pretextos arraigados y diseñamos un plan de erradicación.'
              },
              { 
                t: 'Sistemas de Calidad Total', 
                d: 'Acompañamiento en la implementación de estándares internacionales adaptados a la realidad de tu industria y país. Más que una certificación, buscamos una transformación operativa.'
              },
              { 
                t: 'Desarrollo de Liderazgo', 
                d: 'Talleres y mentoría para mandos medios y directivos sobre responsabilidad radical (Accountability) y toma de decisiones basada en datos y mejora continua.'
              }
            ].map((serv, i) => (
              <div key={i} className="bg-white p-12 rounded-[2.5rem] border border-gray-100 hover:border-brand-300 hover:shadow-2xl transition-all group">
                <span className="text-4xl font-black text-brand-100 group-hover:text-brand-200 transition-colors mb-8 block">0{i+1}</span>
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-6">{serv.t}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{serv.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-brand-800 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="mx-auto max-w-6xl px-6 relative">
          <div className="max-w-2xl">
            <h2 className="text-xs font-black text-brand-300 uppercase tracking-[0.4em] mb-10">Metodología de Intervención</h2>
            <div className="space-y-12">
              {[
                { s: 'Inmersión Corporativa', p: 'Entendemos tu operación desde el piso de trabajo hasta la dirección.' },
                { s: 'Diseño a la Medida', p: 'No usamos soluciones "de molde". Cada consultoría es única para tu empresa.' },
                { s: 'Seguimiento Basado en Resultados', p: 'Medimos el impacto real en la productividad y la calidad.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-8">
                  <div className="w-10 h-10 rounded-full border border-brand-400 flex items-center justify-center shrink-0 font-black text-xs">
                    {i+1}
                  </div>
                  <div>
                    <h4 className="font-black text-lg uppercase tracking-tighter mb-2">{item.s}</h4>
                    <p className="text-brand-200 text-sm leading-relaxed">{item.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 text-center px-6">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter mb-12">
          ¿Listo para un cambio <span className="text-brand-600 font-serif italic lowercase">real?</span>
        </h2>
        <Link
          href="/contacto"
          className="bg-brand-800 text-white px-12 py-5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-brand-600 transition-all shadow-xl"
        >
          Solicitar Diagnóstico Preliminar
        </Link>
      </section>
    </div>
  )
}
