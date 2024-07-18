import React from 'react'
import u3 from '../assets/u3.png'
import fb from '../assets/fb.jpeg'
const Closing = () => {
  return (
    <div className='center'>
    <h1>the asanas purify our body and <br></br>keep it healthy , making it suit-<br/>able vehicle for soul</h1> 
       <img className='ctr' src={u3}/>
    <button>See More</button>
    <img className='bigbendImg' src={fb} alt='hero' />
    <img className='bigbendImgMob' src={fb} alt='hero' />
  </div>
  )
}

export default Closing