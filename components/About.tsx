import "../style/About.css";

const designValues = [
  {
    title: "Empathy",
    desc: "Understanding user needs through cultural context and human connection.",
    highlight: true,
  },
  {
    title: "Clarity",
    desc: "Simplifying complex problems into intuitive and accessible solutions.",
    highlight: false,
  },
  {
    title: "Purpose",
    desc: "Designing with intention and inclusivity.",
    highlight: false,
  },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="about-title">About</h2>
        <p className="about-intro">
          A beginner UI/UX designer and BCA student passionate about understanding how
          design shapes the way people interact with technology. I’m in the early stages
          of my design journey, learning the core principles of user experience, interface
          design, and front-end development. Through personal projects and continuous
          learning, I’m building my skills in research, prototyping, and visual storytelling.
          My goal is to grow into a designer who creates purposeful, human-centered designs
          that blend functionality with emotion.
        </p>

        <div className="about-values">
          <h3 className="about-values-title">Design Values</h3>
          <br />
          <div className="about-values-list">
            {designValues.map((v) => (
              <div
                className={`about-value-card${v.highlight ? " active" : ""}`}
                key={v.title}
              >
                <div className="about-value-bar"></div>
                <div>
                  <span className="about-value-title">{v.title}</span>
                  <span className="about-value-desc">{v.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
