import React from 'react'
import "./Footer.css"
import Logo from "../../images/logo.png"

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-div">
    <img src={Logo}/>
    <span>Made with❤️ <b>Fly MEC</b></span>
    </div>
  
    </footer>
  )
}

export default Footer