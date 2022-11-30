import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AppleRedesign from '../public/assets/AppleRedesign.png'

const ProjectItem = ({title, backgroundImg, projectUrl}) => {
  return (
    <div className='grid grid-cols-1 gap-8'>
      <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
            <Image className='rounded-xl group-hover:opacity-10' src={AppleRedesign} alt='/' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>Apple Website Redesign</h3>
                <p className='pb-4 pt-2 text-white text-center'>Next JS</p>
                <a href="https://appleredesign-vu8t.vercel.app/" rel="noopener">
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:bg-gray-600 hover:text-white'>More Info</p>
                </a>
            </div>
        </div>
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
            <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>Spotify 2.0</h3>
                <p className='pb-4 pt-2 text-white text-center'>React JS</p>
                <Link href={projectUrl}>
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:bg-gray-600 hover:text-white'>More Info</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ProjectItem