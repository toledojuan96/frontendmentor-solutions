import {useEffect, useState} from "react";

interface TPropsAccordion {
    question: string,
    answer: string
    index: number
}

const Accordion = ({question, answer, index}: TPropsAccordion) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(index !== 0);
    const handleClick = () => {
        setIsCollapsed((prevState) => !prevState)
    }
    return (
        <>
            <div className={`flex flex-col ${!isCollapsed && 'gap-6'}`}>
                <button className={`flex justify-between items-center gap-7 text-left hover:text-fuchsia-700`}
                        onClick={handleClick}>
                    <h2 className="font-semibold text-base">{question}</h2>
                    <img src={isCollapsed ? "/faqAccordion/icon-plus.svg" : "/faqAccordion/icon-minus.svg"}
                         alt="plusOrMinus"
                         className="size-[30px]"/>
                </button>
                <p className={`text-[14px] text-fuchsia-900 tracking-wider ${isCollapsed && 'collapse h-0'}`}>{answer}</p>
            </div>
            {
                index !== 3 &&
                <Divider key={`divide-${index}`}/>
            }
        </>
    )
}


const Divider = () => {
    return <div className="w-full h-[1px] bg-fuchsia-100"/>
}


const FaqAccordion = () => {
    const [isBig, setIsBig] = useState<boolean>(() => {
        return window.innerWidth > 640
    });

    useEffect(() => {
        const handleMinWidth = () => {
            if (window.innerWidth < 640 && isBig) {
                console.log('should set false')
                setIsBig(false)
            } else if (window.innerWidth >= 640 && !isBig) {
                console.log('should set true')
                setIsBig(true);
            }
        }
        window.addEventListener('resize', handleMinWidth);
        return () => {
            window.removeEventListener('resize', handleMinWidth);
        }


    }, [isBig])


    const questions: { q: string, a: string }[] = [
        {
            q: "What is Frontend Mentor, and how will it help me?",
            a: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building."
        },
        {
            q: "Is Frontend Mentor free?",
            a: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building."
        },
        {
            q: "Can I use Frontend Mentor projects in my portfolio?",
            a: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building."
        },
        {
            q: "How can I get help if I'm stuck on a challenge?",
            a: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building."
        }
    ]


    return (
        <main className="min-h-screen flex relative justify-center font-worksans items-start ">
            <div className="absolute w-full -z-10 h-full">
                <img
                    src={isBig ? `/faqAccordion/background-pattern-desktop.svg` : `/faqAccordion/background-pattern-mobile.svg`}
                    alt="background"
                    className="sm:h-[320px] h-[232px] object-cover w-full"/>
                <div className="h-full bg-fuchsia-100 w-full"/>
            </div>
            <div
                className=" bg-white flex flex-col p-6 w-[327px] rounded-lg gap-5 sm:gap-8 mt-[143.5px]  sm:mt-[168.5px] mb-10 sm:p-10 sm:w-full  sm:max-w-[600px]">
                <div className="flex gap-6 items-center">
                    <img src="/faqAccordion/icon-star.svg" alt="star" className="size-6 sm:size-10"/>
                    <h1 className="font-bold text-3xl sm:font-bold sm:text-[56px]">FAQs</h1>
                </div>
                {
                    questions.map(({q, a}, index) => {
                        return <Accordion question={q} answer={a} key={index} index={index}/>
                    })
                }
            </div>
        </main>
    )
}
export default FaqAccordion;