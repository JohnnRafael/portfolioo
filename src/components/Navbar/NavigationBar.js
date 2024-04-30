import React from 'react'
import './NavigationBar.css'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import toggle_light from '../../assets/night.gif'
import toggle_dark from '../../assets/day.png'


const NavigationBar = ({theme, setTheme}) => {

    const toggle_mode = ()=>{
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }
  return (
    <div className = 'NavBar'>
        <img src={theme == 'light' ? logo_light : logo_dark} alt= "" className='logo'/>
        <ul>
            <li>Home</li>
            <li>Education</li>
            <li>Experience</li>
            <li>About</li>
            <li>Contact</li>
        </ul>      
        <img onClick={()=>{toggle_mode()}} src={theme === 'light' ? toggle_light : toggle_dark} alt= "" className='toggle-icon'/>
    </div>
  )
}

export default NavigationBar
