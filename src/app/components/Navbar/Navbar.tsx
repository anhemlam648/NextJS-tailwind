'use client';
import Link from 'next/link';
import Logo from '../../../../public/image/Black and Gold Logo.png';
import '../../Style/Navbar.css';
import { useEffect, useState } from 'react';
import gsap from 'gsap';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  {/* Text color state for the logo 
  const [textColor, setTextColor] = useState({
      title: 'GOLDEN',
      color: 'text-gray-800'
    });
  */}

  {/* Change text color every 5 seconds 
  useEffect(() => {
    const timer = setTimeout(() => {
      setTextColor(
        (prev) => ({
          ...prev,
          color: prev.color === 'text-gray-800' ? 'text-yellow-600' : 'text-gray-800'
        })
      );
    }, 5000, textColor);
      return () => clearTimeout(timer)
  }, []);
  */}
  useEffect(() => {
    gsap.fromTo(
      '.header-logo',
      { scale: 0, opacity: 0, rotate: -30 },
      { scale: 1, opacity: 1, rotate: 0, duration: 1.5, ease: 'elastic.out(1, 0.6)' }
    );
    {/* Animation
    gsap.fromTo(
      '.nav-link',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, delay: 1 }
    );
    */}
  }, []);

  const LINKS = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT' },
    { href: '/service', label: 'SERVICE' },
    { href: '/portfolio', label: 'PORTFOLIO' },
    { href: '/contact', label: 'CONTACT' },
  ];

  return (
    <>
      {/* Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
          ::selection {
            background: #facc15; /* amber-400 */
            color: black;
          }
        `}
      </style>

      <header className="fixed top-0 left-0 right-0 z-50 bg-yellow-400 shadow-lg border-b border-yellow-600">
        <div className="container mx-auto flex justify-between items-center px-6 md:px-12 py-4 font-montserrat">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={Logo.src}
              alt="Logo"
              className="header-logo w-14 h-14 rounded-full shadow-[0_0_10px_#fcd34d]"
              style={{ filter: 'drop-shadow(0 0 6px #fcd34d)' }}
              draggable={false}
            />
             <span className={` text-2xl font-extrabold tracking-widest select-none drop-shadow-[0_0_4px_rgba(0,0,0,0.75)]`}>
                GOLDEN
              </span>
          </div>

          {/* Desktop Navigation */}
         <nav className="hidden md:flex space-x-10 uppercase text-sm tracking-wider select-none">
          {LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="nav-link relative text-gray-800 hover:text-white transition-colors duration-300 font-semibold"
            >
              {label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 nav-link-underline"></span>
              <style>{`
                  .nav-link:hover span {
                    width: 100%;
                  }
              `}</style>
            </Link>
          ))}
        </nav>

          {/* Mobile menu toggle */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md focus:ring-2 focus:ring-yellow-600 focus:outline-none text-gray-800"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}     
        {menuOpen && (
          <nav className="md:hidden bg-yellow-400 shadow-lg border-t border-yellow-600">
            <div className="flex flex-col items-center py-4">
              {LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="nav-link text-gray-800 hover:text-yellow-600 transition-colors duration-300 font-semibold py-2"
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        )}  
      </header>
    </>
  );
}
      
 