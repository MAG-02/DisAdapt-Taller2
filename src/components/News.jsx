import { ArrowRight } from 'lucide-react';

const News = ({ newsData }) => {
  return (
    <section id="noticias" className="py-32 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">Actualidad</h2>
            {newsData.filter(n => n.featured).map(item => (
              <article key={item.id} className="bg-zinc-900/50 border border-white/10 p-10 hover:border-[#00D1FF]/50 transition-colors cursor-pointer group">
                <time className="text-[#00D1FF] text-xs font-bold tracking-widest uppercase mb-6 block">{item.date}</time>
                <h3 className="text-3xl font-black uppercase tracking-tight mb-6 group-hover:text-[#00D1FF] transition-colors leading-tight">{item.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed text-lg">{item.snippet}</p>
                <span className="text-sm font-black tracking-widest uppercase flex items-center gap-2 group-hover:text-[#00D1FF] transition-colors">
                  Leer más <ArrowRight size={18} />
                </span>
              </article>
            ))}
          </div>
          <div className="lg:col-span-4">
            <h2 className="text-xl font-black uppercase tracking-widest mb-12 pb-4 border-b border-white/10 text-gray-500">Más Noticias</h2>
            <div className="flex flex-col gap-8">
              {newsData.filter(n => !n.featured).map(item => (
                <article key={item.id} className="group cursor-pointer border-b border-white/5 pb-8 last:border-0">
                  <time className="text-[#00D1FF] text-[10px] font-bold tracking-widest uppercase mb-3 block">{item.date}</time>
                  <h3 className="text-lg font-black uppercase tracking-tight mb-3 group-hover:text-[#00D1FF] transition-colors leading-snug">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.snippet}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;