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
                greySkilledLearningLandingPage: '#83869A',
                qrCodeComponent: {
                    'slate-900': '#1F314F',
                    'slate-500': '#68778D',
                    'slate-300': '#D5E1EF'
                },
                nftPreviewCardComponent: {
                    'softBlue': '#8BACD9',
                    'cyan': '#00FFF8',
                    'veryDarkBlueMain': '#0D192C',
                    'darkBlueCard':'#15263F',
                    'darkBlueLine': '#2E405A'
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
            hankenGrotesk: ["HankenGrotesk", 'sans-serif'],
            montserrat: ["Montserrat", "sans-serif"],
            plusJakartaSans: ["PlusJakartaSans", "sans-serif"],
            overpass: ["Overpass", "sans-serif"],
        }
    },
    plugins: [],
}

