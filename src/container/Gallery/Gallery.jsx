import React from 'react';
import images from '../../constants/images';
import './Gallery.css'

const Gallery = () => {
 
  return(
  <div className='gallery'>
    <div className="gallery__left">
      <p>Instagram</p>
      <img src={images.spoon} alt="" />
      <div className='gallery__title'>Photo Gallery</div>
      <div className='gallery__para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</div>
      
      <a href="">View More</a>
    </div>
    <div className="gallery__right">
      <img src={images.gallery01} alt="" />
      <img src={images.gallery02} alt="" />
    </div>
  </div>
  )};

export default Gallery;
