import React from 'react';
import { Mail, Phone, Linkedin, MapPin, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-pink-200 opacity-80"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4 animate-fade-in">
              Nahala Mariyam P
            </h1>
            <h2 className="text-2xl md:text-3xl text-pink-600 font-semibold mb-6 animate-fade-in-delay-1">
              UI/UX Designer & Junior Coder
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-2">
              Passionate about user-centered design and web development. I combine creativity with 
              technology to craft meaningful digital experiences that delight users and drive results.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in-delay-3">
            <a
              href="mailto:nahalamariyam916@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-gray-700 hover:text-pink-600"
            >
              <Mail size={18} />
              <span className="font-medium">nahalamariyam916@gmail.com</span>
            </a>
            
            <a
              href="tel:+919037422631"
              className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-gray-700 hover:text-pink-600"
            >
              <Phone size={18} />
              <span className="font-medium">+91 90374 22631</span>
            </a>
            
            <a
              href="https://www.linkedin.com/in/nahala-mariyam-p-346a82323"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-gray-700 hover:text-pink-600"
            >
              <Linkedin size={18} />
              <span className="font-medium">LinkedIn</span>
            </a>
            
            <div className="flex items-center gap-2 px-6 py-3 bg-pink-100 rounded-full shadow-lg text-pink-700">
              <MapPin size={18} />
              <span className="font-medium">Kozhikode, Kerala</span>
            </div>
          </div>

          <button
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 px-8 py-4 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-delay-4"
          >
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown size={18} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;