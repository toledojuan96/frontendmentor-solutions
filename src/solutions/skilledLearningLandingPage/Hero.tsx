import Button from "./components/Button.tsx";
import clsx from "clsx/lite";

const Hero = () => {

    return (

        <section className={clsx(
            "grid grid-cols-1 pt-16 px-5 gap-12",
            "md:grid-cols-2 md:px-11 md:pt-16 md:gap-6 md:items-center",
            "lg:gap-8",
            "xl:px-0"
        )}>
            <article className={clsx(
                "flex flex-col justify-between items-start h-[335px]",
                "md:h-[317px]",
                "lg:h-[339px] lg:pr-20"
            )}>
                <h1 className={clsx(
                    "text-[40px] leading-[120%] font-extrabold text-blueSkilledLearningLandingPage-900",
                    "lg:text-[56px]"
                )}>Maximize
                    skill, minimize budget</h1>
                <p className={clsx(
                    "text-[18px] font-medium leading-[150%] text-greySkilledLearningLandingPage"
                )}>Our modern courses across a range of in-demand skills will give you the knowledge you need to
                    live
                    the life you want.</p>
                <Button text={"Get Started"} color={"orange"}/>
            </article>
            <picture>
                <source src="/skilledLearningLandingPage/image-hero-mobile.webp"
                        srcSet="/skilledLearningLandingPage/image-hero-mobile.webp 1x, /skilledLearningLandingPage/image-hero-mobile@2x.webp 2x"
                        media={"(max-width: 767px)"}
                />
                <source src="/skilledLearningLandingPage/image-hero-tablet.webp"
                        srcSet="/skilledLearningLandingPage/image-hero-tablet.webp 1x, /skilledLearningLandingPage/image-hero-tablet@2x.webp 2x"
                        media={"(max-width: 1023px)"}
                />
                <source src="/skilledLearningLandingPage/image-hero-desktop.webp"
                        srcSet="/skilledLearningLandingPage/image-hero-desktop.webp 1x, /skilledLearningLandingPage/image-hero-desktop@2x.webp 2x"
                />
                <img
                    className={clsx(
                        "max-w-none w-[435px] relative left-[-50px] h-[368px] object-cover",
                        "md:w-[695px] md:h-[723px] md:top-[-250px] md:left-[-30px] md:mb-[-340px]",
                        "lg:w-[1046px] lg:h-[938px] lg:top-[-300px] lg:left-[-10px] lg:mb-[-360px]"
                    )}
                    src="/skilledLearningLandingPage/image-hero-mobile.webp"
                    alt="hero image"/>
            </picture>
        </section>


    )
}

export default Hero;