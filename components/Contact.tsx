import "../style/Contact.css";
import { FiMail, FiMapPin, FiLinkedin, FiInstagram, FiDownload } from "react-icons/fi";

const Contact = () => (
  <section id="contact" className="contact-section">
    <h2 className="contact-title">Let’s Connect</h2>
    <p className="contact-subtitle">
      Ready to create something amazing together? I’d love to hear about your project!
    </p>

    <div className="contact-main-layout">
      {/* Left Side - Info */}
      <div className="contact-info-card">
        <h3 className="contact-info-title">Get in Touch</h3>

        <div className="contact-info-list">
          <div className="contact-info-item">
            <span className="contact-info-icon"><FiMail /></span>
            <div>
              
              <span className="contact-info-value">rohitabollam@gmail.com</span>
            </div>
          </div>

          <div className="contact-info-item">
            <span className="contact-info-icon"><FiMapPin /></span>
            <div>
          
              <span className="contact-info-value">Bangalore, India</span>
            </div>
          </div>
        </div>

        {/* Follow Me Section */}
        <div className="contact-social">
          <div className="contact-social-title">Follow Me</div>
          <div className="contact-social-list">
            <a
              href="https://www.linkedin.com/in/rohitabollam"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-icon"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://www.instagram.com/rohita_bollam/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-icon"
            >
              <FiInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Resume Card - right side */}
      <div className="contact-resume-card">
        <div className="contact-resume-icon"><FiDownload /></div>
        <h3 className="contact-resume-title">Download Resume</h3>
        <p className="contact-resume-desc">
          Get a detailed overview of my experience and skills
        </p>
        <a href="Resume.pdf" download className="contact-resume-btn">
          <FiDownload style={{ marginRight: "8px" }} />
          Download PDF
        </a>
      </div>
    </div>
  </section>
);

export default Contact;

