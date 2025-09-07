import React from "react";
import "../styles/about.css";
import { FaCode, FaGraduationCap, FaBriefcase, FaRocket } from "react-icons/fa";
import Aquarium from "../assets/aquarium.jpg";
function About() {
    return (
        <div className="about-container">
        <main>
            <h1>About Me</h1>
                    <p className="subtitle">
                    A journey through my career and passions in software development.
                    </p>
            <div className="hero">
                <div className="hero-content">
                    

                    <div className="timeline">
                    <div className="timeline-item">
                        <FaCode className="icon" />
                        <div>
                        <h3>Early Days</h3>
                        <span>2021 - 2022</span>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <FaGraduationCap className="icon" />
                        <div>
                        <h3>Academic Pursuit in<br/> computer Science</h3>
                        <span>2022 - 2026</span>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <FaBriefcase className="icon" />
                        <div>
                        <h3>Professional Growth</h3>
                        <span>20__ - 20__</span>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <FaRocket className="icon" />
                        <div>
                        <h3>Current Endeavors</h3>
                        <span>2025 - Present</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="profile-picture border-sucess">
                    <img src={Aquarium} alt="Profile" />
                </div>
            </div>
            <p className="description mobile-hide">
            I am a passionate software developer with a focus on creating innovative and 
            user-centric applications. My journey in technology began with a fascination 
            for how software can solve real-world problems, leading me to pursue a career 
            in this dynamic field. With a strong foundation in computer science and a 
            commitment to continuous learning, I strive to stay at the forefront of 
            technological advancements and deliver high-quality solutions.
            </p>

            
        </main>
        </div>
);
}
export default About;
