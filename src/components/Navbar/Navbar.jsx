import React, { useState } from 'react';
import {AiOutlineMenu} from 'react-icons/ai'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import images from '../../constants/images'
import { motion ,AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => { 
  const [toggleMenu,setToggleMenu]=useState(false)


  return(
    <>
  <div className='navbar__container'>
    <div className="navbar__title">
    Gerícht
    </div>
    <ul className="navbar__menu">
      <li>home</li>
      <li>pages</li>
      <li>contact us</li>
      <li>blog</li>
      <li>landing</li>
    </ul>
    <div className="navbar__login">
      <div className="navbar__login_left">
        Log in / Registration
      </div>
      <div className="border"></div>
      <div className="navbar__login_right">
        Book Table
      </div>
    </div>
    <div className="hamburgermenu">
      <AiOutlineMenu size={29} onClick={()=>setToggleMenu(true)} />
    </div>
  </div>
  <AnimatePresence>
    {
      toggleMenu && 
      <motion.div
      initial={{y:-1000 , opacity:0}}
      animate={{y:0 , opacity:1}}
      transition={{ease:'easeInOut' , duration:1}}
      exit={{y:-1000,opacity:0}}
      className="togglemenu">
        <div className="hambureger__icon">
          <MdOutlineRestaurantMenu size={29}  onClick={()=>setToggleMenu(false)} />
        </div>
        
        <div className="menu__hamburger">

        
        <ul className="hamburger__menu">
      <li>home</li>
      <li>pages</li>
      <li>contact us</li>
      <li>blog</li>
      <li>landing</li>
    </ul>
    </div>
      </motion.div>
    }
    </AnimatePresence>
  </>
)};

export default Navbar;
