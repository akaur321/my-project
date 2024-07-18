import React from 'react'
import './BigBend.css'
import fb from '../assets/fb.jpeg'
const BigBend = () => {
  return (
    <div className='bigbend'>
      <h1>Big Bend National Park<br></br> Hiking Guide</h1> 
      <p> Lorem Ipsum</p>
      <button>See More</button>
      <img className='bigbendImg' src={fb} alt='hero' />
      <img className='bigbendImgMob' src={fb} alt='hero' />
    </div>
  )
}

export default BigBend