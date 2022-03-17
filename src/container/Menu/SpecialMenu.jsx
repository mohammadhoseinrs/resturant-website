import React from 'react';
import images from '../../constants/images';
import data from '../../constants/data';
import './SpecialMenu.css';

const SpecialMenu = () => {
  return(
   <div className="specialmenu">
     <div className="menu__container">
       <div className="menu__container__top">
         <div>Menu that fits you palatte</div>
         <img src={images.spoon} alt="" />
         <p>Today’s Special</p>
       </div>
       <div className="menu__bottom">
         <div className="menu__bottom__left">

           <div className="menu__title">
            Wine & Beer
            </div>
           {data.wines.map(data=>(
<>
            <div className="menu__itself">
              <div className="menu__item">
              <p>
                {data.title}
              </p>
              <div className="menu__line"></div>
              <span>
                {data.price}
              </span>
              </div>
              <div className="menu__submenu">
                {data.tags}
              </div>
            </div>
            </>    
           ))}
            
         </div>
         <div className="menu__bottom__middle">
            <img src={images.menu} alt="" />
         </div>
         <div className="menu__bottom__right">
         <div className="menu__title">
         cocktails
            </div>
           {data.cocktails.map(data=>(
<>
            <div className="menu__itself">
              <div className="menu__item">
              <p>
                {data.title}
              </p>
              <div className="menu__line"></div>
              <span>
                {data.price}
              </span>
              </div>
              <div className="menu__submenu">
                {data.tags}
              </div>
            </div>
            </>    
           ))}
         </div>
       </div>
       <div className="menu__read_more">
         <button>View More</button>
       </div>
     </div>
   </div>
)};

export default SpecialMenu;
