import Navbar from "../../components/Navbar";
import MainSection from "./Sections/Main";
import AboutSection from "./Sections/About";
import DiscoverSection from "./Sections/Discover";
import ServicesSection from "./Sections/Services";
import Sidebar from "../../components/Sidebar";
import {useState} from "react";

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle=  () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={handleToggle}></Sidebar>
            <Navbar toggle={handleToggle}></Navbar>

            <MainSection/>
            <AboutSection/>
            <DiscoverSection/>
            <ServicesSection/>

        </>

    )
}

export default HomePage