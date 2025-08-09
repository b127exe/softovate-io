import React, { useState, useEffect } from "react";
import Logo from '@/assets/images/logo.png';
import Image from "next/image";

export const Header = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['Projects', 'Services', 'About', 'Contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial render

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'Projects', label: 'Projects' },
    { id: 'Services', label: 'Services' },
    { id: 'About', label: 'About' },
    { id: 'Contact', label: 'Contact' }
  ];

  const getNavItemClasses = (itemId: string, isCta = false) => {
    const baseClasses = "nav-item flex items-center justify-center px-4 py-2 rounded-full transition-colors duration-200";
    
    if (activeSection === itemId) {
      return `${baseClasses} bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900`;
    }
    
    if (isCta) {
      return `${baseClasses} bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900`;
    }
    
    return `${baseClasses} text-white hover:bg-white/10`;
  };

  return (
    <div className="flex justify-center items-center fixed top-4 w-full z-50">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <div className="nav-item flex items-center justify-center px-2">
          <Image 
            src={Logo}
            alt="Logo"
            width={24}
            height={24}
            className="h-7 w-auto"
          />
        </div>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={getNavItemClasses(item.id, item.isCta)}
            onClick={() => setActiveSection(item.id)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};