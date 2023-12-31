import React from 'react';
import { useParams } from 'react-router';

import Carousel from '../../components/Carousel/Carousel';

//fontawesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// import style
import Map from '../../components/Map/Map';
import Residents from '../../components/Residents/Residents';

const PlacePage = () => {
    const {city} = useParams();
  return (
    <section>
        <div className='h-[500px]'>
            <img src="https://picsum.photos/800/600?random=13" alt="" className='w-full h-full'/>
        </div>
        <h1 className='uppercase text-center text-3xl'>{city}</h1>
        <div className="flex gap-1 justify-center">
            <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
            <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
            <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
            <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
            <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
    </div>
    <div className = 'flex justify-between m-5 '>
      <div className='w-[44%]'>
        <h3 className='font-semibold'>NAME OF PLACE: <span className='uppercase'>{city}</span></h3>
        <p>DESCRIPTION: Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eum obcaecati corrupti nisi error consequuntur et quisquam molestias alias delectus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, laboriosam!</p>
      </div>
      <Map />
    </div>
    <Carousel />
    <Residents />
    </section>
  )
}

export default PlacePage
