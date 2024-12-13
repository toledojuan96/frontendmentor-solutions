
interface TPropsButton{
    text: string
}



const Button = ({text}:TPropsButton) => {
    return (
        <button className="px-[30px] py-[10px] bg-greenWorkItLandingPage text-black font-bold border-2 border-greenWorkItLandingPage hover:bg-purpleWorkItLandingPage-900 hover:text-greenWorkItLandingPage text-[18px]">
            {text}
        </button>
    )
}

export default Button;