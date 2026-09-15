import heroImage from '../assets/images/HeroBanner.jpg';

const Hero = ({ heroData }) => {
  return (
    <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-zinc-900 z-0"></div>
      
      {/* Usando tu imagen local como fondo */}
      <div 
        className="absolute inset-0 opacity-70 bg-cover bg-center mix-blend-luminosity z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/10 z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-[#00D1FF] text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 bg-[#00D1FF] rounded-full"></span>
            {heroData.tagline}
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black uppercase leading-none tracking-tighter mb-0 text-white">
            {heroData.title}
          </h1>
          <h1 className="text-7xl md:text-9xl font-black uppercase leading-none tracking-tighter mb-8 text-[#00D1FF]">
            {heroData.subtitle}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 font-medium leading-relaxed">
            {heroData.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#00D1FF] hover:bg-cyan-300 text-black font-black py-4 px-8 tracking-widest uppercase text-sm transition-all duration-300">
              {heroData.primaryButton}
            </button>
            <button className="border-2 border-white/20 hover:border-white text-white font-black py-4 px-8 tracking-widest uppercase text-sm transition-all duration-300">
              {heroData.secondaryButton}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;