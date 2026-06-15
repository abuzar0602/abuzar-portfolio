import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";

function App() {
  const skills = [
    "Python",
    "C++",
    "Java",
    "SQL",
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "Keras",
    "Flask",
    "Git",
    "GitHub",
    "Cybersecurity",
  ];

  const certifications = [
    "Machine Learning and Pattern Recognition – Samatrix (2025)",
    "R Programming – Samatrix (2025)",
    "Introduction to Cybersecurity – Cisco (2025)",
    "Cybersecurity Essentials – Cisco (2025)",
    "Introduction to IoT and Digital Transformation – Cisco (2025)",
    "Neural Networks and Deep Learning – Samatrix (2026)",
    "Deep Learning with Python, TensorFlow and Keras – Samatrix (2026)",
  ];

  return (
    <div className="min-h-screen bg-[#004643] text-[#F0EDE5]">
      <div className="fixed inset-0 overflow-hidden -z-10">
  <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>

  <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
</div>
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-6">
        <h1
        
  className="
    text-6xl
    md:text-8xl
    font-black
    mb-6
    bg-gradient-to-r
    from-white
    via-[#F0EDE5]
    to-[#bfe3dc]
    bg-clip-text
    text-transparent
  "
>
</h1>

        <div className="space-x-6 hidden md:flex">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certificates</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <motion.section
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6"
>
  <p className="uppercase tracking-[6px] text-sm mb-5">
    AI • MACHINE LEARNING • CYBERSECURITY
  </p>

  <h1 className="text-6xl md:text-8xl font-bold mb-6">
    Abuzar Ali
  </h1>

  <h2 className="text-2xl md:text-3xl text-[#d8d4ca] mb-8">
    Building Intelligent Solutions Through Code
  </h2>

  <p className="max-w-3xl text-lg leading-8">
    Computer Science Engineering student at LNCT University
    focused on Artificial Intelligence, Machine Learning,
    Deep Learning and modern Software Development.
  </p>

  <div className="flex gap-5 mt-10 flex-wrap justify-center">

    <a
  href="https://github.com/abuzar0602"
  target="_blank"
  rel="noreferrer"
  className="bg-[#F0EDE5] text-[#004643] px-8 py-4 rounded-xl font-bold hover:scale-110 transition-all duration-300 flex items-center gap-2"
>
  <FaGithub />
  GitHub
</a>

    <a
  href="https://www.linkedin.com/in/abuzar-ali0602"
  target="_blank"
  rel="noreferrer"
  className="border border-[#F0EDE5] px-8 py-4 rounded-xl hover:bg-[#F0EDE5] hover:text-[#004643] transition-all duration-300 flex items-center gap-2"
>
  <FaLinkedin />
  LinkedIn
</a>
    <a
  href="/resume.pdf"
  download
  className="bg-white text-[#004643] px-8 py-4 rounded-xl font-bold hover:scale-110 transition-all duration-300 flex items-center gap-2"
>
  <FaFileDownload />
  Download Resume
</a>

  </div>
</motion.section>

      {/* ABOUT */}
      <motion.section
  id="about"
  className="px-8 md:px-20 py-20"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>

        <h2 className="text-4xl font-bold mb-8">About Me</h2>

        <div className="bg-[#0A5C55] p-8 rounded-2xl">
          <p className="text-lg leading-8">
            I am a Computer Science Engineering student at LNCT University,
            expected to graduate in 2027. I am passionate about building
            intelligent systems using Artificial Intelligence, Machine Learning,
            Deep Learning, and modern software development technologies.
          </p>
        </div>
      </motion.section>

      {/* SKILLS */}
      <motion.section
  id="skills"
  className="px-8 md:px-20 py-20"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
        <h2 className="text-4xl font-bold mb-8">Skills</h2>

        <div className="flex flex-wrap gap-4">
  {skills.map((skill) => (
    <div
      key={skill}
      className="
      bg-[#F0EDE5]
      text-[#004643]
      px-5
      py-2
      rounded-full
      font-semibold
      hover:scale-110
      transition
      duration-300
      "
    >
      {skill}
    </div>
  ))}
</div>
      </motion.section>

      {/* PROJECTS */}
<section id="projects" className="px-8 md:px-20 py-20">
  <h2 className="text-4xl font-bold mb-10">Projects</h2>

  <div className="grid md:grid-cols-3 gap-6">

    {/* Project 1 */}
    <div className="bg-[#0A5C55]/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:border-[#F0EDE5] hover:shadow-[0_0_30px_rgba(240,237,229,0.25)]">
      <h3 className="text-2xl font-semibold mb-3">
        AI Interview Assistant
      </h3>

      <p className="mb-4">
        AI-powered interview preparation platform with intelligent feedback and evaluation.
      </p>

      <div className="flex flex-wrap gap-2">
        <span className="bg-[#F0EDE5] text-[#004643] px-3 py-1 rounded-full text-sm font-semibold">
          React
        </span>

        <span className="bg-[#F0EDE5] text-[#004643] px-3 py-1 rounded-full text-sm font-semibold">
          Flask
        </span>

        <span className="bg-[#F0EDE5] text-[#004643] px-3 py-1 rounded-full text-sm font-semibold">
          AI
        </span>
      </div>
    </div>

    {/* Project 2 */}
    <div className="bg-[#0A5C55]/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:border-[#F0EDE5] hover:shadow-[0_0_30px_rgba(240,237,229,0.25)]">
      <h3 className="text-2xl font-semibold mb-3">
        Face Mask Detection
      </h3>

      <p className="mb-4">
        Real-time face mask detection system using computer vision and machine learning.
      </p>

      <div className="flex flex-wrap gap-2">
        <span className="bg-[#F0EDE5] text-[#004643] px-3 py-1 rounded-full text-sm font-semibold">
          Python
        </span>

        <span className="bg-[#F0EDE5] text-[#004643] px-3 py-1 rounded-full text-sm font-semibold">
          OpenCV
        </span>

        <span className="bg-[#F0EDE5] text-[#004643] px-3 py-1 rounded-full text-sm font-semibold">
          ML
        </span>
      </div>
    </div>

    {/* Project 3 */}
    <div className="bg-[#0A5C55]/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:border-[#F0EDE5] hover:shadow-[0_0_30px_rgba(240,237,229,0.25)]">
      <h3 className="text-2xl font-semibold mb-3">
        Plagiarism Detection
      </h3>

      <p className="mb-4">
        NLP-based document comparison system for detecting similarity and plagiarism.
      </p>

      <div className="flex flex-wrap gap-2">
        <span className="bg-[#F0EDE5] text-[#004643] px-3 py-1 rounded-full text-sm font-semibold">
          NLP
        </span>

        <span className="bg-[#F0EDE5] text-[#004643] px-3 py-1 rounded-full text-sm font-semibold">
          Python
        </span>

        <span className="bg-[#F0EDE5] text-[#004643] px-3 py-1 rounded-full text-sm font-semibold">
          Text Analysis
        </span>
      </div>
    </div>

  </div>
</section>
      {/* CERTIFICATIONS */}
      <section id="certifications" className="px-8 md:px-20 py-20">
        <h2 className="text-4xl font-bold mb-8">Certifications</h2>

        <div className="space-y-4">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="bg-[#0A5C55] p-5 rounded-xl"
            >
              {cert}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-8 md:px-20 py-20 text-center"
      >
        <h2 className="text-4xl font-bold mb-8">Contact</h2>

        <p className="mb-4">📧 aliabuzar0602@gmail.com</p>

        <p className="mb-4">
          🔗 linkedin.com/in/abuzar-ali0602
        </p>

        <p>
          💻 github.com/abuzar0602
        </p>
      </section>
      <footer className="text-center py-8 border-t border-white/10">
  <p>© 2026 Abuzar Ali. All Rights Reserved.</p>
</footer>
    </div>
  );
}

export default App;
