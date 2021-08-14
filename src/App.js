import React from "react"
import Nav from './components/Nav.js'
import About from './components/About.js'
import Projects from './components/Projects.js'
import Skills from './components/Skills.js'
import Contact from './components/Contact.js'
import Blog from './components/Blog'

function App() {
  return (
    <main className="text-gray-400 bg-gray-800 body-font font-mono">
      <Nav />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Blog />
    </main>
  );
}

export default App;
