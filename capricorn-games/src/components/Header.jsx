const Header = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 border-2 border-white flex items-center justify-center font-bold text-xl tracking-tighter">
            CG
          </div>
          <span className="font-bold text-xl tracking-widest hidden sm:block uppercase">Capricorn<br/>Games</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-bold tracking-widest uppercase text-gray-300">
          <a href="#juegos" className="hover:text-[#00D1FF] transition-colors">Nuestros Juegos</a>
          <a href="#noticias" className="hover:text-[#00D1FF] transition-colors">Noticias</a>
          <a href="#unete" className="hover:text-[#00D1FF] transition-colors">Únete al Estudio</a>
          <a href="#contacto" className="hover:text-[#00D1FF] transition-colors">Contacto</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;