import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, ChevronDown, Code, Briefcase, GraduationCap, User, Award, Calendar } from 'lucide-react';
import Hero from '../assets/hero.jpg'

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'experience', 'projects', 'education', 'skills'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const experiences = [
    {
      title: 'Software Engineer I',
      company: 'Praxis Engineering',
      location: 'Annapolis Junction, MD',
      period: 'Jan. 2025 – Present',
      achievements: [
        'Improved cluster uptime by 40% by implementing liveness and readiness probes using Helm charts, which automatically detected and restarted unhealthy containers without impacting end-user experience.',
        'Reduced manual release effort by 70% by building CI/CD pipelines to deploy Kubernetes clusters and test infrastructure automatically.'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Vulnerability Research Labs',
      location: 'Columbia, MD',
      period: 'June 2023 – Dec. 2024',
      achievements: [
        'Increased task efficiency by 74% by designing a Python plugin to execute remote tasks via AsyncSSH and SFTP.',
        'Enhanced test coverage by 130% across Android and Windows devices by developing custom Ansible inventories and Pytest suites.'
      ]
    },
    {
      title: 'Technical Services Consultant',
      company: 'Kensington Park Senior Living',
      location: 'Kensington, MD',
      period: 'May 2020 – Aug. 2022',
      achievements: [
        'Set up and repaired computers, printers, and TVs to improve event coordination and living standards.'
      ]
    }
  ];

  const projects = [
    {
      title: 'EventMap',
      role: 'President, Patent Holder',
      description: 'Map-based social media app that allows 100+ users to discover, create, and advertise public/private events. Used by UC Santa Cruz Student Services as their main event management app.',
      tech: ['Flutter', 'Dart', 'Google Cloud', 'REST API'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'ReAInvent',
      role: 'Co-Founder, Full-Stack Developer',
      description: 'Question-answer chatbot for YouTube videos that uses semantic search and LLMs to extract relevant information with timestamps for efficient learning. Integrated OpenAI\'s models and semantic search algorithms, reducing time spent searching video content.',
      tech: ['Python', 'OpenAI API', 'Machine Learning', 'React.js'],
      liveLink: '#',
      githubLink: '#'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science, Computer Science',
      school: 'University of California, Santa Cruz',
      location: 'Santa Cruz, CA',
      period: 'December, 2024',
      achievements: ['GPA: 3.9/4.0', 'Summa Cum Laude', 'Honors', 'Undergraduate Dean\'s Merit Scholarship']
    },
    {
      degree: 'Associate of Arts, Computer Science',
      school: 'Montgomery College',
      location: 'Germantown, MD',
      period: 'May, 2022',
      achievements: ['GPA: 3.8/4.0', 'Honor Roll', 'Dean\'s List', 'Phi Theta Kappa Honor Society', 'President of Chess Club and Dead by Daylight Gaming Club (200+ members)']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Donovan deVise
            </div>
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {['About', 'Experience', 'Projects', 'Education', 'Skills'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm transition-colors duration-300 hover:text-blue-400 ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="md:hidden">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <div className="mb-6 sm:mb-8">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img 
                    src={Hero}
                    alt="Donovan deVise"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight">
              Donovan deVise
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Software Engineer crafting scalable solutions with modern technologies
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
              <a href="mailto:donovandevise@gmail.com" className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300 text-sm sm:text-base">
                <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
                Contact Me
              </a>
              <a href="/src/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors duration-300 text-sm sm:text-base">
                <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                View Resume
              </a>
              <a href="https://github.com/sopwithcamel110" className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 border border-gray-600 hover:border-gray-500 rounded-lg transition-colors duration-300 text-sm sm:text-base">
                <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/ddevise/" className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 border border-gray-600 hover:border-gray-500 rounded-lg transition-colors duration-300 text-sm sm:text-base">
                <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
                LinkedIn
              </a>
            </div>
          </div>
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-gray-400 hover:text-white transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      <section id="about" className="py-16 sm:py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-8 sm:mb-12">
            <User className="text-blue-400" size={24} />
            <h2 className="text-2xl sm:text-3xl font-bold">About Me</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                Recent Computer Science graduate with hands-on experience in cloud infrastructure, DevOps, and full-stack development. 
                I specialize in building scalable systems using modern technologies like Kubernetes, React, and Python.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                Currently working as a Software Engineer at Praxis Engineering, where I've improved system reliability and automated 
                deployment processes. I'm passionate about solving complex problems and creating efficient, maintainable solutions.
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin size={16} />
                  <span className="text-sm sm:text-base">Washington, D.C.</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone size={16} />
                  <span className="text-sm sm:text-base">(301) 332-9961</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail size={16} />
                  <span className="text-sm sm:text-base">donovandevise@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-blue-400">Core Expertise</h3>
                <div className="space-y-2 text-gray-300 text-sm sm:text-base">
                  <div>• Cloud Infrastructure & DevOps</div>
                  <div>• Full-Stack Web Development</div>
                  <div>• System Design & Architecture</div>
                  <div>• Machine Learning & AI Integration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-8 sm:mb-12">
            <Briefcase className="text-blue-400" size={24} />
            <h2 className="text-2xl sm:text-3xl font-bold">Work Experience</h2>
          </div>
          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-800/50 p-4 sm:p-6 lg:p-8 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-blue-400">{exp.title}</h3>
                    <p className="text-base sm:text-lg text-gray-300">{exp.company}</p>
                    <p className="text-sm sm:text-base text-gray-400">{exp.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 mt-2 lg:mt-0">
                    <Calendar size={16} />
                    <span className="text-sm sm:text-base">{exp.period}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm sm:text-base text-gray-300 leading-relaxed flex items-start gap-2">
                      <span className="text-blue-400 mt-2 text-xs">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 sm:py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-8 sm:mb-12">
            <Code className="text-blue-400" size={24} />
            <h2 className="text-2xl sm:text-3xl font-bold">Featured Projects</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-[1.02]">
                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2">{project.title}</h3>
                  <p className="text-purple-400 text-sm mb-4">{project.role}</p>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-xs sm:text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a 
                    href={project.liveLink} 
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 text-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg transition-colors duration-300 text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-8 sm:mb-12">
            <GraduationCap className="text-blue-400" size={24} />
            <h2 className="text-2xl sm:text-3xl font-bold">Education</h2>
          </div>
          <div className="space-y-6 sm:space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-800/50 p-4 sm:p-6 lg:p-8 rounded-lg border border-gray-700">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-blue-400">{edu.degree}</h3>
                    <p className="text-base sm:text-lg text-gray-300">{edu.school}</p>
                    <p className="text-sm sm:text-base text-gray-400">{edu.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 mt-2 lg:mt-0">
                    <Calendar size={16} />
                    <span className="text-sm sm:text-base">{edu.period}</span>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-2 sm:gap-4">
                  {edu.achievements.map((achievement, i) => (
                    <span key={i} className="flex items-center gap-2 text-sm sm:text-base text-gray-300">
                      <Award size={16} className="text-yellow-400 flex-shrink-0" />
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-16 sm:py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-8 sm:mb-12">
            <Code className="text-blue-400" size={24} />
            <h2 className="text-2xl sm:text-3xl font-bold">Technical Skills</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700">
              <h3 className="text-base sm:text-lg font-semibold mb-4 text-purple-400">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'JavaScript', 'TypeScript', 'C++', 'Java', 'C#', 'Bash'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-xs sm:text-sm">{tech}</span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700">
              <h3 className="text-base sm:text-lg font-semibold mb-4 text-purple-400">Web Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Node.js', 'Flask', 'REST API', 'HTML', 'CSS'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-xs sm:text-sm">{tech}</span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700">
              <h3 className="text-base sm:text-lg font-semibold mb-4 text-purple-400">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Helm', 'CI/CD'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-xs sm:text-sm">{tech}</span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700">
              <h3 className="text-base sm:text-lg font-semibold mb-4 text-purple-400">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Linux', 'Ansible', 'Pytest', 'MySQL', 'Unity'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-xs sm:text-sm">{tech}</span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700">
              <h3 className="text-base sm:text-lg font-semibold mb-4 text-purple-400">Mobile & Game Dev</h3>
              <div className="flex flex-wrap gap-2">
                {['Flutter', 'Dart', 'Unity', 'Unreal Engine', 'Android'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-xs sm:text-sm">{tech}</span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700">
              <h3 className="text-base sm:text-lg font-semibold mb-4 text-purple-400">Specializations</h3>
              <div className="flex flex-wrap gap-2">
                {['Machine Learning', 'AI', 'Distributed Systems', 'Software Design'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-xs sm:text-sm">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 sm:py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex justify-center space-x-6 mb-4 sm:mb-6">
            <a href="mailto:donovandevise@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <Mail size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a href="https://github.com/sopwithcamel110" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <Github size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ddevise/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <Linkedin size={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>
          <p className="text-gray-400 text-sm sm:text-base">© 2025 Donovan deVise. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;