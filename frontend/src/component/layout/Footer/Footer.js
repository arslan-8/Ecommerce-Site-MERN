import React from 'react';
import appStore from '../../../images/store.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer id='footer'>
        <div className='leftFooter'>
            <h4>DOWNLOAD OUR APP</h4>
            <p>Download app for android and IOS mobile phones</p>
            <img src={appStore} alt-='store' />
        </div>

        <div className='midFooter'>
            <h1>ECOMMERCE.</h1>
            <p>High quality is our first priority</p>

            <p>Copyright 2022 &copy; Zenkoders</p>
        </div>

        <div className='rightFooter'>
            <h4>Follow Us</h4>
            <a href='#'>Instagram</a>
            <a href='#'>Youtube</a>
            <a href='#'>Facebook</a>    
        </div>

    </footer>
  )
}

export default Footer;
