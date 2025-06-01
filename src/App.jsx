import { useRef } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <div>
      <Header 
        scrollToAbout={() => aboutRef.current.scrollIntoView({ behavior: "smooth" })}
        scrollToProjects={() => projectsRef.current.scrollIntoView({ behavior: "smooth" })}
      />

    <div ref={aboutRef}>
        <About />
      </div>

    <div ref={projectsRef}>
        <Projects />
      </div>

    </div>
  );
}

export default App;
