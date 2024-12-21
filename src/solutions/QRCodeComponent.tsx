import clsx from "clsx/lite";


const QRCodeComponent = ()=>{
    return (
        <main>
            <section className={clsx(
                "min-h-screen bg-qrCodeComponent-slate-300 flex justify-center items-center font-outfit"
            )}>
                <article className={clsx(
                    "w-[320px] h-[499px] bg-white px-4 py-4 pb-10 drop-shadow-[0px_25px_25px_rgb(0_0_0/4.77%)] rounded-[20px] text-center"
                )}>
                    <img src="/qrCodeComponent/image-qr-code.png" alt="qr code" className={clsx(
                        "size-[288px] rounded-[10px] mb-[24px]"
                    )}/>
                    <h1 className={clsx(
                        "text-qrCodeComponent-slate-900 font-bold text-[22px] leading-[120%] mb-4"
                    )}>Improve your front-end skills by building projects</h1>
                    <p className={clsx(
                        "text-qrCodeComponent-slate-500 text-[15px] leading-[140%] tracking-[0.2px] font-medium"
                    )}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                </article>
            </section>
        </main>
    )
}

export default QRCodeComponent;