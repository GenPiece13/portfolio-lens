import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                paper: "#F2F2F0",     // Warna dasar (Kertas)
                charcoal: "#111111",  // Warna teks (Tinta)
                digital: "#4D4DFF",   // Aksen (Hyperlink/Tech)
                code: "#1A1A1A",      // Background terminal
            },
            fontFamily: {
                display: ["var(--font-syne)"], // Font Judul (Artistic)
                mono: ["var(--font-space)"],   // Font Coding (Logic)
            },
            transitionTimingFunction: {
                'editorial': 'cubic-bezier(0.76, 0, 0.24, 1)', // Gerakan halus premium
            }
        },
    },
    plugins: [],
};
export default config;