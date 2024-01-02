import React from 'react';
import { useParams } from 'react-router';

//fontawesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Map from '../Map/Map';
import Review from '../Review/Review';
import { Link } from 'react-router-dom';

const ResidentDetails = () => {
  const {hotel} = useParams();
  console.log(useParams())
  return (
    <section className=''>
      <div className=' h-[500px]'>
            <img src="https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg" alt="" className='w-full h-full'/>
        </div>
        <h1 className='uppercase text-center text-3xl'>{hotel}</h1>
        <div className="flex gap-1 justify-center">
            <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
            <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
            <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
            <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
            <FontAwesomeIcon icon={faStar} color='#FDCC0D'/>
    </div>  
          <div className = 'flex justify-between m-5 px-6'>
                <div className='w-2/5'>
                  <h3 className='font-semibold py-[0.10rem]'>Name of Hotel : <span className='uppercase'>{hotel}</span></h3>
                  <h3 className='font-semibold py-[0.10rem]'>Status : 5 STAR</h3>
                    <Review />
                  <p><span className='font-semibold py-[0.10rem]'>Description :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad et culpa, id omnis optio neque iusto saepe aperiam cupiditate</p>
                  <Link to= '/place/city/hotel/hotel/booking'>
                    <button className='bg-[#0ea4e9f1] text-white rounded py-2 px-3 my-2 hover:bg-[#0ea4e9]'>Book Now</button>
                  </Link>
                </div>
              <Map />
          </div>
        <div className='my-5'>
          <h3 className='text-center text-2xl pb-2'>PHOTOS</h3>
          <hr className='border-black border-2 rounded-lg w-1/3 mx-auto'/>
            <div className='grid grid-cols-5 gap-10 px-11 my-10'>
                <div className=''>
                    <img src="https://picsum.photos/800/600?random=20" alt="img" className='w-full h-full rounded-3xl' />
                </div>
                <div className=''>
                    <img src="https://picsum.photos/800/600?random=21" alt="img" className='w-full h-full rounded-3xl' />
                </div>
                <div className=''>
                    <img src="https://picsum.photos/800/600?random=22" alt="img" className='w-full h-full rounded-3xl' />
                </div>
                <div className=''>
                    <img src="https://picsum.photos/800/600?random=23" alt="img" className='w-full h-full rounded-3xl' />
                </div>
                <div className=''>
                    <img src="https://picsum.photos/800/600?random=24" alt="img" className='w-full h-full rounded-3xl' />
                </div>
                <div className=''>
                    <img src="https://picsum.photos/800/600?random=25" alt="img" className='w-full h-full rounded-3xl' />
                </div>
                <div className=''>
                    <img src="https://picsum.photos/800/600?random=26" alt="img" className='w-full h-full rounded-3xl' />
                </div>
                <div className=''>
                    <img src="https://picsum.photos/800/600?random=27" alt="img" className='w-full h-full rounded-3xl' />
                </div>
                <div className=''>
                    <img src="https://picsum.photos/800/600?random=28" alt="img" className='w-full h-full rounded-3xl' />
                </div>
                <div className=''>
                    <img src="https://picsum.photos/800/600?random=29" alt="img" className='w-full h-full rounded-3xl' />
                </div>
                <div className=''>
                    <img src="https://picsum.photos/800/600?random=30" alt="img" className='w-full h-full rounded-3xl' />
                </div>
                <div className=''>
                    <img src="https://picsum.photos/800/600?random=31" alt="img" className='w-full h-full rounded-3xl' />
                </div>
                <div className=''>
                    <img src="https://picsum.photos/800/600?random=32" alt="img" className='w-full h-full rounded-3xl' />
                </div>
                <div className=''>
                    <img src="https://picsum.photos/800/600?random=33" alt="img" className='w-full h-full rounded-3xl' />
                </div>
                <div className=''>
                    <img src="https://picsum.photos/800/600?random=34" alt="img" className='w-full h-full rounded-3xl' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default ResidentDetails
