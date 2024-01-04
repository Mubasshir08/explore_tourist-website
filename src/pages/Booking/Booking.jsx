import React, { useState } from 'react';

import HouseImage from '../../assets/images/House.png';
import { Link } from 'react-router-dom';
import Calendar from '../../components/Calendar/Calendar';


const Booking = () => {
    const [firstDate, setFirstDate] = useState(null);
    const [lastDate, setLastDate] = useState(null);
    // console.log(date)

  return (
    <section className='grid grid-cols-2'>

        <div className='bg-blue-500 h-screen flex items-center justify-center'>
            <img src={HouseImage} alt="" className='w-1/2'/>
        </div>

        <div className=''>
            <Link to= '/place/city/hotel/hotel'>
                <button className='bg-slate-300 rounded-[50%] w-10 h-10 m-3'>↩</button>
            </Link>
                <div className='text-center'>
                    <h3 className='text-center text-2xl py-2'>Let's Booking</h3>   
                        <div className='px-16'>
                            <input type="email" name="" id="" placeholder='email' className='border-b border-slate-500 w-3/4 outline-none py-2 pl-1'/> <br />
                            <input type="password" name="" id="" placeholder='password' className='border-b border-slate-500 w-3/4 outline-none py-2 pl-1' /> 
                            <input type="password" name="" id="" placeholder='confirm password' className='border-b border-slate-500 w-3/4 outline-none py-2 pl-1' /> 
                        </div>
                        <Calendar firstDate = {firstDate} setFirstDate = {setFirstDate} lastdate = {lastDate} setLastDate = {setLastDate}/>
                    <button className='bg-blue-500 w-1/3 text-center text-white rounded-3xl block mx-auto my-5 py-3 px-2' onClick={() => console.log('first:', firstDate, 'last:', lastDate)}>Book To Unlock</button>
                </div>    
        </div>
    </section>
  )
}

export default Booking
