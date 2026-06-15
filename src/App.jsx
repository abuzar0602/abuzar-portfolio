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
  className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-[#004643] to-[#002f2d]"
>

  {/* Tech Tag */}
  <p className="uppercase tracking-[8px] text-sm mb-6 text-[#d8d4ca]">
    AI • MACHINE LEARNING • DEEP LEARNING • CYBERSECURITY
  </p>

  {/* Name */}
  <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-[#F0EDE5]">
    Abuzar Ali
  </h1>

  {/* Tagline */}
  <h2 className="text-2xl md:text-3xl text-[#d8d4ca] mb-8 font-light">
    Building Intelligent Solutions Through Code
  </h2>

  {/* Description */}
  <p className="max-w-3xl text-lg leading-8 text-[#cfcac2]">
    Computer Science Engineering student at LNCT University focused on
    Artificial Intelligence, Machine Learning, Deep Learning, and modern
    software development. Passionate about building real-world AI systems.
  </p>

  {/* Buttons */}
  <div className="flex gap-5 mt-12 flex-wrap justify-center">

    <a
      href="https://github.com/abuzar0602"
      target="_blank"
      rel="noreferrer"
      className="bg-[#F0EDE5] text-[#004643] px-8 py-4 rounded-xl font-bold hover:scale-110 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
    >
      <FaGithub />
      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/abuzar-ali0602"
      target="_blank"
      rel="noreferrer"
      className="border border-[#F0EDE5] text-[#F0EDE5] px-8 py-4 rounded-xl hover:bg-[#F0EDE5] hover:text-[#004643] hover:scale-105 transition-all duration-300 flex items-center gap-2"
    >
      <FaLinkedin />
      LinkedIn
    </a>

    <a
      href="/resume.pdf"
      download
      className="bg-[#0a7a6f] text-white px-8 py-4 rounded-xl font-bold hover:scale-110 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
    >
      <FaFileDownload />
      Resume
    </a>

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

  <h2 className="text-4xl font-bold mb-12">Projects</h2>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Project 1 */}
    <div className="bg-[#0A5C55]/70 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:scale-105 hover:shadow-[0_0_30px_rgba(240,237,229,0.2)] transition-all duration-300">

      <h3 className="text-2xl font-bold mb-3">
        AI Interview Assistant
      </h3>

      <p className="text-[#d8d4ca] mb-4">
        AI-powered interview preparation platform with intelligent feedback and evaluation system.
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        <span className="bg-[#F0EDE5] text-[#004643] px-3 py-1 rounded-full text-sm">React</span>
        <span className="bg-[#F0EDE5] text-[#004643] px-3 py-1 rounded-full text-sm">Flask</span>
        <span className="bg-[#F0EDE5] text-[#004643] px-3 py-1 rounded-full text-sm">AI</span>
      </div>

      <div className="flex gap-3">
        <a href="#" className="px-4 py-2 bg-[#F0EDE5] text-[#004643] rounded-lg text-sm font-semibold">
          Live Demo
        </a>
        <a href="https://github.com/abuzar0602" className="px-4 py-2 border border-[#F0EDE5] text-[#F0EDE5] rounded-lg text-sm">
          GitHub
        </a>
      </div>

    </div>

    {/* Project 2 */}
    <div className="bg-[#0A5C55]/70 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:scale-105 hover:shadow-[0_0_30px_rgba(240,237,229,0.2)] transition-all duration-300">

      <h3 className="text-2xl font-bold mb-3">
        Face Mask Detection
      </h3>

      <p className="text-[#d8d4ca] mb-4">
        Real-time computer vision system for detecting face masks using ML & OpenCV.
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        <span className="bg-[#F0EDE5] text-[#004643] px-3 py-1 rounded-full text-sm">Python</span>
        <span className="bg-[#F0EDE5] text-[#004643] px-3 py-1 rounded-full text-sm">OpenCV</span>
        <span className="bg-[#F0EDE5] text-[#004643] px-3 py-1 rounded-full text-sm">ML</span>
      </div>

      <div className="flex gap-3">
        <a href="#" className="px-4 py-2 bg-[#F0EDE5] text-[#004643] rounded-lg text-sm font-semibold">
          Live Demo
        </a>
        <a href="https://github.com/abuzar0602" className="px-4 py-2 border border-[#F0EDE5] text-[#F0EDE5] rounded-lg text-sm">
          GitHub
        </a>
      </div>

    </div>

    {/* Project 3 */}
    <div className="bg-[#0A5C55]/70 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:scale-105 hover:shadow-[0_0_30px_rgba(240,237,229,0.2)] transition-all duration-300">

      <h3 className="text-2xl font-bold mb-3">
        Plagiarism Detection System
      </h3>

      <p className="text-[#d8d4ca] mb-4">
        NLP-based system for detecting text similarity and plagiarism in documents.
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        <span className="bg-[#F0EDE5] text-[#004643] px-3 py-1 rounded-full text-sm">NLP</span>
        <span className="bg-[#F0EDE5] text-[#004643] px-3 py-1 rounded-full text-sm">Python</span>
        <span className="bg-[#F0EDE5] text-[#004643] px-3 py-1 rounded-full text-sm">ML</span>
      </div>

      <div className="flex gap-3">
        <a href="#" className="px-4 py-2 bg-[#F0EDE5] text-[#004643] rounded-lg text-sm font-semibold">
          Live Demo
        </a>
        <a href="https://github.com/abuzar0602" className="px-4 py-2 border border-[#F0EDE5] text-[#F0EDE5] rounded-lg text-sm">
          GitHub
        </a>
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
