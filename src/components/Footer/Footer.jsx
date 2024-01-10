import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#181612] text-center w-full'>

            {/* UpperFoooterSection  */}
            <div className='upperDiv pl-14 grid lg:grid-cols-4  grid-cols-1'>

                <ul className='text-white text-left mt-10'>
                    <li className='text-3xl mb-4'>Contact</li>
                    <li className='mt-2'>Phone Number : 010000</li>
                    <li className='mt-2'>Email : explore@gmail.com</li>
                    <li className='mt-2'>Website : explore.com</li>
                </ul>
                <ul className='text-white text-left mt-10'>
                    <li className='text-3xl mb-4'>Company</li>
                    <li className='mt-2'>Partners</li>
                    <li className='mt-2'>Customers</li>
                    <li className='mt-2'>Management</li>                 
                    <li className='mt-2'>Press</li>
                    <li className='mt-2'>Careers</li>
                    <li className='mt-2'>Engineering</li>
                    <li className='mt-2'>Pricing</li>
                    <li className='mt-2'>Affiliate Program</li>
                    <li className='mt-2'>Investor Relations</li>
                </ul>
                <ul className='text-white text-left mt-10'>
                <li className='text-3xl mb-4 '>Help</li>   
                    <li className='mt-2'>FAQs</li>
                    <li className='mt-2'>About explore.com</li>
                    <li className='mt-2'>Adding Your Business and Deals</li>                 
                    <li className='mt-2'>Linking To explore.com</li>
                    <li className='mt-2'>Terms of use</li>
                    <li className='mt-2'>Privacy</li>
                </ul>

                <ul className='text-white text-left mt-10'>
                <li className='text-3xl mb-4 '>Our Other Sites</li>
                    <li className='mt-2'>Media</li>
                    <li className='mt-2'>The Visual Library</li>
                    <li className='mt-2'>Travel Trade</li>                 
                    <li className='mt-2'>Corporate Website</li>
                    <li className='mt-2'>Tourism Business</li>
                    <li className='mt-2'>Datebase</li>
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