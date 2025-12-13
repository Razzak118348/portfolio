import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export const AboutSection = () => {
  const cards = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "MERN Stack Development",
      desc: "Building responsive and scalable web apps with MongoDB, Express, React, and Node.js.",
    },
    {
      icon: <User className="h-6 w-6 text-primary" />,
      title: "UI/UX & Frontend",
      desc: "Creating intuitive interfaces using HTML, CSS, Tailwind, React.js, and Next.js.",
    },
    {
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      title: "Problem Solving",
      desc: "Solving algorithmic challenges on LeetCode to strengthen problem-solving skills.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
        >
          About <span className="text-primary">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">
              Passionate MERN Stack Developer & Problem Solver
            </h3>

            <p className="text-gray-300">
              I am a 4th-year Computer Science Engineering student and a passionate MERN stack developer. I have hands-on experience building responsive, scalable, and secure web applications using MongoDB, Express.js, React, and Node.js. I completed a software internship at <strong>NerdCoders Ltd</strong>, gaining practical experience in agile development and teamwork.
            </p>

            <p className="text-gray-300">
              Apart from development, I enjoy solving algorithmic problems on <strong>LeetCode</strong>, which helps me sharpen my problem-solving and logical thinking skills. I am always eager to learn new technologies, improve my coding skills, and contribute to innovative projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1LKK5YArzH7l0JcEKznDvWlqXaQdmhf8t/view"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right Cards Section */}
          <div className="grid grid-cols-1 gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0.2}
                  glareColor="#ffffff"
                  glarePosition="all"
                  className="p-6 rounded-xl bg-gray-800 hover:shadow-lg transition-shadow duration-300 border-2 border-gradient-to-r from-purple-400 to-pink-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">{card.icon}</div>
                    <div className="text-left">
                      <h4 className="font-semibold text-lg">{card.title}</h4>
                      <p className="text-gray-300">{card.desc}</p>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
