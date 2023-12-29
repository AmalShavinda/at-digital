import React from 'react'
import WhiteLogo from '../assets/WhiteLogo.png'
import { Link } from 'react-router-dom'
import MobileMenu from '../assets/Group2.png'

const NavBar = () => {

  return (
    <div className='nav-menu flex justify-between items-center px-[80px] py-[26px] bg-[#6B3CC9] w-full mx-auto max-md:px-5 max-lg:px-10'>
        <Link to='/'>
            <img className='w-[238.89px] h-[36.11px] top-[-11.11px]' src={WhiteLogo} alt=''/>
        </Link>
        <ul className='hidden w-[381px] h-[17px] gap-[28px] md:flex uppercase font-inter text-white max-md:hidden'>
            <li className='text-sm cursor-pointer'>
                <Link >Services</Link>
            </li>
            <li className='text-sm cursor-pointer'>
                <Link >About Us</Link>
            </li>
            <li className='text-sm cursor-pointer'>
                <Link >Contact Us</Link>
            </li>
            <li className='text-sm cursor-pointer'>
                <Link >Careers</Link>
            </li>
        </ul>
        <img src={MobileMenu} alt='' className='md:hidden'/>
    </div>
  )
}

export default NavBar
