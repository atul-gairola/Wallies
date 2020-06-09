import React from 'react';
import Arrow from './images/hero-image.png';
import './Hero.css';

const Hero = () => {
    return <div>
            <div className='hero-container'>
                <div id='hero-content'>
                 <h1>ONE STOP <br/> DESTINATION</h1>
                 <p>FOR ALL YOUR WALL SUPPLIES</p>
                 <button>
                 START DECORATING
                 <svg id='arrow-icon' width="16" height="20" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M9 21L16.7942 12.75H1.20577L9 21Z" fill="#1A4A66"/>
                 <line x1="9" x2="9" y2="13" stroke="#1A4A66" stroke-width="2"/>
                 </svg>
                 </button>
                </div>
                <div id='hero-image'>

                </div>
                 
            </div>
           </div>
}

export default Hero;