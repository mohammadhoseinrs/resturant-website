import React from 'react';
import images from '../../constants/images';
import './Footer.css';
import {FiFacebook , FiInstagram ,FiTwitter} from 'react-icons/fi'

const Footer = () => (
  <div className='footer'>
    <div className="footer__overlay"></div>
    <div className="footer__container">
    <div className="footer__top">
      <p className='footer__top__top'>Newsletter</p>
      <img src={images.spoon} alt="" />
      <div className='footer__top__title'>Subscribe to Our Newsletter</div>
      <p className="footer__top__para">And never miss latest Updates!</p>
      <div className="footer__top__bottom">
        <input type="text" placeholder='Email Address' />
        <a href="">Subscribe</a>
      </div>
    </div>
    <div className="footer__bottom">
      <div className="footer__bottom__left">
        <div>Contact Us</div>
        <p>9 W 53rd St, New York, NY 10019, USA</p>
        <p>+1 212-344-1230
          <br/>
    +1 212-555-1230</p>
      </div>
      <div className="footer__bottom__middle">
        <p>Gerícht</p>
        <div>"The best way to find yourself is to lose yourself in the service of others.”</div>
        <img src={images.spoon} alt="" />
        <div >
          <FiFacebook />
          <FiInstagram className='footer__icon' />
          <FiTwitter />
        </div>
      </div>
      <div className="footer__bottom__right">
        <div>Working Hours</div>
        <p>Monday-Friday:
          <br/>
08:00 am -12:00 am</p>
<p>Saturday-Sunday:
  <br/>
07:00am -11:00 pm</p>
      </div>
    </div>
    
    </div>
  </div>
);

export default Footer;
