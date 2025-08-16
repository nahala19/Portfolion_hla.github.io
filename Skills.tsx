import React from 'react';
import { Palette, Code, Users, MessageSquare, Presentation as PresentationChart, FileSpreadsheet, Lightbulb, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Design Skills',
      icon: <Palette size={24} />,
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'UI/UX Design', level: 90 },
        { name: 'Figma', level: 85 },
        { name: 'Poster Making', level: 88 },
        { name: 'Prototyping', level: 85 },
        { name: 'User Research', level: 75 }
      ]
    },
    {
      title: 'Technical Skills',
      icon: <Code size={24} />,
      color: 'from-purple-500 to-indigo-500',
      skills: [
        { name: 'HTML/CSS', level: 85 },
        { name: 'JavaScript', level: 70 },
        { name: 'Responsive Design', level: 80 },
        { name: 'Frontend Development', level: 75 }
      ]
    },
    {
      title: 'Professional Skills',
      icon: <Users size={24} />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Communication', level: 90 },
        { name: 'Teamwork', level: 85 },
        { name: 'Project Management', level: 75 },
        { name: 'Problem Solving', level: 82 },
        { name: 'Time Management', level: 80 }
      ]
    },
    {
      title: 'Other Skills',
      icon: <Lightbulb size={24} />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Prompt Engineering', level: 80 },
        { name: 'Slide Presentations', level: 85 },
        { name: 'Spreadsheet Management', level: 75 },
        { name: 'Content Creation', level: 78 }
      ]
    }
  ];

  const tools = [
    { name: 'Figma', category: 'Design' },
    { name: 'Adobe XD', category: 'Design' },
    { name: 'Photoshop', category: 'Design' },
    { name: 'HTML/CSS', category: 'Code' },
    { name: 'JavaScript', category: 'Code' },
    { name: 'React', category: 'Code' },
    { name: 'VS Code', category: 'Code' },
    { name: 'Git', category: 'Code' },
    { name: 'Microsoft Office', category: 'Productivity' },
    { name: 'Google Workspace', category: 'Productivity' },
    { name: 'Notion', category: 'Productivity' },
    { name: 'Slack', category: 'Communication' }
  ];

  const languages = [
    { name: 'English', level: 'Fluent', flag: '🇬🇧' },
    { name: 'Malayalam', level: 'Native', flag: '🇮🇳' },
    { name: 'Hindi', level: 'Conversational', flag: '🇮🇳' }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, design capabilities, and professional competencies
          </p>
          
          {/* Skill Categories with Progress Bars */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className={`h-2.5 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Tools & Technologies */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Tools & Technologies
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => {
                const getToolColor = (category: string) => {
                  switch (category) {
                    case 'Design': return 'bg-pink-100 text-pink-700 border-pink-200';
                    case 'Code': return 'bg-purple-100 text-purple-700 border-purple-200';
                    case 'Productivity': return 'bg-blue-100 text-blue-700 border-blue-200';
                    case 'Communication': return 'bg-green-100 text-green-700 border-green-200';
                    default: return 'bg-gray-100 text-gray-700 border-gray-200';
                  }
                };
                
                return (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full border font-medium transition-all duration-300 hover:scale-110 hover:shadow-md ${getToolColor(tool.category)}`}
                  >
                    {tool.name}
                  </span>
                );
              })}
            </div>
          </div>
          
          {/* Languages */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Languages
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {languages.map((language, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
                  <div className="text-4xl mb-3">{language.flag}</div>
                  <h4 className="font-bold text-gray-800 mb-2">{language.name}</h4>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    {language.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;