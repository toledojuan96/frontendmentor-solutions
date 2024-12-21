import clsx from "clsx/lite";


const NFTPreviewCardComponent = () => {
    return (
        <main className={clsx(
            "bg-nftPreviewCardComponent-veryDarkBlueMain min-h-screen flex justify-center items-center font-outfit text-white font-normal"
        )}>
            <section className={clsx(
                "w-[327px] h-[543px] bg-nftPreviewCardComponent-darkBlueCard rounded-[15px]",
                "lg:w-[350px] lg:h-[596px]"
            )}>
                <article className={clsx(
                    "flex flex-col items-start h-full p-6 gap-4",
                    "lg:gap-5"
                )}>
                    <figure className="relative cursor-pointer">
                        <img className={clsx(
                            "rounded-[15px] size-[278px] peer",
                            "lg:size-[302px]"
                        )} src="/nftPreviewCardComponent/image-equilibrium.jpg" alt="image of nft equilibrium"/>
                        <div className={clsx(
                            "w-full h-full bg-nftPreviewCardComponent-cyan/50 absolute top-0 rounded-[15px] hidden peer-hover:flex justify-center items-center hover:flex"
                        )}>
                            <img src="/nftPreviewCardComponent/icon-view.svg" alt="view icon"/>
                        </div>
                    </figure>

                    <h1 className={clsx(
                        "font-semibold text-[22px] leading-[auto] hover:text-nftPreviewCardComponent-cyan cursor-pointer"
                    )}>Equilibrium #3429</h1>
                    <p className={clsx(
                        "text-nftPreviewCardComponent-softBlue font-light text-[18px] leading-[26px]"
                    )}>Our Equilibrium collection promotes balance and calm.</p>
                    <article className={clsx(
                        "grid grid-cols-2 w-full gap-y-4"
                    )}>
                        <h2 className={clsx(
                            "text-nftPreviewCardComponent-cyan"
                        )}><img className="inline-block w-[11px] h-[18px] mr-[6px]"
                                src="/nftPreviewCardComponent/icon-ethereum.svg" alt="ethereum icon"/> 0.041 ETH</h2>
                        <time className={clsx(
                            "flex justify-end items-center text-nftPreviewCardComponent-softBlue"
                        )}><img className="inline-block size-4  mr-[8px]" src="/nftPreviewCardComponent/icon-clock.svg"
                                alt="clock"/>3 days left
                        </time>
                        <div className={clsx(
                            "h-[1px] w-full bg-nftPreviewCardComponent-darkBlueLine col-span-2"
                        )}/>
                    </article>
                    <footer className={clsx(
                        "flex items-center text-nftPreviewCardComponent-softBlue text-[15px] font-normal leading-[auto]"
                    )}>
                        <img className="size-[33px] outline outline-[1px] rounded-full mr-[16px]"
                             src="/nftPreviewCardComponent/image-avatar.png" alt="avatar"/>
                        <h3>Creation of <span className="text-white hover:text-nftPreviewCardComponent-cyan cursor-pointer">Jules Wyvern</span></h3>
                    </footer>
                </article>

            </section>
        </main>
    )
}

export default NFTPreviewCardComponent;