import React, { useState, useEffect, createContext, useContext } from "react";
import { motion, AnimatePresence } from "motion/react";
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
  TrendingUp,
  Menu,
  X,
  ArrowRight,
  Zap,
  Mail,
  Sun,
  Moon
} from "lucide-react";

// ─── Theme Context ───
type Theme = "light" | "dark";
const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "light",
  toggle: () => { },
});

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("gobo-theme") as Theme | null;
      return saved || "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("gobo-theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

const useTheme = () => useContext(ThemeContext);

// ─── Theme Toggle Button ───
const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      className="theme-toggle"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <AnimatePresence mode="wait">
        {theme === "light" ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="w-4 h-4 text-[var(--text-muted)]" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="w-4 h-4 text-amber-400" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

// ─── Navigation ───
const navLinks = [
  { label: "Plataforma", sublabel: "Platform", href: "#platform" },
  { label: "Soluciones", sublabel: "Solutions", href: "#solutions" },
  { label: "Hardware", sublabel: "Hardware", href: "#hardware" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-300"
      style={{
        borderColor: "var(--border-default)",
        backgroundColor: "var(--bg-navbar)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a
            href="#"
            className="text-2xl font-black tracking-tighter"
            style={{ color: "var(--text-heading)" }}
          >
            GOBO
          </a>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
                style={{ color: "var(--text-muted)" }}
              >
                {link.label}{" "}
                <span className="text-[10px] block opacity-60">
                  {link.sublabel}
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <div
            className="hidden sm:flex items-center gap-2 mr-1 px-3 py-1.5 rounded-full border"
            style={{
              backgroundColor: "var(--bg-glass)",
              borderColor: "var(--border-default)",
            }}
          >
            <span className="text-xs font-bold text-primary">ES</span>
            <span className="text-xs" style={{ color: "var(--text-faint)" }}>
              |
            </span>
            <span
              className="text-xs hover:text-primary cursor-pointer transition-colors"
              style={{ color: "var(--text-faint)" }}
            >
              EN
            </span>
          </div>
          <button
            className="hidden sm:block text-sm font-semibold hover:text-primary px-4 transition-colors"
            style={{ color: "var(--text-heading)" }}
          >
            Iniciar Sesión
          </button>
          <a
            href="#cta"
            className="hidden sm:block bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20"
          >
            Agenda tu Demo
          </a>
          <button
            className="md:hidden p-2 hover:text-primary transition-colors"
            style={{ color: "var(--text-muted)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden backdrop-blur-xl"
            style={{
              borderTop: "1px solid var(--border-default)",
              backgroundColor: "var(--bg-mobile-menu)",
            }}
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-lg font-semibold hover:text-primary transition-colors py-2"
                  style={{
                    color: "var(--text-heading)",
                    borderBottom: "1px solid var(--border-subtle)",
                  }}
                >
                  {link.label}
                  <span
                    className="text-xs ml-2"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {link.sublabel}
                  </span>
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <button
                  className="text-sm font-semibold hover:text-primary py-2"
                  style={{ color: "var(--text-heading)" }}
                >
                  Iniciar Sesión
                </button>
                <a
                  href="#cta"
                  onClick={() => setMobileOpen(false)}
                  className="bg-primary hover:bg-primary/90 text-white px-5 py-3 rounded-lg text-sm font-bold transition-all text-center shadow-lg shadow-primary/20"
                >
                  Agenda tu Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// ─── Hero Carousel ───
const heroSlides = [
  { src: "/mockup-dashboard.png", label: "Dashboard de Eventos", sublabel: "Event Dashboard" },
  { src: "/mockup-cashless.png", label: "Pagos Cashless", sublabel: "Cashless Payments" },
  { src: "/mockup-ticket.png", label: "Compra de Tickets", sublabel: "Ticket Purchase" },
  { src: "/mockup-menu.png", label: "Pedidos de Comida", sublabel: "Food Ordering" },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex flex-col items-center">
      {/* Floating animation wrapper */}
      <motion.div
        className="relative w-[65%] mx-auto"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="rounded-[2rem] w-full aspect-[3/4] relative overflow-hidden shadow-2xl" style={{ background: "#ffffff" }}>
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={heroSlides[current].src}
              alt={heroSlides[current].label}
              className="absolute inset-0 w-full h-full object-cover rounded-[2rem]"
              initial={{ opacity: 0, scale: 1.08, rotate: 1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.92, rotate: -1 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>

          {/* Caption overlay */}
          <div className="absolute bottom-0 left-0 right-0 px-4 pt-8 pb-6 bg-gradient-to-t from-white/95 via-white/70 to-transparent rounded-b-[2rem]">
            <AnimatePresence mode="wait">
              <motion.p
                key={current}
                className="text-slate-800 text-sm font-bold text-center"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {heroSlides[current].label}
                <span className="block text-[10px] text-slate-500 font-normal mt-0.5">
                  {heroSlides[current].sublabel}
                </span>
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 pt-6">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-primary" : "w-2 bg-gray-400/40"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

// ─── Hero ───
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
          <span className="text-xs font-bold tracking-wider text-primary uppercase">
            The Future of Events is here
          </span>
        </div>
        <h1
          className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6"
          style={{ color: "var(--text-heading)" }}
        >
          Eventos Inteligentes. <br />
          <span className="text-primary">Experiencias únicas de clientes.</span>
          <span
            className="block text-2xl lg:text-3xl font-bold mt-2"
            style={{ color: "var(--text-muted)" }}
          >
            Smart Events. Unique Customer Experiences.
          </span>
        </h1>
        <p
          className="text-xl leading-relaxed mb-10 max-w-xl"
          style={{ color: "var(--text-body)" }}
        >
          La plataforma que conecta ticketing, pagos y operaciones de eventos en tiempo real.
          <span
            className="text-sm opacity-60 mt-2 block font-normal"
          >
            The platform that connects ticketing, payments, and real-time event operations.
          </span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#cta"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl text-base font-bold transition-all shadow-xl shadow-primary/25 text-center"
          >
            Agenda tu Demo
            <span className="text-[10px] block opacity-80 uppercase leading-none mt-0.5 font-medium">
              Schedule your Demo
            </span>
          </a>
          <a
            href="#platform"
            className="glass-panel hover:border-primary/50 px-8 py-4 rounded-xl text-base font-bold transition-all text-center"
            style={{ color: "var(--text-heading)" }}
          >
            Explorar Plataforma
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-full"></div>
        <HeroCarousel />
      </motion.div>
    </div>
  </section>
);

// ─── Beyond Software ───
const BeyondSoftware = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "El Problema",
      sublabel: "The Problem",
      cards: [
        {
          icon: <TimerOff className="w-6 h-6" />,
          title: "Filas interminables",
          subtitle: "Endless Lines",
          desc: "Las filas arruinan la experiencia y frenan las ventas. Con GOBO los asistentes ordenan desde la app y retiran con QR.",
          color: "text-red-500",
          bg: "bg-red-500/10",
        },
        {
          icon: <Wallet className="w-6 h-6" />,
          title: "Caos en el efectivo",
          subtitle: "Cash Chaos",
          desc: "El efectivo genera errores y pérdidas. GOBO centraliza todos los pagos en una plataforma digital.",
          color: "text-orange-500",
          bg: "bg-orange-500/10",
        },
        {
          icon: <BarChart3 className="w-6 h-6" />,
          title: "Eventos a ciegas",
          subtitle: "Blind Events",
          desc: "Sin datos en tiempo real es imposible optimizar un evento. GOBO te da visibilidad total de ventas y comportamiento.",
          color: "text-primary",
          bg: "bg-primary/10",
        },
      ],
    },
    {
      label: "La Solución GOBO",
      sublabel: "The GOBO Solution",
      cards: [
        {
          icon: <QrCode className="w-6 h-6" />,
          title: "Gestor de eventos en minutos",
          subtitle: "Event Setup in Minutes",
          desc: "Creá tu evento, configurá vendedores, menús y precios en minutos. Sin complicaciones técnicas.",
          color: "text-emerald-500",
          bg: "bg-emerald-500/10",
        },
        {
          icon: <CreditCard className="w-6 h-6" />,
          title: "Pagos 100% digitales",
          subtitle: "Fully Digital Payments",
          desc: "Cashless desde el primer momento. Aceptá tarjetas, QR y billeteras digitales sin fricciones.",
          color: "text-primary",
          bg: "bg-primary/10",
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Dashboard en tiempo real",
          subtitle: "Real-Time Dashboard",
          desc: "Monitoreá ventas, ranking de vendedores y flujo de público desde cualquier dispositivo, en vivo.",
          color: "text-purple-500",
          bg: "bg-purple-500/10",
        },
      ],
    },
  ];

  return (
    <section
      id="platform"
      className="py-24 scroll-mt-20 transition-colors duration-300"
      style={{
        borderTop: "1px solid var(--border-default)",
        borderBottom: "1px solid var(--border-default)",
        backgroundColor: "var(--bg-subtle)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-3xl font-bold mb-2"
            style={{ color: "var(--text-heading)" }}
          >
            Más allá del Software
          </h2>
          <p className="text-sm text-primary uppercase font-bold tracking-widest mb-4">
            Beyond Software
          </p>
          <p className="max-w-2xl mx-auto" style={{ color: "var(--text-body)" }}>
            La gestión tradicional está rota. Resolvemos los puntos de fricción
            que matan tus ingresos.
          </p>
        </div>

        {/* Gallery Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === i
                ? "bg-primary text-white shadow-lg shadow-primary/25"
                : "glass-panel hover:border-primary/50"
                }`}
              style={activeTab !== i ? { color: "var(--text-muted)" } : undefined}
            >
              {tab.label}
              <span className="hidden sm:inline text-[10px] ml-1.5 opacity-70">
                {tab.sublabel}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {tabs[activeTab].cards.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="glass-panel p-8 rounded-2xl group hover:border-primary/50 transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-lg ${item.bg} ${item.color} flex items-center justify-center mb-6`}
                >
                  {item.icon}
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "var(--text-heading)" }}
                >
                  {item.title}{" "}
                  <span
                    className="block text-xs font-medium uppercase mt-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.subtitle}
                  </span>
                </h3>
                <p className="leading-relaxed" style={{ color: "var(--text-body)" }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

// ─── GOBO Flow ───
const GoboFlow = () => (
  <section id="solutions" className="py-32 scroll-mt-20 relative overflow-hidden">
    {/* Floating background orbs */}
    <motion.div
      className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-[0.04] blur-3xl pointer-events-none"
      style={{ background: "linear-gradient(135deg, #0ea5e9, #8b5cf6)" }}
      animate={{ x: [0, 30, -20, 0], y: [0, -20, 15, 0], scale: [1, 1.1, 0.95, 1] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-10 right-10 w-60 h-60 rounded-full opacity-[0.04] blur-3xl pointer-events-none"
      style={{ background: "linear-gradient(135deg, #8b5cf6, #0ea5e9)" }}
      animate={{ x: [0, -25, 20, 0], y: [0, 20, -15, 0], scale: [1, 0.95, 1.1, 1] }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6">
        <div className="max-w-xl">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: "var(--text-heading)" }}
          >
            El Flujo GOBO
          </h2>
          <p className="text-primary text-xs uppercase tracking-widest mb-4">
            The GOBO Flow
          </p>
          <p style={{ color: "var(--text-body)" }}>
            Un ciclo diseñado para velocidad y confiabilidad, desde el primer
            escaneo hasta la entrega final.
          </p>
        </div>
        <motion.div
          className="text-primary font-mono text-sm uppercase tracking-widest"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          COMERCIO OPTIMIZADO{" "}
          <span className="opacity-60">→ OPTIMIZED COMMERCE</span>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 relative">
        {/* Animated flow line */}
        <div className="hidden lg:block absolute top-1/2 left-[8%] right-[8%] h-px -translate-y-1/2 -z-0">
          <div className="w-full h-full" style={{ backgroundColor: "var(--flow-line)" }} />
          {/* Animated dot traveling along the line */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50"
            animate={{ left: ["0%", "100%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
          />
          {/* Glow trail */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-20 h-1 rounded-full"
            style={{ background: "linear-gradient(90deg, transparent, #0ea5e9, transparent)" }}
            animate={{ left: ["-5%", "100%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
          />
        </div>

        {/* Animated arrows between cards (desktop only) */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`arrow-${i}`}
            className="hidden lg:flex absolute top-1/2 -translate-y-1/2 items-center justify-center z-10"
            style={{ left: `${25 * (i + 1)}%`, transform: "translate(-50%, -50%)" }}
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="drop-shadow-lg">
              <circle cx="14" cy="14" r="13" fill="var(--bg-base)" stroke="var(--border-default)" strokeWidth="1" />
              <path d="M11 9l5 5-5 5" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        ))}

        {[
          {
            icon: <QrCode className="w-8 h-8" />,
            title: "1. Digital Ticket",
            desc: "Instant entry with secure, non-transferable QR codes.",
          },
          {
            icon: <ShoppingCart className="w-8 h-8" />,
            title: "2. In-App Ordering",
            desc: "Attendees browse menus and order from their seats.",
          },
          {
            icon: <CreditCard className="w-8 h-8" />,
            title: "3. Instant Payment",
            desc: "One-click checkout with stored payment methods.",
          },
          {
            icon: <Package className="w-8 h-8" />,
            title: "4. QR Pickup",
            desc: "Scan at the counter and go. No queues, no friction.",
          },
        ].map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="flex flex-col items-center text-center p-8 rounded-2xl transition-colors duration-300 relative group"
            style={{ backgroundColor: "var(--flow-step-bg)" }}
          >
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-2xl bg-primary/0 group-hover:bg-primary/5 transition-all duration-500" />
            <motion.div
              className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/30 relative z-10 text-white"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              {step.icon}
            </motion.div>
            <h4
              className="font-bold mb-2 relative z-10"
              style={{ color: "var(--text-heading)" }}
            >
              {step.title}
            </h4>
            <p className="text-sm relative z-10" style={{ color: "var(--text-muted)" }}>
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Organizer Dashboard ───
const OrganizerDashboard = () => (
  <section
    className="py-24 transition-colors duration-300"
    style={{ backgroundColor: "var(--bg-subtle)" }}
  >
    <div className="max-w-7xl mx-auto px-6">
      <div className="glass-panel rounded-3xl p-1 md:p-12 overflow-hidden relative">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 py-8 px-6">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "var(--text-heading)" }}
            >
              Panel del Organizador{" "}
              <span className="block text-sm text-primary uppercase mt-2">
                Organizer Dashboard
              </span>
            </h2>
            <p className="mb-8" style={{ color: "var(--text-body)" }}>
              Control en tiempo real de toda tu operación. Monitorea cada venta,
              rendimiento de vendedores y densidad de público al instante.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded bg-primary/10 text-primary">
                  <Wallet className="w-5 h-5" />
                </div>
                <div>
                  <h4
                    className="font-bold"
                    style={{ color: "var(--text-heading)" }}
                  >
                    Ranking de Vendedores{" "}
                    <span
                      className="block text-[10px] uppercase"
                      style={{ color: "var(--text-faint)" }}
                    >
                      Vendor Rankings
                    </span>
                  </h4>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Watch your earnings grow by the second with granular
                    tracking.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded bg-primary/10 text-primary">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h4
                    className="font-bold"
                    style={{ color: "var(--text-heading)" }}
                  >
                    Rendimiento en Tiempo Real{" "}
                    <span
                      className="block text-[10px] uppercase"
                      style={{ color: "var(--text-faint)" }}
                    >
                      Real-time Performance
                    </span>
                  </h4>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Identify top performers and optimize inventory levels
                    instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Dashboard panel — always dark for contrast */}
          <div
            className="lg:col-span-3 rounded-2xl p-6 shadow-2xl transition-colors duration-300"
            style={{
              backgroundColor: "var(--bg-dashboard-panel)",
              border: "1px solid var(--border-default)",
            }}
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-bold text-lg text-white">
                Analíticas del Evento{" "}
                <span className="ml-2 text-[10px] opacity-50 uppercase">
                  Event Analytics
                </span>
              </span>
              <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                ACTUALIZACIÓN EN VIVO
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div
                className="p-4 rounded-xl"
                style={{ backgroundColor: "var(--bg-dashboard-stat)" }}
              >
                <p className="text-slate-400 text-xs mb-1 uppercase tracking-wider">
                  Ventas Totales{" "}
                  <span className="text-[8px] block">TOTAL SALES</span>
                </p>
                <p className="text-2xl font-black text-white">$142,504.20</p>
                <div className="text-emerald-500 text-xs mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +12% vs last hour
                </div>
              </div>
              <div
                className="p-4 rounded-xl"
                style={{ backgroundColor: "var(--bg-dashboard-stat)" }}
              >
                <p className="text-slate-400 text-xs mb-1 uppercase tracking-wider">
                  Asistentes Registrados{" "}
                  <span className="text-[8px] block">ATTENDEES CHECKED-IN</span>
                </p>
                <p className="text-2xl font-black text-white">8,241</p>
                <p className="text-slate-400 text-xs mt-1">
                  Monitoreo activo de flujo en puertas.
                </p>
              </div>
            </div>
            <div className="h-48 flex items-end justify-between gap-2 px-2">
              {[30, 45, 35, 65, 100, 55, 40].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  transition={{ duration: 0.8, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className={`w-full rounded-t ${i === 4
                    ? "bg-primary shadow-[0_0_20px_rgba(19,164,236,0.3)]"
                    : "bg-primary/20"
                    }`}
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

// ─── Field Engineering ───
const FieldEngineering = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-block px-3 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 dark:text-purple-400 text-xs font-bold uppercase tracking-widest mb-4">
          INGENIERÍA DE CAMPO{" "}
          <span className="ml-1 opacity-60 font-normal">
            | FIELD ENGINEERING
          </span>
        </div>
        <h2
          className="text-4xl font-bold mb-6"
          style={{ color: "var(--text-heading)" }}
        >
          Infraestructura que Impulsa el Éxito{" "}
          <span className="block text-sm text-primary uppercase mt-2">
            Revolutionize your Physical Venue
          </span>
        </h2>
        <p
          className="text-lg leading-relaxed mb-8"
          style={{ color: "var(--text-body)" }}
        >
          Nos estamos expandiendo al mundo físico. Pronto, GOBO potenciará todo
          tu recinto con hardware personalizado diseñado para entornos de alto
          flujo.
        </p>
        <ul className="space-y-4">
          {[
            {
              title: "Kioscos de Auto-Servicio",
              subtitle: "Self-Service Kiosks",
            },
            {
              title: "Terminales POS Robustas",
              subtitle: "Rugged POS Terminals",
            },
            {
              title: "Puertas de Control IoT",
              subtitle: "IoT Access Control Gates",
            },
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3"
              style={{ color: "var(--text-heading)" }}
            >
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>
                {item.title}{" "}
                <span
                  className="text-xs ml-2"
                  style={{ color: "var(--text-faint)" }}
                >
                  {item.subtitle}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="aspect-square rounded-3xl overflow-hidden shadow-xl border border-[var(--border-default)]">
          <img
            src="/kiosk.png"
            alt="Kiosco de Auto-Servicio GOBO"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-square rounded-3xl overflow-hidden shadow-xl border border-[var(--border-default)]">
          <img
            src="/wristband.png"
            alt="Brazalete Cashless GOBO"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

// ─── Hardware ───
const Hardware = () => (
  <section
    id="hardware"
    className="py-24 scroll-mt-20 transition-colors duration-300"
    style={{
      borderTop: "1px solid var(--border-default)",
      backgroundColor: "var(--bg-subtle)",
    }}
  >
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2
          className="text-3xl font-bold mb-4"
          style={{ color: "var(--text-heading)" }}
        >
          Hardware de Próxima Generación
        </h2>
        <p
          className="uppercase text-xs tracking-widest"
          style={{ color: "var(--text-muted)" }}
        >
          Next-Gen Venue Infrastructure
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <Monitor />,
            title: "Kiosco de Auto-Servicio",
            subtitle: "SELF-SERVICE KIOSKS",
            desc: "Terminales interactivas para pedidos y recargas de saldo instantáneas.",
          },
          {
            icon: <Terminal />,
            title: "POS V1",
            subtitle: "NEXT-GEN TERMINALS",
            desc: "Puntos de venta de alta velocidad optimizados para transacciones offline.",
          },
          {
            icon: <Watch />,
            title: "Brazaletes Cashless",
            subtitle: "CASHLESS WRISTBANDS",
            desc: "Tecnología NFC para un flujo de caja digital y 100% libre de contacto.",
          },
          {
            icon: <DoorOpen />,
            title: "Control de Acceso IoT",
            subtitle: "IOT ACCESS CONTROL",
            desc: "Validación inteligente y control de aforo en tiempo real por zonas.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-2xl text-center hover:border-primary/40 transition-colors"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
              {item.icon}
            </div>
            <h4
              className="font-bold mb-2"
              style={{ color: "var(--text-heading)" }}
            >
              {item.title}
            </h4>
            <p
              className="text-[10px] uppercase mb-4 tracking-widest"
              style={{ color: "var(--text-muted)" }}
            >
              {item.subtitle}
            </p>
            <p className="text-sm" style={{ color: "var(--text-body)" }}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── CTA ───
const CTASection = () => (
  <section id="cta" className="py-32 relative overflow-hidden scroll-mt-20">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[150px] rounded-full pointer-events-none"
      style={{ backgroundColor: "var(--cta-glow)" }}
    ></div>
    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-xs font-bold text-primary uppercase tracking-wider">
            Comienza Ahora
          </span>
        </div>
        <h2
          className="text-4xl lg:text-6xl font-black tracking-tight mb-6"
          style={{ color: "var(--text-heading)" }}
        >
          Transforma tus Eventos
          <span
            className="block text-xl lg:text-2xl font-bold mt-3"
            style={{ color: "var(--text-muted)" }}
          >
            Transform Your Events Today
          </span>
        </h2>
        <p
          className="text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ color: "var(--text-body)" }}
        >
          Únete a los organizadores que ya están generando más ingresos,
          eliminando filas y ofreciendo una experiencia digital premium.
        </p>
        <div className="flex flex-col gap-6 items-center">
          <button className="group bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all shadow-2xl shadow-primary/30 flex items-center gap-3">
            Agenda tu Demo Gratis
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="mailto:hello@gobo.com"
            className="flex items-center gap-2 hover:text-primary transition-colors text-sm font-medium"
            style={{ color: "var(--text-body)" }}
          >
            <Mail className="w-4 h-4" />
            hello@gobo.com
          </a>
        </div>
        <p className="text-xs mt-8" style={{ color: "var(--text-faint)" }}>
          Sin compromiso • Setup en 24 horas • Soporte dedicado
        </p>
      </motion.div>
    </div>
  </section>
);

// ─── Footer ───
const Footer = () => (
  <footer
    className="pt-20 pb-10 transition-colors duration-300"
    style={{
      backgroundColor: "var(--bg-inset)",
      borderTop: "1px solid var(--border-default)",
    }}
  >
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
        <div className="col-span-2">
          <a
            href="#"
            className="text-2xl font-black tracking-tighter block mb-6"
            style={{ color: "var(--text-heading)" }}
          >
            GOBO
          </a>
          <p className="max-w-xs mb-8" style={{ color: "var(--text-muted)" }}>
            Empoderando a los organizadores con tecnología para operar un
            comercio sin fricciones a escala.
          </p>
          <div className="flex gap-4">
            {[Twitter, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center hover:text-primary transition-colors"
                style={{ color: "var(--text-muted)" }}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        {[
          {
            title: "Plataforma",
            links: [
              { label: "Ticketing", href: "#platform" },
              { label: "Food & Bev", href: "#solutions" },
              { label: "Access Control", href: "#hardware" },
              { label: "Analytics", href: "#platform" },
            ],
          },
          {
            title: "Soluciones",
            links: [
              { label: "Music Festivals", href: "#solutions" },
              { label: "Sporting Events", href: "#solutions" },
              { label: "Conferences", href: "#solutions" },
              { label: "Fairs", href: "#solutions" },
            ],
          },
          {
            title: "Compañía",
            links: [
              { label: "About Us", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Blog", href: "#" },
              { label: "Contact", href: "#cta" },
            ],
          },
          {
            title: "Legal",
            links: [
              { label: "Privacy", href: "#" },
              { label: "Terms", href: "#" },
              { label: "Security", href: "#" },
            ],
          },
        ].map((section, i) => (
          <div key={i}>
            <h4
              className="font-bold mb-6"
              style={{ color: "var(--text-heading)" }}
            >
              {section.title}
            </h4>
            <ul className="space-y-4 text-sm">
              {section.links.map((link, j) => (
                <li key={j}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div
        className="flex flex-col md:flex-row justify-between items-center pt-10 gap-6"
        style={{ borderTop: "1px solid var(--border-default)" }}
      >
        <p className="text-xs" style={{ color: "var(--text-faint)" }}>
          © 2026 Plataforma GOBO. Todos los derechos reservados.
        </p>
        <div
          className="flex items-center gap-2 text-xs"
          style={{ color: "var(--text-faint)" }}
        >
          <Globe className="w-4 h-4" />
          <span>Infraestructura Global</span>
        </div>
      </div>
    </div>
  </footer>
);

// ─── App ───
export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <BeyondSoftware />
          <GoboFlow />
          <OrganizerDashboard />
          <FieldEngineering />
          <section
            className="py-20 transition-colors duration-300"
            style={{ borderTop: "1px solid var(--border-default)" }}
          >
            <div className="max-w-7xl mx-auto px-6 text-center">
              <p
                className="text-sm font-bold uppercase tracking-[0.2em] mb-12"
                style={{ color: "var(--text-muted)" }}
              >
                SOPORTE DE PAGOS UNIVERSAL{" "}
                <span className="block text-[10px] mt-1">
                  Universal Payment Support
                </span>
              </p>
              <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 hover:opacity-70 transition-all">
                {/* Visa */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 471" className="h-10 w-auto">
                  <path d="M278.198 334.228l33.36-195.763h53.358l-33.384 195.763h-53.334zm246.11-191.545c-10.57-3.966-27.135-8.222-47.822-8.222-52.725 0-89.863 26.551-90.18 64.604-.317 28.13 26.508 43.822 46.754 53.185 20.77 9.597 27.752 15.716 27.652 24.267-.14 13.123-16.586 19.116-31.924 19.116-21.355 0-32.7-2.966-50.225-10.273l-6.878-3.112-7.487 43.822c12.463 5.467 35.508 10.2 59.438 10.45 56.09 0 92.501-26.248 92.916-66.884.199-22.27-14.016-39.216-44.8-53.188-18.65-9.056-30.072-15.099-29.951-24.269 0-8.137 9.668-16.838 30.556-16.838 17.45-.271 30.088 3.534 39.936 7.5l4.781 2.259 7.232-42.416m137.308-4.206h-41.232c-12.773 0-22.332 3.486-27.94 16.234l-79.244 179.402h56.032s9.159-24.122 11.232-29.418c6.123 0 60.523.084 68.336.084 1.596 6.854 6.492 29.334 6.492 29.334h49.52l-43.195-195.636zM596.148 297.4c4.413-11.275 21.26-54.724 21.26-54.724-.317.521 4.38-11.334 7.074-18.684l3.606 16.878s10.217 46.729 12.353 56.53h-44.293zM247.407 138.465l-52.239 133.496-5.565-27.129c-9.726-31.274-40.025-65.156-73.898-82.12l47.767 171.203 56.455-.065 84.004-195.385h-56.524" fill="#0E4595" />
                  <path d="M146.92 138.465H60.88l-.682 4.073c66.939 16.204 111.232 55.363 129.618 102.415l-18.709-89.96c-3.23-12.396-12.597-16.095-24.186-16.528" fill="#F2AE14" />
                </svg>
                {/* Mastercard */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 131.39 86.9" className="h-10 w-auto">
                  <rect width="131.39" height="86.9" rx="8" fill="none" />
                  <circle cx="48.37" cy="43.45" r="27.5" fill="#EB001B" />
                  <circle cx="82.98" cy="43.45" r="27.5" fill="#F79E1B" />
                  <path d="M65.68 21.17a27.42 27.42 0 0 0-10.13 21.28 27.42 27.42 0 0 0 10.13 21.28A27.42 27.42 0 0 0 75.81 42.45 27.42 27.42 0 0 0 65.68 21.17Z" fill="#FF5F00" />
                </svg>
                {/* MercadoPago */}
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="h-9 w-9">
                    <circle cx="20" cy="20" r="20" fill="#00BCFF" />
                    <path d="M10 22c2-4 5-7 10-7s8 3 10 7" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M8 25c2-5 6-9 12-9s10 4 12 9" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
                  </svg>
                  <span className="text-sm font-bold" style={{ color: "var(--text-body)" }}>MercadoPago</span>
                </div>
                {/* Stripe */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 468 222.5" className="h-8 w-auto">
                  <path d="M414 113.4c0-25.6-12.4-45.8-36.1-45.8-23.8 0-38.2 20.2-38.2 45.6 0 30.1 17 45.3 41.4 45.3 11.9 0 20.9-2.7 27.7-6.5V132c-6.8 3.4-14.6 5.5-24.5 5.5-9.7 0-18.3-3.4-19.4-15.2h48.9c0-1.3.2-6.5.2-8.9zm-49.4-9.5c0-11.3 6.9-16 13.2-16 6.1 0 12.6 4.7 12.6 16h-25.8zM301.1 67.6c-9.8 0-16.1 4.6-19.6 7.8l-1.3-6.2h-22v116.6l25-5.3.1-28.3c3.6 2.6 8.9 6.3 17.7 6.3 17.9 0 34.2-14.4 34.2-46.1-.1-29-16.6-44.8-34.1-44.8zm-6 68.9c-5.9 0-9.4-2.1-11.8-4.7l-.1-37.1c2.6-2.9 6.2-4.9 11.9-4.9 9.1 0 15.4 10.2 15.4 23.3 0 13.4-6.2 23.4-15.4 23.4zM223.8 61.7l25.1-5.4V36l-25.1 5.3zM223.8 69.3h25.1v87.5h-25.1zM196.9 76.7l-1.6-7.4h-21.6v87.5h25V97.5c5.9-7.7 15.9-6.3 19-5.2v-23c-3.2-1.2-14.9-3.4-20.8 7.4zM146.9 47.6l-24.4 5.2-.1 80.1c0 14.8 11.1 25.7 25.9 25.7 8.2 0 14.2-1.5 17.5-3.3V135c-3.2 1.3-19 5.9-19-8.9V90.6h19V69.3h-19l.1-21.7zM79.3 94.7c0-3.9 3.2-5.4 8.5-5.4 7.6 0 17.2 2.3 24.8 6.4V72.2c-8.3-3.3-16.5-4.6-24.8-4.6C67.5 67.6 52 78.8 52 97.4c0 28.8 39.7 24.2 39.7 36.6 0 4.6-4 6.1-9.6 6.1-8.3 0-18.9-3.4-27.3-8v23.8c9.3 4 18.7 5.7 27.3 5.7 20.8 0 35.1-10.3 35.1-28.2-.1-31.1-39.9-25.6-39.9-37.7z" fill="#6772E5" />
                </svg>
              </div>
            </div>
          </section>
          <Hardware />
          <CTASection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
