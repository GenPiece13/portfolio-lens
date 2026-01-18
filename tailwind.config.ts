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
                paper: "#F2F2F0",     // Off-white
                charcoal: "#111111",  // Black text
                digital: "#4D4DFF",   // Blue accent
                code: "#1A1A1A",      // Dark bg
            },
            fontFamily: {
                display: ["var(--font-syne)"],
                mono: ["var(--font-space)"],
            },
            // Daftarkan easing custom di sini
            transitionTimingFunction: {
                'editorial': 'cubic-bezier(0.76, 0, 0.24, 1)',
            }
        },
    },
    plugins: [],
};
export default config;