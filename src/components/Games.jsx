import abyssalImage from '../assets/images/Abbysal.jpg';
import stormImage from '../assets/images/storm.jpg';
import hollowImage from '../assets/images/hollow.jpg';

const gameImages = {
  1: abyssalImage,
  2: stormImage,
  3: hollowImage,
};

const Games = ({ gamesData }) => {
  return (
    <section id="juegos" className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-[#00D1FF] text-xs font-bold tracking-widest uppercase mb-4 block">Proyectos</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">Nuestros<br/>Juegos</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gamesData.map((game) => (
            <article key={game.id} className="group cursor-pointer">
              <div className="aspect-square md:aspect-[4/3] bg-zinc-900 mb-6 relative overflow-hidden border border-white/10 group-hover:border-[#00D1FF]/50 transition-colors">
                <img
                  src={gameImages[game.id]}
                  alt={`${game.title} artwork`}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                {game.status && (
                  <span className="absolute top-4 right-4 bg-white text-black text-[10px] font-black px-3 py-1 uppercase tracking-widest">
                    {game.status}
                  </span>
                )}
                <div className="absolute bottom-4 left-4 text-[10px] font-bold tracking-widest text-white/70 bg-black/60 backdrop-blur-sm px-3 py-1.5 uppercase border border-white/10">
                  {game.platforms}
                </div>
              </div>
              <div className="text-[#00D1FF] text-xs font-bold tracking-widest uppercase mb-3">
                {game.genre}
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-4 group-hover:text-[#00D1FF] transition-colors">
                {game.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {game.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;