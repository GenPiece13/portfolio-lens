export const projects = [
    {
        id: 1,
        title: "FinTech Core",
        desc: "Real-time trading dashboard handling 50k+ socket events/sec.",
        visualPlaceholder: "Dashboard UI",
        code: `const useMarketData = () => {
    // High-frequency socket hook
    return useSubscription(
      API_STREAMS.TICKER, 
      (data) => batchUpdate(data)
    );
  }`
    },
    {
        id: 2,
        title: "Generative AI",
        desc: "Image synthesis interface connecting prompts to Stable Diffusion.",
        visualPlaceholder: "AI Interface",
        code: `async function generate(prompt) {
    const latent = await model.encode(prompt);
    // Decoding vector to pixels
    const image = await decoder.decode(latent);
    return image.blob();
  }`
    }
];

export const photos = [
    {
        id: 1,
        src: "/images/gallery/gambar1.jpg", // Pastikan file ini ada di public
        alt: "Brutalist architecture",
        caption: "Concrete Void — 2023",
    },
    {
        id: 2,
        src: "/images/gallery/gambar2.jpg",
        alt: "Neon city night",
        caption: "Midnight Tokyo — 2022",
    },
    {
        id: 3,
        src: "/images/gallery/gambar3.jpg",
        alt: "Abstract Portrait",
        caption: "Human Glitch — 2024",
    },
    {
        id: 4,
        src: "/images/gallery/gambar4.jpg",
        alt: "Abstract Portrait",
        caption: "Human Glitch — 2024",
    }, {
        id: 5,
        src: "/images/gallery/gambar5.jpg",
        alt: "Abstract Portrait",
        caption: "Human Glitch — 2024",
    },
];