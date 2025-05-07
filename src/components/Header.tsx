
import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      {/* Top bar with trust badges */}
      <div className="bg-soft-blue py-2 text-xs md:text-sm text-center font-medium">
        <div className="container mx-auto flex flex-wrap justify-center md:justify-between">
          <div className="px-2">Free UK Shipping on Orders Over £40</div>
          <div className="hidden md:flex items-center space-x-6">
            <span>Handcrafted in the UK</span>
            <span>Personalised with Love</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold font-playfair">Engraved Gifting Joy</h1>
          </Link>

          {/* Navigation - hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-primary font-medium">
                Shop <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md p-4 w-48 z-50">
                <Link to="/shop/for-her" className="block py-2 hover:text-primary">For Her</Link>
                <Link to="/shop/for-him" className="block py-2 hover:text-primary">For Him</Link>
                <Link to="/shop/for-baby" className="block py-2 hover:text-primary">For Baby</Link>
                <Link to="/shop/occasions" className="block py-2 hover:text-primary">Occasions</Link>
              </div>
            </div>
            <Link to="/personalise" className="text-gray-700 hover:text-primary font-medium">Personalise</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium">About</Link>
            <Link to="/wholesale" className="text-gray-700 hover:text-primary font-medium">Wholesale</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">Contact</Link>
          </nav>

          {/* Right section with icons */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center">
              <span className="mr-1">GBP</span>
              <ChevronDown size={16} />
            </div>
            <button aria-label="Search">
              <Search size={20} />
            </button>
            <Link to="/cart" className="relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-royal-blue text-white rounded-full flex items-center justify-center text-xs">
                0
              </span>
            </Link>
            <Button variant="outline" size="sm" className="hidden md:inline-flex">
              Log In
            </Button>
            
            {/* Mobile menu button - hidden on desktop */}
            <button className="md:hidden" aria-label="Menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
