import React from 'react';
import Nav from './components/NavBar';
import Header from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const color = "purple";

  return (
    <>
      <Nav color={color} />
      <Header color={color} />
      <About color={color} />
      <Skills color={color} />
      <Projects color={color} />
      <Contact color={color} />
      <Footer />
    </>
  );
}

export default App;
