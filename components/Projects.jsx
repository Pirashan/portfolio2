import Image from 'next/image';
import React from 'react';
import spotifyImg from '../public/assets/spotifybuild.JPG'
import gymImg from '../public/assets/gymapp.jpeg'
import TodoImg from '../public/assets/Todo.jpeg'
import crcImg from '../public/assets/crcgreenproject.png'
import appleredesignImg from '../public/assets/appleredesign.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full justify-center'>
        <div className='max-w-[1240px] mx-auto px-2 py-16 content-center'>
        <p className='text-2xl font-semibold tracking-widest mt-10 uppercase text-[#5651e5]'>Projects</p>
        
        <div className='grid sm:grid-cols-1 gap-8 lg:grid-cols-2 '>
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
            <Image className='rounded-xl group-hover:opacity-10' src={crcImg} alt='/' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>NPO CRC Green</h3>
                <p className='pb-4 pt-2 text-white text-center'>Next.js, TypeScript, Tailwind CSS</p>
                <a href="https://crcgreen.com" rel="noopener">
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:bg-gray-600 hover:text-white'>More Info</p>
                </a>
            </div>
        </div>
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
            <Image className='rounded-xl group-hover:opacity-10' src={appleredesignImg} alt='/' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>Apple Website Redesign</h3>
                <p className='pb-4 pt-2 text-white text-center'>Next.js, TypeScript, Redux, Tailwind CSS, Sanity CMS, Stripe, Google OAuth</p>
                <a href="https://appleredesign-vu8t.vercel.app/" rel="noopener">
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:bg-gray-600 hover:text-white'>More Info</p>
                </a>
            </div>
        </div>
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
            <Image className='rounded-xl group-hover:opacity-10' src={spotifyImg} alt='/' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>Spotify 2.0</h3>
                <p className='pb-4 pt-2 text-white text-center'>Next.js, Spotify API</p>
                <a href="https://spotify-pirashan.vercel.app/login" rel="noopener">
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:bg-gray-600 hover:text-white'>More Info</p>
                </a>
            </div>
        </div>
        {/* <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
            <Image className='rounded-xl group-hover:opacity-10' src={gymImg} alt='/' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>Gym Web App</h3>
                <p className='pb-4 pt-2 text-white text-center'>React JS</p>
                <a href="https://gymapp-35i.pages.dev/" rel="noopener">
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:bg-gray-600 hover:text-white'>More Info</p>
                </a>
            </div>
        </div> */}
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
            <Image className='rounded-xl group-hover:opacity-10' src={TodoImg} alt='/' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>Todo App</h3>
                <p className='pb-4 pt-2 text-white text-center'>Next.js, GPT-4 API, Zustand, Appwrite</p>
                <a href="https://todo-puce-one.vercel.app/" rel="noopener">
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:bg-gray-600 hover:text-white'>More Info</p>
                </a>
            </div>
        </div>

        </div>
        </div>
    </div>
  )
}

export default Projects