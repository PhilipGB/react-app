import React, { useState } from 'react';
import Nav from './components/Nav.js'
import About from './components/About.js'
import Projects from './components/Projects.js'
import Skills from './components/Skills.js'
import Contact from './components/Contact.js'

function App() {
  const [pages, setCart] = useState([]);
  //setCart(cart => [...cart, "First Load"]);

  function reorderPage(e) {
    const item = e.target;
    setCart(pages => [<About />, ...pages]);
  }

  return (
    <main className="text-gray-400 bg-gray-800 body-font font-mono">
        <Nav />

        <button value={<About />} onClick={reorderPage}>Test Button</button>
        {pages.map(page => page)}

        <Projects />
    </main>
  );
}

export default App;