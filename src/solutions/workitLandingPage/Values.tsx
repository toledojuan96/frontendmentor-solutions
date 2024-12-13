import Ellipse from "./components/Ellipse.tsx";

const Values = () => {

    const values = [
        {
            title: 'Actionable insights',
            description: "Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics."
        },
        {
            title: 'Data-driver decisions',
            description: "Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data."
        }, {
            title: 'Always Affordable',
            description: "Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees."
        },
    ]


    return (
        <>
            <section
                className="bg-purpleWorkItLandingPage-100 px-5 py-16 md:pt-[212px] md:pb-14 md:px-11  lg:pt-[256px] lg:pb-36 lg:px-0 text-purpleWorkItLandingPage-900">
                <ol className="flex flex-col gap-8 lg:flex-row lg:max-w-[1120px] lg:mx-auto">
                    {
                        values.map((value, index) => (
                            <li key={index}
                                className="flex flex-col items-center text-center gap-6 md:flex-row md:gap-14 md:px-20 lg:flex-col lg:gap-14 lg:px-0">
                                <div
                                    className="border-purpleWorkItLandingPage-900 border rounded-full min-h-12 min-w-12 flex items-center justify-center lg:min-w-[56px] lg:min-h-[56px]">
                                    <span
                                        className="font-fraunces font-semibold text-xl lg:text-2xl ">{index + 1}</span>
                                </div>
                                <div className="flex flex-col gap-6 md:text-left md:gap-7 lg:text-center">
                                    <h2 className="font-fraunces text-2xl leading-[120%] lg:text-[32px]">{value.title}</h2>
                                    <p className="leading-[180%] lg:text-lg lg:leading-[180%] ">{value.description}</p>
                                </div>

                            </li>
                        ))
                    }
                </ol>

            </section>
            <div className="fill-purpleWorkItLandingPage-100">
                <Ellipse height="100%" width="100%"/>
            </div>

        </>

    )
}

export default Values;