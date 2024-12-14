import {useEffect, useState} from "react";

interface TDataResultsSummary {
    "category": string,
    "score": number,
    "icon": string
}


const ResultsSummary = () => {

    const [data, setData] = useState<TDataResultsSummary[] | undefined>(undefined);


    useEffect(() => {
        fetch('/resultsSummary/data.json').then<TDataResultsSummary[]>(res => res.json()).then(data => {
            setData(data)
        });
    }, [])


    return (
        <main className=" font-hankenGrotesk">
            <article className="md:flex md:bg-[#ECF2FF] min-h-screen justify-center items-center ">
                <section
                    className="md:translate-x-[9px] md:z-10 md:min-h-[512px] md:max-w-[364px] md:rounded-[32px] bg-gradient-to-b md:pb-[45px] md:px-[56px] md:pt-[38px] from-[#6943FF] to-[#2F2CE9] text-white flex flex-col items-center text-center px-10 pb-10 pt-6 rounded-b-[32px] drop-shadow-[0px_30px_60px_rgb(61_108_236_/_15%)] gap-2">
                    <h1 className="font-bold text-lg mb-4 text-[#CAC9FF] md:text-[24px] md:mb-[35px]">Your Result</h1>
                    <div
                        className="bg-gradient-to-b from-[#4D21C9] to-transparent size-[140px] rounded-full flex items-center justify-center md:size-[200px]">
                        <h2 className="font-extrabold flex flex-col items-center text-[56px] leading-[72%] md:text-[72px] ">76<span
                            className=" translate-y-3 text-base font-bold opacity-[51.68%]">of 100</span></h2>
                    </div>
                    <h3 className="font-bold text-[24px] md:text-[32px]">Great</h3>
                    <p className="text-[#CAC9FF] font-medium  text-[18px]">Your performance exceed 65% of the people conducting the test
                        here!</p>
                </section>
                <section className="pt-6 px-[30px] pb-[30px] md:bg-white md:rounded-r-[32px] md:min-h-[512px] md:flex md:flex-col md:justify-center md:pr-[46px] md:py-[38px] md:pl-[49px] md:-translate-x-[9px]">
                    <h4 className="font-bold text-[18px] mb-6 ml-1 opacity-75">Summary</h4>
                    {
                        data && data.length > 0 &&
                        <table className="w-full md:min-w-[288px]">
                            <tbody className="flex flex-col gap-4">
                            {
                                data.map((item, index) => {
                                        let classes: {
                                            tr?: string;
                                            th?: string;
                                        } | undefined;
                                        switch (index) {
                                            case 0:
                                                classes = {
                                                    tr: 'rounded-[12px] flex justify-between px-4 py-[18px] bg-[#FF5555]/5 md:p-4',
                                                    th: 'font-medium flex text-[#FF5555]/75 items-center'
                                                }
                                                break;
                                            case 1:
                                                classes = {
                                                    tr: 'rounded-[12px] flex justify-between px-4 py-[18px] bg-[#FFB21E]/5 md:p-4',
                                                    th: 'font-medium flex text-[#FFB21E]/75 items-center'
                                                }
                                                break;
                                            case 2:
                                                classes = {
                                                    tr: 'rounded-[12px] flex justify-between px-4 py-[18px] bg-[#00BB8F]/5 md:p-4',
                                                    th: 'font-medium flex text-[#00BB8F]/75 items-center'
                                                }
                                                break;
                                            case 3:
                                            default:
                                                classes = {
                                                    tr: 'rounded-[12px] flex justify-between px-4 py-[18px] bg-[#1125D6]/5 md:p-4',
                                                    th: 'font-medium flex text-[#1125D6]/75 items-center'
                                                }
                                        }
                                        return (
                                            <tr key={index} className={classes.tr}>
                                                <th scope={"row"} className={classes.th}>
                                                    <img src={item.icon} alt={`icon of ${item.category}`}
                                                         className="size-5 mr-3"/>
                                                    {item.category}
                                                </th>
                                                <td className="font-bold text-[#303B59]">{item.score} <span className="opacity-50 ml-[10px]">/ 100</span></td>
                                            </tr>
                                        )
                                    }
                                )
                            }
                            </tbody>
                        </table>
                    }
                    <button className="py-4 bg-[#303B59] w-full text-white mt-6 rounded-full hover:bg-gradient-to-b hover:from-[#6943FF] hover:to-[#2F2CE9]">
                        Continue
                    </button>

                </section>
            </article>
        </main>
    )
}

export default ResultsSummary;