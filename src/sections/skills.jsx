import { useState } from "react";
import "../styles/skills.css";

const skillsData = [
    { name: "React.js", years: 2, category: "React.js", how: "I have been working with React.js for 2 years, building dynamic and responsive user interfaces, most of my projects were made with React.js." },
    { name: "JavaScript", years: 3, category: "JavaScript", how: "I have been working with JavaScript for 3 years, mastering both ES5 and ES6 features, and using it extensively in web development." },
    { name: "HTML5", years: 3, category: "HTML5", how: "I have been working with HTML5 for 3 years, creating semantic and accessible web pages, ensuring cross-browser compatibility." },
    { name: "CSS3", years: 3, category: "CSS3", how: "I have been working with CSS3 for 3 years, implementing responsive designs and animations to enhance user experience." },
    { name: "Node.js", years: 1, category: "Node.js", how: "I have been working with Node.js for 1 years, building scalable server-side applications and RESTful APIs." },
    { name: "Express.js", years: 1, category: "Express.js", how: "I have been working with Express.js for 1 years, creating robust web applications and APIs with a focus on performance and scalability." },
    { name: "MongoDB", years: 1, category: "MongoDB", how: "I have been working with MongoDB for 1 years, managing NoSQL databases and implementing data models for various applications." },
    { name: "Git", years: 3, category: "Git", how: "I have been working with Git for 3 years, using it for version control in all my projects, collaborating with teams effectively." },
    { name: "Django", years: 1, category: "Django", how: "I learned Django so that I can integrate Machine learning in WebDevelopment and it has been very useful, I successfully gained 1 year of experience in Django." },
    { name: "Sql-Server", years: 1, category: "Sql-Server", how: "I worked with SQL Server so that I can be familiar with real-time environments by assigning separate users and allocating data properly." }
];
const categories = [
    "React.js", "JavaScript", "HTML5", "CSS3", "Node.js",
    "Express.js", "MongoDB", "Git", "Django", "Sql-Server"
];

function Skills() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [expandedSkill, setExpandedSkill] = useState(null);

    const filteredSkills = selectedCategory
        ? skillsData.filter(skill => skill.category === selectedCategory)
        : skillsData;


    return (
        <div className="skills-container">
            <h2>Skills</h2>
            <p>
                I'm proficient in a variety of technologies, frameworks, and libraries. 
                Here's a breakdown of my skills and experience.
            </p>

            <h3>Technical Skills</h3>

            <div className="category-buttons">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
                        onClick={() => {setSelectedCategory(selectedCategory === cat ? null : cat);
                            setExpandedSkill(cat);
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            
            <div className="skills-grid mobile-hide">
                {filteredSkills.map(skill => (
                    <div
                        key={skill.name}
                        className="skill-card"
                        
                    >
                        <h3>{skill.name}</h3>
                        <p>{skill.years} years</p>
                        {(expandedSkill === skill.name && selectedCategory!==null) ?
                            <p className="how-text">{skill.how}</p>:""
                        }
                    </div>
                ))}
            </div>
            <h3 className="mt-[30px]">Soft Skills</h3>
            <div className="card-grid">
                <div className="card border-primary mb-3" style={{ maxWidth: "18rem" }}>

                <div className="card-header">Leadership</div>
                <div className="card-body">
                    <h5 className="card-title">Leadership Skills</h5>
                    <p className="card-text">
                    As a className Representative, I gained valuable experience in leadership by guiding peers,
                    coordinating tasks effectively, and fostering teamwork. This role also enhanced my communication
                    and collaboration skills.
                    </p>
                </div>
                </div>

                <div className="card border-secondary mb-3 " style={{ maxWidth: "18rem" }}>
                <div className="card-header">Teamwork</div>
                <div className="card-body">
                    <h5 className="card-title">Teamwork Skills</h5>
                    <p className="card-text">
                    By leading my college project team, I strengthened my teamwork skills through effective task allocation,
                    supporting team members who needed help, and ensuring collaborative progress toward our goals.
                    </p>
                </div>
                </div>

                <div className="card border-warning mb-3" style={{ maxWidth: "18rem" }}>
                <div className="card-header">Problem Solving</div>
                <div className="card-body">
                    <h5 className="card-title">Problem-Solving Skills</h5>
                    <p className="card-text">
                    I have mastered quantitative aptitude and reasoning, and I regularly participate in weekly competitive
                    coding challenges, sharpening my analytical thinking and solution-oriented approach.
                    </p>
                </div>
                </div>

                <div className="card border-danger mb-3" style={{ maxWidth: "18rem" }}>
                <div className="card-header">Communication Skills</div>
                <div className="card-body">
                    <h5 className="card-title">Communication Skills</h5>
                    <p className="card-text">
                    I actively participate in debates, group discussions, and public speaking events, enhancing my verbal
                    and interpersonal communication. I also won first prize in an English competition conducted by NSS,
                    which included continuing a story, group discussion, and debate rounds.
                    </p>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
