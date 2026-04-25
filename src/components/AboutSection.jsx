import { Briefcase, Code, User, Terminal} from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const cards = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "MERN Stack",
    desc: "Architecting scalable full-stack solutions with MongoDB, Express, React, and Node.js.",
    color: "from-blue-500 to-cyan-400",
    className: "md:col-span-2",
  },
  {
    icon: <User className="w-6 h-6" />,
    title: "UI/UX Design",
    desc: "Crafting pixel-perfect, animated interfaces.",
    color: "from-purple-500 to-pink-500",
    className: "md:col-span-1",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Experience",
    desc: "Former Intern at NerdCoders Ltd. Agile & Team-focused.",
    color: "from-orange-500 to-red-500",
    className: "md:col-span-1",
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: "Problem Solving",
    desc: "Active on LeetCode. Strong focus on DSA and optimization.",
    color: "from-green-500 to-emerald-400",
    className: "md:col-span-2",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-10 md:py-16 px-2 md:px-6 relative overflow-hidden bg-[#030712]">
      {/* Decorative Background Blur */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Left: Content Strategy */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl md:text-5xl font-extrabold tracking-tight">
                About <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Me</span>
              </h2>
              <div className="h-1.5 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mt-4 rounded-full" />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I am a 4th-year <span className="text-white font-medium">Computer Science Engineering</span> student specializing in high-end frontend animation and scalable backends with MERN stack.
              </p>
              <p>
                My journey involves bridging the gap between <span className="text-white font-medium">complex logic</span> and <span className="text-white font-medium">fluid user experiences</span>. Whether it is optimizing a MERN app or solving DSA challenges, I strive for clean, efficient code.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-200 bg-purple-600 rounded-full hover:bg-purple-700 shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]">
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Right: Bento Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-4">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={card.className}
              >
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  perspective={1000}
                  glareEnable={true}
                  glareMaxOpacity={0.15}
                  className="h-full"
                >
                  <div className="group relative h-full p-8 rounded-3xl bg-gray-900/50 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all">
                    {/* Icon Glow Effect */}
                    <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

                    <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${card.color} mb-6 shadow-lg`}>
                      <div className="text-white">{card.icon}</div>
                    </div>

                    <h4 className="text-xl font-bold text-white mb-3">{card.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};