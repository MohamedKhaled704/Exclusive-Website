import { useEffect, useState } from "react";
import PreHeader from '../components/PreHeader'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Today from '../components/Today'
import Categories from '../components/Categories'
import Month from '../components/Month'
import Poster from '../components/Poster'
import Ourproducts from '../components/Ourproducts'
import Featured from '../components/Featured'
import Services from '../components/Services'
import Footer from '../components/Footer'
import "../assets/styles/style.css";

export default function Home() {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1200) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            <PreHeader />
            <Header />
            <Hero />
            <Today />
            <Categories />
            <Month />
            <Poster />
            <Ourproducts />
            <Featured />
            <Services />
            <Footer />
            <div>
                {showScrollButton && (
                    <button className="scroll" onClick={handleScrollToTop}>
                        <svg
                            width="16"
                            height="18"
                            viewBox="0 0 16 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8 17V1M1 8L8 1L15 8"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
}
