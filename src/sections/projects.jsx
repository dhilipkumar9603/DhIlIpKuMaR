import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/projects.css"; // Your custom styles
import Nutritrack from "../assets/Nutritack.png";
import Safenest from "../assets/safenest.jpg";

import Pending from "../assets/pending.png";
const projects = [
    { title: "Nutri Track", category: "Web Apps", img: Nutritrack, info: "Project for tracking student health by digitalizing food ordering and maintaining a health index." },
    
    { title: "Safe Nest", category: "Web Apps", img: Safenest, info: "Project that recommends safer areas or accommodations based on crime rates, useful for people moving permanently or visiting short-term." },
    {title:"pending",category:"Mobile Apps",img:Pending,info:"More projects coming soon..."}
];

function HeroAndProjects() {
    const [filter, setFilter] = useState("All");

    function GoToProjects() {
        window.scrollTo({
            top: document.querySelector(".projects-section").offsetTop,
            behavior: "smooth",
        });
    }

    const filteredProjects =
        filter === "All"
            ? projects
            : projects.filter((p) => p.category === filter);

    return (
        <div className="projects-main-container">
            {/* Hero Section */}
            <section className="projects-hero-glow projects-hero-section text-center">
                <h1 className="projects-hero-title">Welcome to My Digital Universe</h1>
                <p className="projects-hero-subtext">
                    Explore my journey as a React.js developer, where innovation meets interaction.
                    <p className="mobile-hide">Dive into a curated collection of projects that showcase my technical skills and creative vision.
                </p></p>
                <button className="projects-hero-btn mobile-hide" onClick={GoToProjects}>View Projects</button>
            </section>

            {/* Featured Projects */}
            <section className="projects-section container mt-5">
                <div className="card text-center bg-dark text-light">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs justify-content-center">
                            {["All", "Mobile Apps", "Web Apps"].map((cat) => (
                                <li className="nav-item" key={cat}>
                                    <button
                                        className={`nav-link ${filter === cat ? "active" : ""}`}
                                        onClick={() => setFilter(cat)}
                                    >
                                        {cat}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card-body">
                        <h5 className="projects-title">Projects</h5>
                        <div className="projects-grid">
                            {filteredProjects.map((project, index) => (
                                <div className="project-card" key={index}>
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="project-img"
                                    />
                                    <div className="projects-overlay">
                                        <h5 className="project-title">{project.title}</h5>
                                        <p className="project-category">{project.category}</p>
                                        <p className="project-info">{project.info}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HeroAndProjects;
