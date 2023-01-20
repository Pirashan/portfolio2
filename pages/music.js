import Head from 'next/head'
import React from 'react'
import MusicNavbar from '../components/MusicNavbar'
import { motion } from "framer-motion";
import YoutubeEmbed from '../components/YouTube';
import CountUp from 'react-countup';

export default function Music() {
    return (
      <div className='bg-[#444444] h-screen w-screen'>
        <Head>
          <title>Pira&#39;s Music Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

      <MusicNavbar />


      <motion.div
        initial={{
          y:20,
          opacity:0,
          scale:1
        }}
        animate={{
          y:0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        >

        <div className="flex items-center justify-center pt-30">
        <YoutubeEmbed embedId="AnLRBvqpnsE" />
        </div>
        <h1 className='flex items-center justify-center text-gray-300'>
          <CountUp end={3956186} />
          <span> &nbsp;views</span>
        </h1>
        
        </motion.div>

      {/* MusicHero */}
      {/* Youtube */}
      {/* Spotify */}
      </div>
    )
  }
  
  
