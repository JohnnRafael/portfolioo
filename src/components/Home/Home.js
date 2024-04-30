import React, { useEffect, useState } from 'react';
import './Home.css';
import NavigationBar from './../Navbar/NavigationBar';
// import { useTypewriter, Cursor} from 'react-simple-typewriter';
import Typewriter from 'typewriter-effect';

function Home() {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme? current_theme : 'light');

  const positions = ["Software Developer", "Computer Technician"]

  
  useEffect(()=>{
    localStorage.setItem('current_theme', theme)
  }, [theme])

  return (
    <div className = {`container ${theme}`}>
        <NavigationBar theme={theme} setTheme={setTheme}/>
        <header className='home-image' id='page-front'>
        <span className="blur"></span>
        <span className="blur"></span>
        <div className='home-image-content'>
            <div className='home-text-content'>
                <label className='home-text-name' style={{ color: 'white' }}>
                    Hello, I'm Rafael Tugano
                </label>
                <div style={{display: "flex", flexDirection: "row", gap: 15, alignItems: "center"}}>
                  <label className='home-text-course' style={{ color: 'Red' }}>I am a </label>
                  <div className='home-text-course' style={{ color: 'yellow' }}>
                    <Typewriter
                      className='home-text-course' 
                      style={{ color: '#yellow' }}
                      options={{
                        strings: positions,
                        autoStart: true,
                        loop: true,
                        delay: 100,
                      }}
                    />
                  </div>
                </div>                        
            </div>     
        </div>
      </header>
    </div>
   
  )
}

export default Home