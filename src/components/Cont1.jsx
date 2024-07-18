import React, { useEffect, useRef } from 'react';
import './cont1.css';
import u1 from '../assets/u1.png';
import u2 from '../assets/u2.png';
import u3 from '../assets/u3.png';
import trg from '../assets/trg.jpg';
const Cont1 = () => {
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
    <div className='cont1'>
      <div className='contHeader'>
        <div className='contText'>
          <p>Hiking and Camping</p>
          <p className='bold'>Classes</p>
          <hr className='line'></hr>
        </div>
      </div>
      <div className='contContainer'>
        <div className='contCard' ref={el => cardsRef.current[0] = el}>
          <img src={u1} alt='u1' />
          <h1>Activities</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='contCard' ref={el => cardsRef.current[1] = el}>
          <img src={u2} alt='u2' />
          <h1>Mountains</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='contCard' ref={el => cardsRef.current[2] = el}>
          <img src={u3} alt='u3' />
          <h1>Hiking</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className='contRest'>
       <div className='part1'>
        <div className='contItem1'>
          <h1>Rock <br/>Climbing</h1>
          <h4>1. Classes & events</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <hr className='line'/>
        </div>
        <div className='contItem2'>
          <img className='contImage' src={trg} alt='trg' />
        </div>
       </div>
       <div className='part2'>
        <div className='contItem3'>
          <h4>
          10 modules <br/>
            divided into 7 weeks 
          </h4>
          <div className='contItem3Div'>
            <div>
              Start <br></br>
              April 15, <br></br>
              20 hours
            </div>
            <div>
              Price<br></br>
              $ 900 <br></br>
             </div>
          </div>

        </div>
        <div className='contItem4'>
            Walking In Nature <br/>
            As a recreational <br/>
            Activity
        </div>
       </div>
      </div>
    </div>
  );
};

export default Cont1;
