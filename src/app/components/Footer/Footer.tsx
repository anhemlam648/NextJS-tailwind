'use client';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Image from '../../../../public/image/ca262e0354eea311c41134c3e4bc3bc2.gif';
import gsap from 'gsap';
import { useEffect } from 'react';
export default function Footer() {
    useEffect(() => {
      gsap.fromTo(
        '.box', 
        { scale: 0.5, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 1, ease: 'bounce.out' }
      );
    }, []);
  return (
    <footer className="bg-yellow-400 text-black">
      <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Contact */}
       
        <div>
          <h2 className="text-xl font-bold mb-4 text-black selectable">Contact</h2>
          <p className="flex items-center gap-2 mb-2 text-black font-bold selectable">
            <FaPhoneAlt className="text-black" /> 0357708256
          </p>
          <p className="flex items-center gap-2 text-black font-bold selectable">
            <FaEnvelope className="text-black" /> vunghia467@gmail.com
          </p>
        </div>

        {/* Image */}
      
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <img
              src={Image.src}
              alt="Logo"
              className="w-550 h-24 object-contain"
            />
          </div>
        </div>

        {/* Social */}
        
        <div className="flex flex-col items-center md:items-end">
          <h2 className="text-xl font-bold text-center mb-4">Connection</h2>
          <div className="flex justify-center md:justify-end space-x-6">
            <a href="https://web.facebook.com/vu.nghia.18062" className="text-xl hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="https://github.com/anhemlam648" className="text-xl hover:text-white transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/v%C5%A9-ngh%C4%A9a-9277bb350/" className="text-xl hover:text-white transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-black/30 mt-6">
        <p className="text-center text-sm py-4 text-black/70 font-bold">
          © 2025 Vu Trung Nghia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
