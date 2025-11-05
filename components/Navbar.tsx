import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import "../style/Navbar.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    if (darkMode) {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    }
    setDarkMode(!darkMode);
  };

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="navbar">
      <img src="../assets/logo.png" alt="Rohita Bollam" className="navbar-logo"/>
      <ul className="navbar-links">
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} className="navbar-link">
              {link}
            </a>
          </li>
        ))}
      </ul>
      <button className="navbar-theme-btn" onClick={toggleTheme}>
        {darkMode ? <FiSun /> : <FiMoon />}
      </button>
    </nav>
  );
};

export default Navbar;


