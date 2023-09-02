/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
    content: [
        "./resources/**/*.jsx",
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
    ],
    theme: {
        extend: {},
        colors: {
            ...colors,
            "iapm-black": "#1A1C29",
            "iapm-yellow": "#FDC40C",
            "iapm-dark-gray": "#636363",
            "iapm-gray": "#B5B5B5",
            "iapm-light-gray": "#FAFAFA",
            "iapm-baltic-sea": "#2F2E30",
            "iapm-red": "#E12838",
        },
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
        },
        backgroundImage: () => ({
            grid: "url(/public/assets/images/bg-grid.svg)",
            "rounded-shape": "url(/public/assets/images/rounded-shape.svg)",
            "triangle-shape": "url(/public/assets/images/triangle-shape.svg)",
            "dot-ornament": "url(/public/assets/images/dot-ornament.svg)",
            chart: "url(/public/assets/images/chart-hero.svg)",
            "gradient-linear-white":
                "linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.9920343137254902) 50%, rgba(255,255,255,1) 100%)",
            quotes: "url(/public/assets/images/ic-quotes.svg)",
            lines: "url(/public/assets/images/lines.svg)",
            "gradient-linear-baltic-sea":
                "linear-gradient(90deg, rgba(255,255,255,0.8267682072829132) 0%, rgba(255,255,255,0.6755077030812324) 50%, rgba(254,254,254,1) 100%)",
        }),
        content: {
            logo: "url(/public/assets/images/logo.svg)",
            time: "url(/public/assets/images/time.svg)",
            "rounded-shape": "url(/public/assets/images/rounded-shape.svg)",
        },
        screen: {
            'xs': '380px'
        }
    },
    plugins: [],
};
