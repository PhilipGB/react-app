import { useEffect } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { contact } from './components/Data.js';

function App() {
  useEffect(() => {
    document.title = contact.name;
  }, []);

  return (
    <main className='text-gray-400 bg-gray-800 body-font font-mono'>
      <Nav />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
