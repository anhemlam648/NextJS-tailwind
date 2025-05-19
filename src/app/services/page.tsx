/*Service Page */
'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const services = [
  { title: 'Web Development', icon: '💻' },
  { title: 'UI/UX Design', icon: '🎨' },
  { title: 'SEO Optimization', icon: '🔍' },
  { title: 'Content Creation', icon: '✍️' },
  { title: 'Cloud Services', icon: '☁️' },
  { title: 'Data Analysis', icon: '📊' },
];

export default function ServicesPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, ease: 'power1.inOut' }); // Animation timeline 
    
    tl.to('.cards', {
      rotation: 360,
      transformOrigin: 'center center',
      duration: 10,
    });

    gsap.fromTo(
      '.cards',
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.3,
        ease: 'power2.out',
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black flex items-center justify-center p-10 px-6 py-16 mt-20 overflow-hidden">
      <div ref={containerRef} className="relative w-[240px] h-[240px] md:w-[15rem] md:h-[15rem] flex items-center justify-center">
        {/* Main Services */}
        <div className="absolute w-[85px] h-[85px] md:w-[5.3125rem] md:h-[5.3125rem] bg-yellow-500 rounded-full shadow-[0px_0px_15px_7px_rgba(255,215,0,0.7)]"></div>
        
        {services.map((service, index) => (
          <div
            key={index}
            className={`cards absolute w-[85px] h-[85px] md:w-[5.3125rem] md:h-[5.3125rem] bg-white-700 rounded-full flex flex-col items-center justify-center shadow-lg p-2 border border-yellow-400 hover:shadow-[0px_0px_10px_5px_rgba(255,215,0,0.7)] transition duration-300`}
            style={{
              transform: `rotate(${index * (360 / services.length)}deg) translate(120px) rotate(-${index * (360 / services.length)}deg)`,
            }}
          >
            <div className="text-[6px] md:text-sm">{service.icon}</div>
            <p className="text-[7px] md:text-[9px] text-center text-green-400 mt-[0px]">{service.title}</p>
            </div>
        ))}
      </div>
    </div>
  );
}
