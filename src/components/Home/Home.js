import React, { useEffect, useState } from 'react';
import './Home.css';
import NavigationBar from './../Navbar/NavigationBar';
import Typewriter from 'typewriter-effect';

function Home() {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme? current_theme : 'dark');

  const positions = ["Software Developer", "Computer Technician"]

  
  useEffect(()=>{
    localStorage.setItem('current_theme', theme)
  }, [theme])

  return (
    <div className={`container ${theme}`}>
      <NavigationBar theme={theme} setTheme={setTheme} />
      <header className='home-image' id='page-front'>
        <span className="blur"></span>
        <span className="blur"></span>
        <div className='home-image-content'>
          <div className='home-text-content'>
            <label className='home-text-name' style={{ color: theme === 'dark' ? 'white' : 'black' }}>
              Hi, I'm John Rafael Tugano
            </label>
            <div style={{ display: "flex", flexDirection: "row", gap: 15, alignItems: "center" }}>
              <label className='home-text-course' style={{ color: theme === 'dark' ? 'aquamarine' : 'cornflowerblue' }}>I am a </label>
              <div className='home-text-course' style={{ color: theme === 'dark' ? 'aqua' : 'blue' }}>
                <Typewriter
                  className='home-text-course'
                  options={{
                    strings: positions,
                    autoStart: true,
                    loop: true, 
                    delay: 100,
                  }}
                />
              </div>
            </div>
            <p style={{
              color: theme === 'dark' ? 'white' : 'black',
              fontSize: '20px',
              marginTop: '10px',
              textIndent: '20px',
              textAlign: 'justify'
            }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis justo nec ipsum consequat consequat. In sagittis, quam ut fermentum luctus, dui ligula ullamcorper erat, sit amet volutpat purus sapien nec erat. Donec pulvinar sollicitudin augue, nec euismod orci ultricies nec. Sed aliquam lorem quis mauris condimentum, ut ullamcorper quam faucibus.
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home