import "../style/Skills.css";
import { FiDatabase } from "react-icons/fi";

const skills = [
  "HTML / CSS",
  "JavaScript",
  "React.JS",
  "Design Thinking",
  "Wireframing",
  "Prototyping",
  "UX Research",
  "Figma",
  "Notion"
];

const Skills = () => (
  <section id="skills" className="skills-section">
    <h2 className="skills-title">Skills</h2>
    <p className="skills-subtitle">
      Core competencies in design and development
    </p>
    <div className="skills-pill-wrap">
      {skills.map((skill) => (
        <span className="skill-pill" key={skill}>
          <span className="skill-pill-icon"><FiDatabase /></span>
          {skill}
        </span>
      ))}
    </div>
  </section>
);

export default Skills;
