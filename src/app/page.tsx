import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { Footer } from "@/components/Footer";

export default function LandingPage() {
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

      <Header />

      <main className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16 md:py-24 flex-1 flex flex-col justify-center">
        <Hero />
        <Pillars />
      </main>

      <Footer />
    </div>
  );
}
