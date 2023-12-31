import React from 'react'

const ExploredCard = ({img, title}) => {
  return (
    <div className='relative overflow-hidden'>
      <img src={img} alt="" className='rounded-3xl' />
      <div className='absolute bottom-0 rounded-br-3xl rounded-bl-3xl backdrop-blur-lg bg-black/30 w-full h-[25%]'>
        <h5 className='text-white text-center mt-2'>{title}</h5>
      </div>
    </div>
  )
}

export default ExploredCard
