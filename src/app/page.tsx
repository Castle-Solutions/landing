import { Mail, Sparkles, Server, Cpu, ShieldCheck, ArrowRight } from "lucide-react";

export default function Home() {
  const contactEmail = "contacto@castlesolutions.com.co";

  const pillars = [
    {
      title: "Arquitectura de Software",
      description:
        "Diseño e implementación de sistemas resilientes, APIs robustas y aplicaciones web modernas preparadas para alta escala.",
      icon: Cpu,
    },
    {
      title: "Inteligencia Artificial Aplicada",
      description:
        "Automatización cognitiva, agentes autónomos e integración de modelos avanzados de lenguaje en los flujos core de tu empresa.",
      icon: Sparkles,
    },
    {
      title: "Infraestructura Cloud & DevOps",
      description:
        "Pipelines automatizados, despliegues continuos y arquitecturas en la nube seguras, observables y de alto rendimiento.",
      icon: Server,
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-[#080c14] text-slate-100 overflow-hidden">
      {/* Background ambient decorative glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-sky-600/15 rounded-full blur-[128px]" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-indigo-600/15 rounded-full blur-[128px]" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-[128px]" />
        {/* Subtle grid texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Top Navigation / Brand Bar */}
      <header className="relative z-10 w-full max-w-6xl mx-auto px-6 py-8 flex items-center justify-between border-b border-slate-800/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-600 p-[1px] shadow-lg shadow-sky-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-bold text-sky-400 text-lg">
              C
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Castle <span className="text-sky-400">Solutions</span>
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-sky-950/80 text-sky-300 border border-sky-800/60 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          Próximamente
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16 md:py-24 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-slate-900/90 text-slate-300 border border-slate-800 mb-8 backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>Consultoría & Desarrollo Especializado</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            Castle <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400">Solutions</span>
          </h1>

          <p className="text-xl sm:text-2xl font-semibold text-slate-200 mb-4 leading-snug">
            Ingeniería de Software & Soluciones de Inteligencia Artificial
          </p>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed font-normal">
            Estamos construyendo una nueva plataforma de consultoría e ingeniería digital.
            Transformamos retos complejos en software escalable, arquitecturas cloud resilientes
            y capacidades de inteligencia artificial aplicada.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-sky-500 to-indigo-600 text-white hover:from-sky-400 hover:to-indigo-500 transition-all shadow-lg shadow-sky-500/25 hover:shadow-sky-500/35 hover:-translate-y-0.5 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Contáctanos</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${contactEmail}?subject=Consulta%20de%20Servicios%20-%20Castle%20Solutions`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer backdrop-blur-sm"
            >
              <span>{contactEmail}</span>
            </a>
          </div>
        </div>

        {/* Feature / Capability Pillars */}
        <section className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-950/20 backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-950/60 border border-sky-800/40 flex items-center justify-center text-sky-400 mb-5 group-hover:scale-105 group-hover:bg-sky-900/50 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-6xl mx-auto px-6 py-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Castle Solutions. Todos los derechos reservados.</p>
        <p className="font-mono text-slate-400">castlesolutions.com.co</p>
      </footer>
    </div>
  );
}
