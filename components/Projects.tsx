import { useState } from "react";
import "../style/Projects.css";

const projects = [
  {
    title: "NammaThota",
    desc: "A simple farmer centric E-commerce application connecting farmers and buyers excluding middlemen.",
    img: "/assets/project1.png",
    details:
      "A digital platform where small farmers can list their fresh produce and consumers can buy directly without middlemen. Includes price transparency, seasonal crop updates, and location-based delivery options. Fully responsive UI, supports regional languages, and has a clean, accessible design for rural users.",
    whatILearned: [
      "Understood how to design interfaces that are easy for non-tech users (like farmers).",
      "Learned to manage user data and listings efficiently with simple backend logic.",
      "Improved skills in responsive design, accessibility, and multilingual support."
    ],
    tools: ["React JS", "CSS", "HTML", "Figma", "UX Research", "UI Design"],
    date: "2025",
    context: "Academic MiniProject"
  },
  {
    title: "VR Interview Simulation",
    desc: "A design exploration into immersive interfaces that help users practice interviews in realistic virtual settings. Focused on comfort, clarity, and user control across AR/VR and desktop modes.",
    img: "/assets/project3.png",
    details:
      "Redesigned from scratch for maximum performance, clarity, and personality. Included animation, dark/light theme, and a unique storytelling structure.",
    whatILearned: [
      "Discovered value in narrative design and micro-interactions.",
      "Improved understanding of usability challenges in immersive environments.",
      "Practiced building consistent UI systems across 2D and 3D spaces.",
      "Strengthened empathy-based design thinking for anxiety-prone user scenarios."
    ],
    tools: ["Three.js", "Blender", "UX", "AR/VR Design", "Figma", "FigJam", "Unity"],
    date: "2025",
    context: "Academic project"
  },
  {
    title: "Blood Harmony",
    desc: "A platform that connects donors and recipients instantly based on location and blood type.",
    img: "../assets/project2.png",
    details:
      "A web app that connects blood donors, recipients, and nearby hospitals in real time. It features instant donor matching based on blood type and location, emergency request alerts, and a clean, accessible interface. The system also includes a secure login, donation history tracking, and notification reminders for eligible donors. Fully responsive and tested for mobile use to ensure quick access during emergencies.",
    whatILearned: [
      "Gained experience in designing for accessibility, focusing on easy navigation.",
      "Learned to implement real-time data updates and notifications.",
      "Learned to design user flows that work smoothly in emergency situations.",
      "Understood the value of clarity, trust, and speed in health-related applications."
    ],
    tools: ["HTML", "CSS", "JavaScript", "FigJam", "UX Research"],
    date: "2024",
    context: "Academic project"
  }
];

const Projects = () => {
  const [modalIdx, setModalIdx] = useState<number | null>(null);

  const openModal = (index: number) => setModalIdx(index);
  const closeModal = () => setModalIdx(null);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((p, idx) => (
          <div key={p.title} className="project-card">
            <img src={p.img} alt={p.title} className="project-image" />
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>
            <button className="project-view-btn" onClick={() => openModal(idx)}>
              View More
            </button>
          </div>
        ))}
      </div>

      {modalIdx !== null && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <div className="modal-layout">
              {/* DETAILS COLUMN */}
              <div className="modal-columns">
                <h2 className="modal-title">{projects[modalIdx].title}</h2>
                <div className="modal-meta">
                  <span>{projects[modalIdx].date}</span>
                  <span className="modal-tags">
                    {projects[modalIdx].tools.map((t) => (
                      <span className="modal-tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </span>
                </div>

                {projects[modalIdx].context && (
                  <p className="modal-context">{projects[modalIdx].context}</p>
                )}

                <div className="modal-section">
                  <div className="modal-section-title">What is the project?</div>
                  <div className="modal-description">
                    {projects[modalIdx].details}
                  </div>
                </div>

                {projects[modalIdx].whatILearned &&
                  projects[modalIdx].whatILearned.length > 0 && (
                    <div className="modal-section">
                      <div className="modal-section-title">What I Learned</div>
                      <ul className="modal-list">
                        {projects[modalIdx].whatILearned.map((tip) => (
                          <li key={tip}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

