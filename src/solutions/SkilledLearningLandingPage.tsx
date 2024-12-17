import Header from "./skilledLearningLandingPage/Header.tsx";
import Hero from "./skilledLearningLandingPage/Hero.tsx";
import PopularCourses from "./skilledLearningLandingPage/PopularCourses.tsx";
import Footer from "./skilledLearningLandingPage/Footer.tsx";

const SkilledLearningLandingPage = () => {


    return (
        <>
            <main className="font-plusJakartaSans overflow-x-hidden bg-gradient-to-b from-[#FFFFFF] to-[#F0F1FF]">
                <div className="max-w-[1120px] mx-auto flex flex-col items-center min-h-screen  ">
                    <Header/>
                    <Hero/>
                    <PopularCourses/>
                </div>
            </main>
            <Footer/>
        </>

    )
}

export default SkilledLearningLandingPage;