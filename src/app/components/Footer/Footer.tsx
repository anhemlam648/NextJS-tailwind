import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
//import Image from /''/
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white mt-10">
        <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Contact */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <p className="flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-white" /> 0357708256
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-white" /> vunghia467@gmail.com
          </p>
        </div>

        {/* Image */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <img
              src=""
              alt="Logo"
              width={50}
              height={50}
              className="w-16 h-16 object-contain"
            />
          </div>
        </div>
        {/* Social */}
        <div className="flex flex-col items-center md:items-end">
          <h2 className="text-xl font-bold mb-4">Kết nối</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-300 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-300 transition">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-blue-300 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/30 mt-6">
        <p className="text-center text-sm py-4 text-white/70">
          © 2025 Vu Trung Nghia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
