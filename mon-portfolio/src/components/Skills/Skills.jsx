import "./Skills.css";

import { FaJava, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase, FaDocker, FaJenkins } from "react-icons/fa";
import { SiSpringboot, SiAngular, SiReact, SiGithub } from "react-icons/si";

export const Skills = () => {
    return (
        <section id="skills" className="skills">
            <h2 className="skills-title">My Skills</h2>

            <div className="skills-category">
                <h3>Backend</h3>
                <div className="skills-container">
                    <div className="skill-card"><FaJava className="skill-icon" /><span>Java</span></div>
                    <div className="skill-card"><SiSpringboot className="skill-icon" /><span>Spring Boot</span></div>
                    <div className="skill-card"><FaDatabase className="skill-icon" /><span>SQL</span></div>
                </div>
            </div>

            <div className="skills-category">
                <h3>Frontend</h3>
                <div className="skills-container">
                    <div className="skill-card"><FaHtml5 className="skill-icon" /><span>HTML</span></div>
                    <div className="skill-card"><FaCss3Alt className="skill-icon" /><span>CSS</span></div>
                    <div className="skill-card"><FaJsSquare className="skill-icon" /><span>JavaScript</span></div>
                    <div className="skill-card"><SiAngular className="skill-icon" /><span>Angular</span></div>
                    <div className="skill-card"><SiReact className="skill-icon" /><span>ReactJS</span></div>
                </div>
            </div>

            <div className="skills-category">
                <h3>DevOps & Tools</h3>
                <div className="skills-container">
                    <div className="skill-card"><FaDocker className="skill-icon" /><span>Docker</span></div>
                    <div className="skill-card"><FaJenkins className="skill-icon" /><span>Jenkins (CI/CD)</span></div>
                    <div className="skill-card"><SiGithub className="skill-icon" /><span>Git / GitHub</span></div>
                </div>
            </div>
        </section >   
    );
};
