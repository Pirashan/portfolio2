import Head from 'next/head'
import React from 'react'
import MusicNavbar from '../components/MusicNavbar'


export default function Music() {
    return (
      <div>
        <Head>
          <title>Pira's Music Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

      <MusicNavbar />

      <div className='flex text-xl h-screen w-full items-center justify-center'>
        <p>COMING SOON</p>
      </div>

      {/* MusicHero */}

      {/* Youtube */}

      {/* Spotify */}
      </div>
    )
  }
  