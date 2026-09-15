import Header from './components/Header';
import Hero from './components/Hero';
import Games from './components/Games';
import About from './components/About';
import News from './components/News';
import JoinUs from './components/JoinUs';
import Contact from './components/Contact'; 
import Footer from './components/Footer';

const data = {
  hero: {
    tagline: "NOVEDAD - SEPTIEMBRE 2026",
    title: "CAPRICORN",
    subtitle: "GAMES",
    description: "ABYSSAL RIFT: El roguelite de acción más oscuro del año. Primer gameplay reveal en octubre.",
    primaryButton: "EXPLORAR JUEGOS →",
    secondaryButton: "WISHLIST EN STEAM"
  },
  games: [
    { id: 1, title: "ABYSSAL RIFT", genre: "Acción / Roguelike", platforms: "PC - PS5 - 2027", status: "Próximo", description: "Sumérgete en un abismo que cambia con cada muerte." },
    { id: 2, title: "VENSTORM", genre: "Aventura / RPG", platforms: "PC - XBOX - 2028", status: "Próximo", description: "Un mundo abierto devastado por tormentas mágicas." },
    { id: 3, title: "HOLLOW NEST", genre: "Shooter / Sci-Fi", platforms: "PC - 2025", status: "", description: "Combate táctico en gravedad cero." }
  ],
  news: [
    { id: 1, date: "10 Sep 2026", title: "Abyssal Rift alcanza estado alfa jugable", snippet: "Estamos emocionados de anunciar...", featured: true },
    { id: 2, date: "05 Sep 2026", title: "Nuevo DLC gratuito para Hollow Nest", snippet: "Nuevas armas, dos mapas..." },
    { id: 3, date: "01 Sep 2026", title: "Venstorm se muestra a puerta cerrada", snippet: "La prensa especializada pudo jugar..." }
  ],
  jobs: {
    categories: ["Todos", "Desarrolladores", "Arte", "Diseño", "Audio"],
    openings: [
      { id: 1, title: "Programador de Gameplay", category: "Desarrolladores", status: "Abierto", location: "Remoto", type: "Full-time", posted: "Hace 2 días" },
      { id: 2, title: "Animador de personajes 3D", category: "Arte", status: "Abierto", location: "Híbrido", type: "Full-time", posted: "Hace una semana" }
    ]
  },
  contact: {
    email: "contacto@capricorngames.co",
    phone: "+57 (300) 123-4567",
    location: "Medellín, Colombia"
  }
};

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#00D1FF] selection:text-black">
      <Header />
      <Hero heroData={data.hero} />
      <Games gamesData={data.games} />
      <About />
      <News newsData={data.news} />
      <JoinUs jobsData={data.jobs} />
      <Contact contactData={data.contact} />
      <Footer />
    </div>
  );
}

export default App;