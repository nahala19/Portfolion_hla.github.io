import React from 'react';
import { Award, Star, Trophy, AlignCenterVertical as Certificate } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: 'Excellence in UI/UX Design',
      organization: 'Pro26 Internship Program',
      year: '2025',
      description: 'Recognized for outstanding design work and innovative user experience solutions during internship period.',
      icon: <Trophy size={24} />,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Best Student Project',
      organization: 'College Design Competition',
      year: '2024',
      description: 'First place winner for innovative mobile app design project showcasing exceptional creativity and technical skills.',
      icon: <Award size={24} />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Academic Excellence Award',
      organization: 'Computer Science Department',
      year: '2023',
      description: 'Awarded for maintaining top academic performance and contributing to department projects.',
      icon: <Star size={24} />,
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  const recognitions = [
    {
      title: 'Featured Designer',
      platform: 'College Design Showcase',
      description: 'Work featured in annual design showcase for innovative approach to user interface design.'
    },
    {
      title: 'Team Leadership',
      platform: 'Group Projects',
      description: 'Successfully led multiple cross-functional teams in design and development projects.'
    },
    {
      title: 'Community Contributor',
      platform: 'Design Forums',
      description: 'Active contributor to design communities, sharing knowledge and helping fellow designers.'
    },
    {
      title: 'Mentorship Recognition',
      platform: 'Junior Students',
      description: 'Recognized for mentoring junior students in UI/UX design principles and best practices.'
    }
  ];

  return (
    <section id="awards" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Awards & Recognition
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Recognition of achievements and contributions in design, academics, and professional development
          </p>
          
          {/* Awards Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Major Awards
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${award.color} text-white mb-4`}>
                    {award.icon}
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{award.title}</h4>
                    <p className="text-pink-600 font-semibold text-sm mb-1">{award.organization}</p>
                    <p className="text-gray-500 text-sm">{award.year}</p>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Recognitions Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Professional Recognition
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {recognitions.map((recognition, index) => (
                <div key={index} className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 bg-pink-500 rounded-full mt-2"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{recognition.title}</h4>
                      <p className="text-pink-600 font-semibold text-sm mb-2">{recognition.platform}</p>
                      <p className="text-gray-600 text-sm">{recognition.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Achievement Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl">
              <div className="text-3xl font-bold text-pink-600 mb-2">5+</div>
              <div className="text-gray-700 font-medium">Projects Completed</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
              <div className="text-gray-700 font-medium">Awards Received</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-700 font-medium">Certifications</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl">
              <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
              <div className="text-gray-700 font-medium">Team Collaborations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;