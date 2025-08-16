import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-pink-50 to-purple-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Let's Build Something Amazing Together!
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Whether it's a design project, collaboration opportunity, 
              or just a friendly chat about design and technology, I'd love to hear from you.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-1 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  I'm always excited to discuss new opportunities, creative projects, and ways to create 
                  better user experiences. Let's connect and explore how we can work together!
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                    <Mail className="text-pink-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <a href="mailto:nahalamariyam916@gmail.com" className="text-pink-600 hover:text-pink-700">
                      nahalamariyam916@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Phone className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <a href="tel:+919037422631" className="text-purple-600 hover:text-purple-700">
                      +91 9037422631
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <MapPin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    <span className="text-gray-600">Kozhikode, Kerala, India</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Linkedin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/nahala-mariyam-p-346a82323" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-6 rounded-3xl text-white">
                <h4 className="font-bold text-lg mb-3">Why Work With Me?</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>User-centered design approach</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Technical understanding for feasible designs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Collaborative and communicative work style</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Commitment to quality and timely delivery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;