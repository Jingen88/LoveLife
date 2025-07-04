'use client'
import React from 'react'
import Image from 'next/image'
import gsap from 'gsap'

const Hero = () => {
  return (
    <>
    <section id='hero' className='noisy'>
    <div className=' relative z-15 flex flex-col items-center justify-center h-screen text-center'>
    <Image src='/logo.png' alt='logo' width={900} height={800}/>
    </div>
    <Image src='/images/green.png' alt='ice cream' width={100} height={100} className='absolute z-15'/>
    <Image src='/images/choco.png' alt='ice cream' width={100} height={100} className='absolute z-13'/>
    <Image src='/images/lemon.png' alt='ice cream' width={100} height={100} className='absolute z-14'/>
    <Image src='/images/pink.png' alt='ice cream' width={100} height={100} className='absolute z-17'/>
    <Image src='/images/vanilla.png' alt='ice cream' width={100} height={100} className='absolute z-18'/>



    </section>
    </>
  )
}

export default Hero