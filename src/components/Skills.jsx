import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaLinux,
  FaCloud,
  FaDocker
} from 'react-icons/fa';
import { SiTailwindcss, SiPostgresql, SiBootstrap, SiExpress, SiFlask, SiNpm } from 'react-icons/si';
import { MdScience } from 'react-icons/md';

const CircularProgress = ({ percentage, size = 60, strokeWidth = 4 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-gray-200"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          className="text-primary-500 transition-all duration-500 ease-out"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-medium text-gray-700">{percentage}%</span>
      </div>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { icon: FaHtml5, name: 'HTML5', level: 'Intermediate', percentage: 75, color: 'text-orange-500' },
    { icon: FaCss3Alt, name: 'CSS3', level: 'Intermediate', percentage: 70, color: 'text-blue-500' },
    { icon: FaJsSquare, name: 'JavaScript', level: 'Intermediate', percentage: 68, color: 'text-yellow-500' },
    { icon: SiBootstrap, name: 'Bootstrap', level: 'Intermediate', percentage: 65, color: 'text-purple-500' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', level: 'Basic to Intermediate', percentage: 60, color: 'text-teal-500' },
    { icon: FaReact, name: 'React.js', level: 'Basic to Intermediate', percentage: 55, color: 'text-blue-500' },
    { icon: SiExpress, name: 'Express.js', level: 'Basic to Intermediate', percentage: 50, color: 'text-gray-600' },
    { icon: SiNpm, name: 'npm', level: 'Basic to Intermediate', percentage: 45, color: 'text-red-600' },
    { icon: SiPostgresql, name: 'PostgreSQL', level: 'Basic to Intermediate', percentage: 45, color: 'text-blue-600' },
    { icon: FaLinux, name: 'Linux', level: 'Basic to Intermediate', percentage: 40, color: 'text-yellow-600' },
    { icon: FaNodeJs, name: 'Node.js', level: 'Basic', percentage: 35, color: 'text-green-600' },
    { icon: FaPython, name: 'Python', level: 'Basic', percentage: 35, color: 'text-blue-400' },
    { icon: FaCloud, name: 'Google Cloud', level: 'Basic', percentage: 30, color: 'text-green-400' },
    { icon: FaGitAlt, name: 'Git', level: 'Very Basic', percentage: 20, color: 'text-red-500' },
    { icon: SiFlask, name: 'Flask', level: 'Very Basic', percentage: 20, color: 'text-gray-600' },
    { icon: FaDocker, name: 'Docker', level: 'Very Basic', percentage: 15, color: 'text-blue-500' },
    { icon: MdScience, name: 'Qiskit', level: 'Experimental', percentage: 8, color: 'text-purple-600' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -3 }}
      className={`p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border text-center group ${
        skill.percentage >= 75 ? 'bg-green-50 border-green-200' :
        skill.percentage >= 50 ? 'bg-yellow-50 border-yellow-200' :
        skill.percentage >= 25 ? 'bg-orange-50 border-orange-200' :
        skill.percentage >= 10 ? 'bg-red-50 border-red-200' :
        'bg-purple-50 border-purple-200'
      }`}
            >
              <div className={`text-4xl ${skill.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">{skill.name}</h3>
              <p className="text-xs text-gray-500 mb-4">{skill.level}</p>
              <div className="flex justify-center">
                <CircularProgress percentage={skill.percentage} size={50} strokeWidth={3} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">
            Committed to continuous learning and exploring cutting-edge technologies
          </p>
          <div className="inline-block bg-white px-6 py-2 rounded-full text-sm text-gray-700 border border-gray-200 mb-4">
            🔬 Always Learning
          </div>
          <p className="text-sm text-gray-500">
            These percentages indicate relative familiarity and comfort level between technologies, helping highlight strengths rather than suggesting mastery—since true understanding of any technology can always go deeper.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
