import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#181612] text-center w-full'>

            {/* UpperFoooterSection  */}
            <div className='upperDiv grid lg:grid-cols-4  grid-cols-1  '>

                <ul className='text-white mt-10'>
                    <li className='text-3xl mb-4'>Contact</li>
                    <li className='mt-2'>Phone Number : 015394524</li>
                    <li className='mt-2'>Email : taj.200xxxxxxxx</li>
                    <li className='mt-2'>Website : www.xxx.com</li>
                    <li className='mt-2'>Website : www.xxx.com</li>
                </ul>
                <ul className='text-white mt-10'>
                    <li className='text-3xl mb-4'>About us</li>
                    <li className='mt-2'>Creative</li>
                    <li className='mt-2'>Creative</li>
                    <li className='mt-2'>Creative</li>                 
                    <li className='mt-2'>Creative</li>
                </ul>
                <ul className='text-white mt-10'>
                <li className='text-3xl mb-4 '>Help</li>   
                <li className='mt-2'>Creative</li>
                    <li className='mt-2'>Creative</li>
                    <li className='mt-2'>Creative</li>                 
                    <li className='mt-2'>Creative</li>
                </ul>

                <ul className='text-white mt-10'>
                <li className='text-3xl mb-4 '>Our other sites</li>
                <li className='mt-2'>Creative</li>
                    <li className='mt-2'>Creative</li>
                    <li className='mt-2'>Creative</li>                 
                    <li className='mt-2'>Creative</li>
                </ul>
            </div>

            {/* LowerFoooterSection  */}
            <div className='lowerDiv text-center mt-10'>
                <h1 className='text-white text-4xl ml-6 mb-3'>
                    Find us
                </h1>
                <div className='flex justify-center gap-7 ml-5'>
                    <li className='list-none'><i className="fa-brands fa-facebook text-white text-2xl"></i></li>
                    <li className='list-none'><i className="fa-brands fa-youtube text-white text-2xl"></i></li>
                    <li className='list-none'><i className="fa-brands fa-twitter text-white text-2xl"></i></li>
                    <li className='list-none'><i className="fa-brands fa-instagram text-white text-2xl mb-5"></i></li>
                </div>
            </div>

        </div>
    );
};

export default Footer;