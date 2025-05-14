import Link from 'next/link';
import Logo from '../../../../public/image/Black and Gold Logo.png'; // Import logo image

export default function Header() {
  return (
    <header className="bg-yellow-400 shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Logo.src}
            alt="Logo"
            className="w-10 h-10 rounded-full mr-2"
          />
        </div>

        {/* Navigation Links */}
        <nav className="space-x-4">
          <Link href="/" className="text-black hover:text-white transition">Home</Link>
          <Link href="/about" className="text-black hover:text-white transition">About</Link>
          <Link href="/services" className="text-black hover:text-white transition">Services</Link>
          <Link href="/portfolio" className="text-black hover:text-white transition">Portfolio</Link>
          <Link href="/contact" className="text-black hover:text-white transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
