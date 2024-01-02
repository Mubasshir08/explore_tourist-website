import React from 'react';

import HouseImage from '../../assets/images/House.png';

const Booking = () => {
  return (
    <section className='grid grid-cols-2'>

        <div className='bg-blue-500 h-screen flex items-center justify-center'>
            <img src={HouseImage} alt="" className='w-1/2'/>
        </div>

        <div className=''>
                <form action="" className='translate-y-1/2'>
                    <h3 className='text-center text-2xl py-2'>Let's Booking</h3>   
                        <div className='m-10 ml-[25%]'>
                            <input type="email" name="" id="" placeholder='email' className='border-b border-slate-500 w-3/4 outline-none py-2 pl-1'/> <br />
                            <input type="password" name="" id="" placeholder='password' className='border-b border-slate-500 w-3/4 outline-none py-2 pl-1' /> 
                            <input type="password" name="" id="" placeholder='confirm password' className='border-b border-slate-500 w-3/4 outline-none py-2 pl-1' /> 
                        </div>
                    <button className='bg-blue-500 m-10 w-1/3 text-center text-white rounded-3xl mx-auto block py-3 px-2'>Book To Unlock</button>
                </form>    
        </div>
    </section>
  )
}

export default Booking
