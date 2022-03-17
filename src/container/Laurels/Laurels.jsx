import React from 'react';
import images from '../../constants/images';
import { data } from '../../constants';
import './Laurels.css';

const Laurels = () => (
  <div className='laurels'>
    <div className="laurels__container">
      <div className="laurels__container__left">
        <div className="laurels__container__left__top">
          <p>Awards & recognition</p>
          <img src={images.spoon} alt="" />
          <div>Our Laurels</div>
        </div>
        <div className="laurels__container__left__bottom">
            
              {data.awards.map(data=>(
                <div className="laurellls">
                <div className="laurels__container__left__bottom__item">
                <div className="laurels__container__left__bottom__item__image">
                  <img src={data.imgUrl} alt="" />
                </div>
                <div className="laurels__container__left__bottom__item__right">
                  <p>{data.title}</p>
                  <span>{data.subtitle}</span>
                </div>
                </div>
                </div>
              ))}
            
        </div>
      </div>
      <div className="laurels__container__right">
          <img src={images.laurels} alt="" />
      </div>
    </div>
  </div>
);

export default Laurels;
