import React from 'react';
import About from './sections/about.jsx';
import Skills from './sections/skills.jsx';
import Contact from './sections/contact.jsx';
import Projects from './sections/projects.jsx';

function MobileHome() {
    return (
        <div>
            <section id="about"><About /></section>
            <section id="skills"><Skills /></section>
            <section id="projects"><Projects /></section>
            <section id="contact"><Contact /></section>
        </div>
    );
}

export default MobileHome;
