'use client'

import React, { useRef } from 'react'
// Update the import path if necessary, or create the file if missing
import { navLinks } from '@/constants/index.js'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { CartButton } from '../components/Buttons'

const Navbar = () => {
  const navRef = useRef(null); // Create a ref for the nav element

  // GSAP animation for the navbar on scroll
  useGSAP(() => {
    // It's better practice to target the ref
    gsap.fromTo(
      navRef.current,
      { backgroundColor: 'rgba(255, 117, 0, 0.1)', backdropFilter: 'blur(0px)' },
      {
        backgroundColor: 'rgba(255, 117, 0, 0.6)',
        backdropFilter: 'blur(10px)',
        duration: 1,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: navRef.current,
          start: 'bottom top',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, { scope: navRef }); // Scope the animation to the nav element

  return (
    // Add the ref to the nav element
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50">
      <div className="flex flex-row items-center justify-between px-3">
        <a href="#home">
          <Image src="/logo.png" alt="logo" width={200} height={200} />
        </a>

        <ul className='flex items-center gap-12 text-lg font-semibold text-black rubik-dirt'>
          {navLinks.map((link) => (
            // Key should be on the outermost element in the loop
            <li key={link.id}>
              {/* Apply hover effects and transitions to the link itself */}
              <a
                href={`#${link.id}`} // Correct href syntax
                className='transition-all duration-300 ease-in-out hover:text-[#d85458] hover:scale-110 hover:text-shadow-sprinkles inline-block'
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <CartButton />
      </div>
    </nav>
  )
}

export default Navbar