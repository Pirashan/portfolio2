import React from 'react';
import Link from 'next/link';
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const Hero = () => {
  return (
    <div id='hero' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>
                    LET'S BUILD SOMETHING TOGETHER
                </p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I'm <span className='text-[#5651e5]'>Pira</span>
                </h1>
                <h1 className='py-4 text-gray-700'>
                    An Aspiring Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I'm a front-end web developer specializing in building exceptional
                    digital experiences. Currently, I'm focused on building responsive
                    front-end web applications while learning back-end technologies.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>

                    <a
                    href='https://www.linkedin.com/in/pirashan-ravikumaran/'
                    target='_blank'
                    rel='noreferrer'
                    >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                        <FaLinkedinIn />
                    </div>
                    </a>

                    <a
                    href='https://github.com/Pirashan'
                    target='_blank'
                    rel='noreferrer'
                    >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                        <FaGithub />
                    </div>
                    </a>

                    <Link href='/#contact'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                        <AiOutlineMail />
                        </div>
                    </Link>

                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                        <BsFillPersonLinesFill />
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero