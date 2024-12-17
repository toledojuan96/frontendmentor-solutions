import clsx from "clsx/lite";
import {GRADIENT_ORANGE, GRADIENT_PINK} from "../constants.ts";


interface TPropsButton {
    color: 'black'|'orange'|"pink",
    text: string
}

const getColorBackground = (color: TPropsButton["color"]) => {
    switch (color) {
        case "black":
            return {
                normal: `bg-blueSkilledLearningLandingPage-900`,
                hover: `hover:bg-blueSkilledLearningLandingPage-600`
            }
        case "pink":
            return {
                normal: GRADIENT_PINK,
                hover: ``
            }
        case "orange":
        default:
            return {
                normal: GRADIENT_ORANGE,
                hover: ``
            }
    }
}


const Button = ({color, text}: TPropsButton) => {

    const background = getColorBackground(color)

    return (
        <button className={clsx(
            "text-white font-bold text-[18px] leading-[150%] rounded-full", background.normal, color === 'pink' ? 'px-6 py-3' : 'px-8 py-4',
            "md:py-3 md:px-6 ",
            "lg:py-4 lg:px-8",
            background.hover, 'hover:opacity-50'
        )}>
            {text}
        </button>
    )
}

export default Button;