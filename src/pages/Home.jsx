import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Image2 from '../assets/image2.png'
import Image1 from '../assets/image1.png'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className='analytics w-full bg-white py-15 px-4'>
        <div className='max-w-[896px] mx-auto grid md:grid-cols-2'>
          <img className='md:w-[400px] w-[300px] mx-auto my-4' src={Image2} alt="" />
          <div className='flex flex-col justify-center'>
            <h1 className='font-inter capitalize font-semibold text-[#6B3CC9] text-[27px] sm:justify-center max-md:text-center md:text-left'>Web & Mobile App Development</h1>
            <p className='font-inter font-normal text-[16px] mt-5 sm:justify-center max-md:text-center md:text-left'>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
            <button className='btn rounded-md font-medium my-5 mx-auto text-white md:ml-0 font-inter'>Learn More</button>
          </div>
        </div>
      </div>
      <div className='analytics w-full bg-white py-15 px-4'>
        <div className='max-w-[896px] mx-auto grid md:grid-cols-2 sm:flex-col-reverse'>
          <div className='md:hidden'>
            <img className='md:w-[400px] w-[300px] mx-auto my-4' src={Image1} alt="" />
          </div>
          <div className='flex flex-col justify-center'>
            <h1 className='font-inter capitalize font-semibold text-[#6B3CC9] text-[27px] sm:justify-center max-md:text-center md:text-left'>Digital Strategy Consulting</h1>
            <p className='font-inter font-normal text-[16px] mt-5 sm:justify-center max-md:text-center md:text-left'>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
            <button className='btn rounded-md font-medium my-5 mx-auto text-white md:ml-0 font-inter max-md:mb-[80px]'>Learn More</button>
          </div>
          <div className='sm:hidden md:contents'>
            <img className='md:w-[400px] w-[300px] mx-auto my-4' src={Image1} alt="" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
