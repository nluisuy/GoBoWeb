import { motion } from "motion/react";
import { 
  QrCode, 
  ShoppingCart, 
  CreditCard, 
  Package, 
  TimerOff, 
  Wallet, 
  BarChart3, 
  CheckCircle2, 
  Monitor, 
  Terminal, 
  Watch, 
  DoorOpen,
  Globe,
  Twitter,
  Instagram,
  ChevronRight,
  TrendingUp
} from "lucide-react";

const Navbar = () => (
  <nav className="sticky top-0 z-50 border-b border-primary/10 bg-[#101c22]/80 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <span className="text-2xl font-black tracking-tighter text-white">GOBO</span>
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-slate-400 hover:text-primary transition-colors">
            Plataforma <span className="text-[10px] block opacity-60">Platform</span>
          </a>
          <a href="#" className="text-sm font-medium text-slate-400 hover:text-primary transition-colors">
            Soluciones <span className="text-[10px] block opacity-60">Solutions</span>
          </a>
          <a href="#" className="text-sm font-medium text-slate-400 hover:text-primary transition-colors">
            Precios <span className="text-[10px] block opacity-60">Pricing</span>
          </a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 mr-4 bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700">
          <span className="text-xs font-bold text-primary">ES</span>
          <span className="text-xs text-slate-500">|</span>
          <span className="text-xs text-slate-500 hover:text-slate-300 cursor-pointer">EN</span>
        </div>
        <button className="hidden sm:block text-sm font-semibold text-slate-100 hover:text-primary px-4">Iniciar Sesión</button>
        <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20">
          Agenda tu Demo
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-20 pb-32 overflow-hidden">
    <div className="absolute inset-0 hero-gradient pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-xs font-bold tracking-wider text-primary uppercase">The Future of Events is here</span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6">
          Eventos más inteligentes. <br />
          <span className="text-primary">Elimina las filas.</span>
          <span className="block text-2xl lg:text-3xl font-bold text-slate-500 mt-2">Run smarter events. Eliminate lines.</span>
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
          El sistema operativo integral para boletaje, pagos y gestión de eventos en tiempo real. Escala tu comercio sin fricciones.
          <span className="text-sm opacity-60 mt-2 block font-normal">The all-in-one operating system for ticketing, payments, and real-time event management.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl text-base font-bold transition-all shadow-xl shadow-primary/25">
            Agenda tu Demo
            <span className="text-[10px] block opacity-80 uppercase leading-none mt-0.5 font-medium">Schedule your Demo</span>
          </button>
          <button className="glass-panel hover:bg-slate-800 text-white px-8 py-4 rounded-xl text-base font-bold transition-all">
            Reservar Evento
          </button>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-full"></div>
        <div className="relative glass-panel p-2 rounded-[2.5rem] shadow-2xl overflow-hidden">
          <img 
            src="https://picsum.photos/seed/gobo-app/1200/1600" 
            alt="GOBO App Interface" 
            className="rounded-[2rem] w-full shadow-inner aspect-[3/4] object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

const BeyondSoftware = () => (
  <section className="py-24 border-y border-slate-800 bg-slate-900/30">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-2">Más allá del Software</h2>
        <p className="text-sm text-primary uppercase font-bold tracking-widest mb-4">Beyond Software</p>
        <p className="text-primary text-xs uppercase tracking-widest mb-4">The Chaos of Modern Events</p>
        <p className="text-slate-400 max-w-2xl mx-auto">La gestión tradicional está rota. Resolvemos los puntos de fricción que matan tus ingresos.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <TimerOff className="w-6 h-6" />, title: "Largas Filas", subtitle: "Long Lines", desc: "La espera arruina la experiencia. Los cuellos de botella en la entrada y puntos de venta impactan directamente tus resultados.", color: "text-red-500", bg: "bg-red-500/10" },
          { icon: <Wallet className="w-6 h-6" />, title: "Gestión de Efectivo", subtitle: "Cash Management", desc: "El conteo manual genera fugas y errores. El comercio digital garantiza una transparencia del 100%.", color: "text-orange-500", bg: "bg-orange-500/10" },
          { icon: <BarChart3 className="w-6 h-6" />, title: "Datos Oscuros", subtitle: "Dark Data", desc: "Si no puedes medirlo, no puedes crecer. Deja de adivinar y comienza a tomar decisiones basadas en datos.", color: "text-primary", bg: "bg-primary/10" }
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="glass-panel p-8 rounded-2xl group hover:border-primary/50 transition-all"
          >
            <div className={`w-12 h-12 rounded-lg ${item.bg} ${item.color} flex items-center justify-center mb-6`}>
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title} <span className="block text-xs font-medium text-slate-500 uppercase mt-1">{item.subtitle}</span></h3>
            <p className="text-slate-400 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const GoboFlow = () => (
  <section className="py-32">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold mb-4">El Flujo GOBO</h2>
          <p className="text-primary text-xs uppercase tracking-widest mb-4">The GOBO Flow</p>
          <p className="text-slate-400">Un ciclo diseñado para velocidad y confiabilidad, desde el primer escaneo hasta la entrega final.</p>
        </div>
        <div className="text-primary font-mono text-sm uppercase tracking-widest">
          COMERCIO OPTIMIZADO <span className="opacity-60">→ OPTIMIZED COMMERCE</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-800 -z-10"></div>
        {[
          { icon: <QrCode className="w-8 h-8" />, title: "1. Digital Ticket", desc: "Instant entry with secure, non-transferable QR codes." },
          { icon: <ShoppingCart className="w-8 h-8" />, title: "2. In-App Ordering", desc: "Attendees browse menus and order from their seats." },
          { icon: <CreditCard className="w-8 h-8" />, title: "3. Instant Payment", desc: "One-click checkout with stored payment methods." },
          { icon: <Package className="w-8 h-8" />, title: "4. QR Pickup", desc: "Scan at the counter and go. No queues, no friction." }
        ].map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center p-6 bg-[#101c22]">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/30 relative z-10 text-white">
              {step.icon}
            </div>
            <h4 className="font-bold mb-2">{step.title}</h4>
            <p className="text-sm text-slate-500">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const OrganizerDashboard = () => (
  <section className="py-24 bg-slate-900/50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="glass-panel rounded-3xl p-1 md:p-12 overflow-hidden relative">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 py-8 px-6">
            <h2 className="text-3xl font-bold mb-6">Panel del Organizador <span className="block text-sm text-primary uppercase mt-2">Organizer Dashboard</span></h2>
            <p className="text-slate-400 mb-8">Control en tiempo real de toda tu operación. Monitorea cada venta, rendimiento de vendedores y densidad de público al instante.</p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded bg-primary/10 text-primary">
                  <Wallet className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold">Ranking de Vendedores <span className="block text-[10px] opacity-50 uppercase">Vendor Rankings</span></h4>
                  <p className="text-sm text-slate-500">Watch your earnings grow by the second with granular tracking.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded bg-primary/10 text-primary">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold">Rendimiento en Tiempo Real <span className="block text-[10px] opacity-50 uppercase">Real-time Performance</span></h4>
                  <p className="text-sm text-slate-500">Identify top performers and optimize inventory levels instantly.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 bg-[#101c22]/80 rounded-2xl p-6 border border-slate-800 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <span className="font-bold text-lg">Analíticas del Evento <span className="ml-2 text-[10px] opacity-50 uppercase">Event Analytics</span></span>
              <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">ACTUALIZACIÓN EN VIVO</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-800/50 p-4 rounded-xl">
                <p className="text-slate-500 text-xs mb-1 uppercase tracking-wider">Ventas Totales <span className="text-[8px] block">TOTAL SALES</span></p>
                <p className="text-2xl font-black text-white">$142,504.20</p>
                <div className="text-emerald-500 text-xs mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +12% vs last hour
                </div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl">
                <p className="text-slate-500 text-xs mb-1 uppercase tracking-wider">Asistentes Registrados <span className="text-[8px] block">ATTENDEES CHECKED-IN</span></p>
                <p className="text-2xl font-black text-white">8,241</p>
                <p className="text-slate-400 text-xs mt-1">Monitoreo activo de flujo en puertas.</p>
              </div>
            </div>
            <div className="h-48 flex items-end justify-between gap-2 px-2">
              {[30, 45, 35, 65, 100, 55, 40].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  className={`w-full bg-primary/${i === 4 ? '100' : '20'} rounded-t ${i === 4 ? 'shadow-[0_0_20px_rgba(19,164,236,0.3)]' : ''}`}
                ></motion.div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-[10px] text-slate-500 font-mono">
              <span>14:00</span>
              <span>16:00 (Peak Hours)</span>
              <span>18:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FieldEngineering = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-block px-3 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-4">
          INGENIERÍA DE CAMPO <span className="ml-1 opacity-60 font-normal">| FIELD ENGINEERING</span>
        </div>
        <h2 className="text-4xl font-bold mb-6">Infraestructura que Impulsa el Éxito <span className="block text-sm text-primary uppercase mt-2">Revolutionize your Physical Venue</span></h2>
        <p className="text-slate-400 text-lg leading-relaxed mb-8">Nos estamos expandiendo al mundo físico. Pronto, GOBO potenciará todo tu recinto con hardware personalizado diseñado para entornos de alto flujo.</p>
        <ul className="space-y-4">
          {[
            { title: "Kioscos de Auto-Servicio", subtitle: "Self-Service Kiosks" },
            { title: "Terminales POS Robustas", subtitle: "Rugged POS Terminals" },
            { title: "Puertas de Control IoT", subtitle: "IoT Access Control Gates" }
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>{item.title} <span className="text-xs opacity-50 ml-2">{item.subtitle}</span></span>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="aspect-square glass-panel rounded-3xl flex items-center justify-center flex-col gap-4 border-dashed border-2">
          <Terminal className="w-12 h-12 text-slate-700" />
          <span className="text-xs text-slate-600 font-bold uppercase">POS V1</span>
        </div>
        <div className="aspect-square glass-panel rounded-3xl flex items-center justify-center flex-col gap-4 bg-gradient-to-br from-primary/10 to-purple-500/10 border-primary/20">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-xl rounded-full"></div>
            <CreditCard className="w-12 h-12 text-primary relative z-10" />
          </div>
          <span className="text-xs text-primary font-bold uppercase">NFC Gates</span>
        </div>
      </div>
    </div>
  </section>
);

const Hardware = () => (
  <section className="py-24 border-t border-slate-800 bg-slate-900/20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Hardware de Próxima Generación</h2>
        <p className="text-slate-500 uppercase text-xs tracking-widest">Next-Gen Venue Infrastructure</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: <Monitor />, title: "Kiosco de Auto-Servicio", subtitle: "SELF-SERVICE KIOSKS", desc: "Terminales interactivas para pedidos y recargas de saldo instantáneas." },
          { icon: <Terminal />, title: "POS V1", subtitle: "NEXT-GEN TERMINALS", desc: "Puntos de venta de alta velocidad optimizados para transacciones offline." },
          { icon: <Watch />, title: "Brazaletes Cashless", subtitle: "CASHLESS WRISTBANDS", desc: "Tecnología NFC para un flujo de caja digital y 100% libre de contacto." },
          { icon: <DoorOpen />, title: "Control de Acceso IoT", subtitle: "IOT ACCESS CONTROL", desc: "Validación inteligente y control de aforo en tiempo real por zonas." }
        ].map((item, i) => (
          <div key={i} className="glass-panel p-8 rounded-2xl text-center hover:border-primary/40 transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
              {item.icon}
            </div>
            <h4 className="font-bold mb-2">{item.title}</h4>
            <p className="text-[10px] text-slate-500 uppercase mb-4 tracking-widest">{item.subtitle}</p>
            <p className="text-sm text-slate-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#101c22] pt-20 pb-10 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
        <div className="col-span-2">
          <span className="text-2xl font-black tracking-tighter text-white block mb-6">GOBO</span>
          <p className="text-slate-500 max-w-xs mb-8">Empoderando a los organizadores con tecnología para operar un comercio sin fricciones a escala.</p>
          <div className="flex gap-4">
            {[Twitter, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center hover:text-primary transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        {[
          { title: "Plataforma", links: ["Ticketing", "Food & Bev", "Access Control", "Analytics"] },
          { title: "Soluciones", links: ["Music Festivals", "Sporting Events", "Conferences", "Fairs"] },
          { title: "Compañía", links: ["About Us", "Careers", "Blog", "Contact"] },
          { title: "Legal", links: ["Privacy", "Terms", "Security"] }
        ].map((section, i) => (
          <div key={i}>
            <h4 className="font-bold mb-6">{section.title}</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              {section.links.map((link, j) => (
                <li key={j}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-slate-800 gap-6">
        <p className="text-xs text-slate-600">© 2024 Plataforma GOBO. Todos los derechos reservados.</p>
        <div className="flex items-center gap-2 text-xs text-slate-600">
          <Globe className="w-4 h-4" />
          <span>Infraestructura Global</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main>
        <Hero />
        <BeyondSoftware />
        <GoboFlow />
        <OrganizerDashboard />
        <FieldEngineering />
        <section className="py-20 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em] mb-12">
              SOPORTE DE PAGOS UNIVERSAL <span className="block text-[10px] mt-1">Universal Payment Support</span>
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
              {['PayPal', 'Visa', 'Mastercard', 'MercadoPago', 'Stripe'].map((brand) => (
                <span key={brand} className="text-xl font-bold text-slate-400">{brand}</span>
              ))}
            </div>
          </div>
        </section>
        <Hardware />
      </main>
      <Footer />
    </div>
  );
}
