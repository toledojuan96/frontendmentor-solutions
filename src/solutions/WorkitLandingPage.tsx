import Header from "./workitLandingPage/Header.tsx";
import Hero from "./workitLandingPage/Hero.tsx";
import Values from "./workitLandingPage/Values.tsx";
import Cta from "./workitLandingPage/CTA.tsx";
import Footer from "./workitLandingPage/Footer.tsx";


const WorkitLandingPage = ()=>{


    return (
        <main className={`  min-h-screen font-manrope`}>
            <Header/>
            <Hero/>
            <Values/>
            <Cta/>
            <Footer/>
        </main>
    )
}

export default WorkitLandingPage;