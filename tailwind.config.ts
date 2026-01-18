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
                paper: "#F2F2F0",     // Warna dasar
                charcoal: "#111111",  // Warna teks hitam pekat
                digital: "#4D4DFF",   // Warna aksen biru/ungu
                code: "#1A1A1A",      // Background hitam coding
            },
            fontFamily: {
                display: ["var(--font-syne)"],
                mono: ["var(--font-space)"],
            },
            transitionTimingFunction: {
                'editorial': 'cubic-bezier(0.76, 0, 0.24, 1)',
            }
        },
    },
    plugins: [],
};
export default config;