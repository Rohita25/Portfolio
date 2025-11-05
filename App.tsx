import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * The main application component.
 * Renders the entire application, including the navbar, hero section, about section, skills section, projects section, contact section, and footer.
 */
/*******  089f3aad-a168-4cd3-b4a8-931e22badabd  *******/function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
