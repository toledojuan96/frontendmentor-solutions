import Button from "./components/Button.tsx";
import Ellipse from "./components/Ellipse.tsx";

const Hero = () => {
    return (
        <section className=" relative bg-purpleWorkItLandingPage-900 flex flex-col items-start ">
            <div
                className="relative w-full flex items-center flex-col pt-14 pb-[140px] lg:pb-[296px] text-white gap-10 px-5 overflow-x-hidden">
                <h1 className="font-fraunces text-5xl text-center -tracking-wide md:text-6xl lg:text-[80px]">Data <u
                    className="decoration-greenWorkItLandingPage decoration-[3px] underline-offset-8">tailored</u> to <br
                    className="hidden md:block"/>
                    your needs.</h1>
                <Button text={"Learn More"}/>
                <img src="/workitLandingPage/bg-pattern-1.svg" alt={"pattern-1"}
                     className="hidden md:block absolute bottom-1/3 -left-[227px] lg:-left-[113px]"/>
                <img src="/workitLandingPage/bg-pattern-2.svg" alt={"pattern-2"}
                     className="hidden md:block absolute bottom-1/4 -right-[87px] lg:-right-[43px]"/>
            </div>
            <div className="w-full bg-purpleWorkItLandingPage-100 fill-purpleWorkItLandingPage-900">
                <Ellipse height="100%" width="100%" />
            </div>
            <img src="/workitLandingPage/image-hero.webp" alt="phone" className="hidden md:block h-[296px] md:absolute left-0 right-0 mx-auto -bottom-[148px] lg:h-[441px]"/>
        </section>
    )
}

export default Hero;