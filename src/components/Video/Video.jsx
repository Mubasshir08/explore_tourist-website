import React from 'react';
// import './Video.css'

import VideoFootage from '../../assets/videos/beach.mp4'

const Video = () => {
  return (
    <div className='vidDiv relative h-[550px] overflow-hidden'>
      <video className='w-full absolute -top-[130%]' src={VideoFootage} autoPlay muted loop></video>
    </div>
  )
}

export default Video
