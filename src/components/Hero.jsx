import React, { useEffect, useRef } from 'react';
import './hero.css';
import fb from '../assets/fb.jpeg';
import desktop from '../assets/Desktop.png';
import desktop2 from '../assets/Desktop2.png';
import android from '../assets/Android.png';

const Hero = () => {
  const heroRef = useRef(null);
  const container1Ref = useRef(null);
  const container2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          container1Ref.current.classList.add('visibletop');
          container2Ref.current.classList.add('visiblebottom');
        } else {
          container1Ref.current.classList.remove('visibletop');
          container2Ref.current.classList.remove('visiblebottom');
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className='hero' ref={heroRef}>
        <div className='heroContent'>
          <div className='heroText'>
            <h1>Discover your <br /> Next Hike</h1>
            <h5>Discover your <br /> Next Hike</h5>
            <p>Get access to our full library of tutorials</p>
            <p>Anytime, anywhere</p>
          </div>
        </div>
        <div className='herobackground'>
          {/* Insert the design here */}
          <div className='container1' ref={container1Ref}>
            <img src={desktop} alt='hero' />
          </div>
          <div className='container2' ref={container2Ref}>
            <img src={desktop2} alt='hero' />
          </div>
          <img src={fb} alt='hero' />
        </div>
        <div className='herobackgroundMobile'>
          {/* Insert the design here */}
          <img src={android} alt='hero' />
        </div>
      </div>
    </>
  );
};

export default Hero;
