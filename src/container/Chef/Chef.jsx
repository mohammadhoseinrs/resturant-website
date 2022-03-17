import React from 'react';
import images from '../../constants/images';
import './Chef.css';

const Chef = () => (
  <div className='chef'>
      <div className="chef__container">
        <div className="chef__image">
          <img src={images.chef} alt="" />
        </div>
        <div className="chef__right">
          <div className="cheft__right__top">
            <p>Chef’s Word</p>
            <img src={images.spoon} alt="" />
            <div>What we believe in</div>
          </div>
          <div className="chef__right_middle">
            <div>
              <img src={images.quote} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
            </div>
            <span>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</span>
          </div>
          <div className="chef__right__bottom">
            <p>Kevin Luo</p>
            <div>Chef & Founder</div>
            <img src={images.sign} alt="" />
          </div>
        </div>
      </div>
  </div>
);

export default Chef;
