import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import appleredesignImg from '../public/assets/AppleRedesign.png'
import spotifyImg from '../public/assets/spotifybuild.JPG'

const Projects = () => {
  return (
    <div id='projects' className='w-full justify-center'>
        <div className='max-w-[1240px] mx-auto px-2 py-16 content-center'>
        <p className='text-xl tracking-widest mt-10 uppercase text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What I&#39;ve Built</h2>
        
        <div className='grid sm:grid-cols-1 gap-8 lg:grid-cols-2 '>
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
            <Image className='rounded-xl group-hover:opacity-10' src={appleredesignImg} alt='/' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>Apple Website Redesign</h3>
                <p className='pb-4 pt-2 text-white text-center'>Next JS</p>
                <a href="https://appleredesign-vu8t.vercel.app/" rel="noopener">
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:bg-gray-600 hover:text-white'>More Info</p>
                </a>
            </div>
        </div>
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
            <Image className='rounded-xl group-hover:opacity-10' src={spotifyImg} alt='/' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>Spotify 2.0</h3>
                <p className='pb-4 pt-2 text-white text-center'>React JS</p>
                <Link href="">
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:bg-gray-600 hover:text-white'>More Info</p>
                </Link>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Projects