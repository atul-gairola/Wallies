import React from 'react';
import './Inspiration.css';
import FirstPhoto from './images/first-photo.jpg';
import SecondPhoto from './images/second-photo.jpg';
import ThirdPhoto from './images/third-photo.jpg';
import FourthPhoto from './images/fourth-photo.jpg';
import FifthPhoto from './images/fifth-photo.jpg';

const Inspiration = () => {
    return <div>
            <div className='inspiration-container'>
            <div className='inspiration-grid'>
                <div className='ins-photo inspiration-photo-1'>
                <img src={FirstPhoto} />
                </div>
                <div className='ins-photo inspiration-photo-2'>
                <img src={SecondPhoto} />
                </div>
                <div className='ins-photo inspiration-photo-3'>
                <h1>INSPIRATION</h1>
                <p>DON'T KNOW WHERE TO BEGIN ?</p>
                <p id='p-last'>THIS MIGHT HELP</p>
                <button>SEE MORE <svg width="18" stroke="#1A4A66" height="21" fill="#1A4A66" viewBox="0 0 18 21"  xmlns="http://www.w3.org/2000/svg">
<path d="M9 21L16.7942 12.75H1.20577L9 21Z" />
<line x1="9" x2="9" y2="13"  stroke-width="2"/>
</svg></button>
                </div>
                <div className='ins-photo inspiration-photo-4'>
                <img src={ThirdPhoto} />
                </div>
                <div className='ins-photo inspiration-photo-5'>
                <img src={FourthPhoto} />
                </div>
                <div className='ins-photo inspiration-photo-6'>
                <img src={FifthPhoto} />
                </div>
            </div>
            </div>
           </div>
}


export default Inspiration;