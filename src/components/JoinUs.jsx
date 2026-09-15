import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const JoinUs = ({ jobsData }) => {
  const [activeJobFilter, setActiveJobFilter] = useState('Todos');

  const filteredJobs = activeJobFilter === 'Todos' 
    ? jobsData.openings 
    : jobsData.openings.filter(job => job.category === activeJobFilter);

  return (
    <section id="unete" className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 max-w-2xl">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">Únete al<br/>Estudio</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Buscamos talento apasionado para dar vida a universos oscuros y mecánicas desafiantes. Únete a nuestro equipo en Medellín o trabaja de forma remota.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-4 mb-16">
          {jobsData.categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveJobFilter(category)}
              className={`px-6 py-3 border font-black text-xs tracking-widest uppercase transition-all duration-300 ${
                activeJobFilter === category 
                  ? 'border-[#00D1FF] bg-[#00D1FF]/10 text-[#00D1FF]' 
                  : 'border-white/20 hover:border-white text-gray-400 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Listado de empleos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.map(job => (
            <div key={job.id} className="bg-black border border-white/10 p-8 hover:border-[#00D1FF] transition-all group cursor-pointer flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-black uppercase tracking-tight group-hover:text-[#00D1FF] transition-colors pr-4">
                    {job.title}
                  </h3>
                  <span className="bg-white text-black text-[10px] font-black px-2 py-1 uppercase tracking-widest shrink-0">
                    {job.status}
                  </span>
                </div>
                <ul className="text-gray-400 text-xs font-bold tracking-widest uppercase space-y-3 mb-10">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#00D1FF] rounded-none"></span> {job.location}</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#00D1FF] rounded-none"></span> {job.category}</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#00D1FF] rounded-none"></span> {job.type}</li>
                </ul>
              </div>
              <div className="flex justify-between items-center text-[10px] font-black tracking-widest text-gray-500 uppercase pt-6 border-t border-white/5">
                <span>Publicado: {job.posted}</span>
                <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 text-[#00D1FF] transition-all -translate-x-4 group-hover:translate-x-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinUs;