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
                Hello, I&#39;m Pirashan Ravikumaran, a tech enthusiast with a background in 
                Chemical Engineering. I embarked on a journey to switch industries and pursue my passion 
                for tech, having been exposed to the possibilities of software through my various internships. 
                Coming from a background in industries such as manufacturing, I have seen the legacy processes
                still in place, and have in turn seen the opportunity for growth through the use of technology. 
                Over the past year, I&#39;ve been diligently self-studying computer science concepts, 
                with a focus on full stack development. Other interests of mine include product management and 
                data science!
                </p>
                <p className='py-2 text-gray-600'>
                The various frameworks and languages I&#39;ve worked with are best showcased through 
                the projects listed in my portfolio below. 
                I&#39;ve also pursued formal education in computer science, having completed courses 
                in Data Structures and Algorithms as well as Computational Thinking, while currently 
                progressing through a foundational C# course provided by Microsoft.
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