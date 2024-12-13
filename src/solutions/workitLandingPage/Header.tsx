const Header = ()=>{
    return (
        <header className="w-full bg-purpleWorkItLandingPage-900">
            <div className="text-white flex w-full justify-between pt-8 px-5  lg:max-w-[1120px] lg:mx-auto md:px-11 lg:pt-14 lg:px-0">
                <img src="/workitLandingPage/logo-light.svg" alt="logo" className="h-[25px]"/>
                <button
                    className="font-bold  text-[18px] underline underline-offset-8 decoration-[3px] decoration-green-400 hover:text-green-400">
                    Apply for access
                </button>
            </div>

        </header>
    )
}

export default Header;