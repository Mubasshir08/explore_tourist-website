import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarReg } from '@fortawesome/free-regular-svg-icons';

const Residents = () => {
  return (
    <section className='container px-44 mb-24'>
        <h3 className='uppercase font-semibold text-center text-lg py-3'>Residents</h3>
        <div className='grid  grid-cols-5 gap-10'>
          <div className='text-center'>
            <img src="https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg" alt="img" className='w-full h-full rounded-3xl' />
            <h5 className='text-sm mt-2 font-medium'>Hotel Ababil</h5>
            <div>
                <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
                <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
                <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
                <FontAwesomeIcon icon={faStarHalfStroke} color='#FDCC0D'/>
                <FontAwesomeIcon icon={faStarReg} color='#FDCC0D'/>
            </div>
          </div>
          <div className='text-center'>
            <img src="https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg" alt="img" className='w-full h-full rounded-3xl' />
            <h5 className='text-sm mt-2 font-medium'>Hotel Ababil</h5>
            <div>
                <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
                <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
                <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
                <FontAwesomeIcon icon={faStarHalfStroke} color='#FDCC0D'/>
                <FontAwesomeIcon icon={faStarReg} color='#FDCC0D'/>
            </div>
          </div>
          <div className='text-center'>
            <img src="https://cdn.pixabay.com/photo/2018/02/24/17/17/window-3178666_640.jpg" alt="img" className='w-full h-full rounded-3xl'/>
            <h5 className='text-sm mt-2 font-medium'>Hotel Ababil</h5>
            <div>
                <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
                <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
                <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
                <FontAwesomeIcon icon={faStarHalfStroke} color='#FDCC0D'/>
                <FontAwesomeIcon icon={faStarReg} color='#FDCC0D'/>
            </div>
          </div>
          <div className='text-center'>
            <img src="https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_640.jpg" alt="img" className='w-full h-full rounded-3xl'/>
            <h5 className='text-sm mt-2 font-medium'>Hotel Ababil</h5>
            <div>
                <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
                <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
                <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
                <FontAwesomeIcon icon={faStarHalfStroke} color='#FDCC0D'/>
                <FontAwesomeIcon icon={faStarReg} color='#FDCC0D'/>
            </div>
          </div>
          <div className='text-center'>
            <img src="https://cdn.pixabay.com/photo/2013/07/19/00/18/water-165219_640.jpg" alt="img" className='w-full h-full rounded-3xl'/>
            <h5 className='text-sm mt-2 font-medium'>Hotel Ababil</h5>
            <div>
                <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
                <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
                <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
                <FontAwesomeIcon icon={faStarHalfStroke} color='#FDCC0D'/>
                <FontAwesomeIcon icon={faStarReg} color='#FDCC0D'/>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Residents
