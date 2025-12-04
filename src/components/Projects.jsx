import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import emailScreenshot from '../assets/Screenshot_20251021_174958.png';
import quantumScreenshot from '../assets/Screenshot_20251021_175043.png';
import lifehubScreenshot from '../assets/Screenshot_20251021_174339.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Email Automation Application',
      description: 'A full-stack email campaign management platform featuring SMTP configuration, recipient management, and automated email sending with analytics.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Tailwind CSS'],
      image: emailScreenshot,
      liveUrl: 'https://email-automation-app-rho.vercel.app/',
      githubUrl: 'https://github.com/RafaelMota02/email-automation-app',
    },
    {
      id: 2,
      title: 'Lifehub Management System',
      description: 'Comprehensive application for personal and professional management, featuring dashboard analytics, task management, and productivity tools.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'Chart.js'],
      image: lifehubScreenshot,
      liveUrl: 'https://lifehub-omega.vercel.app/',
      githubUrl: 'https://github.com/RafaelMota02/lifehub',
    },
    {
      title: 'Quantum Random Number Generator',
      description: 'Quantum computing implementation using Qiskit to generate true random numbers, demonstrating advanced cryptographic principles.',
      tech: ['Python', 'Qiskit', 'Quantum Computing', 'Flask'],
      image: quantumScreenshot,
      liveUrl: 'https://quantum-random-number-generator-po8.vercel.app/',
      githubUrl: 'https://github.com/RafaelMota02/quantum-random-number-generator',
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
          <h2 className="heading-primary text-center">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
          <p className="text-description">
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
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {project.image === '/api/placeholder/600/400' ? (
                    <div className="h-64 bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-500 text-lg">Project Screenshot</span>
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover"
                    />
                  )}

                  <div className="p-8">
                    <h3 className="heading-secondary mb-4">{project.title}</h3>
                    <p className="text-body mb-6">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 border border-gray-200 text-gray-700 rounded-full text-sm font-medium"
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
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
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
