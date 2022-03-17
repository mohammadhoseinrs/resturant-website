import React from 'react';
import './AboutUs.css';
import images from '../../constants/images';

const AboutUs = () => (
  <div className='aboutus'>
    <div className="aboutus__container">
      <div className="aboutus__overlay">
        <img src={images.G} alt="" />
      </div>
      <div className="aboutus__content">
        <div className="aboutus__content__left">
          <h2>About Us</h2>
          <img src={images.spoon} alt="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <a href="">Know More</a>
        </div>
        <div className="aboutus__content__image">
          <img src={images.knife} alt="" />
        </div>
        <div className="aboutus__content__right">
        <h2>Our History</h2>
        <img src={images.spoon} alt="" />
        <p>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
          <a href="">Know More</a>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
