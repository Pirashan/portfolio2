import React from 'react'
import Image from 'next/image';
// import profilepic from '../public/assets/profilepic.jpg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
                    About
                </p>
                <h2 className='py-4'>
                    Who I Am
                </h2>
                <p className='py-2 text-gray-600'>
                    I started my coding journey in my first year of University, when
                    we were taught MatLab in one of our courses. As a chemical 
                    engineer, I never would have thought I would need much
                    coding knowledge. However, throughout my school and work experiences,
                    I found myself recreating legacy data processes through the use of code.
                </p>
                <p className='py-2 text-gray-600'>
                    My current interest is in full stack web development!
                </p>
                <p className='py-2 text-gray-600'>
                    One of my hobbies includes music production, so make sure to check it out!
                </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-200'>
                <Image className='rounded-lg box-Shadow-lg' src='/../public/assets/profilepic.jpg' alt="/" width='1125' height='1500' />
            </div>
        </div>
    </div>
  )
}

export default About