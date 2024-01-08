import React from 'react';
// import './HeroSection.css'

import VideoFootage from '../../assets/videos/beach.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  return (
    <div className='vidDiv relative h-[550px] overflow-hidden'>
      <video className='w-full absolute -top-[130%]' src={VideoFootage} autoPlay muted loop></video>
      <div className=''>
           <input type="text" name="" id="" placeholder='Search' className='w-1/3 absolute bg-white rounded-3xl top-[50%] left-[33%] px-5 py-2 outline-none'/>
           <FontAwesomeIcon icon={faSearch} color='grey' className='absolute top-[52%] left-[63.5%]'/>
      </div>
    </div>
  )
}

export default HeroSection
