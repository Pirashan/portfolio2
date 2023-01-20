import React from 'react';
import Link from 'next/link';
import {AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Cursor, useTypewriter} from 'react-simple-typewriter';

const Hero = () => {
        const [text, helper] = useTypewriter({
          words: [' Pira', ' in-Love-with-Coffee.jsx', ' <OpenToWork />', ' Pira'],
          loop:1,
          typeSpeed:50,
          deleteSpeed: 45,
          delaySpeed: 2500
        })
        const { isType, isDelete, isDelay, isDone } = helper
        
  return (
    <div id='hero' className='w-full h-screen text-center'>
        
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase mt-10 text-sm tracking-widest text-gray-600'>
                    LET&#39;S BUILD SOMETHING TOGETHER
                </p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I&#39;m 
                    <span className='text-[#5651e5]'>                   
                        {text}                    
                    <span className='tracking-widest text-gray-600'>
                        <Cursor/>
                    </span>
                    </span>
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I&#39;m a full stack web developer specializing in building exceptional
                    digital experiences. Currently, I&#39;m focused on building responsive
                    front-end web applications while learning back-end technologies.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>

                    <Link
                    href='https://www.linkedin.com/in/pirashan-ravikumaran/'
                    target='_blank'
                    rel='noreferrer'
                    >
                    <a target="_blank">
                    <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-150'>
                        <FaLinkedinIn className='h-4.5 w-4.5'/>
                    </div>
                    </a>
                    </Link>

                    <Link
                    href='https://github.com/Pirashan'
                    target='_blank'
                    rel='noreferrer'
                    >
                    <a target="_blank"> 
                    <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-150'>
                        <FaGithub className='h-4 w-4'/>
                    </div>
                    </a>
                    </Link>

                    <Link href='/#contact'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-150'>
                        <AiOutlineMail className='h-4 w-4'/>
                        </div>
                    </Link>

                    <Link href="https://drive.google.com/file/d/1sRKQJn5VjAUxhCwygr0oqqpKFR6O__jc/view?usp=sharing">
                    <a target="_blank">
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-150'>  
                        <BsFillPersonLinesFill className='h-4 w-4'/>
                        </div>
                    </a>
                    </Link>


                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero