import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const Contact = ({ contactData }) => {
  return (
    <section id="contacto" className="py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">Contáctanos</h2>
          <p className="text-gray-400 mb-16 text-lg leading-relaxed max-w-md">
            ¿Dudas, solicitudes de prensa o simplemente quieres saludar? Escríbenos o ven a tomar un café en nuestras oficinas.
          </p>
          
          <div className="space-y-10">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center text-[#00D1FF] shrink-0">
                <Mail size={20} strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-[10px] font-black tracking-widest text-gray-500 uppercase mb-2">Email</div>
                <a href={`mailto:${contactData.email}`} className="text-xl font-bold hover:text-[#00D1FF] transition-colors">{contactData.email}</a>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center text-[#00D1FF] shrink-0">
                <Phone size={20} strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-[10px] font-black tracking-widest text-gray-500 uppercase mb-2">Teléfono</div>
                <a href={`tel:${contactData.phone}`} className="text-xl font-bold hover:text-[#00D1FF] transition-colors">{contactData.phone}</a>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center text-[#00D1FF] shrink-0">
                <MapPin size={20} strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-[10px] font-black tracking-widest text-gray-500 uppercase mb-2">Ubicación</div>
                <span className="text-xl font-bold">{contactData.location}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <form className="space-y-6 bg-zinc-900/40 p-10 border border-white/5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-[10px] font-black tracking-widest uppercase text-gray-400 mb-3">Nombre</label>
              <input type="text" className="w-full bg-black border border-white/20 px-5 py-4 text-white focus:outline-none focus:border-[#00D1FF] transition-colors font-mono text-sm" />
            </div>
            <div>
              <label className="block text-[10px] font-black tracking-widest uppercase text-gray-400 mb-3">Email</label>
              <input type="email" className="w-full bg-black border border-white/20 px-5 py-4 text-white focus:outline-none focus:border-[#00D1FF] transition-colors font-mono text-sm" />
            </div>
            <div>
              <label className="block text-[10px] font-black tracking-widest uppercase text-gray-400 mb-3">Asunto</label>
              <input type="text" className="w-full bg-black border border-white/20 px-5 py-4 text-white focus:outline-none focus:border-[#00D1FF] transition-colors font-mono text-sm" />
            </div>
            <div>
              <label className="block text-[10px] font-black tracking-widest uppercase text-gray-400 mb-3">Mensaje</label>
              <textarea rows={5} className="w-full bg-black border border-white/20 px-5 py-4 text-white focus:outline-none focus:border-[#00D1FF] transition-colors resize-none font-mono text-sm"></textarea>
            </div>
            <button type="submit" className="bg-white text-black font-black py-5 px-8 tracking-widest uppercase text-sm hover:bg-[#00D1FF] transition-colors w-full flex justify-center items-center gap-3 mt-4">
              Enviar Mensaje <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;