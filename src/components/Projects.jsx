import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import emailScreenshot from '../assets/email-automation.png';
import quantumScreenshot from '../assets/quantum-random-number-gen.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Email Automation Application',
      description: 'A full-stack email campaign management platform featuring SMTP configuration, recipient management, and automated email sending with analytics.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Tailwind CSS'],
      image: emailScreenshot,
      liveUrl: 'https://email-automation-app-rho.vercel.app/',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Lifehub Management System',
      description: 'Comprehensive application for personal and professional management, featuring dashboard analytics, task management, and productivity tools.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'Chart.js'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Quantum Random Number Generator',
      description: 'Quantum computing implementation using Qiskit to generate true random numbers, demonstrating advanced cryptographic principles.',
      tech: ['Python', 'Qiskit', 'Quantum Computing', 'Cryptography'],
      image: quantumScreenshot,
      liveUrl: 'https://quantum-random-number-generator-po8.vercel.app/',
      githubUrl: '#',
    },

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A showcase of my recent work spanning full-stack development and quantum computing
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Slider {...settings} className="projects-slider">
            {projects.map((project) => (
              <div key={project.id} className="px-4">
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {project.image === '/api/placeholder/600/400' ? (
                    <div className="h-64 bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-500 text-lg">Project Screenshot</span>
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-64 object-cover"
                    />
                  )}

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveUrl}
                        className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubUrl}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <FaGithub />
                        Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
