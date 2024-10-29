import React from 'react'
import './Navbar.css'
import assets from '../assets/assets'

const Navbar = () => {
  return (
    <nav className='navbar'>
             <div className="navbar-left">
              <img src={assets.logo} alt="logo" className='logo' />
             </div>
             <div className="navbar-right">
              <div className="social-icons">

          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-google"></i>
          <i className="fab fa-instagram"></i>

              </div>

              <a href="about" className='download-btn'>Downlaod</a>
             </div>

    </nav>
  )
}

export default Navbar