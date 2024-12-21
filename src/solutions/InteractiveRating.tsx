import clsx from "clsx/lite";
import {FormEvent, useState} from "react";

const InteractiveRating = () => {
    const [rating, setRating] = useState<number | undefined>(undefined);


    const handleRatingSubmission = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (event.currentTarget.rating.value) {
            setRating(event.currentTarget.rating.value);
            return
        }
        return
    }

    return (
        <main className={clsx(
            "bg-[#131518] min-h-screen flex justify-center items-center font-overpass"
        )}>
            <article className={clsx(
                "w-[327px] h-[360px] bg-[radial-gradient(#232A34,_#181E27)] rounded-[15px] flex flex-col p-5 justify-around",
                rating ? "items-center" : "items-start",
                "lg:w-[412px] lg:h-[416px] lg:p-7"
            )}>

                {
                    rating ?
                        <>
                            <img src="/interactiveRating/illustration-thank-you.svg" alt="illustration of thank you" className={clsx(
                                "w-[144px]"
                            )}/>
                            <span className={clsx(
                                "text-[#FC7614] leading-[22px] text-[14px] bg-[#262E38] rounded-full font-light w-[168px] h-[32px] flex items-center justify-center",
                                "lg:w-[193px] lg:text-[15px] lg:leading-[24px]"
                            )}>You selected {rating} out of 5</span>
                            <h1 className={clsx(
                                "font-bold text-[24px] text-white",
                                "lg:text-[28px]"
                            )}>Thank you!</h1>
                            <p className={clsx(
                                "font-light text-[14px] text-[#969FAD] leading-[22px] tracking-[0px] text-center",
                                "lg:text-[15px]"
                            )}>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
                        </>
                        :
                        <>
                            <div className={clsx(
                                "bg-[#262E38] size-[40px]  rounded-full flex justify-center items-center"
                            )}>
                                <img src="/interactiveRating/icon-star.svg" alt="star bookmark"
                                     className={clsx(
                                         "size-[13.3px]"
                                     )}
                                />

                            </div>
                            <h1 className={clsx(
                                "text-[24px] font-bold text-white",
                                "lg:text-[28px]"
                            )}>How did we do?
                            </h1>
                            <p className={clsx(
                                "text-[14px] leading-[22px] text-[#969FAD]",
                                "lg:text-[15px] lg:leading-[24px]"
                            )}>Please let us know how we did with your support request. All feedback is appreciated to
                                help us
                                improve our offering!</p>

                            <form onSubmit={(event) => {
                                handleRatingSubmission(event)
                            }}
                                  className={clsx(
                                      "w-full flex flex-col gap-5",
                                      "lg:gap-7"
                                  )}>
                                <fieldset className={clsx(
                                    "flex justify-around"
                                )}>
                                    {
                                        [1, 2, 3, 4, 5].map((index) => {
                                            return (
                                                <input key={index} type="radio" name="rating" value={index}
                                                       className={clsx(
                                                           "size-12 appearance-none hover:cursor-pointer text-[#969FAD] font-semibold tracking-[0.17px] leading-[24px] bg-[#262E38] rounded-full text-[14px] ",
                                                           "hover:bg-[#FC7614] hover:text-black active:bg-white checked:bg-white checked:text-black",
                                                           "before:content-[attr(value)] before:flex before:justify-center before:items-center before:h-full",
                                                           "lg:size-[51px] lg:text-[16px]"
                                                       )}/>
                                            )

                                        })
                                    }
                                </fieldset>


                                <button type={"submit"} className={clsx(
                                    "bg-[#FC7614] w-full rounded-full text-[#131518] py-3 font-bold text-[14px] tracking-[1.87px]",
                                    "hover:bg-white hover:text-black active:bg-white",
                                )}>
                                    SUBMIT
                                </button>
                            </form>
                        </>
                }

            </article>
        </main>
    )
}

export default InteractiveRating;