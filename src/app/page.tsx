// pages/index.tsx
// Add the "use client" directive at the top
'use client';
import Link from 'next/link';
import IntroImage from '../../public/image/Black and Gold Logo.png';
import { useEffect } from 'react';
import gsap from 'gsap';

export default function Home() {
  {/*
  useEffect(() => {
    // use GSAP to animate the elements
    // This will animate the elements with the class 'box' when the component mounts
    gsap.fromTo(
      '.box',
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1 }
    );
  }, []);
  */}
  useEffect(() => {
    gsap.fromTo(
      '.box', 
      { scale: 0.5, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 1, ease: 'bounce.out' }
    );
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start max-w-5xl w-full">
 
        <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0 box">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to My Website</h1>
          <p className="text-lg text-gray-700 mb-6">
            Hi, I'm Nghia. I create modern and responsive web applications using Next.js and Tailwind CSS.
            <br />
            <Link href="/profile">
              <span className="text-yellow-400 hover:text-yellow-600 transition duration-300">
                Profile
              </span>
            </Link>
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center box">
          <img
            src={IntroImage.src} // Use the correct path to your image
            className="w-64 h-64 object-cover rounded-full shadow-lg transition transform hover:animate-bubble border-4 border-yellow-400" // Thêm viền vàng
          />
        </div>
      </div>
    </div>
  );
}
