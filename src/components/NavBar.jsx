import React from 'react'
import './navbar.css'
import { useState, useEffect } from 'react';
import logo from '../assets/title.png'
const NavBar = () => {
     const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const winHeight = window.innerHeight || document.documentElement.clientHeight;
        const docHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
        );

        const totalDocScrollLength = docHeight - winHeight;
        const scrollPostion = (scrollTop / totalDocScrollLength) * 100;

        setScrolled(scrollPostion > 1); // Change to true if scrolled more than 5%
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


  return (
    <div className='navCont'>
        <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
    <div className='cont'>
    <div className='logo'>
        <img src={logo} alt='logo' />
    </div>
        <div className='navBarLinksContainer'>
                <div className="navBarLinks">Home </div>
                <div className="navBarLinks">Class</div>
                <div className="navBarLinks">Promo </div>
                <div className="navBarLinks">Online Class</div>
                <div className="navBarLinks">Contact</div>
                <div className="navBarLinks"></div>
                </div>
          
    </div>
    </div>
    </div>
  )
}

export default NavBar