import React, { useEffect, useRef } from 'react';
import './autmn.css';
import u1 from '../assets/u1.png';
import u2 from '../assets/u2.png';
import u3 from '../assets/u3.png';
import trg from '../assets/trg.jpg';

const Autumn = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
          }
          else {
            entry.target.classList.remove('visible');
            entry.target.classList.add('hidden');
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    cardsRef.current.forEach(card => {
      observer.observe(card);
      card.classList.add('hidden');
    });

    return () => {
      cardsRef.current.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <>
    <div className='autmn'>

    <div className='autmnHeader'>
        <div className='autmnText'>
          <p>Hiking and Camping</p>
          <p className='bold'>Classes</p>
          <hr className='line'></hr>
        </div>
      </div>
      <div className='autmnContainer'>
        <div className='autmnCard' ref={el => cardsRef.current[0] = el}>
          <img src={trg} alt='u1' />
          <svg width="80px" height="60px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#41b2df" class="bi bi-three-dots-vertical">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>
          <h1>        Mountain Loop</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <hr/>
          <h4><p className='bold'>Location : </p> 0.9 miles</h4>
        </div>
        <div className='autmnCard' ref={el => cardsRef.current[1] = el}>
          <img src={trg} alt='u2' />
          <svg width="80px" height="60px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#41b2df" class="bi bi-three-dots-vertical">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>
                      <h1>National Park</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <hr/>
          <h4><p className='bold'>Location : </p> 0.9 miles</h4>
        </div>
        <div className='autmnCard' ref={el => cardsRef.current[2] = el}>
          <img src={trg} alt='u3' />
          <svg width="80px" height="60px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#41b2df" class="bi bi-three-dots-vertical">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>
          <h1>Canyon Trail</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <hr/>
          <h4><p className='bold'>Location : </p> 0.9 miles</h4>
        </div>
      </div>
    <button className='btn'>See More</button>
    </div>
    </>
  );
}

export default Autumn;
