'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';

const Profile = () => {
  useEffect(() => {
    gsap.fromTo(
      '.box',
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: 'bounce.out' }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="box bg-white text-black rounded-xl shadow-xl p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-4">
          <img
            src="https://www.w3schools.com/w3images/avatar2.png"
            alt="Avatar"
            className="w-32 h-32 rounded-full border-4 border-yellow-500 shadow"
          />
        </div>
        <h1 className="text-2xl font-bold mb-2">Vu Trung Nghia</h1>
        <p className="text-sm text-gray-700 mb-4">vunghia467@gmail.com</p>
        <p className="text-base text-gray-800">
          A passionate developer with experience in building web applications using modern frameworks and technologies.
        </p>
      </div>
    </div>
  );
};

export default Profile;
