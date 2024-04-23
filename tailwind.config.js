/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/lib/esm/**/*.js",
    ],
    theme: {
        extend: {},
        fontFamily: {
            signature: ["Great Vibes"],
        },
    },
    plugins: [require("flowbite/plugin")],
};
