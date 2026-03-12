import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-brand-800 text-white">
        {/* Decoración de fondo sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.08),_transparent_50%)]" />
        
        <div className="mx-auto max-w-6xl px-6 relative">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block text-[11px] font-black tracking-[0.4em] text-brand-300 uppercase mb-8 border-b-2 border-brand-300/30 pb-2">
                Consultoría Estratégica · Productividad · Calidad
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-10">
                TU EMPRESA NO <br />
                <span className="text-brand-300 italic font-serif lowercase text-5xl md:text-7xl lg:text-8xl">
                  tiene crisis,
                </span><br />
                TIENE ESQUEZOFRENIA.
              </h1>
              <p className="text-xl text-brand-100 max-w-2xl mb-12 leading-relaxed font-medium">
                Dr. Jacobo Neuman Praes. Ayudando a líderes a erradicar la cultura de la excusa y transformar organizaciones a través de la Mejora Continua.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Link
                  href="/libros"
                  className="bg-white text-brand-800 px-10 py-5 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-brand-100 transition-all shadow-2xl"
                >
                  Conocer la Obra →
                </Link>
                <Link
                  href="/consultoria"
                  className="border border-brand-400 text-white px-10 py-5 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-white/10 transition-all"
                >
                  Consultoría Corporativa
                </Link>
              </div>
            </div>

            {/* Placeholder de Foto con más "aire" */}
            <div className="relative shrink-0 lg:block hidden">
              <div className="w-[400px] h-[500px] bg-brand-700/50 rounded-[3rem] border border-white/10 relative overflow-hidden group shadow-2xl">
                 <div className="absolute inset-0 flex items-center justify-center text-brand-300 font-black text-xs uppercase tracking-widest text-center px-12 leading-loose opacity-50">
                   [ Fotografía Profesional del <br /> Dr. Jacobo Neuman ]
                 </div>
              </div>
              {/* Floating element */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 max-w-[200px]">
                 <p className="text-brand-800 font-black text-xs uppercase tracking-widest mb-1">Autoridad</p>
                 <p className="text-gray-500 text-[10px] leading-tight font-medium uppercase tracking-tighter">Referente en Productividad y Calidad en México.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MÉTODO / CONCEPTO */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
                <div className="bg-gray-50 p-16 rounded-[4rem] border border-gray-100 relative z-10">
                   <h2 className="text-xs font-black text-brand-800 uppercase tracking-[0.3em] mb-8">El Diagnóstico</h2>
                   <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1] tracking-tighter uppercase mb-8">
                     LA EPIDEMIA DE LAS <br />
                     <span className="text-brand-600 font-serif italic lowercase text-5xl">excusas.</span>
                   </h3>
                   <p className="text-lg text-gray-500 leading-relaxed mb-10">
                     La <strong>Esquezofrenia</strong> no es solo un término, es una realidad cultural. Es el hábito destructivo de justificar la falta de resultados con pretextos externos ("Es que..."). <br /><br />
                     Nuestro enfoque se centra en pasar de la justificación a la <strong>responsabilidad absoluta</strong>.
                   </p>
                   <Link href="/sobre-mi" className="inline-flex items-center text-[11px] font-black text-brand-800 border-b-2 border-brand-200 hover:border-brand-600 pb-2 transition-all uppercase tracking-widest">
                     Descubre el Método Jacobo Neuman →
                   </Link>
                </div>
                {/* Elemento decorativo detrás */}
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-100 rounded-full blur-3xl opacity-50"></div>
            </div>
            
            <div className="space-y-16">
               <div className="max-w-md">
                 <span className="text-[10px] font-black text-brand-600 uppercase tracking-[0.5em] block mb-6">Metodología</span>
                 <p className="text-2xl font-black text-gray-900 uppercase tracking-tighter leading-tight">
                    Transformación basada en resultados, no en promesas.
                 </p>
               </div>

               <div className="space-y-12">
                  {[
                    { t: 'Detección de "Es ques"', d: 'Auditamos la comunicación y cultura organizacional para identificar cuellos de botella mentales.' },
                    { t: 'Accountability Corporativo', d: 'Implementamos sistemas donde cada colaborador se hace cargo de su propia excelencia.' },
                    { t: 'Cultura de Calidad', d: 'Elevamos los estándares de servicio y producción a niveles de clase mundial.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-10 items-start">
                       <span className="text-4xl font-black text-brand-100 leading-none">0{i+1}</span>
                       <div>
                          <h4 className="font-black text-gray-900 uppercase tracking-tight text-base mb-3">{item.t}</h4>
                          <p className="text-sm text-gray-500 leading-relaxed">{item.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIBROS SECCIÓN MÁS LIMPIA */}
      <section className="py-32 bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-xs font-black text-brand-800 uppercase tracking-[0.4em] mb-6">Bibliografía</h2>
            <p className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase mb-6 leading-none">Obras que Marcan Época</p>
            <p className="text-gray-500 text-lg">Libros diseñados para ser leídos, aplicados y compartidos dentro de las organizaciones.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
             <div className="bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-700 group border border-gray-100">
                <div className="w-full aspect-[4/5] bg-gray-100 rounded-2xl mb-10 flex flex-col items-center justify-center text-gray-300 font-black uppercase text-[10px] tracking-widest border border-gray-100 group-hover:bg-brand-50 transition-colors px-12 text-center">
                   <span className="text-brand-200 text-4xl mb-4 italic font-serif">Esquezofrenia</span>
                   [ Portada del Libro ]
                </div>
                <div className="flex justify-between items-start mb-6">
                   <div>
                     <span className="text-[10px] font-black text-brand-600 uppercase tracking-widest mb-3 block">Manual de Gestión</span>
                     <h3 className="text-3xl font-black text-gray-900 uppercase leading-none">ESQUEZOFRENIA</h3>
                   </div>
                   <span className="bg-brand-50 text-brand-700 text-[9px] font-black px-3 py-1 rounded-full uppercase">8ª Edición</span>
                </div>
                <p className="text-base text-gray-500 leading-relaxed mb-10">
                  El manual definitivo para erradicar la cultura de la excusa en México. Miles de copias vendidas y utilizado en talleres de capacitación empresarial.
                </p>
                <div className="flex gap-4">
                  <Link href="#" className="bg-brand-800 text-white px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-600 transition-colors shadow-lg shadow-brand-800/20">
                    Comprar Ahora
                  </Link>
                  <Link href="/libros" className="border border-gray-200 text-gray-900 px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-50 transition-colors">
                    Ver Detalles
                  </Link>
                </div>
             </div>

             <div className="bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-700 group border border-gray-100">
                <div className="w-full aspect-[4/5] bg-gray-100 rounded-2xl mb-10 flex flex-col items-center justify-center text-gray-300 font-black uppercase text-[10px] tracking-widest border border-gray-100 group-hover:bg-brand-50 transition-colors px-12 text-center">
                   <span className="text-brand-200 text-4xl mb-4 italic font-serif">Tour de Francia</span>
                   [ Portada del Libro ]
                </div>
                <div>
                   <span className="text-[10px] font-black text-brand-600 uppercase tracking-widest mb-3 block">Novela Empresarial</span>
                   <h3 className="text-3xl font-black text-gray-900 uppercase leading-none mb-6">TOUR DE FRANCIA</h3>
                </div>
                <p className="text-base text-gray-500 leading-relaxed mb-10">
                  Una narrativa que explora la calidad y la productividad a través de una historia cautivadora, diseñada para cambiar la mentalidad organizacional.
                </p>
                <Link href="/libros" className="inline-flex items-center text-[10px] font-black text-brand-800 border-b-2 border-brand-200 hover:border-brand-800 pb-1 transition-all uppercase tracking-widest">
                  Explorar esta obra →
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA ESPACIADO */}
      <section className="py-32 px-6">
         <div className="mx-auto max-w-5xl bg-brand-800 rounded-[4rem] p-16 md:p-32 text-center text-white relative overflow-hidden shadow-3xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05),_transparent_70%)]"></div>
            <h2 className="text-xs font-black tracking-[0.5em] text-brand-300 uppercase mb-10 relative z-10">Contacto Directo</h2>
            <p className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-16 relative z-10">
              TRANSFORMEMOS <br />
              <span className="text-brand-300 italic font-serif lowercase text-5xl md:text-7xl lg:text-8xl">tu organización.</span>
            </p>
            <Link
              href="/contacto"
              className="relative z-10 inline-block bg-white text-brand-800 px-14 py-6 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-brand-100 hover:scale-105 transition-all shadow-2xl"
            >
              Agendar Consultoría
            </Link>
         </div>
      </section>
    </div>
  )
}
