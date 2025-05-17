// Project: my-nextjs-project
'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

export default function Home() {
  const myprofile = [
    {
      title: 'Vu Trung Nghia',
      description:
        'I am a Web Developer with a passion for creating beautiful and functional web applications.',
    },
    {
      title: '🚶 My Journey',
      content:
        'I started learning in 2022. Step by step, I overcame challenges to become a self-taught developer.',
      bg: 'bg-gradient-to-b from-zinc-900 via-neutral-800 to-black',
    },
    {
      title: '🚀 My Goal',
      content:
        'To become a Fullstack Developer and build impactful platforms that benefit the community.',
      bg: 'bg-gradient-to-b from-black via-yellow-900 to-yellow-600',
    },
  ];

  {/*}
    useEffect(() => {
    gsap.fromTo(
      '.box',
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1 }
    );
  }, []);
  */}

  useEffect(() => {
    gsap.set('.fade-in', { opacity: 1, y: 40 });
    gsap.to('.fade-in', {
      y: 0,
      duration: 1.5, 
      stagger: 0.2,  
      ease: 'power4.out', 
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex flex-col items-center px-4 mt-20 overflow-hidden">
      {/* main */}
      
      <div className="w-full max-w-7xl overflow-hidden mt-20">
        {myprofile.map((profile, index) => (
          <div
            key={index}
            className={`fade-in p-8 rounded-lg shadow-lg mb-10 ${
              profile.bg || 'bg-gray-900'
            } transition-opacity duration-500`}
          >
            <h2 className="text-2xl font-bold text-green-400 drop-shadow-lg">
              {profile.title}
            </h2>
            <p className="text-green-300 mt-4">
              {profile.content || profile.description}
            </p>
          </div>
        ))}
      </div>
      
      {/* Action */}
      <div className="mt-10 text-center mb-5 fade-in">
        <p className="text-lg text-green-200">Want to know more?</p>
        <Link href="/profile">
          <span className="text-yellow-400 hover:text-yellow-600 transition duration-300 underline cursor-pointer">
            Profile
          </span>
        </Link>
      </div>
    </div>
  );
}
