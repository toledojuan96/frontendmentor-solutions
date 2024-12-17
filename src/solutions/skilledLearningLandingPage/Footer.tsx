import Button from "./components/Button.tsx";
import clsx from "clsx/lite";


const Footer = () => {

    return (
        <section className={clsx(
            "bg-blueSkilledLearningLandingPage-900"
        )}>
            <footer className={clsx(
                " px-5 py-6 flex items-center justify-between",
                "md:px-11",
                "max-w-[1120px] lg:mx-auto",
                "xl:px-0"
            )}>
                <img src="/skilledLearningLandingPage/logo-light.svg" alt={"logo of footer"}
                    className={clsx(
                        "h-[20px]"
                    )}
                />
                <Button color={"pink"} text={"Get Started"}/>
            </footer>
        </section>

    )
}

export default Footer;