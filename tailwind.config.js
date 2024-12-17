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
                },
                blueSkilledLearningLandingPage: {
                    900: '#13183F',
                    600: '#666CA3'
                },
                pinkSkilledLearningLandingPage: {
                    300: '#FFA7C3',
                    600: '#F74780'
                },
                greySkilledLearningLandingPage: '#83869A'
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
            hankenGrotesk: ["HankenGrotesk", 'sans-serif'],
            montserrat: ["Montserrat", "sans-serif"],
            plusJakartaSans: ["PlusJakartaSans", "sans-serif"],
        }
    },
    plugins: [],
}

