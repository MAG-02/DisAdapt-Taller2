const Footer = () => {
  return (
    <footer className="bg-black py-16 border-t border-white/10 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 border-2 border-white flex items-center justify-center font-bold text-lg tracking-tighter">
              CG
            </div>
            <span className="font-bold tracking-widest uppercase text-lg">Capricorn Games</span>
          </div>
          <p className="text-gray-500 font-bold tracking-widest uppercase text-xs mb-2">Creadores de mundos.</p>
          <p className="text-gray-500 font-bold tracking-widest uppercase text-xs">Medellín, Colombia.</p>
        </div>
        
        <div>
          <h4 className="font-black tracking-widest uppercase text-xs mb-8 text-white">Mapa del Sitio</h4>
          <ul className="space-y-4 text-gray-400 font-bold text-xs uppercase tracking-widest">
            <li><a href="#juegos" className="hover:text-[#00D1FF] transition-colors">Nuestros Juegos</a></li>
            <li><a href="#noticias" className="hover:text-[#00D1FF] transition-colors">Noticias</a></li>
            <li><a href="#unete" className="hover:text-[#00D1FF] transition-colors">Únete al Estudio</a></li>
            <li><a href="#contacto" className="hover:text-[#00D1FF] transition-colors">Contacto</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-black tracking-widest uppercase text-xs mb-8 text-white">Legal</h4>
          <ul className="space-y-4 text-gray-400 font-bold text-xs uppercase tracking-widest mb-10">
            <li><a href="#" className="hover:text-[#00D1FF] transition-colors">Privacidad</a></li>
            <li><a href="#" className="hover:text-[#00D1FF] transition-colors">Términos y Condiciones</a></li>
            <li><a href="#" className="hover:text-[#00D1FF] transition-colors">Prensa</a></li>
          </ul>
          
          <div className="flex gap-4">
            <a href="#" aria-label="X" className="w-12 h-12 border border-white/20 flex items-center justify-center text-gray-400 hover:text-black hover:bg-[#00D1FF] hover:border-[#00D1FF] transition-all">
              <span className="text-xl font-bold" aria-hidden="true">X</span>
            </a>
            <a href="#" aria-label="YouTube" className="w-12 h-12 border border-white/20 flex items-center justify-center text-gray-400 hover:text-black hover:bg-[#00D1FF] hover:border-[#00D1FF] transition-all">
              <span className="text-[10px] font-black tracking-tight" aria-hidden="true">▶</span>
            </a>
            <a href="#" aria-label="Instagram" className="w-12 h-12 border border-white/20 flex items-center justify-center text-gray-400 hover:text-black hover:bg-[#00D1FF] hover:border-[#00D1FF] transition-all">
              <span className="w-5 h-5 border-2 border-current rounded-[6px] flex items-center justify-center" aria-hidden="true">
                <span className="w-2 h-2 border-2 border-current rounded-full"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;