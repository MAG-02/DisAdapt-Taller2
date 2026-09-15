const About = () => {
  return (
    <section className="py-24 bg-black border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Columna Izquierda: Bloque de estadísticas / info rápida */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-zinc-900/60 border border-white/10 p-8">
            <span className="text-[#00D1FF] text-3xl md:text-4xl font-black block mb-2">2024</span>
            <span className="text-gray-400 text-xs font-bold tracking-widest uppercase">Fundación del Estudio</span>
          </div>
          <div className="bg-zinc-900/60 border border-white/10 p-8">
            <span className="text-[#00D1FF] text-3xl md:text-4xl font-black block mb-2">3+</span>
            <span className="text-gray-400 text-xs font-bold tracking-widest uppercase">Proyectos en desarrollo</span>
          </div>
          <div className="bg-zinc-900/60 border border-white/10 p-8 col-span-2">
            <span className="text-[#00D1FF] text-3xl md:text-4xl font-black block mb-2">Unreal & Unity</span>
            <span className="text-gray-400 text-xs font-bold tracking-widest uppercase">Tecnologías principales</span>
          </div>
        </div>

        {/* Columna Derecha: Texto descriptivo del estudio */}
        <div>
          <span className="text-[#00D1FF] text-xs font-bold tracking-widest uppercase mb-4 block">El Estudio</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-none">
            Forjando experiencias inmersivas desde Medellín
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Capricorn Games es un estudio independiente enfocado en crear universos oscuros, mecánicas de sigilo táctico y narrativas profundas. Combinamos un diseño técnico riguroso con direcciones de arte memorables.
          </p>
          <a 
            href="#contacto" 
            className="inline-flex items-center gap-2 text-sm font-black tracking-widest uppercase text-white hover:text-[#00D1FF] transition-colors"
          >
            Conoce más sobre nuestra historia →
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;