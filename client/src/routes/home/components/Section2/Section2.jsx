import React from 'react';
import './Section2.css';
import Section2Img from './section2.jpg';

const Section2 = () => {
    return <div>
        <div className='section2-container'>
        <div className='section2-img'>
           <img src={Section2Img}/> 
          </div>
          <div className='section2-content'>
          <h1 className='section-heading'>POSTERS</h1>
          <h1 className='section-heading'>PAINTINGS</h1>
          <h1 className='section-heading'>IMAGES</h1>
          <p className='section-content'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          <button className='section-button'>SEE MORE <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 21L16.7942 12.75H1.20577L9 21Z" fill="#1A4A66"/>
<line x1="9" x2="9" y2="13" stroke="#1A4A66" stroke-width="2"/>
</svg>
</button>
          </div>
        </div>
           </div>
}

export default Section2;