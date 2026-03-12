export default function ContactoPage() {
  return (
    <div className="bg-white pt-24 pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-24 text-center">
          <span className="text-[11px] font-black text-brand-600 uppercase tracking-[0.4em] block mb-8">Escríbenos</span>
          <h1 className="text-5xl md:text-8xl font-black text-gray-900 uppercase tracking-tighter leading-[0.85] mb-10">
            HABLEMOS DE <br />
            <span className="text-brand-600 font-serif italic lowercase text-5xl md:text-8xl">resultados.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Ya sea para una consultoría, una conferencia o la adquisición de materiales educativos, estamos listos para atenderte.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-24">
          {/* Información de Contacto */}
          <div className="space-y-16">
            <div className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100">
               <h3 className="text-xs font-black text-brand-800 uppercase tracking-widest mb-10 underline decoration-brand-200 underline-offset-8">Información</h3>
               <div className="space-y-10">
                  <div>
                     <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Editorial y Publicaciones</p>
                     <p className="text-xl font-black text-gray-900">Pulso PyME / Joega Editorial</p>
                  </div>
                  <div>
                     <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Sitio Web de la Comunidad</p>
                     <a href="https://www.pulsopyme.com" className="text-xl font-black text-brand-800 hover:text-brand-600 border-b-2 border-brand-100 transition-colors">www.pulsopyme.com</a>
                  </div>
                  <div>
                     <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Redes Profesionales</p>
                     <p className="text-xl font-black text-gray-900 hover:text-brand-800 cursor-pointer transition-colors">LinkedIn / Jacobo Neuman</p>
                  </div>
               </div>
            </div>

            <div className="px-6">
              <h4 className="text-lg font-black text-gray-900 uppercase tracking-tighter mb-6">Ubicación</h4>
              <p className="text-gray-500 font-medium">Ciudad de México, México. <br />Atención a toda la República Mexicana y Latinoamérica de forma presencial y remota.</p>
            </div>
          </div>

          {/* Formulario Placeholder */}
          <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-2xl">
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Nombre Completo</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:border-brand-300 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Correo Electrónico</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:border-brand-300 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Empresa / Organización</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:border-brand-300 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">¿En qué podemos ayudarte?</label>
                <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:border-brand-300 transition-colors appearance-none">
                   <option>Consultoría Corporativa</option>
                   <option>Conferencias y Eventos</option>
                   <option>Adquisición de Libros</option>
                   <option>Otros</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Mensaje</label>
                <textarea rows={4} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:border-brand-300 transition-colors"></textarea>
              </div>
              <button className="w-full bg-brand-800 text-white font-black uppercase tracking-widest py-5 rounded-2xl hover:bg-brand-600 transition-all shadow-xl shadow-brand-800/20">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
