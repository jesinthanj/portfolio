import { useState } from "react";

import { useScrolled, useScrollTo } from "./hooks/usePortfolio";

import Navbar    from "./components/Navbar";
import Hero      from "./components/Hero";
import Skills    from "./components/Skills";
import Experience from "./components/Experience";
import Projects  from "./components/Projects";
import Education from "./components/Education";
import Contact   from "./components/Contact";
import Footer    from "./components/Footer";

import "./styles/portfolio.css";

function App() {
  const [activeNav, setActiveNav] = useState("About");
  const scrolled  = useScrolled(40);
  const scrollTo  = useScrollTo(setActiveNav);

  return (
    <div>
      <Navbar
        activeNav={activeNav}
        scrolled={scrolled}
        onNavigate={scrollTo}
      />
      <Hero       onNavigate={scrollTo} />
      <Skills     />
      <Experience />
      <Projects   />
      <Education  />
      <Contact    />
      <Footer     />
    </div>
  );
}

export default App;
