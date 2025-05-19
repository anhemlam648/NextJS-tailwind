/*Profile Page*/

'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import Image from '../../../public/image/be-your-gif-maker.gif'; // Avatar Image

const Profile = () => {
  useEffect(() => {
    gsap.fromTo(
      '.box',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex flex-col items-center px-6 py-16 mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Profile Section */}
        <div className="bg-gradient-to-b from-zinc-900 via-neutral-800 to-black rounded-lg p-8 box text-center md:text-left">
          <div className="flex justify-center md:justify-start mb-6">
            <img
              src={Image.src}
              alt="Avatar"
              className="w-40 h-40 rounded-full border-4 border-yellow-500 shadow-lg"
            />
          </div>
          <h1 className="text-3xl font-bold text-green-400 drop-shadow-lg">Vu Trung Nghia</h1>
          <p className="text-green-300 text-sm mb-2">vunghia467@gmail.com</p>
          <p className="text-green-300 text-base leading-relaxed">
            👋 Hi! I'm a developer passionate about crafting clean and user-friendly digital experiences. 
            Skilled in both frontend and backend technologies with a focus on performance and design.
          </p>
        </div>

        {/* Skills Section */}
        <div className="bg-gradient-to-b from-black via-yellow-900 to-yellow-600 rounded-lg p-8 box">
          <h2 className="text-2xl font-bold text-green-400 mb-6 text-center md:text-left">🛠️ Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              'Java', 'JavaScript', 'Spring Boot', 'Next.js',
              'React', 'Tailwind CSS', 'Node.js', 'MongoDB', 
              'MySQL', 'Git & GitHub', 'REST API', 'Figma'
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-gray-900 text-yellow-400 font-medium p-3 rounded-lg text-center shadow-lg hover:bg-yellow-600 hover:text-black transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section (Optional) */}
      {/* <div className="mt-16 flex justify-center">
        <div className="bg-black text-green-400 rounded-2xl shadow-xl p-8 max-w-md w-full box text-center">
          <h3 className="text-2xl font-semibold mb-6">📬 Send Email</h3>
          <a
            href="mailto:vunghia467@gmail.com"
            className="inline-block bg-yellow-400 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-full transition text-lg"
          >
            Send
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Profile;
