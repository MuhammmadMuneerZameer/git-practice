import Image from 'next/image'
import Link from 'next/link'
// import React, { useState } from 'react'
import { motion,Toggle,Items } from "framer-motion"
// import styles from './styles.module.css'

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

const Navbar = () => {
  
  return (
    <div className=' lg:flex text-[14px] space-between sm:align-middle  py-10 px-20 gap-2 items-center'>
      <Image     src="/logo.png"
    width={80}
    height={80}
    alt="Picture of the author"
  /> 
         
         <button  className={`lg:hidden absolute top-[3.7rem] border-2 right-[6rem] `}>
          <svg viewBox='-10 -10 120 120'   width={40} fill="none" >
          {/* <path class="line" className={`${styles.line}`} stroke-width="10" stroke-linecap="round" stroke-linejoin="round" d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70">
          </path> */}
          </svg>
        </button>
        <div className='flex lg:ml-[5rem] font-body sm:flex-col  lg:flex-row lg:text-center  lg:w-auto sm:text-center sm:py-5 text-white sm:right-0 sm:absolute sm:pb-20 lg:pb-0 sm:bg-gradient-to-b from-[#222222] to-black lg:bg-none sm:w-full content-center flex-auto w-64 px-3 justify-center gap-10  lg:flex lg:relative'>
          <Link className='hover:text-[#00F0A0] hover:underline-offset-8 ' href='/'>Home</Link>
          <Link className='hover:text-[#00F0A0]' href='/AboutUs'  >About Us</Link>
          <Link className='hover:text-[#00F0A0]' href='/Blogs'>Blogs</Link>
          <Link className='hover:text-[#00F0A0]' href='/Portfolio'  >Portfolio</Link>
        </div>
        
        
        <div>
        <div className='flex gap-2 '>
          <button  className={` sm:my-2 lg:w-auto  sm:w-full  rounded font-body border-2 hover:bg-[#00F0A0] hover:text-black border-[#00F0A0] px-2 py-1   sm:relative sm:top-[40vh] lg:top-0 sm:mx-auto sm:justify-center sm:flex-col sm:items-center `}>Contact Us</button>
          <button  className={`sm:my-2 lg:w-auto sm:w-full  rounded font-body border-2 hover:bg-[#00F0A0] hover:text-black border-[#00F0A0] px-2 py-1   sm:relative sm:top-[40vh] lg:top-0 sm:mx-auto sm:justify-center sm:flex-col sm:items-center`}>Sign Up</button>
        </div>
        </div>
    </div>
  )
}

export default Navbar