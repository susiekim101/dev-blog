import Header from "../Blog/Header/Header";
import Footer from "../Blog/Footer/Footer";
import About from "./About";

const AboutPage = () => {
    return (
        <div className="flex flex-col my-[1rem] mx-[1rem] md:mx-[5rem] gap-[1rem]">
            <Header/>
            <About/>
            <Footer/>
        </div>
    )
}

export default AboutPage;