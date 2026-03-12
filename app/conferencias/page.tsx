export default function ConferenciasPage() {
  return (
    <div className="bg-white">
      <header className="pt-24 pb-32 bg-brand-800 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.05),_transparent_40%)]" />
        <div className="mx-auto max-w-6xl px-6 relative">
          <span className="text-[11px] font-black text-brand-300 uppercase tracking-[0.4em] block mb-8">Charlas y Ponencias</span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-10">
            INSPIRACIÓN <br />
            <span className="text-brand-300 font-serif italic lowercase text-5xl md:text-7xl">basada en la acción.</span>
          </h1>
          <p className="text-xl text-brand-100 max-w-3xl leading-relaxed">
            Charlas dinámicas y disruptivas para congresos, reuniones anuales de ventas y eventos corporativos que buscan romper con la inercia de la complacencia.
          </p>
        </div>
      </header>

      <section className="py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {[
              { 
                t: 'Esquezofrenia: La Epidemia del "Es que"', 
                d: 'La charla más solicitada. Una radiografía de los pretextos en la cultura laboral y cómo eliminarlos para liberar el potencial del equipo.' 
              },
              { 
                t: 'El Tour de la Excelencia', 
                d: 'Cómo alcanzar niveles internacionales de competitividad a través de la calidad personal y organizacional.' 
              },
              { 
                t: 'Productividad Sin Fronteras', 
                d: 'Estrategias de mejora continua adaptadas a los desafíos actuales de la PyME y la gran empresa en México.' 
              },
              { 
                t: 'Calidad a la Mexicana', 
                d: 'Un análisis honesto y práctico sobre cómo capitalizar nuestras fortalezas culturales para competir globalmente.' 
              }
            ].map((conf, i) => (
              <div key={i} className="p-10 rounded-[3rem] border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-2xl transition-all">
                <h3 className="text-2xl font-black text-brand-800 uppercase tracking-tight mb-4 leading-none">{conf.t}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{conf.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-y border-gray-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-xs font-black text-brand-600 uppercase tracking-[0.4em] mb-12">Lo que dicen del Dr. Neuman</h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <blockquote className="p-8 border-l-4 border-brand-100 bg-gray-50 rounded-r-3xl italic text-gray-600 text-lg leading-relaxed">
              "Una charla que realmente nos sacudió. No fue solo teoría, fue un espejo de lo que hacemos mal y cómo podemos ser mejores."
              <footer className="mt-6 text-xs font-black text-gray-900 uppercase tracking-widest">— Director de Operaciones, Sector Industrial</footer>
            </blockquote>
            <blockquote className="p-8 border-l-4 border-brand-100 bg-gray-50 rounded-r-3xl italic text-gray-600 text-lg leading-relaxed">
              "El Dr. Neuman tiene una forma directa y honesta de abordar la productividad. El término 'Esquezofrenia' ya es parte de nuestro vocabulario diario."
              <footer className="mt-6 text-xs font-black text-gray-900 uppercase tracking-widest">— VP de Talento Humano, Corporativo Internacional</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 text-center bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter mb-10">
          ¿Buscas un orador que <br /> <span className="text-brand-600 font-serif italic lowercase">genere cambio?</span>
        </h2>
        <a 
          href="/contacto"
          className="bg-brand-800 text-white px-12 py-5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-brand-600 transition-all shadow-xl"
        >
          Consultar Disponibilidad
        </a>
      </section>
    </div>
  )
}
