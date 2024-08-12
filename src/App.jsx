import "./App.css";
import About from "./sections/About/about";
import Contact from "./sections/Contact/Contact";
import Experience from "./sections/Experience/Experience";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
