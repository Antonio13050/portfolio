/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                night: {
                    DEFAULT: "#060914",
                    card: "#0C1122",
                    panel: "#0D1324",
                    chip: "#1A2238",
                    line: "#1E2640",
                    edge: "#2A3452",
                },
                mist: {
                    DEFAULT: "#C3C9DB",
                    dim: "#9BA3BD",
                    bright: "#EEF1FA",
                },
                accent: {
                    DEFAULT: "#FF9E5E",
                    blue: "#8AB4FF",
                },
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
                display: ['"Space Grotesk"', "Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};
