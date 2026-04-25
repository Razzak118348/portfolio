import { motion, useMotionValue, useSpring } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { SiLeetcode, SiMedium } from "react-icons/si";
import { useEffect, useState } from "react";

const socialLinks = [
  { icon: <Github className="w-5 h-5 md:w-6 md:h-6" />, href: "https://github.com/Razzak118348", label: "GitHub", color: "hover:text-white" },
  { icon: <Linkedin className="w-5 h-5 md:w-6 md:h-6" />, href: "https://linkedin.com/in/abdur-razzak-0a3b91321", label: "LinkedIn", color: "hover:text-[#0077B5]" },
  { icon: <SiLeetcode className="w-5 h-5 md:w-6 md:h-6" />, href: "https://leetcode.com/u/abdur_razzak1344/", label: "LeetCode", color: "hover:text-[#FFA116]" },
  { icon: <SiMedium className="w-5 h-5 md:w-6 md:h-6" />, href: "https://medium.com/@abdurrazzak118348", label: "Medium", color: "hover:text-white" },
  { icon: <Mail className="w-5 h-5 md:w-6 md:h-6" />, href: "mailto:abdurrazzak118348@gmail.com", label: "Email", color: "hover:text-[#EA4335]" },
];

export const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();

    const handleMouseMove = (e) => {
      if (!isMobile) {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile, mouseX, mouseY]);

  return (
    <section id="hero" className="relative  flex items-center justify-center pt-10 md:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#020617]">

      {/* 1. Background System (Optimized) */}
      <div className="absolute inset-0 pointer-events-none">
        {!isMobile && (
          <motion.div
            style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
            className="absolute w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-primary/10 rounded-full blur-[80px] lg:blur-[120px]"
          />
        )}
        <div className="absolute inset-0 opacity-[0.1] lg:opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40' fill='%2394a3b8' fill-opacity='0.2'/%3E%3C/svg%3E")` }}
        />
      </div>

      <div className="container max-w-6xl mx-auto z-10 flex flex-col items-center py-20 lg:py-0">

        {/* 2. Responsive Avatar Orbit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-8 md:mb-12"
        >
          {/* Mobile rings are slightly smaller to prevent layout shift */}
          <div className="absolute inset-0 rounded-full border border-primary/20 scale-[1.15] md:scale-125 animate-[ping_3s_linear_infinite]" />

          <div className="relative group p-1 rounded-full bg-gradient-to-tr from-primary via-purple-500 to-pink-500 overflow-hidden shadow-xl shadow-primary/10">
            <img
              src="/razzakpic.png"
              alt="Abdur Razzak"
              className="w-28 h-28 sm:w-36 sm:h-36 lg:w-48 lg:h-48 rounded-full object-cover bg-[#0f172a] transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-950/90 backdrop-blur-md border border-white/10 whitespace-nowrap">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-emerald-400">Open to Work</span>
          </div>
        </motion.div>

        {/* 3. Typography Content */}
        <div className="text-center space-y-6 md:space-y-8 w-full max-w-4xl">
          <div className="space-y-3">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs lg:text-sm"
            >
              Full-Stack MERN Developer
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl sm:text-4xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight"
            >
              Abdur <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-500">Razzak</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-200 text-sm sm:text-base lg:text-xl leading-relaxed max-w-2xl mx-auto font-light px-4"
          >
        Crafting the future of the web through<span className="text-white font-medium">performance-first</span>  development. I bridge the gap between robust backend architecture and fluid user experiences, leveraging the power of <span className="text-white font-medium">Next.js and the MERN stack</span> to build interfaces that feel as good as they function.
          </motion.p>

          {/* 4. Adaptive CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6"
          >
            <a href="#projects" className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white font-bold rounded-xl transition-all hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] active:scale-95">
              View Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a href="/resume.pdf" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-bold rounded-xl transition-all hover:bg-white/10 active:scale-95">
              <Download className="w-4 h-4" /> Resume
            </a>
          </motion.div>

          {/* 5. Social Links (Mobile-Friendly touch targets) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-5 sm:gap-8 pt-4 md:pt-8"
          >
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className={`text-gray-500 transition-all p-2 rounded-lg ${link.color} hover:bg-white/5 active:scale-125`}
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 6. Hide scroll on small mobile heights */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="hidden sm:flex absolute bottom-8 lg:bottom-12 flex-col items-center gap-2 text-gray-600"
      >
        <span className="text-[9px] uppercase tracking-widest font-bold">Explore</span>
        <div className="w-[1px] h-10 lg:h-16 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
};