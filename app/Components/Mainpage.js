'use client';
import React, { StrictMode, useState } from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"
import Link from 'next/link';

const Mainpage = () => {
  // const [selectedId, setSelectedId] = useState(null);
  return (
    <>
      <div className="max-w-[1920px] m-auto">
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
          <div className="my-6">
            <h1 className="font-sans text-white text-[30px]  ">
              Our Designing Projects
            </h1>
            <div className="opacity-[50%] flex font-mono text-white justify-between items-end">
              <p className="">
                A one stop solution for all their is to set up your business
                online.
              </p>

              <button className="border-[1px] px-2 py-1 border-white rounded-[4px] hover:text-red">
                See more
              </button>
            </div>
          </div>
          <section className="flex gap-[10px]  grid grid-cols-2 ">
            <div className="col-span-2  ">
              <image
                src="/4wariz.jpg"
                className=" rounded-[6px]   object-cover object-center "
                alt="Picture of the author"
              />
            </div>

            <div className="">
              <image
                src="/logofolio2.png"
                className=" rounded-[6px] object-cover object-center "
                alt="Picture of the author"
              />
            </div>

            <div className="row-span-2">
              <image
                src="/shirt.png"
                className=" rounded-[6px]  object-cover object-center "
                alt="Picture of the author"
              />
            </div>
            <div className="w-[50%] bg-[#00F0A0] hover:w-[100%]  rounded-[4px]"></div>
          </section>
        </div>

        {/* second section  */}

        <div className=" mt-10 m-auto w-[50%] border-[1px] rounded-[10px] h-auto p-6 ">
          <div className="my-6">
            <h1 className="font-sans text-white text-[30px]  ">
              Our Designing Projects
            </h1>
            <div className="opacity-[50%] flex font-mono text-white justify-between items-end">
              <p className="">
                A one stop solution for all their is to set up your business
                online.
              </p>

              <button className="border-[1px] px-2 py-1 border-white rounded-[4px] hover:text-red">
                See more
              </button>
            </div>
          </div>
          <section className="flex gap-[5px]  grid grid-cols-2 ">
            <div className="col-span-2  ">
              <image
                src="/4wariz.jpg"
                className=" rounded-[6px]   object-cover object-center "
                alt="Picture of the author"
              />
            </div>

            <div className="">
              <image
                src="/logofolio2.png"
                className=" rounded-[6px] object-cover object-center "
                alt="Picture of the author"
              />
            </div>

            <div className="row-span-2">
              <image
                src="/shirt.png"
                className=" rounded-[6px]  object-cover object-center "
                alt="Picture of the author"
              />
            </div>
            <div className="w-[50%] bg-[#00F0A0] hover:w-[100%]  rounded-[4px]"></div>
          </section>
        </div>

        {/* third section */}
        <div className=" mt-10 m-auto w-[50%] border-[1px] rounded-[10px] h-auto p-6 ">
          <div className="my-6">
            <h1 className="font-sans text-white text-[30px]  ">
              Our Designing Projects
            </h1>
            <div className="opacity-[50%] flex font-mono text-white justify-between items-end">
              <p className="">
                A one stop solution for all their is to set up your business
                online.
              </p>
              <button className="border-[1px] px-2 py-1 border-white rounded-[4px] hover:text-red">
                See more
              </button>
            </div>
          </div>
          <section className="flex gap-[5px]  grid grid-cols-2 ">
            <div className="col-span-2  ">
              <image
                src="/4wariz.jpg"
                className=" rounded-[6px]   object-cover object-center "
                alt="Picture of the author"
              />
            </div>

            <div className="">
              <image
                src="/logofolio2.png"
                className=" rounded-[6px] object-cover object-center "
                alt="Picture of the author"
              />
            </div>

            <div className="row-span-2">
              <image
                src="/shirt.png"
                className=" rounded-[6px]  object-cover object-center "
                alt="Picture of the author"
              />
            </div>
            <div className="w-[50%] bg-[#00F0A0] hover:w-[100%]  rounded-[4px]"></div>
          </section>
        </div>
        {/* footer */}
        <footer className="mt-10 bg-gradient-to-b from-[#222222] to-[#000000] h-[300px]">
          <section className="flex flex-row pt-[50px] mx-[5%] space-x-10">
            {/* first column */}
            <div className="font-body w-[25%] border-l-[1px] px-5 ml-[20px]">
              <h1 className="text-white font-body text-[44px] leading-[50px]">Hydra Fox Designs</h1>
              <p className='text-[#616161]'>
                Stand out from the crowd. We're the secret weapon for brands
                ready to make a splash.
              </p>
            </div>
            {/* second column */}

            <div className='border-l-[1px] w-[25%] content-center'>
              <div className="flex flex-col px-5 text-[#616161] font-body  p-l-10  ">
              <Link href="/">Home</Link>
              <Link href="/Blogs">Blogs</Link>
              <Link href="/Portfolio">Portfolio</Link>
              <Link href="/AboutUs">About Us</Link>
            </div>
            </div>

            {/* third column */}

            <div className='border-l-[1px] px-5  w-[25%]'>
              <h1 className='text-white font-body'>Subscribe To Our Newsletter</h1>
              <div className='grid  gap-[5px] grid-cols-2  content-center '>
             <input className='h-4 font-mono bg-[#616161] px-2 py-4' placeholder='First name'/>
             <input className='h-4 font-mono bg-[#616161] px-2 py-4' placeholder='Last Name'/>
             <input className='h-4 font-mono bg-[#616161] px-2 py-4 m-0 col-span-2 ' placeholder='Email Address'/>
             <button className='col-span-2 text-[#00F0A0] font-mono border-2 border-[#00F0A0]'>Join Us</button>
            </div>
            </div>
          </section>
        </footer>
      </div>
    </>
  );
};

export default Mainpage;