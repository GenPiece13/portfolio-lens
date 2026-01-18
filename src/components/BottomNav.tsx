"use client";
import { motion } from "framer-motion";

export default function BottomNav() {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none"
        >
            <nav className="pointer-events-auto flex items-center gap-8 px-8 py-4 bg-white/80 backdrop-blur-md border border-charcoal/5 rounded-full shadow-2xl">
                <span className="font-display font-bold text-lg">L&L</span>
                <div className="w-px h-4 bg-charcoal/20"></div>
                <div className="flex gap-6 font-mono text-xs font-bold text-charcoal/60">
                    <button onClick={() => scrollTo('hero')} className="hover:text-digital transition-colors">TOP</button>
                    <button onClick={() => scrollTo('dev')} className="hover:text-digital transition-colors">DEV</button>
                    <button onClick={() => scrollTo('art')} className="hover:text-digital transition-colors">ART</button>
                </div>
            </nav>
        </motion.div>
    );
}