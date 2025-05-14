// pages/index.tsx
import Link from 'next/link';
import IntroImage from '../../public/image/Black and Gold Logo.png'; // Thay bằng ảnh thật bạn có

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start max-w-5xl w-full">
        
        {/* Left: Introduction */}
        <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to My Website</h1>
          <p className="text-lg text-gray-700 mb-6">
            Hi, I'm Nghia. I create modern and responsive web applications using Next.js and Tailwind CSS.
          </p>
        </div>

        {/* Right: Image */}
        {/* Thay bằng ảnh thật bạn có */}
       <div className="md:w-1/2 flex justify-center">
          <img
            src={IntroImage.src} // Sử dụng .src khi dùng img tag trong Next.js
            alt="Intro"
            className="w-64 h-64 object-cover rounded-full shadow-lg transition transform hover:animate-bubble border-4 border-yellow-400" // Thêm viền vàng
          />
        </div>
      </div>
    </div>
  );
}
