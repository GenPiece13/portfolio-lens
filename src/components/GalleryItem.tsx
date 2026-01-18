"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface GalleryItemProps {
    src: string;
    alt: string;
    caption: string;
    index: number;
}

export default function GalleryItem({ src, alt, caption, index }: GalleryItemProps) {
    return (
        <motion.div
            // --- INTERAKSI UTAMA ---
            initial="idle"
            whileHover="active" // Untuk Desktop (Mouse)
            whileTap="active"   // Untuk Mobile (Sentuh)
            viewport={{ once: true }}

            // Definisi Animasi (Menggantikan CSS Class yang macet)
            variants={{
                idle: {
                    filter: "grayscale(100%) brightness(0.7) contrast(1.2)", // Gelap & Hitam Putih
                    scale: 0.98
                },
                active: {
                    filter: "grayscale(0%) brightness(1.1) contrast(1)",     // Berwarna & Terang (Bloom)
                    scale: 1.05
                }
            }}
            transition={{
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94] // Easing "Editorial" halus
            }}

            // --- STYLING CONTAINER ---
            className="relative min-w-[80vw] md:min-w-[500px] aspect-[4/5] md:aspect-[3/4] bg-gray-900 rounded-sm snap-center overflow-hidden border border-white/10 cursor-grab active:cursor-grabbing bg-scanline"
        >
            {/* Gambar Next.js */}
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 500px"
                draggable={false} // Mencegah ghost image saat drag di desktop
            />

            {/* Overlay Caption (Muncul saat Active) */}
            <motion.div
                variants={{
                    idle: { opacity: 0, y: 20 },
                    active: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent flex flex-col justify-end p-8 z-20"
            >
                <span className="text-digital font-mono text-[10px] mb-2 tracking-widest">
                    Isolasi No. 0{index}
                </span>
                <p className="font-display text-2xl uppercase text-white leading-none tracking-tight">
                    {caption}
                </p>
            </motion.div>
        </motion.div>
    );
}