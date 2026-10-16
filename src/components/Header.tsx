import { siteConfig } from "@/config/site";

export function Header() {
  return (
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
  );
}
