import Button from "./components/Button.tsx";

const Cta = () => {


    return (
        <section className="max-w-[1120px] mx-auto">
            <article className="w-full px-5 pt-16 flex flex-col items-center md:pt-[2px] md:px-11 lg:-mt-[201px]">
                <img src="/workitLandingPage/image-founder.webp" alt={"founder"} className="size-[280px] translate-y-[48px] md:translate-y-[110px] md:-translate-x-2/3 lg:size-[477px] lg:translate-y-2/3 "/>
                <div className="bg-purpleWorkItLandingPage-900 text-white flex flex-col items-center relative p-8 gap-8 text-center md:max-w-[504px] md:translate-x-[87px] md:p-12 md:items-start md:text-left lg:p-16 lg:max-w-[730px] lg:translate-x-1/4">
                    <h2 className="font-fraunces text-[32px] leading-[120%] tracking-tight md:text-[48px]">Be the first to test</h2>
                    <p className="leading-[180%]">Hi, I'm Louis Graham, the founder of the company. Book a demo call
                        with
                        me to become a beta tester for our app and kickstart your company. Apply for access below and
                        I’ll
                        be in touch to schedule a call.</p>
                    <Button text="Apply for access"/>
                    <img src="/workitLandingPage/bg-pattern-3.svg" alt={"pattern-3"} className="hidden md:absolute md:block md:-bottom-1/4 md:right-3 lg:right-[10%]"/>
                </div>
            </article>
        </section>
    )

}

export default Cta;