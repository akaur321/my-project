import React from 'react'
import './footer.css'
import title from '../assets/title.png'
const Footer = () => {
  return ( 
    <>
<div className='footerContainer'>

<div className='footer'>
    <div className='footerContent'>
      <h5>ABOUT</h5>
      <p className='footerText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, totam libero. Ab quibusdam at dolorem incidunt et doloribus qui voluptatem .</p>
      <img src={title} alt='title' />
    </div>
    <div className='footerLinks'>
      <div className='footerLink '>
        <h5>LINKS</h5>
        <a className='navBarLinks' href='#'>Home</a>
        <a className='navBarLinks'  href='#'>About</a>
        <a className='navBarLinks'  href='#'>Classes</a>
        <a className='navBarLinks' href='#'>Contact</a>
      </div>
      
      <div className='footerLink '>
        <h5>LINKS</h5>
        <a className='navBarLinks' href='#'>Home</a>
        <a className='navBarLinks'  href='#'>About</a>
        <a className='navBarLinks'  href='#'>Classes</a>
        <a className='navBarLinks' href='#'>Contact</a>
      </div>

      <div className='footerLink '>
        <h5>LINKS</h5>
        <a className='navBarLinks' href='#'>Home</a>
        <a className='navBarLinks'  href='#'>About</a>
        <a className='navBarLinks'  href='#'>Classes</a>
        <a className='navBarLinks' href='#'>Contact</a>
      </div>

      </div>
    </div>
</div>
    <hr className='footerLine'/>
    </>
  )
}

export default Footer