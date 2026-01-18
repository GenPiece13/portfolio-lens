import Image from "next/image";
import { Syne, Space_Mono } from "next/font/google";
import TechCard from "@/components/TechCard";
import BottomNav from "@/components/BottomNav";
import { photos, projects } from "@/data/portofolio";
import GalleryItem from "@/components/GalleryItem";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne", weight: ["400", "700", "800"] });
const spaceMono = Space_Mono({ subsets: ["latin"], variable: "--font-space", weight: ["400", "700"] });

export default function Home() {
  return (
    <div className={`${syne.variable} ${spaceMono.variable} font-sans bg-paper text-charcoal selection:bg-digital selection:text-white`}>
      <BottomNav />

      <main className="pb-32">

        {/* --- 01. HERO SECTION (Refined) --- */}
        <section id="hero" className="min-h-screen px-6 py-24 flex flex-col justify-end relative overflow-hidden">

          {/* REVISI: Background Text lebih subtle dan posisinya diatur agar tidak memotong judul utama */}
          <div className="absolute -top-20 -left-10 text-[25vw] font-display font-black text-charcoal/5 leading-none select-none pointer-events-none whitespace-nowrap z-0">
            PORTFOLIO
          </div>

          <div className="relative z-10 mt-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-2 h-2 bg-digital rounded-full animate-pulse"></span>
              <span className="font-mono text-xs border border-charcoal/30 px-3 py-1 rounded-full uppercase inline-block bg-paper/50 backdrop-blur-sm">
                Available for Hire
              </span>
            </div>

            <h1 className="font-display text-[13vw] md:text-8xl leading-[0.85] font-black uppercase tracking-tighter text-charcoal mb-8 mix-blend-darken">
              Logic <br />
              {/* Stroke effect text */}
              <span className="text-transparent" style={{ WebkitTextStroke: "1px #111" }}>
                Meets Lens.
              </span>
            </h1>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-charcoal/20 pt-6">
              <p className="font-mono text-sm md:text-base max-w-md leading-relaxed text-charcoal/70">
                Senior Digital Product Designer & Creative Technologist crafting systems with code and stories with light.
              </p>
              <div className="font-mono text-xs animate-bounce hidden md:block">↓ SCROLL</div>
            </div>
          </div>
        </section>

        {/* --- 02. IT / LOGIC SECTION --- */}
        <section id="dev" className="px-6 py-24">
          <div className="flex items-baseline justify-between mb-16 border-b border-charcoal/10 pb-4">
            <h2 className="font-display text-4xl md:text-6xl font-bold uppercase">Selected Works</h2>
            <span className="font-mono text-xs opacity-50 bg-charcoal text-white px-2 py-1 rounded-sm">DEV.LOG</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {projects.map((project) => (
              <TechCard
                key={project.id}
                title={project.title}
                desc={project.desc}
                codeSnippet={project.code}
                placeholder={project.visualPlaceholder}
              />
            ))}
          </div>
        </section>

        {/* --- 03. PHOTOGRAPHY SECTION --- */}
        <section id="art" className="py-24 bg-charcoal text-paper overflow-hidden relative">
          <div className="px-6 mb-12 flex justify-between items-end">
            <div>
              <span className="font-mono text-digital text-xs uppercase tracking-widest mb-2 block">Gallery</span>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-white">Visual Archives</h2>
            </div>
            <div className="font-mono text-xs opacity-50 text-right text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-digital rounded-full animate-pulse"></span>
              PRESS & HOLD / SWIPE &rarr;
            </div>
          </div>

          {/* Horizontal Scroll Snap Container */}
          <div className="flex gap-6 overflow-x-auto px-6 pb-12 scrollbar-hide snap-x pl-[10vw]">

            {/* --- BAGIAN INI YANG DIUBAH MENJADI KOMPONEN --- */}
            {photos.map((photo) => (
              <GalleryItem
                key={photo.id}
                index={photo.id}
                src={photo.src}
                alt={photo.alt}
                caption={photo.caption}
              />
            ))}

            <div className="min-w-[5vw] snap-align-none"></div>
          </div>
        </section>

        {/* --- 04. FOOTER --- */}
        <footer className="px-6 py-12 text-center font-mono text-xs opacity-40 border-t border-charcoal/5 mt-12">
          <p>&copy; {new Date().getFullYear()} Lens & Logic. Built with Next.js & Framer Motion.</p>
        </footer>

      </main>
    </div>
  );
}