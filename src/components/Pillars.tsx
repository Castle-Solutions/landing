import { Cpu, Sparkles, Server } from "lucide-react";
import { siteConfig } from "@/config/site";

const iconMap = {
  Cpu,
  Sparkles,
  Server,
};

export function Pillars() {
  return (
    <section className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-6">
      {siteConfig.pillars.map((pillar) => {
        const Icon = iconMap[pillar.iconName as keyof typeof iconMap] ?? Cpu;
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
  );
}
