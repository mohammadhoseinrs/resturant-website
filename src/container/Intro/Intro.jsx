import React, { useRef, useState } from 'react';
import {meal} from '../../constants';
import './Intro.css';
import {AiFillPlayCircle , AiFillPauseCircle} from 'react-icons/ai'

const Intro = () => {
  const [playVideo, setplayVideo] = useState(false)
  const videoRef=useRef()
  const handleVideo=()=>{
    setplayVideo(prevState=>!prevState)
    if(playVideo){
      videoRef.current.pause()
    }else{
      videoRef.current.play()
    }
  }
  return(



 <div className='meal'>
    <video type='video/mp4' ref={videoRef} controls={false} loop src={meal}></video>
    <div className="meal__overlay">
      <div className="meal__overlay__circle"
      onClick={handleVideo}
      >
        {playVideo ? <AiFillPauseCircle  color='#fff' fontSize={90} /> :<AiFillPlayCircle color='#fff' fontSize={90} />}
      </div>
    </div>
  </div>

  )
};

export default Intro;
