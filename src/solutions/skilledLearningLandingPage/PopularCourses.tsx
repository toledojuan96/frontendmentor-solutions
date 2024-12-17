import clsx from "clsx/lite";

interface TFeature {

    icon: string;
    title: string;
    content: string;

}


const PopularCourses = () => {


    const features: TFeature[] = [
        {
            icon: "/skilledLearningLandingPage/icon-animation.svg",
            title: "Animation",
            content: "Learn the latest animation techniques to create stunning motion design and captivate your audience."
        },
        {
            icon: "/skilledLearningLandingPage/icon-design.svg",
            title: "Design",
            content: "Create beautiful, usable interfaces to help shape the future of how the web looks."
        },
        {
            icon: "/skilledLearningLandingPage/icon-photography.svg",
            title: "Photography",
            content: "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."
        },
        {
            icon: "/skilledLearningLandingPage/icon-crypto.svg",
            title: "Crypto",
            content: "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."
        },
        {
            icon: "/skilledLearningLandingPage/icon-business.svg",
            title: "Animation",
            content: "A step-by-step playbook to help you start, scale, and sustain your business without outside investment."
        },
    ]


    return (
        <section className={clsx(
            "grid grid-cols-1 py-16 px-5 gap-8",
            "md:grid-cols-2 md:gap-x-6 md:gap-y-8 md:px-11 md:mt-16",
            "lg:grid-cols-3 lg:gap-y-14 lg:gap-x-8",
            "xl:px-0"
        )}>
            <h1 className={clsx(
                'bg-gradient-to-b from-[#FF6F48] to-[#F02AA6]', "p-8 rounded-[15px] text-white font-bold text-[24px] leading-[120%] w-[335px]",
                "md:mt-[23px] md:w-[328px] md:h-[350px]"
            )}>Check out our most popular courses!</h1>
            {
                features.map((feature, index)=>{
                    return (
                        <article key={index} className={clsx(
                            "bg-white shadow-[0px_25px_50px_rgb(6_22_141/5%)] h-[328px] w-[335px] rounded-[15px] mt-[23px] relative pt-16 pb-10 px-8 flex flex-col justify-between items-start",
                            "md:w-[328px] md:h-[350px]",
                            "lg:w-[352px]"
                        )}>
                            <img className={clsx(
                                "absolute -top-[28px] size-[56px]"
                            )} src={feature.icon} alt={feature.title}/>
                            <h2 className={clsx(
                                "text-[20px] font-bold leading-[120%] text-blueSkilledLearningLandingPage-900"
                            )}>{feature.title}</h2>
                            <p className={clsx(
                                "text-[16px] leading-[150%] font-semibold text-greySkilledLearningLandingPage",
                                "md:text-[18px] md:font-medium"
                            )}>{feature.content}</p>
                            <button className={clsx(
                                "text-pinkSkilledLearningLandingPage-600 font-semibold text-[18px] leading-[150%]"
                            )}>Get Started</button>
                        </article>
                    )
                })
            }
        </section>
    )

}

export default PopularCourses;