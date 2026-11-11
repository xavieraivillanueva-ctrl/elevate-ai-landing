import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import {
  Bot,
  Cpu,
  ShieldCheck,
  Zap,
  ArrowRight,
  Code2,
  Database,
  Terminal,
  Activity,
  Phone,
  Mail,
  Download,
  ExternalLink,
  Lock,
  Compass,
  Users,
  Check,
  Menu,
  X
} from 'lucide-react';

// Datos maestros oficiales de contacto
const VCARD_DATA = {
  fullName: 'Xavier Villanueva',
  role: 'CEO & Systems Architect',
  organization: 'Elévate IA | PureReserve',
  phone: '+52 81 1321 1467',
  cleanPhone: '+528113211467',
  email: 'Xavieraivillanueva@gmail.com',
  note: 'Acceso inmediato, domina el instante.'
};

const VCARD_RAW = [
  'BEGIN:VCARD',
  'VERSION:3.0',
  'N:Villanueva;Xavier;;;',
  'FN:Xavier Villanueva',
  'ORG:Elévate IA;PureReserve',
  'TITLE:CEO & Systems Architect',
  'TEL;TYPE=CELL,VOICE;VALUE=uri:tel:+528113211467',
  'EMAIL;TYPE=INTERNET,WORK:Xavieraivillanueva@gmail.com',
  'NOTE:Acceso inmediato, domina el instante.',
  'END:VCARD'
].join('\r\n');

