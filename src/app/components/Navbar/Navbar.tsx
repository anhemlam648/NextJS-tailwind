import Link from 'next/link';
import Logo from '../../../../public/image/Black and Gold Logo.png'; // Import logo image
export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center"> 
            <img
                src= {Logo.src} // Use the imported logo image
                alt="Logo"
                className="w-10 h-10 rounded-full mr-2"
            />
        </div>
        
        {/* Centered Title 
          <div className="flex justify-center">
            <h1 className="text-2xl font-bold text-blue-600">Welcome</h1>
          </div>
        */}
        {/* Navigation Links */}
        <nav className="space-x-4">
          <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-500">About</Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-500">Services</Link>
          <Link href="/portfolio" className="text-gray-700 hover:text-blue-500">Portfolio</Link>
          <Link href="/blog" className="text-gray-700 hover:text-blue-500">Blog</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
