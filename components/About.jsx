import React from 'react'
import Image from 'next/image';
import profilepic from '../public/assets/profilepic.jpg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-2xl font-semibold tracking-widest mt-10 text-[#5651e5]'>
                    About
                </p>
                <p className='py-2 text-gray-600'>
                Hello, I'm Pirashan Ravikumaran, a tech enthusiast with a background in 
                Chemical Engineering. I embarked on a journey to switch industries and pursue my passion 
                for tech, having been exposed to the possibilities of software through my various co-op 
                terms. Over the past year, I've been diligently self-studying computer science, 
                with a focus on full stack development.
                </p>
                <p className='py-2 text-gray-600'>
                    My current interest is in full stack web development!
                </p>
            </div>
            <div className='w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4'>
                
                <Image className='rounded-lg box-Shadow-lg' src={profilepic} alt="/" width='1125' height='1500' placeholder="blur"/>
            </div>
        </div>
    </div>
  )
}

export default About