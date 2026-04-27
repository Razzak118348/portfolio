import { Briefcase, Code, User, Terminal, Sparkles, Zap } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Tilt from "react-parallax-tilt";


const cards = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "MERN Stack",
    desc: "Architecting scalable full-stack solutions with MongoDB, Express, React, and Node.js.",
    color: "from-blue-500/20 to-cyan-400/20",
    border: "group-hover:border-blue-500/50",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    icon: <User className="w-6 h-6" />,
    title: "UI/UX Design",
    desc: "Crafting pixel-perfect, high-fidelity animated interfaces.",
    color: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Experience",
    desc: "Ex-Intern at NerdCoders Ltd. Specialized in Agile workflows.",
    color: "from-orange-500/20 to-red-500/20",
    border: "group-hover:border-orange-500/50",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: "Problem Solving",
    desc: "Active DSA practitioner. Optimizing complexity for performance.",
    color: "from-green-500/20 to-emerald-400/20",
    border: "group-hover:border-green-500/50",
    className: "md:col-span-2 md:row-span-1",
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

// --- Sub-Component: Bento Card (JavaScript Version) ---
const BentoCard = ({ card }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Removed Type Annotations for JS compatibility
  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      variants={itemVariants}
      className={`${card.className} group relative`}
      onMouseMove={handleMouseMove}
    >
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        perspective={1200}
        glareEnable={false}
        className="h-full"
      >
        <div className={`relative h-full p-8 rounded-[2.5rem] bg-[#0f172a]/40 border border-white/5 backdrop-blur-3xl overflow-hidden transition-colors duration-500 ${card.border}`}>

          {/* Spotlight Effect - Dynamic Mouse Tracking */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition duration-300"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  600px circle at ${mouseX}px ${mouseY}px,
                  rgba(255,255,255,0.1),
                  transparent 80%
                )
              `,
            }}
          />

          {/* Background Gradient Mesh */}
          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.color} blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

          {/* Card Icon and Content */}
          <div className="relative z-10">
            <div className="inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
              <div className="text-[#3b82f6]">{card.icon}</div>
            </div>

            <h4 className="text-2xl font-bold text-white mb-3 tracking-tight flex items-center gap-2">
              {card.title}
              <Zap className="w-4 h-4 text-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity" />
            </h4>
            <p className="text-gray-400 text-base leading-relaxed font-light">
              {card.desc}
            </p>
          </div>

          {/* Decorative Corner Icon */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <Sparkles className="w-5 h-5 text-white/10" />
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

// --- Main Section ---
export const AboutSection = () => {
  return (
    <section id="about" className="py-10 md:py-16 px-2 md:px-6 relative overflow-hidden bg-[#040414]">
      {/* Texture and Glow Overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        >
          {/* Content Column */}
          <div className="lg:col-span-5 space-y-10">
            <motion.div variants={itemVariants} className="space-y-4">
              <span className="text-[#3b82f6] font-black uppercase tracking-[0.3em] text-xs">Path to Engineering</span>
              <h2 className="text-2xl md:text-4xl font-black text-white leading-none">
                Bridging
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#a855f7] to-[#ec4899]"> Logic & Design</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-gray-400 text-xl leading-relaxed font-light">
                As a final-year student at <span className="text-white font-semibold">HSTU</span>, I do not just write code; I architect digital experiences. My focus lies at the intersection of <span className="text-white">robust system design</span> and <span className="text-white">empathetic UI</span>.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  "Specialized in MERN Stack Scalability",
                  "Performance-First Animation Logic",
                  "Data Structures & Algorithm Enthusiast",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full text-xl bg-[#3b82f6]" />
<p className="font-bold text-xl">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-6">
              <a href="#contact" className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white overflow-hidden rounded-2xl bg-[#3b82f6] transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-blue-500/20">
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>
            </motion.div>
          </div>

          {/* Grid Column */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
            {cards.map((card, idx) => (
              <BentoCard key={idx} card={card} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};