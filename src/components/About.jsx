import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="/src/assets/1686851019046.jpg"
              alt="Profile Photo"
              className="w-80 h-80 object-cover rounded-full shadow-lg mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
          <h3 className="text-2xl font-semibold text-gray-900">
            Dedicated Self-Taught Developer
          </h3>
          <p className="text-gray-600 leading-relaxed">
            My coding journey began in 2019 with academic programming projects. In 2022,
            I transitioned to focused web development and have since gained 3 years of
            practical experience through dedicated part-time learning alongside professional
            responsibilities. I've curated featured projects that showcase my strongest full-stack work.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Passionate about creating digital solutions with modern technologies.
            My experience spans JavaScript frameworks, database integration,
            and emerging fields like quantum computing through Qiskit.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              <span className="text-sm text-gray-600">3 Years Web Development</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span className="text-sm text-gray-600">Featured Projects Showcased</span>
            </div>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
