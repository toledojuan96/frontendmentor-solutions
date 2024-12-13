const Footer = () => {


    return (
        <footer className="max-w-[1220px] mx-auto">
            <div className="p-20 flex flex-col gap-14 items-center lg:pt-28">
                <img src="/workitLandingPage/logo-dark.svg" alt="footer logo" width="100px"/>
                <ul className="flex gap-7">
                    <li className="opacity-75 hover:opacity-100 cursor-pointer">
                        <a>
                            <img src="/workitLandingPage/icon-facebook.svg" alt="facebook icon"/>
                        </a>
                    </li>
                    <li className="opacity-75 hover:opacity-100 cursor-pointer flex items-center">
                        <a>
                            <img src="/workitLandingPage/icon-twitter.svg" alt="twitter icon"/>
                        </a>
                    </li>
                    <li>
                        <a className="opacity-75 hover:opacity-100 cursor-pointer">
                            <img src="/workitLandingPage/icon-instagram.svg" alt="instagram icon"/>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;