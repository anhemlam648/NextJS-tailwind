'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import Image from '../../../public/image/be-your-gif-maker.gif';

const Profile = () => {
  useEffect(() => {
    gsap.fromTo(
      '.box',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        <div className="bg-white rounded-2xl shadow-xl p-8 box text-center md:text-left">
          <div className="flex justify-center md:justify-start mb-6">
            <img
              src={Image.src}
              alt="Avatar"
              className="w-40 h-40 rounded-full border-4 border-yellow-500 shadow-lg"
            />
          </div>
          <h1 className="text-3xl font-bold text-yellow-600">Vu Trung Nghia</h1>
          <p className="text-gray-700 text-sm mb-2">vunghia467@gmail.com</p>
          <p className="text-gray-800 text-base leading-relaxed">
            👋 Hi! I'm a developer passionate about crafting clean and user-friendly digital experiences. 
            Skilled in both frontend and backend technologies with a focus on performance and design.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 box">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">🛠️ Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              'Java', 'JavaScript', 'Spring Boot', 'Next.js',
              'React', 'Tailwind CSS', 'Node.js', 'MongoDB',
              'Git & GitHub', 'REST API', 'Figma'
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-yellow-100 text-yellow-800 font-medium p-3 rounded-lg text-center shadow hover:bg-yellow-200 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Contact */}
      <div className="mt-12 text-center box">
        <h3 className="text-xl text-gray-800 font-semibold mb-4">📬 Send Email</h3>
        <a
          href="mailto:vunghia467@gmail.com"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full transition">
          Send
        </a>
      </div>
    </div>
  );
};

export default Profile;
