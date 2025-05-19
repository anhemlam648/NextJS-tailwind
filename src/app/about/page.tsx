/* About Page.tsx */
'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import Image from '../../../public/image/Me.jpg'; 
import Cer1 from '../../../public/image/GitHub Professional Certificate.jpg'; 
import Cer2 from '../../../public/image/Project Management and Collaboration.jpg';
import Cer3 from '../../../public/image/Java Foundations Professional Certificate by JetBrains.jpg';
import Cer4 from '../../../public/image/Java Basic.jpg';
import Cer5 from '../../../public/image/SQL Basic.jpg';
import Cer6 from '../../../public/image/JavaScript Basic.jpg';  

export default function About() {
  useEffect(() => {
    gsap.fromTo(
      '.fade-in',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
    );
  }, []);

  return (
        <div className="min-h-screen bg-black text-green-200 font-mono flex flex-col items-center px-6 py-16 mt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-xl rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10 mb-16 fade-in">
          {/* Avatar */}
          <div className="md:w-1/3 flex justify-center">
            <img
              src={Image.src}
              alt="Avatar"
              className="w-80 h-80 object-cover rounded-full border-4 border-yellow-400 shadow-lg"
            />
          </div>
          {/* Info */}
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-5xl font-bold text-yellow-400 mb-4">Hello!</h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              I am <strong>Vu Trung Nghia</strong>. I always strive to improve myself through official courses and certificates from reputable platforms.
            </p>
            <p className="italic text-yellow-500 font-semibold">"Never stop learning – Never stop improving."</p>
          </div>
        </div>
        {/* Certification */}
        <div className="fade-in">
          <h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center mt-10">📜 Certification & Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[Cer1, Cer2, Cer3, Cer4, Cer5, Cer6].map((cert, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-b from-gray-700 to-gray-900 rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center"
              >
                <img
                  src={cert.src}
                  alt={`Certificate ${idx + 1}`}
                  className="w-full h-64 object-contain mb-4 rounded-lg shadow-md"
                />
                <p className="text-center text-green-300 font-medium text-xl">Certification {idx + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
