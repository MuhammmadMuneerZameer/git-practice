'use client';
import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"




const Mainpage = () => {
  return (
    <>
      <Navbar />

      <div>
        <h1 className="font-sans md:text-red max-sm:text-6xl lg:text-[#00F0A0] text-8xl mt-20  text-center mx-0 px-0 ">
          Imagination digitalized
        </h1>

        <p className="font-mono text-white text-center">
          A one stop solution for all their is to set up your business online.
        </p>
      </div>
      <div>
        <image
          src="/down-arrow.png"
          className="w-10 animate-bounce mx-auto my-10 "
          alt="Picture of the author"
        />
      </div>
      <div className="my-[180px] ">
        <h1 className="font-sans text-white text-3xl text-center">
          We work on
        </h1>
        <div className="flex my-auto">
          <image
            src="/logos.png"
            className="w-[50%] mx-auto my-2 "
            alt="Picture of the author"
          />
          <image
            src="/logos.png"
            className="w-[50%] mx-auto my-2 "
            alt="Picture of the author"
          />
        </div>
      </div>

      <div className="m-auto w-[50%] border-[1px] rounded-[10px] h-auto p-6 ">
        <div className='my-6'>
          <h1 className="font-sans text-white text-[30px]  ">
            Our Designing Projects
          </h1>
          <div className="opacity-[50%] flex font-mono text-white justify-between items-end">
            <p className=''>
              A one stop solution for all their is to set up your business
              online.
            </p>
            {/* this is muneer from local */}
            <button className='border-[1px] px-2 py-1 border-white rounded-[4px] hover:text-red'>See more</button>
          </div>
        </div>
        <section className='flex gap-[5px]  grid grid-cols-2 '>
        <div className='col-span-2  '>
          <image
            src="/4wariz.jpg"
            className=" rounded-[6px]   object-cover object-center "
            alt="Picture of the author"
          />
          </div>

          <div className=''>
          <image
            src="/logofolio2.png"
            className=" rounded-[6px] object-cover object-center "
            alt="Picture of the author"
          />
          </div>
          
          <div className='row-span-2'>
          <image
            src="/shirt.png"
            className=" rounded-[6px]  object-cover object-center "
            alt="Picture of the author"
          /></div>
          <div className='w-[50%] bg-[#00F0A0] hover:w-[100%]  rounded-[4px]'>
          
          </div>
        </section>
      </div>

    </>
  );
}

export default Mainpage