export default function App() {
  const [isVCardOpen, setIsVCardOpen] = useState(false);
  const [downloadedVCard, setDownloadedVCard] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTabSwarm, setActiveTabSwarm] = useState<'coordinador' | 'cto' | 'cqo' | 'ciso'>('coordinador');

  const downloadVcf = () => {
    const blob = new Blob([VCARD_RAW], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'xavier_villanueva.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setDownloadedVCard(true);
    setTimeout(() => setDownloadedVCard(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#07070E] text-slate-100 flex flex-col font-sans relative selection:bg-[#00E5FF]/20 selection:text-[#00E5FF]">
      {/* Background Glows Estáticos */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-[#9B35F0]/10 rounded-full blur-[140px]" />
        <div className="absolute top-[30%] right-[-5%] w-[500px] h-[500px] bg-[#00E5FF]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[600px] h-[600px] bg-[#00F59B]/08 rounded-full blur-[160px]" />
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* ── 1. NAVBAR CORPORATIVO ── */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07070E]/80 border-b border-white/08">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-xl p-[1.5px] bg-gradient-to-br from-[#9B35F0] via-[#00E5FF] to-[#00F59B] shadow-[0_0_20px_rgba(0,229,255,0.3)] group-hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] transition-all">
              <div className="w-full h-full rounded-[10px] bg-[#0A0914] flex items-center justify-center overflow-hidden">
                <img 
                  src="/assets/elevate-logo.png" 
                  alt="Elévate IA Logo" 
                  className="w-7 h-7 object-contain group-hover:scale-110 transition-transform"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-white flex items-center gap-1.5 font-sans">
                ELÉVATE <span className="gradient-text-primary font-black">IA</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#00E5FF]/80 font-mono -mt-1">
                Exocórtex AGI
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#quienes-somos" className="hover:text-[#00E5FF] transition-colors">Quiénes Somos</a>
            <a href="#vision" className="hover:text-[#00E5FF] transition-colors">Visión</a>
            <a href="#servicios" className="hover:text-[#00E5FF] transition-colors">Servicios</a>
            <a href="#orquestacion" className="hover:text-[#00E5FF] transition-colors">Orquestación</a>
            <a href="#pure-reserve" className="hover:text-[#00E5FF] transition-colors">PureReserve</a>
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden md:flex items-center gap-3.5">
            <button
              onClick={() => setIsVCardOpen(true)}
              className="px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white border border-white/10 hover:border-[#00E5FF]/50 bg-white/[0.02] hover:bg-white/[0.06] transition-all flex items-center gap-2 cursor-pointer"
            >
              <Users className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>vCard CEO</span>
            </button>
            <a
              href="#contacto"
              className="glow-btn-primary px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2"
            >
              <span>Iniciar Proyecto</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden px-6 py-6 bg-[#0E0D17] border-b border-white/10 space-y-4">
            <a href="#quienes-somos" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 py-1">Quiénes Somos</a>
            <a href="#vision" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 py-1">Visión</a>
            <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 py-1">Servicios</a>
            <a href="#orquestacion" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 py-1">Orquestación</a>
            <a href="#pure-reserve" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 py-1">PureReserve</a>
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => { setMobileMenuOpen(false); setIsVCardOpen(true); }}
                className="w-full py-2.5 text-center rounded-xl border border-white/10 text-xs font-mono uppercase tracking-wider text-slate-200"
              >
                vCard Contacto CEO
              </button>
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="glow-btn-primary w-full py-3 text-center rounded-xl text-xs font-bold uppercase tracking-wider block"
              >
                Iniciar Proyecto
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ── 2. HERO SECTION CINEMÁTICO ── */}
      <section className="relative z-10 pt-20 pb-28 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Badge Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#00E5FF]/30 shadow-[0_0_20px_rgba(0,229,255,0.15)] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#00F59B] animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest text-slate-300">
            Fábrica de Software Agéntico &bull; Exocórtex AGI v2.1
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl text-white leading-[1.1] mb-6">
          Transformamos tu Visión en una{' '}
          <span className="gradient-text-primary">
            Corporación Autónoma
          </span>{' '}
          de Alta Tecnología.
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-3xl leading-relaxed mb-10">
          Diseñamos y desplegamos ecosistemas de software modular impulsados por <strong className="text-slate-200">orquestación multi-agente</strong>. Multiplicamos la capacidad de fundadores y directivos mediante arquitecturas full-stack resilientes, trazabilidad inmutable y cero deuda técnica.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <a
            href="#servicios"
            className="glow-btn-primary w-full sm:w-auto px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2.5"
          >
            <Zap className="w-4 h-4" />
            <span>Explorar Servicios Tecnológicos</span>
          </a>
          <button
            onClick={() => setIsVCardOpen(true)}
            className="glow-btn-secondary w-full sm:w-auto px-8 py-4 rounded-2xl text-sm font-mono uppercase tracking-wider flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Users className="w-4 h-4 text-[#00E5FF]" />
            <span>Tarjeta del Fundador (vCard)</span>
          </button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
          <div className="p-5 rounded-2xl gradient-border-glow text-center">
            <div className="text-3xl font-extrabold text-white mb-1 font-mono">12</div>
            <div className="text-xs uppercase tracking-wider text-slate-400">Directivos C-Level Autónomos</div>
          </div>
          <div className="p-5 rounded-2xl gradient-border-glow text-center">
            <div className="text-3xl font-extrabold text-[#00E5FF] mb-1 font-mono">35+</div>
            <div className="text-xs uppercase tracking-wider text-slate-400">Sub-Agentes de Especialidad</div>
          </div>
          <div className="p-5 rounded-2xl gradient-border-glow text-center">
            <div className="text-3xl font-extrabold text-[#00F59B] mb-1 font-mono">100%</div>
            <div className="text-xs uppercase tracking-wider text-slate-400">Código Propio & Blindado</div>
          </div>
          <div className="p-5 rounded-2xl gradient-border-glow text-center">
            <div className="text-3xl font-extrabold text-[#9B35F0] mb-1 font-mono">&lt; 1s</div>
            <div className="text-xs uppercase tracking-wider text-slate-400">Rendimiento Cero Latencia</div>
          </div>
        </div>
      </section>

      {/* ── 3. QUIÉNES SOMOS & TESIS FUNDACIONAL ── */}
      <section id="quienes-somos" className="relative z-10 py-24 px-6 border-t border-white/05 bg-[#090812]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Column: Story */}
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#9B35F0]/15 border border-[#9B35F0]/30 text-xs font-mono uppercase tracking-widest text-[#9B35F0]">
                Tesis Fundacional
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                El software tradicional es lento y burocrático.{' '}
                <span className="gradient-text-cyan">Nosotros cambiamos la velocidad del tablero.</span>
              </h2>
              <p className="text-slate-400 leading-relaxed text-base">
                En el modelo del siglo pasado, levantar un producto de alta ingeniería requería millones de dólares y docenas de desarrolladores con roces de comunicación.
              </p>
              <p className="text-slate-400 leading-relaxed text-base">
                <strong className="text-white">Elévate IA</strong> nace para derribar esa barrera: unimos el juicio estratégico de un <strong className="text-[#00E5FF]">Fundador Humano</strong> con un <strong className="text-[#00F59B]">Exocórtex Agéntico Colectivo</strong> capaz de diseñar, compilar, auditar y desplegar sistemas de software de clase mundial en días, no en meses.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/08">
                  <ShieldCheck className="w-6 h-6 text-[#00F59B] mb-2" />
                  <h4 className="font-bold text-white text-sm">Cero Adivinanzas</h4>
                  <p className="text-xs text-slate-400 mt-1">Arquitectura basada en bloques modulares y comprobados en batalla.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/08">
                  <Activity className="w-6 h-6 text-[#00E5FF] mb-2" />
                  <h4 className="font-bold text-white text-sm">Auditoría Kaizen</h4>
                  <p className="text-xs text-slate-400 mt-1">Supervisión automática de calidad (QA/SRE) en cada línea de código.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Blueprint Card */}
            <div className="flex-1 w-full max-w-lg">
              <div className="rounded-3xl p-8 gradient-border-glow relative overflow-hidden">
                <div className="text-xs font-mono uppercase tracking-widest text-[#00E5FF] mb-3 flex items-center justify-between">
                  <span>Arquitectura Exocórtex v2.1</span>
                  <span className="text-[#00F59B]">ONLINE</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-6">El Núcleo de Mando Autónomo</h3>

                <div className="space-y-4 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-black/40 border border-[#9B35F0]/30 flex items-center justify-between">
                    <span className="text-slate-300">1. Núcleo Humano (Fundador)</span>
                    <span className="text-[#9B35F0] font-bold">Dirección Ética</span>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="w-4 h-4 text-white/30 rotate-90" />
                  </div>
                  <div className="p-4 rounded-xl bg-black/40 border border-[#00E5FF]/40 flex items-center justify-between shadow-[0_0_20px_rgba(0,229,255,0.1)]">
                    <span className="text-slate-300">2. Consejo Directivo 12 C-Level</span>
                    <span className="text-[#00E5FF] font-bold">System 2 Core</span>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="w-4 h-4 text-white/30 rotate-90" />
                  </div>
                  <div className="p-4 rounded-xl bg-black/40 border border-[#00F59B]/30 flex items-center justify-between">
                    <span className="text-slate-300">3. 35 Sub-Agentes Tácticos</span>
                    <span className="text-[#00F59B] font-bold">Producción Real</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/08 text-slate-400 text-xs italic text-center">
                  "No contratamos intermediarios que inflan costes: orquestamos inteligencia pura."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. NUESTRA VISIÓN ── */}
      <section id="vision" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#00E5FF]/15 border border-[#00E5FF]/30 text-xs font-mono uppercase tracking-widest text-[#00E5FF] mb-4">
            Rumbo Tecnológico 2026 - 2030
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Nuestra Visión: De Herramientas Pasivas a{' '}
            <span className="gradient-text-primary">Organizaciones Autónomas</span>
          </h2>
          <p className="text-slate-400 mt-4 leading-relaxed">
            Creemos que las empresas del futuro no se medirán por la cantidad de personas en una oficina, sino por la densidad intelectual de su arquitectura agéntica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl gradient-border-glow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#9B35F0]/15 border border-[#9B35F0]/30 flex items-center justify-center text-[#9B35F0] mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Hiper-Autonomía Ética</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Sistemas capaces de tomar decisiones operativas en tiempo real (bloqueo de fraude, corte de caja, balance de inventario) bajo límites éticos y legales blindados.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/05 font-mono text-[11px] text-[#00E5FF]">
              &bull; Gobernanza inquebrantable
            </div>
          </div>

          <div className="p-8 rounded-3xl gradient-border-glow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#00E5FF]/15 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Zero-Token Event Idle</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Reemplazamos el polling costoso de IA con eventos nativos del kernel del sistema operativo. Cero consumo de cuota ni energía cuando el sistema está en reposo.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/05 font-mono text-[11px] text-[#00E5FF]">
              &bull; Eficiencia extrema de recursos
            </div>
          </div>

          <div className="p-8 rounded-3xl gradient-border-glow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#00F59B]/15 border border-[#00F59B]/30 flex items-center justify-center text-[#00F59B] mb-6">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Soberanía de Datos Total</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Todo el código, esquemas de bases de datos y memoria corporativa pertenecen 100% al cliente en sus propios repositorios de Git y nubes seguras (Supabase/Vercel).
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/05 font-mono text-[11px] text-[#00E5FF]">
              &bull; Sin bloqueo ni dependencias cautivas
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SERVICIOS TECNOLÓGICOS QUE CUMPLIMOS ── */}
      <section id="servicios" className="relative z-10 py-24 px-6 border-t border-white/05 bg-[#080710]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#00F59B]/15 border border-[#00F59B]/30 text-xs font-mono uppercase tracking-widest text-[#00F59B] mb-4">
              Capacidades Operativas
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Servicios Tecnológicos de Vanguardia
            </h2>
            <p className="text-slate-400 mt-4 leading-relaxed">
              No somos una agencia más. Somos tu brazo tecnológico de élite capaz de resolver problemas complejos con arquitectura moderna y entregas inmediatas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Servicio 1 */}
            <div className="p-8 rounded-3xl gradient-border-glow group">
              <div className="w-12 h-12 rounded-2xl bg-[#9B35F0]/20 border border-[#9B35F0]/40 flex items-center justify-center text-[#9B35F0] mb-6 group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fábrica de Software Modular</h3>
              <div className="text-xs font-mono text-[#00E5FF] mb-4">App Factory OS &bull; PWA Full-Stack</div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Desarrollo integral de aplicaciones web y móviles offline-first con React 19, TypeScript estricto, Vite, Tailwind CSS y Supabase. Componentes desacoplados, rápidos y escalables.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 font-mono">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#00F59B]" /> Monorepos estructurados</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#00F59B]" /> Service Workers & PWA</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#00F59B]" /> Tiempos de carga &lt; 800ms</li>
              </ul>
            </div>

            {/* Servicio 2 */}
            <div className="p-8 rounded-3xl gradient-border-glow group">
              <div className="w-12 h-12 rounded-2xl bg-[#00E5FF]/20 border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF] mb-6 group-hover:scale-110 transition-transform">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Orquestación de Swarms IA</h3>
              <div className="text-xs font-mono text-[#00E5FF] mb-4">Multi-Agent Swarm Orchestration</div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Implementación de enjambres de inteligencia artificial colaborativos donde múltiples modelos de frontera (Gemini, Claude, GPT) cooperan con roles de coordinador, verificador y monitor.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 font-mono">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#00F59B]" /> Canales de discusión asíncronos</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#00F59B]" /> Eliminación de alucinaciones (QA Loop)</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#00F59B]" /> Balanceo dinámico de cuotas</li>
              </ul>
            </div>

            {/* Servicio 3 */}
            <div className="p-8 rounded-3xl gradient-border-glow group">
              <div className="w-12 h-12 rounded-2xl bg-[#00F59B]/20 border border-[#00F59B]/40 flex items-center justify-center text-[#00F59B] mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Ingeniería Inversa (REA)</h3>
              <div className="text-xs font-mono text-[#00E5FF] mb-4">Reverse Engineering Agent</div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Descompilación arquitectónica ética de productos líderes para reconstruir soluciones 100% superiores, limpias, modernas y libres de dependencias obsoletas o deuda técnica ajena.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 font-mono">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#00F59B]" /> Análisis estructural de flujos</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#00F59B]" /> Cero copia pirata: 100% propio</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#00F59B]" /> Optimización radical de costos</li>
              </ul>
            </div>

            {/* Servicio 4 */}
            <div className="p-8 rounded-3xl gradient-border-glow group">
              <div className="w-12 h-12 rounded-2xl bg-[#9B35F0]/20 border border-[#9B35F0]/40 flex items-center justify-center text-[#9B35F0] mb-6 group-hover:scale-110 transition-transform">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fintech & Pagos Invisibles</h3>
              <div className="text-xs font-mono text-[#00E5FF] mb-4">Stripe &bull; SPEI &bull; Tarjetas Virtuales</div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Motores transaccionales para cobros off-session, pre-autorizaciones dinámicas, split financiero automático a cuentas de socios y tarjetas virtuales desechables (VCC) de privacidad total.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 font-mono">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#00F59B]" /> Integración Stripe Elements / Connect</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#00F59B]" /> Dispersión SPEI bancaria automatizada</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#00F59B]" /> Conciliación contable y corte de caja</li>
              </ul>
            </div>

            {/* Servicio 5 */}
            <div className="p-8 rounded-3xl gradient-border-glow group">
              <div className="w-12 h-12 rounded-2xl bg-[#00E5FF]/20 border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF] mb-6 group-hover:scale-110 transition-transform">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Sidecars 24/7 Zero-Token</h3>
              <div className="text-xs font-mono text-[#00E5FF] mb-4">Event-Driven Kernel Bridges</div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Daemons en segundo plano que escuchan eventos nativos de sistema de archivos (Drive, NAS, local) y disparan sincronizaciones y telemetría de forma instantánea sin gastar cuota mientras duermen.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 font-mono">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#00F59B]" /> 0 tokens en reposo continuo</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#00F59B]" /> Puente seguro Local ⇄ Nube</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#00F59B]" /> Balizas de sincronización en vivo</li>
              </ul>
            </div>

            {/* Servicio 6 */}
            <div className="p-8 rounded-3xl gradient-border-glow group">
              <div className="w-12 h-12 rounded-2xl bg-[#00F59B]/20 border border-[#00F59B]/40 flex items-center justify-center text-[#00F59B] mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Auditoría SRE & CISO Shield</h3>
              <div className="text-xs font-mono text-[#00E5FF] mb-4">Seguridad & Calidad Continua</div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Blindaje criptográfico de bases de datos con RLS (Row Level Security) impenetrable, análisis estricto de vulnerabilidades OWASP, tipado estático y compresión de activos para producción.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 font-mono">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#00F59B]" /> Certificación de compilación limpia</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#00F59B]" /> Prevención de fuga de variables .env</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#00F59B]" /> Reportes ejecutivos con semáforos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. CONSOLA INTERACTIVA DE ORQUESTACIÓN AGÉNTICA ── */}
      <section id="orquestacion" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#9B35F0]/15 border border-[#9B35F0]/30 text-xs font-mono uppercase tracking-widest text-[#9B35F0] mb-4">
            Demostración en Vivo
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Así Opera la Sala de Juntas y el Swarm Agéntico
          </h2>
          <p className="text-slate-400 mt-4 leading-relaxed">
            Cada agente asume un rol directivo o técnico con contexto compartido y verificación mutua. Selecciona un nodo para inspeccionar su despacho:
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveTabSwarm('coordinador')}
            className={`px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
              activeTabSwarm === 'coordinador'
                ? 'bg-[#00E5FF] text-black font-bold shadow-[0_0_20px_rgba(0,229,255,0.4)]'
                : 'bg-white/[0.04] text-slate-400 hover:text-white border border-white/08'
            }`}
          >
            👑 @Coordinador (CEO)
          </button>
          <button
            onClick={() => setActiveTabSwarm('cto')}
            className={`px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
              activeTabSwarm === 'cto'
                ? 'bg-[#00E5FF] text-black font-bold shadow-[0_0_20px_rgba(0,229,255,0.4)]'
                : 'bg-white/[0.04] text-slate-400 hover:text-white border border-white/08'
            }`}
          >
            ⚡ @Arquitecto (CTO)
          </button>
          <button
            onClick={() => setActiveTabSwarm('cqo')}
            className={`px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
              activeTabSwarm === 'cqo'
                ? 'bg-[#00E5FF] text-black font-bold shadow-[0_0_20px_rgba(0,229,255,0.4)]'
                : 'bg-white/[0.04] text-slate-400 hover:text-white border border-white/08'
            }`}
          >
            🛡️ @Calidad (CQO)
          </button>
          <button
            onClick={() => setActiveTabSwarm('ciso')}
            className={`px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
              activeTabSwarm === 'ciso'
                ? 'bg-[#00E5FF] text-black font-bold shadow-[0_0_20px_rgba(0,229,255,0.4)]'
                : 'bg-white/[0.04] text-slate-400 hover:text-white border border-white/08'
            }`}
          >
            🔒 @Seguridad (CISO)
          </button>
        </div>

        {/* Console Box */}
        <div className="rounded-3xl bg-[#090812] border border-white/10 p-6 md:p-8 font-mono shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <div className="flex items-center justify-between border-b border-white/08 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-xs text-slate-400 ml-3 font-mono">elevate_swarm_terminal://v2.1</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-[#00F59B]">
              <span className="w-2 h-2 rounded-full bg-[#00F59B] animate-ping" />
              FEED EN TIEMPO REAL
            </div>
          </div>

          {activeTabSwarm === 'coordinador' && (
            <div className="space-y-4 text-xs leading-relaxed text-slate-300">
              <div className="text-[#00E5FF] font-bold">[COORDINADOR] Orden Presidencial #08 Recibida: Despliegue de Interfaz vCard Digital.</div>
              <div>&gt; Desglosando requerimientos en 4 vectores: Token vCard 3.0, QR estilizado con corrección 'H', componente modal React y blob de descarga forzada.</div>
              <div className="text-emerald-400">&gt; Asignando tarea @CTO para implementación en monorepo `purereserve-app` y `purereserve-landing`.</div>
              <div className="text-slate-500">// Nudo de verificación cruzada activado. Aguardando dictamen de @CQO...</div>
            </div>
          )}

          {activeTabSwarm === 'cto' && (
            <div className="space-y-4 text-xs leading-relaxed text-slate-300">
              <div className="text-[#9B35F0] font-bold">[CTO & ARCHITECT] Código implementado con éxito:</div>
              <div>&gt; Archivo: `VCardModal.tsx` + `VCardScreen.tsx` integrados con Vite y Tailwind v4.</div>
              <div>&gt; Assets: Emblema oficial en `/assets/elevate-logo.png` excavado al centro (52x52px).</div>
              <div className="text-emerald-400">&gt; Compilación: `tsc -b && vite build` finalizado en 12.13s con 0 errores.</div>
              <div className="text-slate-500">// Entregando commit a4c36e7 para auditoría de seguridad...</div>
            </div>
          )}

          {activeTabSwarm === 'cqo' && (
            <div className="space-y-4 text-xs leading-relaxed text-slate-300">
              <div className="text-[#00F59B] font-bold">[CQO — CALIDAD & SRE] Dictamen de Aprobación de Entrega:</div>
              <div>&gt; Verificación de bytes: QR genera 2.3KB de datos limpios.</div>
              <div>&gt; Integridad de descarga: Archivo `xavier_villanueva.vcf` validado con codificación UTF-8.</div>
              <div className="text-emerald-400">&gt; Semáforo de Producción: VERDE TOTAL (PASS). Despliegue autorizado sin bloqueos.</div>
              <div className="text-slate-500">// Telemetría de Drive actualizada. Procediendo al cierre de turno.</div>
            </div>
          )}

          {activeTabSwarm === 'ciso' && (
            <div className="space-y-4 text-xs leading-relaxed text-slate-300">
              <div className="text-amber-400 font-bold">[CISO — DEFENSE SHIELD] Escaneo Criptográfico:</div>
              <div>&gt; RLS Policies: Verificadas en tablas de `profiles` y `support_tickets`.</div>
              <div>&gt; Variables de entorno: Ningún token ni clave secreta (.env) expuesta en bundles cliente.</div>
              <div className="text-emerald-400">&gt; Nivel de Blindaje: Grado Militar. Cumplimiento Fintech Nivel 1 garantizado.</div>
              <div className="text-slate-500">// Monitoreo activo de endpoints habilitado 24/7.</div>
            </div>
          )}
        </div>
      </section>

      {/* ── 7. FLAGSHIP SHOWCASE: PURERESERVE ── */}
      <section id="pure-reserve" className="relative z-10 py-24 px-6 border-t border-white/05 bg-[#090814]">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-[#121024] to-[#0A0915] border border-white/10 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#00E5FF]/15 border border-[#00E5FF]/30 text-xs font-mono uppercase tracking-widest text-[#00E5FF]">
                Caso de Estudio Destacado
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                PureReserve: La Revolución Silenciosa del Hospedaje Hiperlocal
              </h2>
              <p className="text-slate-400 text-base leading-relaxed">
                Desarrollado y operado por la tecnología de Elévate IA. Una plataforma B2B/B2C para moteles de Monterrey con radar geoespacial, reserva en 1 solo clic y check-in ultra-discreto en caseta en solo 3 segundos.
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/08">
                  <div className="text-lg font-bold text-white">3 Segundos</div>
                  <div className="text-slate-400 text-[11px]">Validación QR en Caseta</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/08">
                  <div className="text-lg font-bold text-[#00F59B]">Cero Fricción</div>
                  <div className="text-slate-400 text-[11px]">Pagos Invisibles Off-Session</div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <a
                  href="http://localhost:5180/vcard.html"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#00E5FF] hover:underline"
                >
                  <span>Ver Demo Operativo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Visual Box */}
            <div className="flex-1 w-full max-w-md">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <img
                  src="/assets/logo.png"
                  alt="PureReserve Demo"
                  className="w-full h-auto object-cover bg-black p-8"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. LIDERAZGO & CONTACTO DIRECTO (CEO VCARD INTEGRADA) ── */}
      <section id="contacto" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#00F59B]/15 border border-[#00F59B]/30 text-xs font-mono uppercase tracking-widest text-[#00F59B] mb-4">
            Canal Ejecutivo Directo
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Conversa con la Dirección
          </h2>
          <p className="text-slate-400 mt-4 leading-relaxed">
            Sin intermediarios ni secretarias. Accede directamente al vector de contacto oficial del Fundador y Arquitecto de Sistemas.
          </p>
        </div>

        {/* Tarjeta de Contacto Ejecutiva con QR Centrado */}
        <div className="max-w-md mx-auto rounded-3xl p-8 gradient-border-glow shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl p-[1.5px] bg-gradient-to-br from-[#9B35F0] via-[#00E5FF] to-[#00F59B] shrink-0">
              <div className="w-full h-full rounded-[14px] bg-[#0E0D15] flex items-center justify-center overflow-hidden">
                <img 
                  src="/assets/elevate-logo.png" 
                  alt="Elévate Logo" 
                  className="w-11 h-11 object-contain"
                />
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-extrabold text-xl text-white truncate tracking-tight">
                {VCARD_DATA.fullName}
              </h3>
              <p className="text-xs text-[#00E5FF] font-medium truncate font-mono">
                {VCARD_DATA.role}
              </p>
              <p className="text-[11px] text-slate-400 truncate">
                {VCARD_DATA.organization}
              </p>
            </div>
          </div>

          {/* QR Code Container */}
          <div className="flex flex-col items-center my-6">
            <div className="p-4 bg-white rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
              <QRCodeSVG
                value={VCARD_RAW}
                size={220}
                level="H"
                bgColor="#FFFFFF"
                fgColor="#0F172A"
                includeMargin={true}
                imageSettings={{
                  src: '/assets/elevate-logo.png',
                  height: 52,
                  width: 52,
                  excavate: true
                }}
              />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 mt-3">
              Escanea para añadir a tus contactos
            </span>
          </div>

          {/* Acciones de Contacto */}
          <div className="space-y-3 font-mono text-xs">
            <a
              href={`tel:${VCARD_DATA.cleanPhone}`}
              className="w-full p-3.5 rounded-xl bg-white/[0.03] border border-white/08 hover:border-[#00E5FF] transition-colors flex items-center justify-between text-slate-200"
            >
              <span className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00F59B]" />
                {VCARD_DATA.phone}
              </span>
              <span className="text-slate-500 text-[10px] uppercase">Llamar</span>
            </a>

            <a
              href={`mailto:${VCARD_DATA.email}`}
              className="w-full p-3.5 rounded-xl bg-white/[0.03] border border-white/08 hover:border-[#00E5FF] transition-colors flex items-center justify-between text-slate-200"
            >
              <span className="flex items-center gap-2.5 truncate pr-2">
                <Mail className="w-4 h-4 text-[#00E5FF] shrink-0" />
                <span className="truncate">{VCARD_DATA.email}</span>
              </span>
              <span className="text-slate-500 text-[10px] uppercase shrink-0">Email</span>
            </a>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/05 text-center text-slate-400 text-[11px] italic font-serif">
              "{VCARD_DATA.note}"
            </div>
          </div>

          {/* Botón Guardar en Contactos */}
          <button
            onClick={downloadVcf}
            className="glow-btn-primary w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 mt-6 cursor-pointer"
          >
            {downloadedVCard ? (
              <>
                <Check className="w-4 h-4 stroke-[2.5]" />
                <span>¡Contacto Guardado!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 stroke-[2.5]" />
                <span>Guardar en Contactos (.vcf)</span>
              </>
            )}
          </button>
        </div>
      </section>

      {/* ── 9. FOOTER INSTITUCIONAL ── */}
      <footer className="relative z-10 border-t border-white/08 py-12 px-6 bg-[#05040A]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <img src="/assets/elevate-logo.png" alt="Logo" className="w-6 h-6 object-contain" />
            <span className="font-bold text-slate-300">Elévate IA</span>
            <span>&bull;</span>
            <span>Monterrey, N.L., México</span>
          </div>

          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>Vite</span>
            <span>&bull;</span>
            <span>React 19</span>
            <span>&bull;</span>
            <span>TypeScript</span>
            <span>&bull;</span>
            <span>Tailwind v4</span>
            <span>&bull;</span>
            <span>Vercel</span>
          </div>

          <div>
            &copy; {new Date().getFullYear()} Elévate IA &bull; Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* ── 10. MODAL FLOTANTE vCARD ── */}
      {isVCardOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-[fadeIn_0.2s_ease-out]">
          <div className="relative w-full max-w-sm rounded-3xl bg-[#0E0D17] border border-white/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
            <button
              onClick={() => setIsVCardOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3.5 mb-5">
              <img src="/assets/elevate-logo.png" alt="Logo" className="w-10 h-10 object-contain" />
              <div>
                <h4 className="font-bold text-white">{VCARD_DATA.fullName}</h4>
                <p className="text-xs text-[#00E5FF] font-mono">{VCARD_DATA.role}</p>
              </div>
            </div>
            <div className="p-3 bg-white rounded-2xl flex justify-center my-4">
              <QRCodeSVG
                value={VCARD_RAW}
                size={200}
                level="H"
                bgColor="#FFFFFF"
                fgColor="#0F172A"
                includeMargin={true}
                imageSettings={{
                  src: '/assets/elevate-logo.png',
                  height: 48,
                  width: 48,
                  excavate: true
                }}
              />
            </div>
            <button
              onClick={downloadVcf}
              className="glow-btn-primary w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 mt-4 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Descargar .vcf</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
