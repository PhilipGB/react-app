import React from "react"
import Nav from './components/Nav.js'
import About from './components/About.js'
import Projects from './components/Projects.js'
import Skills from './components/Skills.js'
import Contact from './components/Contact.js'

function App() {
  return (
    <main>
      <Nav />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
