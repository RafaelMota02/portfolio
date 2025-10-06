import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16" style={{backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 100%), url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1950&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
              Rafael Mota
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-white mb-8" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
              Full Stack Developer
            </p>
            <p className="text-lg text-white max-w-2xl mx-auto mb-8" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>
              Passionate about creating digital solutions with modern technologies.
              Specialized in React, Node.js, and quantum computing endeavors.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            className="mt-12 flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="https://github.com/RafaelMota02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/rafael-mota-aba35227b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a
              href="mailto:dwayceprdc@gmail.com"
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              aria-label="Email"
            >
              <FaEnvelope className="w-8 h-8" />
            </a>
          </motion.div>

          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
