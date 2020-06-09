import React from 'react';


// rendering hamburger dropdown
const HamburgerDropdown = (props) => {
    if(props.isClicked)
    return  <div className='hamburger-dropdown'>
    <div className='hamburger-dropdown-option'>
    <p>Login / Register</p> <svg id='login-icon' width="23" height="28" viewBox="0 0 23 28" fill="#7D868E" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="11.0525" cy="5.25812" rx="5.34793" ry="5.25812" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6733 15.882C21.648 16.6886 22.1048 17.935 22.1048 19.2001V22.5417C22.1048 25.3031 19.8662 27.5417 17.1048 27.5417H5C2.23858 27.5417 0 25.3031 0 22.5417V18.9109C0 17.5833 0.504489 16.2785 1.56246 15.4765C4.13348 13.5278 7.35489 12.3679 10.8517 12.3657H10.8722C14.6052 12.3681 18.0243 13.6897 20.6733 15.882Z"/>
            </svg>
    </div>
    <div className='hamburger-dropdown-option'>
    <p>Cart</p> <svg id='cart-icon' width="26" height="28" viewBox="0 0 26 28" fill="#7D868E" stroke="#7D868E" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="7.57584" cy="26.3641" rx="1.51749" ry="1.49201" />
            <ellipse cx="18.704" cy="26.3641" rx="1.51749" ry="1.49201"/>
            <path d="M19.5242 22.8828H6.87353C6.87353 22.4756 7.36607 13.0504 7.26023 7.25717L24.2682 14.9781L19.5242 22.8828Z" />
            <path d="M1 1.00693C2.65664 0.945654 6.15063 1.26429 6.87353 3.02907C7.11001 3.60639 7.22272 5.20359 7.26023 7.25717M7.26023 7.25717C7.36607 13.0504 6.87353 22.4756 6.87353 22.8828H19.5242L24.2682 14.9781L7.26023 7.25717Z"  stroke-width="2"/>
            </svg>
    </div>
    <div className='hamburger-dropdown-option'>
    <p>Contact Us</p> <svg id='phone-icon' width="27" height="26" viewBox="0 0 27 26" fill="#7D868E" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.4281 16.2479L17.8071 18.7104L7.31973 8.85694L9.94074 6.39435L3.36882 0.219711C3.36882 0.219711 0.228277 2.93415 0.0170822 5.08714C-0.265556 7.96895 2.98115 13.2084 8.07845 17.9976C13.1758 22.7868 18.7522 25.8373 21.8194 25.5718C24.1109 25.3732 27 22.4225 27 22.4225L20.4281 16.2479Z" />
            </svg>
    </div>
</div>

return null
}

export default HamburgerDropdown;