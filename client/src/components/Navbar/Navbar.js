import React, { useContext } from 'react'
import './Navbar.css'
import Logo from "../../images/logo.png"
import {Link} from 'react-router-dom'
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from '../../context/authContext';

const Navbar = () => {

    const {currentUser} = useContext(AuthContext);

    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<div className='navbar'>
        <img className='logo' src={Logo} alt="" />
			<nav ref={navRef}>
            <Link className='link' to="/booking">
                    <h4>Booking</h4>
                </Link>
                <Link className='link'>
                    <h4>Flight Status</h4>
                </Link>
                <Link className='link'>
                    <h4>Support</h4>
                </Link>
                <Link className='link'>
                    <h4>Partners</h4>
                </Link>
                    <h4 className='link'>{currentUser?.username}</h4>
                
                
                   {currentUser ? <h4 onClick={logout} className="link">Logout</h4>:<Link className='link' to="/login"></Link>} 
                
                {/*<button className='nav-button'>Register</button>
    <button className='nav-button'>Login</button>*/}
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</div>
	);
    {/*
  return (
    <div className='navbar'>
        <div className="nav-container">
            
                <img className='logo' src={Logo} alt="" />
            
            
            <div className="nav-items">
                <Link className='link'>
                    <h4>Booking</h4>
                </Link>
                <Link className='link'>
                    <h4>Flight Status</h4>
                </Link>
                <Link className='link'>
                    <h4>Support</h4>
                </Link>
                <Link className='link'>
                    <h4>Partners</h4>
                </Link>
                <button className='nav-button'>Register</button>
  <button className='nav-button'>Login</button>

            </div>
        </div>
    </div>
)*/}
}

export default Navbar