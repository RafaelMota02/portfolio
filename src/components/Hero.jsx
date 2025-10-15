import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Iridescence from './Iridescence';
import ShinyText from './ShinyText';
import SplitText from './SplitText';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Iridescence
          color={[0.3, 0.6, 1]}
          mouseReact={false}
          amplitude={0.1}
          speed={1.0}
          className="w-full h-full"
        />
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SplitText
              text="Rafael Mota"
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent"
              style={{filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.5))'}}
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <motion.p
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-200 mb-8"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Full Stack Developer
            </motion.p>
            <motion.div
              className="max-w-2xl mx-auto mb-8"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <ShinyText
                text="Passionate about creating digital solutions with modern technologies. Specialized in React, Node.js, and quantum computing endeavors."
                disabled={false}
                speed={3}
                className="text-lg text-gray-300 font-light leading-relaxed text-center"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
            <motion.a
              href="#contact"
              className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-white font-semibold tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-16 flex justify-center space-x-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <motion.a
              href="https://github.com/RafaelMota02"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:text-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/rafael-mota-aba35227b/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:text-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </motion.a>
            <motion.a
              href="mailto:dwayceprdc@gmail.com"
              className="group p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:text-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Email"
            >
              <FaEnvelope className="w-6 h-6" />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
