import clsx from "clsx/lite";

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
                normal: 'bg-gradient-to-b from-[#4851FF] to-[#F02AA6]',
                hover: ``
            }
        case "orange":
        default:
            return {
                normal: 'bg-gradient-to-b from-[#FF6F48] to-[#F02AA6]',
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