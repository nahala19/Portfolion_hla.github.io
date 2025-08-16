import React from 'react';
import { Building, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Jr. UI/UX Designer',
      organization: 'Pro26',
      location: 'Kozhikode, Kerala',
      period: 'May 2025 – Present',
      description: 'Leading UI/UX design projects, conducting user research, creating wireframes and prototypes, and collaborating with development teams to deliver exceptional user experiences.',
      achievements: [
        'Designed user interfaces for 5+ web applications',
        'Improved user engagement by 30% through redesign initiatives',
        'Conducted usability testing and user interviews'
      ]
    }
  ];

  const education = [
    {
      type: 'education',
      title: 'BSc Computer Science',
      organization: 'University/College Name',
      location: 'Kerala, India',
      period: '2021 – 2024',
      description: 'Comprehensive study of computer science fundamentals including programming, data structures, algorithms, and software engineering principles.',
      achievements: [
        'Specialized in Human-Computer Interaction',
        'Completed projects in web development and mobile apps',
        'Active member of coding and design clubs'
      ]
    },
    {
      type: 'education',
      title: 'Diploma in Computerised Software Package (DCSP)',
      organization: 'Technical Institute',
      location: 'Kerala, India',
      period: '3 month',
      description: 'Focused on Computer basic, Microsoft Windows, Microsoft Office .',
      achievements: [
        'Top 10% of the class',
        'Led team projects in Desiging',
        'Received excellence award'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Prompt Engineering Certification',
      issuer: 'Dubai',
      date: '2025',
      description: 'Advanced training in AI prompt engineering and optimization techniques.'
    },
    {
      title: 'Web Development Frontend Certification',
      issuer: 'Development Institute',
      date: '2023',
      description: 'Comprehensive frontend development training covering HTML, CSS, JavaScript, and modern frameworks.'
    },
  ];

  const allItems = [...experiences, ...education];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Experience & Education
          </h2>
          
          {/* Experience & Education Timeline */}
          <div className="mb-20">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-pink-200"></div>
              
              <div className="space-y-12">
                {allItems.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute left-6 w-4 h-4 bg-pink-600 rounded-full border-4 border-white shadow-lg"></div>
                    
                    <div className="ml-20 bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-1">{item.title}</h3>
                          <div className="flex items-center gap-2 text-pink-600 font-semibold mb-2">
                            {item.type === 'work' ? <Building size={16} /> : <GraduationCap size={16} />}
                            <span>{item.organization}</span>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{item.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              <span>{item.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Certifications
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <h4 className="font-bold text-gray-800 mb-2">{cert.title}</h4>
                  <p className="text-pink-600 font-semibold mb-1">{cert.issuer}</p>
                  <p className="text-sm text-gray-600 mb-3">{cert.date}</p>
                  <p className="text-sm text-gray-700">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;