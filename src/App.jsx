import React, { useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App = () => {
  const wrapperRef = useRef(null);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <div className='wrapper' ref={wrapperRef}>
          <div id="hero" className='z-10'>
            <Hero scrollContainer={wrapperRef} />
          </div>
          <div id="about" className='relative z-30 bg-primary'>
            <About />
            </div>
          <div id="portfolio" className='relative z-30 bg-primary mt-[-2px]'>
            <Portfolio />
          </div>
          <div id="experience" className='relative z-30 bg-primary'>
            <Experience />
          </div>

          <div id="contact" className='relative z-30 bg-primary'>
            <Contact />
          </div>
          
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
