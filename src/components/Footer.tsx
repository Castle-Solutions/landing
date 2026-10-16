import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="relative z-10 w-full max-w-6xl mx-auto px-6 py-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
      <p>© {new Date().getFullYear()} {siteConfig.legalName}. Todos los derechos reservados.</p>
      <p className="font-mono text-slate-400">{siteConfig.domain}</p>
    </footer>
  );
}
