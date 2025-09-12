import React, { useState, useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";
import MobileHome from './MobileView.jsx';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaDownload,
} from "react-icons/fa";

function Main_frame() {
    const [activeTab, setActiveTab] = useState('about');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // breakpoint for mobile
        };

        handleResize(); // run on mount
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleOpenPDF = () => {
        window.open('/Resume.pdf', '_blank');
    };
    const nav_headers = ['about', 'skills', 'projects', 'contact'];

    return (
        <div className="container">
            <header className="header">
                <div className="header-container header-inner">
                    <div className="logo">dHiLiP's Portfolio</div>

                    <nav style={{ padding: "10px", background: "#0f0f0f" }}>
                        <span className="mobile-hide">
                        {nav_headers.map((tab) =>
                            isMobile ? (
                            <button
                                key={tab}
                                className={`Tab-button ${activeTab === tab ? "active" : ""}`}
                                onClick={() => {
                                setActiveTab(tab);
                                scrollToSection(tab);
                                }}
                                style={{ color: "white", marginRight: "20px" }}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                            ) : (
                            <Link
                                key={tab}
                                to={`/app/${tab}`}
                                style={{ color: "white", marginRight: "20px" }}
                            >
                                <button
                                className={`Tab-button ${activeTab === tab ? "active" : ""}`}
                                onClick={() => setActiveTab(tab)}
                                >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            </Link>
                            
                            )
                        )}
                    </span>
                    <button className="resume-btn" onClick={handleOpenPDF}>
                        Resume
                        <FaDownload style={{ marginRight: "8px" }} />
                    </button>
                    </nav>
                </div>
            </header>


            <main style={{ transition: "transform 0.5s ease-in-out"}}>
                {isMobile ? <MobileHome /> : <Outlet />}
            </main>

            <div className="social-icons">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
                <a href="https://facebook.com/dhilipkumar9603" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/dhilipkumar9603/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://wa.me/+916300094389" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp />
                </a>
            </div>


            <footer>
                ©2025 DhIlIp'S Portfolio. All rights reserved.
            </footer>
        </div>
    );
}

export default Main_frame;
