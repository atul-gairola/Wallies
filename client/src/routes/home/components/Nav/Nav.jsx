import React, { useState } from 'react';
import './Nav.css';
import HamburgerDropdown from './nav-components/HamburgerDropdown';

const Nav = () => {

    const [isHamburgerClicked, setHamburgerClick] = useState(false);
     
    // handling click on hamburger icon
    const handleHamburgerClick = () => {
        isHamburgerClicked ? setHamburgerClick(false) : setHamburgerClick(true) ;
    }

    return <nav>
            <p className='logo'>WALLIES</p>
            <div className='search-bar'>
              <input type='text' placeholder='Search items... '></input>
              <button>
              <svg id='search-icon' width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.9146 14.8138L9.84766 10.5151C10.619 9.50849 11.0834 8.2288 11.0834 6.83552C11.0834 3.60567 8.59734 0.977936 5.54166 0.977936C2.48599 0.977936 0 3.60567 0 6.83552C0 10.0654 2.48602 12.6931 5.54169 12.6931C6.85983 12.6931 8.0705 12.2023 9.02281 11.387L13.0897 15.6857C13.2036 15.8061 13.3883 15.8061 13.5022 15.6857L13.9146 15.2498C14.0285 15.1294 14.0285 14.9342 13.9146 14.8138ZM5.54169 11.4599C3.12917 11.4599 1.16668 9.38556 1.16668 6.83552C1.16668 4.28548 3.12917 2.21112 5.54169 2.21112C7.95421 2.21112 9.9167 4.28548 9.9167 6.83552C9.9167 9.38556 7.95421 11.4599 5.54169 11.4599Z" fill="#A4ADB3"/>
              </svg>
              </button>
            </div>
            <div className='nav-links'>
            <svg id= 'hamburger-icon' onClick={handleHamburgerClick} width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.428467" y1="2.33337" x2="31.5714" y2="2.33337" stroke="#7D868E" stroke-width="3"/>
            <line x1="0.428467" y1="11.4167" x2="31.5714" y2="11.4167" stroke="#7D868E" stroke-width="3"/>
            <line x1="0.428467" y1="20.5" x2="31.5714" y2="20.5" stroke="#7D868E" stroke-width="3"/>
            </svg>
            <HamburgerDropdown isClicked = {isHamburgerClicked}/>
            <svg id='phone-icon' width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.4281 16.2479L17.8071 18.7104L7.31973 8.85694L9.94074 6.39435L3.36882 0.219711C3.36882 0.219711 0.228277 2.93415 0.0170822 5.08714C-0.265556 7.96895 2.98115 13.2084 8.07845 17.9976C13.1758 22.7868 18.7522 25.8373 21.8194 25.5718C24.1109 25.3732 27 22.4225 27 22.4225L20.4281 16.2479Z" fill="#7D868E"/>
            </svg>
            <svg id='cart-icon' width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="7.57584" cy="26.3641" rx="1.51749" ry="1.49201" fill="#7D868E"/>
            <ellipse cx="18.704" cy="26.3641" rx="1.51749" ry="1.49201" fill="#7D868E"/>
            <path d="M19.5242 22.8828H6.87353C6.87353 22.4756 7.36607 13.0504 7.26023 7.25717L24.2682 14.9781L19.5242 22.8828Z" fill="#7D868E"/>
            <path d="M1 1.00693C2.65664 0.945654 6.15063 1.26429 6.87353 3.02907C7.11001 3.60639 7.22272 5.20359 7.26023 7.25717M7.26023 7.25717C7.36607 13.0504 6.87353 22.4756 6.87353 22.8828H19.5242L24.2682 14.9781L7.26023 7.25717Z" stroke="#7D868E" stroke-width="2"/>
            </svg>
            <svg id='login-icon' width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="11.0525" cy="5.25812" rx="5.34793" ry="5.25812" fill="#7D868E"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6733 15.882C21.648 16.6886 22.1048 17.935 22.1048 19.2001V22.5417C22.1048 25.3031 19.8662 27.5417 17.1048 27.5417H5C2.23858 27.5417 0 25.3031 0 22.5417V18.9109C0 17.5833 0.504489 16.2785 1.56246 15.4765C4.13348 13.5278 7.35489 12.3679 10.8517 12.3657H10.8722C14.6052 12.3681 18.0243 13.6897 20.6733 15.882Z" fill="#7D868E"/>
            </svg>
            </div>
           </nav>
}

export default Nav;