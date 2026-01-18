"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface TechCardProps {
    title: string;
    desc: string;
    codeSnippet: string;
    placeholder: string;
}

export default function TechCard({ title, desc, codeSnippet, placeholder }: TechCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative h-[450px] w-full cursor-pointer perspective-1000 group"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                className="relative w-full h-full preserve-3d"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "backOut" }}
            >
                {/* --- FRONT: DESIGN (Updated Visual) --- */}
                <div className="absolute inset-0 backface-hidden bg-white border-2 border-charcoal/10 rounded-sm p-8 flex flex-col justify-between shadow-sm group-hover:shadow-xl group-hover:border-charcoal/30 transition-all duration-300 overflow-hidden">

                    {/* Background Pattern Engineering */}
                    <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />

                    <div className="relative z-10">
                        {/* Visual Placeholder Box */}
                        <div className="w-full h-48 bg-paper mb-6 flex items-center justify-center text-gray-400 font-mono text-xs border border-dashed border-gray-300 group-hover:border-digital transition-colors">
                            <span className="group-hover:text-digital transition-colors">
                                [{placeholder}]
                            </span>
                        </div>

                        <h3 className="font-display text-3xl md:text-4xl font-bold uppercase leading-none mb-3 tracking-tight">
                            {title}
                        </h3>
                        <p className="font-mono text-xs md:text-sm text-gray-600 leading-relaxed max-w-[90%]">
                            {desc}
                        </p>
                    </div>

                    <div className="relative z-10 flex items-center gap-2 text-[10px] font-mono text-digital uppercase tracking-widest mt-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-digital animate-pulse" />
                        Tap to reveal logic
                    </div>
                </div>

                {/* --- BACK: CODE (Tetap sama, hanya border dipertegas) --- */}
                <div
                    className="absolute inset-0 backface-hidden bg-code text-green-400 rounded-sm p-8 font-mono text-xs overflow-hidden flex flex-col border-2 border-code"
                    style={{ transform: "rotateY(180deg)" }}
                >
                    <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-2">
                        <span className="text-white/40">logic.ts</span>
                        <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        </div>
                    </div>
                    <pre className="whitespace-pre-wrap opacity-90 leading-relaxed font-light text-[11px]">
                        {codeSnippet}
                    </pre>
                    <div className="mt-auto flex justify-between text-white/20 text-[10px] uppercase tracking-widest">
                        <span>// System Architecture</span>
                        <span className="animate-pulse">_</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}