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
        <div className="relative glass-panel p-2 rounded-[2.5rem] shadow-2xl overflow-hidden">
          {/* App mockup — always dark for product branding */}
          <div
            className="rounded-[2rem] w-full aspect-[3/4] flex flex-col items-center justify-center p-8 relative overflow-hidden"
            style={{ background: "var(--bg-mockup)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5"></div>
            <div className="relative z-10 w-full max-w-xs space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-white tracking-tighter">
                  GOBO
                </span>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <QrCode className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>
              <div
                className="rounded-2xl p-4 backdrop-blur-sm"
                style={{
                  backgroundColor: "var(--bg-mockup-card)",
                  border: "1px solid var(--bg-mockup-card-border)",
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">
                      Festival GOBO 2026
                    </p>
                    <p className="text-[11px] text-slate-400">
                      15 Mar • Arena Central
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold">
                    ACTIVO
                  </span>
                  <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full font-bold">
                    8,241 ✓
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div
                  className="rounded-xl p-3"
                  style={{
                    backgroundColor: "var(--bg-mockup-stat)",
                    border: "1px solid var(--bg-mockup-card-border)",
                  }}
                >
                  <p className="text-[10px] text-slate-500 uppercase">Ventas</p>
                  <p className="text-lg font-black text-white">$142K</p>
                  <div className="text-emerald-400 text-[10px] flex items-center gap-0.5 mt-1">
                    <TrendingUp className="w-3 h-3" /> +12%
                  </div>
                </div>
                <div
                  className="rounded-xl p-3"
                  style={{
                    backgroundColor: "var(--bg-mockup-stat)",
                    border: "1px solid var(--bg-mockup-card-border)",
                  }}
                >
                  <p className="text-[10px] text-slate-500 uppercase">
                    Órdenes
                  </p>
                  <p className="text-lg font-black text-white">3,847</p>
                  <p className="text-primary text-[10px] mt-1">
                    En tiempo real
                  </p>
                </div>
              </div>
              <button className="w-full bg-primary text-white rounded-xl py-3 text-sm font-bold shadow-lg shadow-primary/30">
                Escanear QR →
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// ─── Beyond Software ───
const BeyondSoftware = () => (
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
      <div className="text-center mb-16">
        <h2
          className="text-3xl font-bold mb-2"
          style={{ color: "var(--text-heading)" }}
        >
          Más allá del Software
        </h2>
        <p className="text-sm text-primary uppercase font-bold tracking-widest mb-4">
          Beyond Software
        </p>
        <p className="text-primary text-xs uppercase tracking-widest mb-4">
          The Chaos of Modern Events
        </p>
        <p className="max-w-2xl mx-auto" style={{ color: "var(--text-body)" }}>
          La gestión tradicional está rota. Resolvemos los puntos de fricción
          que matan tus ingresos.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <TimerOff className="w-6 h-6" />,
            title: "Largas Filas",
            subtitle: "Long Lines",
            desc: "La espera arruina la experiencia. Los cuellos de botella en la entrada y puntos de venta impactan directamente tus resultados.",
            color: "text-red-500",
            bg: "bg-red-500/10",
          },
          {
            icon: <Wallet className="w-6 h-6" />,
            title: "Gestión de Efectivo",
            subtitle: "Cash Management",
            desc: "El conteo manual genera fugas y errores. El comercio digital garantiza una transparencia del 100%.",
            color: "text-orange-500",
            bg: "bg-orange-500/10",
          },
          {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Datos Oscuros",
            subtitle: "Dark Data",
            desc: "Si no puedes medirlo, no puedes crecer. Deja de adivinar y comienza a tomar decisiones basadas en datos.",
            color: "text-primary",
            bg: "bg-primary/10",
          },
        ].map((item, i) => (
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
      </div>
    </div>
  </section>
);

// ─── GOBO Flow ───
const GoboFlow = () => (
  <section id="solutions" className="py-32 scroll-mt-20">
    <div className="max-w-7xl mx-auto px-6">
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
        <div className="text-primary font-mono text-sm uppercase tracking-widest">
          COMERCIO OPTIMIZADO{" "}
          <span className="opacity-60">→ OPTIMIZED COMMERCE</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
        <div
          className="hidden lg:block absolute top-1/2 left-0 w-full h-px -z-10"
          style={{ backgroundColor: "var(--flow-line)" }}
        ></div>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-6 transition-colors duration-300"
            style={{ backgroundColor: "var(--flow-step-bg)" }}
          >
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/30 relative z-10 text-white">
              {step.icon}
            </div>
            <h4
              className="font-bold mb-2"
              style={{ color: "var(--text-heading)" }}
            >
              {step.title}
            </h4>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
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
        <div className="aspect-square glass-panel rounded-3xl flex items-center justify-center flex-col gap-4 border-dashed border-2">
          <Terminal
            className="w-12 h-12"
            style={{ color: "var(--text-faint)" }}
          />
          <span
            className="text-xs font-bold uppercase"
            style={{ color: "var(--text-faint)" }}
          >
            POS V1
          </span>
        </div>
        <div className="aspect-square glass-panel rounded-3xl flex items-center justify-center flex-col gap-4 bg-gradient-to-br from-primary/10 to-purple-500/10 border-primary/20">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-xl rounded-full"></div>
            <CreditCard className="w-12 h-12 text-primary relative z-10" />
          </div>
          <span className="text-xs text-primary font-bold uppercase">
            NFC Gates
          </span>
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
              <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
                {["PayPal", "Visa", "Mastercard", "MercadoPago", "Stripe"].map(
                  (brand) => (
                    <span
                      key={brand}
                      className="text-xl font-bold"
                      style={{ color: "var(--text-body)" }}
                    >
                      {brand}
                    </span>
                  )
                )}
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
