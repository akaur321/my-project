import React from 'react';
import trg from '../assets/trg.jpg';
import './mountain.css';

const Mountain = () => {
  return (
    <>
      <div className='mountainRest'>
        <div className='mountainPart1'>
          <div className='mountainItem1'>
            <h1>Mountaineering <br/>Ice Climbing</h1>
            <h4>2. Activities</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <hr className='mountainLine'/>
          </div>
          <div className='mountainItem2'>
            <img className='mountainImage' src={trg} alt='trg' />
          </div>
        </div>
        <div className='mountainPart2'>
          <div className='mountainItem3'>
            <h4>17 modules <br/> divided into 5 weekends</h4>
            <div className='mountainItem3Div'>
              <div>
                Start <br/>
                April 15, <br/>
                20 hours
              </div>
              <div>
                Price<br/>
                $ 900 <br/>
              </div>
            </div>
          </div>
          <div className='mountainItem4'>
            Walking In Nature <br/>
            As a recreational <br/>
            Activity
          </div>
        </div>
      </div>
    </>
  );
};

export default Mountain;
