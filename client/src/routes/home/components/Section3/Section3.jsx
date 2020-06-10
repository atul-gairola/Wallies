import React from 'react';
import './Section3.css';
import Section3Img from './section3.jpg';

const Section3 = () => {
    return <div>
        <div className='section3-container'>
          <div className='section3-content'>
          <h1 className=' section3-h section-heading '>WALL</h1>
          <h1 className=' section3-h section-heading'>PLANT</h1>
          <p className=' section3-c section-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .</p>
          <button className=' section3-b section-button'>SEE MORE <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 21L16.7942 12.75H1.20577L9 21Z" fill="#1A4A66"/>
<line x1="9" x2="9" y2="13" stroke="#1A4A66" stroke-width="2"/>
</svg>
</button>
          </div>
          <div className='section3-img'>
           <img src={Section3Img}/> 
          </div>
        </div>
           </div>
}

export default Section3;