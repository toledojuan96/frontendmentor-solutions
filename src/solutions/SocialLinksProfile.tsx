




const SocialLinksProfile = ()=>{

    const links = [
        "GitHub",
        "Frontend Mentor",
        "LinkedIn",
        "Twitter",
        "Instagram"
    ]

    return (
        <main className="flex h-screen bg-neutral-900 font-inter text-white items-center justify-center">
            <div className="flex flex-col p-6 bg-neutral-800 rounded-2xl items-center gap-6 min-w-80">
                <img src="/socialLinksProfile/avatar-jessica.jpeg" alt="profile-pic" className="rounded-full size-1/3" />
                <div className="flex flex-col text-center gap-2">
                    <h1 className="text-2xl tracking-wide">Jessica Randall</h1>
                    <h2 className="font-semibold text-xs text-lime-300">London, United Kingdom</h2>
                </div>
                <h3 className="text-xs">"Front-end developer and avid reader."</h3>
                <ul className="flex flex-col gap-4 border-xl w-full justify-center ">
                    {links.map((link) => (
                        <li key={link} className="bg-neutral-700 text-center font-semibold text-xs py-3 rounded-lg hover:text-black hover:bg-lime-300 cursor-pointer">
                            {link}
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}
export default SocialLinksProfile;