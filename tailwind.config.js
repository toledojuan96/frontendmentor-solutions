/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.tsx",
        "./src/*.tsx",
        "./index.html"
    ],
    theme: {
        extend: {
            colors: {
                greenWorkItLandingPage: '#44FFA1',
                purpleWorkItLandingPage: {
                    100: '#FCF8FF',
                    500: '#584D62',
                    900: '#24053E'
                }
            }
        },
        fontFamily: {
            youngSerif: ["YoungSerif", "sans-serif"],
            outfit: ["Outfit", "sans-serif"],
            inter: ["Inter", "sans-serif"],
            figtree: ["Figtree", "sans-serif"],
            worksans: ["Work", "sans-serif"],
            manrope: ["Manrope", "sans-serif"],
            fraunces: ["Fraunces", "sans-serif"],
        }
    },
    plugins: [],
}

