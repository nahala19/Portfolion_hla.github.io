import React from 'react';
import { Heart, Code, Palette, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I'm a passionate UI/UX designer and junior developer based in the beautiful city of 
                Kozhikode, Kerala. With a strong foundation in Computer Science and hands-on experience 
                in design, I bridge the gap between creative vision and technical implementation.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Currently working as a Jr. UI/UX Designer at Pro26, I specialize in creating 
                user-centered designs that not only look beautiful but also provide exceptional 
                user experiences. My coding background helps me understand the technical constraints 
                and possibilities, making my designs both innovative and feasible.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
                <Heart size={32} className="text-pink-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 mb-2">User-Centered</h4>
                <p className="text-sm text-gray-600">Designing with empathy and user needs at the core</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
                <Palette size={32} className="text-purple-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 mb-2">Creative Vision</h4>
                <p className="text-sm text-gray-600">Bringing innovative ideas to life through design</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
                <Code size={32} className="text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 mb-2">Technical Skills</h4>
                <p className="text-sm text-gray-600">Understanding code to create feasible designs</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
                <Users size={32} className="text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 mb-2">Collaboration</h4>
                <p className="text-sm text-gray-600">Working effectively with diverse teams</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;