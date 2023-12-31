import React from 'react'
import ExploredCard from '../../components/ExploredCard/ExploredCard'

const ExploredPlace = () => {
  return (
    <section className='container px-10'>
      <h3 className='py-5 font-semibold text-lg'>#See<span className='text-blue-700'>Your</span>Explore</h3>
      <div className='grid grid-cols-5 grid-rows-2 gap-5'>
        <ExploredCard img='https://picsum.photos/800/600?random=1' title='Paris, France'/>
        <ExploredCard img='https://picsum.photos/800/600?random=2' title='Kyoto, Japan'/>
        <ExploredCard img='https://picsum.photos/800/600?random=3' title='Marrakech, Morocco'/>
        <ExploredCard img='https://picsum.photos/800/600?random=4' title='Rio de Janeiro, Brazil'/>
        <ExploredCard img='https://picsum.photos/800/600?random=5' title='Sydney, Australia'/>
        <ExploredCard img='https://picsum.photos/800/600?random=6' title='Machu Picchu, Peru'/>
        <ExploredCard img='https://picsum.photos/800/600?random=7' title='New York City, USA'/>
        <ExploredCard img='https://picsum.photos/800/600?random=8' title='Cape Town, South Africa'/>
        <ExploredCard img='https://picsum.photos/800/600?random=9' title='Venice, Italy'/>
        <ExploredCard img='https://picsum.photos/800/600?random=10' title='Agra, India'/>
      </div>
      <div className='flex flex-col items-center py-10'>
        <h2 className='font-semibold text-lg text-center'>Sign up for new updates and deals from explore.com and our authority.</h2>
        <input type="email" name="" id="" placeholder='E-mail' className='border border-slate-600 rounded-2xl my-3 p-1 px-5 w-1/3'/>
        <button className='bg-blue-500 text-white w-36 rounded-2xl p-1'>Submit</button>
      </div>
    </section>
  )
}

export default ExploredPlace
