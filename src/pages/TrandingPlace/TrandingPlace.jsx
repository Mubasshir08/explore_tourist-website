import React from 'react';

// font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarReg } from '@fortawesome/free-regular-svg-icons';

// images
import img1 from '../../assets/images/aaron-burden-cEukkv42O40-unsplash.jpg';

const TrandingPlace = () => {
  return (
    <section id='trandingplace' className='container pl-8'>
            <h3 className='text-center text-2xl font-semibold py-5'>TRANDING PLACE</h3>
      <div className='flex w-[45%] border-black border-[1px] rounded-2xl m-3 p-3'>
          <div className='w-2/3'>
              <h3 className='text-2xl font-semibold'>Title</h3>
              <p className='w-[98%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nisi tempore voluptatum at aspernatur dolorum minus, velit autem facere voluptatem</p>
          </div>
          <div className='w-1/3 pt-2 pl-10 flex flex-col items-center'>
              <img src={img1} alt="" className='w-[120px] h-[120px] rounded-[50%]'/>
              <div>
                <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
                <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
                <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
                <FontAwesomeIcon icon={faStarHalfStroke} color='#FDCC0D'/>
                <FontAwesomeIcon icon={faStarReg} color='#FDCC0D'/>
              </div>
          </div>
      </div>
      <div className='flex w-[45%] border-black border-[1px] rounded-2xl m-3 ml-[55%] p-3'>
          <div className='w-2/3  order-2'>
              <h3 className='text-2xl  font-semibold'>Title</h3>
              <p className='w-[98%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt officia eum consectetur vel quos architecto provident quasi eos mollitia vero</p>
          </div>
          <div className='w-1/3 pt-2 pr-10 flex flex-col items-center'>
              <img src={img1} alt="" className='w-[120px] h-[120px] rounded-[50%]'/>
              <div>
                <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
                <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
                <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
                <FontAwesomeIcon icon={faStarHalfStroke} color='#FDCC0D'/>
                <FontAwesomeIcon icon={faStarReg} color='#FDCC0D'/>
              </div>
          </div>
      </div>
      <div className='flex w-[45%] border-black border-[1px] rounded-2xl m-3 p-3'>
          <div className='w-2/3'>
              <h3 className='text-2xl font-semibold'>Title</h3>
              <p className='w-[98%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta neque consequuntur odit vero perferendis minima commodi sunt dolor vitae quibusdam</p>
          </div>
          <div className='w-1/3 pt-2 pl-10 flex flex-col items-center'>
              <img src={img1} alt="" className='w-[120px] h-[120px] rounded-[50%]'/>
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

export default TrandingPlace
