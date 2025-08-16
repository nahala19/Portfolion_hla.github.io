import React from 'react';
import { Mail, Phone, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-pink-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Nahala Mariyam P</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              UI/UX Designer & Junior Coder passionate about creating meaningful digital experiences 
              that bridge creativity and functionality.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:nahalamariyam916@gmail.com"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-200"
              >
                <Mail size={18} />
              </a>
              <a
                href="tel:+919037422631"
                className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors duration-200"
              >
                <Phone size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/nahala-mariyam-p-346a82323"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '#about', label: 'About Me' },
                { href: '#projects', label: 'Projects' },
                { href: '#experience', label: 'Experience' },
                { href: '#skills', label: 'Skills' },
                { href: '#awards', label: 'Awards' },
                { href: '#contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>UI/UX Design</li>
              <li>Web Design</li>
              <li>Mobile App Design</li>
              <li>Prototyping</li>
              <li>User Research</li>
              <li>Frontend Development</li>
            </ul>
            
            <div className="mt-6 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <h5 className="font-semibold mb-2">Available for:</h5>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-pink-500/20 rounded-full text-xs">Freelance</span>
                <span className="px-2 py-1 bg-purple-500/20 rounded-full text-xs">Full-time</span>
                <span className="px-2 py-1 bg-blue-500/20 rounded-full text-xs">Collaboration</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-pink-600 rounded-full hover:bg-pink-700 transition-all duration-200 hover:scale-105"
            >
              <ArrowUp size={16} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;