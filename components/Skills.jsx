import Image from 'next/image'
import React from 'react'
import html from '../public/assets/html.png'
import css from '../public/assets/css.png'
import javascript from '../public/assets/javascript.png'
import react from '../public/assets/react.png'
import tailwind from '../public/assets/tailwind.png'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest mt-20 uppercase text-[#5651e5]'>Skills</p>
            <h2 className='py-4'>What I&#39;ve Used</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

            <div className='p-6 shadow-xl rounded-xl mx-5 hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={html} width='64px' height='64px' alt='/'  />
                </div>
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>HTML</h3>
                    </div>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl mx-5 hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={css} width='64px' height='64px' alt='/'  />
                </div>
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>CSS</h3>
                    </div>
                </div>
            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl mx-5 hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={javascript} width='64px' height='64px' alt='/'  />
                </div>
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>JavaScript</h3>
                    </div>
                </div>
            </div>
            </div>
            
            <div className='p-6 shadow-xl rounded-xl mx-5 hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={react} width='64px' height='64px' alt='/'  />
                </div>
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>React</h3>
                    </div>
                </div>
            </div>
            </div>
            
            <div className='p-6 shadow-xl rounded-xl mx-5 hover:scale-105 ease-in duration-200'>
            <div className='grid grid-cols-2 gap-6 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={tailwind} width='64px' height='64px' alt='/'  />
                </div>
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Tailwind</h3>
                    </div>
                </div>
            </div>
            </div>
            </div>
            

        </div>
        
    </div>
  )
}

export default Skills