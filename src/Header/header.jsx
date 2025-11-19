import './header.css'
import { useState } from 'react'

function header() {
  const [isMenuOpen , setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className='container'>
      <div className='header'>
        <h3>
          Shodiyorov Dilshodbek
        </h3>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="https://github.com/dilshodbekshodiyorov">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className='logo'>
          <img src="./vector.png" alt="" />
          <img src="./logo.png" alt="" />
          <img src="./twit.png" alt="" />
        </div>
        <button className={`burger-menu $ {isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>

      </div>

      <div className='title'>
        <div className="info">
          <h3>
            Hello, I’m Dilshod, <br /> <span>Frontend <br /> Developer</span> <br /> basen in Uzbekistan
          </h3>
          <button className='resume-btn'><a href="https://drive.google.com/file/d/14JdsynHwKx_43yiir_MxHEqJYrMxiLr5/view?usp=drivesdk">Resume</a></button>
        </div>

        <div className="profile-container">
          <div className="dark-circle">
            <img src="./my-photo.jpg" alt="" className='profile-photo' />
          </div>
          <div className="plus-sign">+++</div>
          <div className="lines">/////</div>
        </div>
      </div>



     

    </div>

  )
}

export default header