import React from 'react';
import { Calendar, Users, Wrench } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Smart Bell System",
      description: "Designed an intuitive UI/UX for a smartbell system with real-time notifications, visitor management, and security features. Created user flows and interactive prototypes.",
      role: "Lead UI/UX Designer",
      duration: "3 months",
      teamSize: "11 members",
      tools: ["Figma", "Prototyping", "User Research"],
      image: "https://images.pexels.com/photos/955793/pexels-photo-955793.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Mobile App Design"
    },
    {
      title: "Zoho CRM Enhancement",
      description: "Redesigned key user interfaces for Zoho CRM to improve user experience and workflow efficiency. Conducted user research and implemented design system improvements.",
      role: "UI/UX Designer",
      duration: "4 months",
      teamSize: "9 members",
      tools: ["Figma", "User Testing", "Wireframing", "Design Systems"],
      image: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Web Application and Mobile Application "
    },
    {
      title: "Learning Hub App",
      description: "Developed UI/UX for a mobile learning hub application with interactive content, progress tracking, and collaborative learning features. Focus on educational user experience optimization.",
      role: "UI/UX Designer & Frontend Contributor",
      duration: "2 months",
      teamSize: "3 members",
      tools: ["Figma", "HTML/CSS", "JavaScript", "Mobile Design"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Mobile App Design"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            A showcase of my design work and technical contributions across various digital platforms
          </p>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-pink-600 text-white text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Users size={16} className="text-pink-600" />
                      <span className="font-medium">Role:</span>
                      <span>{project.role}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Calendar size={16} className="text-pink-600" />
                      <span className="font-medium">Duration:</span>
                      <span>{project.duration}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Users size={16} className="text-pink-600" />
                      <span className="font-medium">Team:</span>
                      <span>{project.teamSize}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Wrench size={16} className="text-pink-600" />
                      <span className="font-medium text-sm text-gray-700">Tools Used:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;