import React from 'react';
import './FindUs.css'
import images from '../../constants/images';
const FindUs = () => (
  <div className='findus'>
    <div className="findus__container">
      <div className="findus__container__left">
        <div className="findus__container__left__top">
          <p>Contact</p>
          <img src={images.spoon} alt="" />
          <div>Find Us</div>
          <span>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</span>
        </div>
        <div className="findus__container__left__bottom">
          <p>Opening Hours</p>
          <div>Mon - Fri: 10:00 am - 02:00 am</div>
          <div>Sat - Sun: 10:00 am - 03:00 am</div>
          <a href="">Visit Us</a>
        </div>
      </div>
      <div className="findus__container__right">
        <img src={images.findus} alt="" />
      </div>
    </div>
  </div>
);

export default FindUs;
