"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-20 py-20">
        <motion.img
          src="/portifolio pic.jpg"
          alt="Mithil Mathew"
          className="w-40 h-40 rounded-full border-4 border-white shadow-xl mb-6 md:mb-0 md:mr-10 object-cover"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Paradesi Mithil</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            AI Developer ⚙️ | Cybersecurity Explorer 🔐 
          </p>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg shadow">
            <a href="/MITHIL.pdf" download>Resume</a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-20 py-10 max-w-4xl mx-auto text-gray-300">
        <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
        <p className="leading-relaxed">
          🚀 I specialize in crafting intelligent, secure, and visually immersive applications —
          blending machine learning, cybersecurity, and modern UI/UX design. From emotion-detecting
          AI to quantum-safe DRM systems, I love building things that are both smart and futuristic.
          <br /><br />
          
          🧰 My toolkit includes Python, HTML, MySQL, Git, Wireshark, Autopsy, and more. I thrive on
          solving complex problems, breaking things ethically, and creating beautiful experiences —
          especially in web security, digital rights, and AI-powered interfaces.
        </p>
      </section>

      {/* Skills Section */}
<motion.section
  className="relative z-10 px-6 md:px-20 py-10 max-w-4xl mx-auto text-gray-300"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <h2 className="text-3xl font-bold mb-4 text-white">Skills</h2>
  <ul className="list-disc list-inside space-y-2">
    <li><strong>Python Programming:</strong> Proficient in Python for automation, scripting, and backend logic.</li>
    <li><strong>Cybersecurity Awareness:</strong> Hands-on with tools like <em>Wireshark</em>, <em>Autopsy</em>, and <em>Burp Suite</em> for ethical hacking and digital forensics.</li>
    <li><strong>AI/ML Development:</strong> Familiar with frameworks like <em>TensorFlow</em>, <em>Keras</em>, and <em>OpenCV</em> for real-time machine learning applications.</li>
    <li><strong>Web Development:</strong> Experienced in building responsive UIs using <em>Next.js</em>, <em>Tailwind CSS</em>, HTML, and JavaScript.</li>
    <li><strong>Python Web Frameworks:</strong> Working knowledge of <em>Flask</em> and <em>FastAPI</em> for API-driven web applications.</li>
    <li><strong>Database Management:</strong> Skilled in designing and querying relational databases using <em>MySQL</em>.</li>
    <li><strong>Research-Oriented:</strong> Strong capability in independently exploring emerging tech and security trends.</li>
  </ul>
</motion.section>

      


      {/* Projects Section */}
      <section className="px-6 md:px-20 py-10 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-white text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <ProjectCard
            title="Digital Rights Management System"
            description="Quantum-safe encrypted DRM with multi-role access control and high efficiency content protection."
          />
          <ProjectCard
            title="XSS Detection on Social Media"
            description="Scans user content to detect and block malicious XSS attacks with 95% precision."
          />
          <ProjectCard
            title="Facial Emotion Detection"
            description="CNN-powered real-time emotion recognition with camera integration."
          />
          <ProjectCard
            title="Online Game Store (UI Design)"
            description="Colorful game UI with smooth animation, boosting engagement and usability."
          />
        </div>
      </section>

      {/* Certifications Section */}
      <motion.section
        className="relative z-10 px-6 md:px-20 py-10 max-w-4xl mx-auto text-gray-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-white">Certifications</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li>
            <strong>The Joy of Computing Using Python</strong> – NPTEL<br />
            <a href="https://github.com/mathew3212/Cirtificate/blob/main/The%20Joy%20of%20Computing%20using%20Python%20.pdf" target="_blank" className="text-indigo-400 hover:underline">View Certificate</a>
          </li>
          <li>
            <strong>Management Information System</strong> – NPTEL<br />
            <a href="https://github.com/mathew3212/Cirtificate/blob/main/Management%20Information%20System%20.pdf" target="_blank" className="text-indigo-400 hover:underline">View Certificate</a>
          </li>
          <li>
            <strong>Intellectual Property</strong> – NPTEL<br />
            <a href="https://github.com/mathew3212/Cirtificate/blob/main/Intellectual%20Property.pdf" target="_blank" className="text-indigo-400 hover:underline">View Certificate</a>
          </li>
          <li>
            <strong>Artificial Intelligence Internship</strong> – Skill Dzire<br />
            <a href="https://github.com/mathew3212/Cirtificate/blob/main/P%20Mithil_certificate.pdf" target="_blank" className="text-indigo-400 hover:underline">View Certificate</a>
          </li>
          <li>
            <strong>Oracle AI Foundations</strong> – Oracle<br />
            <a href="https://github.com/mathew3212/Cirtificate/blob/main/oracle%20AI%20Foundations.pdf" target="_blank" className="text-indigo-400 hover:underline">View Certificate</a>
          </li>
          
           

            
          

        </ul>
      </motion.section>
      




      {/* Contact Section */}
      <section className="px-6 md:px-20 py-16 bg-black text-center text-gray-300">
        <h2 className="text-3xl font-bold mb-4 text-white">Let’s Connect</h2>
        <p className="mb-6">Reach out to collaborate or just say hi 👋</p>
        <div className="flex justify-center gap-6 text-lg">
          <a href="https://github.com/mathew3212" target="_blank" rel="noopener" className="hover:text-indigo-400">GitHub</a>
          <a href="https://linkedin.com/in/mithil" target="_blank" rel="noopener" className="hover:text-indigo-400">LinkedIn</a>
          <a href="mailto:mathewmithil@gmail.com" className="hover:text-indigo-400">Email</a>
        </div>
      </section>
    </main>
  );
}

function ProjectCard({ title, description }: { title: string, description: string }) {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-indigo-500/50 transition duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}

