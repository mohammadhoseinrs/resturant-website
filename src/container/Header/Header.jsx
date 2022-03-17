import React from 'react';
import images from '../../constants/images';

import './Header.css';

const Header = () => {
  return(

    <div className="header__container">
      <div className="header__container__left">
          <div className="header__container__left__top">
            <p>Chase the new Flavour</p>
            <img src={images.spoon} alt="" />
          </div>
          <div className="header__container__left__title">
            <div>he key to Fine dining</div>
            <p>
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus 
            </p>
          </div>
        
            <a className="header__container__left__button" href="">Explore Menu</a>
          
      </div>
      <div className="header__container__right">
        <img src={images.welcome} alt="" />
      </div>
    </div>
  )
};

export default Header;
