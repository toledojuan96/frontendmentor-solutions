import Button from "./components/Button.tsx";
import clsx from "clsx/lite";


const Header = ()=>{


    return (
        <header className={clsx(
            "py-4 px-5 flex items-center justify-between w-full z-30",
            "md:px-11 md:py-6",
            "xl:px-0"
        )}>
            <img src="/skilledLearningLandingPage/logo-dark.svg" alt="logo" className="h-[20px]"/>
            <Button color={'black'} text={"Get Started"}/>
        </header>
    )


}

export default Header;