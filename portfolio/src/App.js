import "./style.css";
import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Socials from "./Components/Socials";
import Experience from "./Components/Experience";

function App() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setViewportWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // TODO: make mobile navigation
    //TODO: make laravel look pretty
    <>
      <Header isMobile={viewportWidth < 1025} />
      {viewportWidth > 1025 && <Socials />}
      <main className="main">
        <Landing />
        <About />
        <Projects />
        <Experience />
        <Education imgSize={viewportWidth} />
        <Skills />
        <Contact />
      </main>
      <Footer VPW={viewportWidth} />
    </>
  );
}

export default App;
