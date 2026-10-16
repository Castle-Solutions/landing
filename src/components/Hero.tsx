import { Mail, ShieldCheck, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-slate-900/90 text-slate-300 border border-slate-800 mb-8 backdrop-blur-sm">
        <ShieldCheck className="w-4 h-4 text-sky-400" />
        <span>Consultoría & Desarrollo Especializado</span>
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
        Castle <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400">Solutions</span>
      </h1>

      <p className="text-xl sm:text-2xl font-semibold text-slate-200 mb-4 leading-snug">
        {siteConfig.tagline}
      </p>

      <p className="text-base sm:text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed font-normal">
        {siteConfig.description}
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-sky-500 to-indigo-600 text-white hover:from-sky-400 hover:to-indigo-500 transition-all shadow-lg shadow-sky-500/25 hover:shadow-sky-500/35 hover:-translate-y-0.5 cursor-pointer"
        >
          <Mail className="w-4 h-4" />
          <span>Contáctanos</span>
          <ArrowRight className="w-4 h-4" />
        </a>

        <a
          href={`mailto:${siteConfig.contactEmail}?subject=Consulta%20de%20Servicios%20-%20Castle%20Solutions`}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer backdrop-blur-sm"
        >
          <span>{siteConfig.contactEmail}</span>
        </a>
      </div>
    </div>
  );
}
