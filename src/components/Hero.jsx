import React from 'react'
import HeroImage from '../assets/HeroImage.png'

const Hero = () => {
  return (
    <div className='flex sm:flex-col sm:justify-between items-center w-full mx-auto lg:relative sm:w-full'>
      <img className='z-[-1] w-full' src={HeroImage} alt=''/>
      <div className='bg-gradient-to-r from-[#4DCA79] to-[#1CBDDD] z-1 xl:top-[354px] left-[80px] text-transform: capitalize lg:w-[622px] md:w-full md:h-[258px] sm:w-full sm:m-0 lg:absolute p-[24px, 40px, 32px, 40px] lg:top-[300px]'>
        <h1 className='mx-[40px] max-md:text-4xl sm:t-[295px] md:text-4xl md:leading-[48px] font-bold text-white mt-[20px] font-inter'>We crush your competitors, goals, and sales records - without the B.S.</h1>
        <button className='btn ml-[40px] mb-[20px] mt-[15px] font-inter max-sm:mx-[10px]'>Get free consultation</button>
      </div>
    </div>
  )
}

export default Hero
