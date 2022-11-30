import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {useRouter} from 'next/router'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#444444');
    const [linkColor, setLinkColor] = useState('#1f2937');
    const router=useRouter()

    useEffect (()=>{
       if (
           router.asPath === '/property'
        //    router.asPath === '/property' ||
       ) {
        setNavBg('transparent')
        setLinkColor('#ecf0f3')
       } else{
        setNavBg('#444444')
        setLinkColor('#1f2937')
       }
    },[router])

    const handleNav = () => {
        setNav(!nav);
      };

      useEffect(() => {
        const handleShadow = () => {
          if (window.scrollY >= 90) {
            setShadow(true);
          } else {
            setShadow(false);
          }
        };
        window.addEventListener('scroll', handleShadow);
      }, []);

  return (
    <div 
    style={{backgroundColor: `${navBg}`}}
    className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100] xl:items-center'}>

      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-32'>
        <motion.div
        initial={{
          x:-500,
          opacity:0,
          scale:0.5
        }}
        animate={{
          x:0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        >
          <Link href="/">
                <h1 className="whitelink text-gray-300 ml-5 cursor-pointer hover:scale-105 text-3xl font-cd-medium md:text-3xl  lg:text-2xl text-white">
                  PIRA
                </h1>
          </Link>
        </motion.div>

        <motion.div
        initial={{
          x:500,
          opacity:0,
          scale:0.5
        }}
        animate={{
          x:0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className='flex flex-row items-center'>
          <Link href='/'>
            <p className='text-md uppercase text-gray-300 opacity-75 transition hover:opacity-100 hover:cursor-pointer'>Home</p>
          </Link>
          <SocialIcon
          className='opacity-75 transition hover:opacity-100'
          url="https://www.instagram.com/pirashanravi/"
          fgColor="#E0E0E0"
          bgColor="transparent"
          target="_blank"
          />
          <SocialIcon 
          className='opacity-75 transition hover:opacity-100'
          url="https://www.youtube.com/DJPira"
          fgColor="#E0E0E0"
          bgColor="transparent"
          target="_blank"
          />
          <SocialIcon 
          className='opacity-75 transition hover:opacity-100'
          url="https://open.spotify.com/artist/3yqGEeh3ghPCYipJgqrfM5?si=ZttXbNjnTTKsX3_9qMSNVA"
          fgColor="#E0E0E0"
          bgColor="transparent"
          target="_blank"
          />
          <SocialIcon 
          className='opacity-75 transition hover:opacity-100'
          url="https://music.apple.com/us/artist/pira/1482460736"
          fgColor="#E0E0E0"
          bgColor="transparent"
          target="_blank"
          />
        </motion.div>
    </div>   

      {/* Mobile Menu */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>

            <Link href="/">
              <h1 onClick={() => setNav(false)} className="cursor-pointer hover:scale-110 text-4xl font-cd-medium md:text-xl  lg:text-xl  dark:text-white">
                PIRA
              </h1>
            </Link>

              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let&#39;s connect!
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
              <Link href="https://drive.google.com/file/d/1sRKQJn5VjAUxhCwygr0oqqpKFR6O__jc/view?usp=sharing">
                <a target="_blank">
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>
                    Resume
                  </li>
                </a>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-10'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/pirashan-ravikumaran/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/Pirashan'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar