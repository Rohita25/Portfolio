import { motion } from "framer-motion";
import "../style/Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-title"
      >
        Rohita Bollam
      </motion.h1>
      <div className="hero-title-underline"></div>
      <p className="hero-subtitle">Aspiring UI/UX Designer</p>
      <p className="hero-desc">
        Crafting intuitive and engaging digital experiences through empathetic design.
      </p>
      <div className="hero-buttons">
        <a href="#projects" className="button-main">
          View Work
        </a>
        <a href="#contact" className="button-outline">
          Get In Touch
        </a>
      </div>
      <p className="hero-location">BASED IN BANGLORE, INDIA</p>
      
    </section>
  );
};

export default Hero;
