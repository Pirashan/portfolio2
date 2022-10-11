import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg-h:screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        {/* <h2 className='py-3 text-[#ecf0f3]'>Get In Touch</h2> */}
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                Contact
            </p>

            <div className='grid lg:grid-cols-5 gap-8'>
                {/* left*/}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image className='rounded-xl hover:scale-105 ease-in duration-200' src="" alt="/" />
                        </div>

                        <div>
                            <h2>Pirashan Ravikumaran</h2>
                            <p>Front-End Developer</p>
                            <p>I am available for full-time opportunities. Contact me and let's talk!</p>
                        </div>
                        <div>
                        <p className='uppercase pt-8'>Connect With Me</p>
                        <div className='flex items-center justify-between py-4'>
                            
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                        <FaLinkedinIn />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                        <FaGithub />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                        <AiOutlineMail />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150'>
                        <BsFillPersonLinesFill />
                        </div>

                        </div>
                    </div>
                    </div>

                </div>

{/* right */}
<div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
    <div className='p-4'>
        <form method='POST' action="https://getform.io/f/f02f1ba3-8204-4397-88df-0f1adbe2f65d" className='flex flex-col max-w-[600px] w-full'>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name' placeholder='Name' />
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='number' placeholder='Phone Number' />
                </div>
            </div>
            
            <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email' placeholder='Email'/>
            </div>
            <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Subject</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject' placeholder='Subject' />
            </div>
            <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' name='message' placeholder='Message'></textarea>
            </div>
            <div>
                <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
            </div>
        </form>
    </div>
</div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 animate-bounce'>
                        <HiOutlineChevronDoubleUp className='text-gray-700' size={30}/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact