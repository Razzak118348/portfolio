import { motion, useMotionValue, useSpring } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight, Sparkles } from "lucide-react";
import { SiLeetcode, SiMedium } from "react-icons/si";
import { useEffect, useState } from "react";

const socialLinks = [
  { icon: <Github className="w-5 h-5" />, href: "https://github.com/Razzak118348", label: "GitHub", color: "hover:text-white" },
  { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/abdur-razzak-0a3b91321", label: "LinkedIn", color: "hover:text-[#0077B5]" },
  { icon: <SiLeetcode className="w-5 h-5" />, href: "https://leetcode.com/u/abdur_razzak1344/", label: "LeetCode", color: "hover:text-[#FFA116]" },
  { icon: <SiMedium className="w-5 h-5" />, href: "https://medium.com/@abdurrazzak118348", label: "Medium", color: "hover:text-white" },
  { icon: <Mail className="w-5 h-5" />, href: "mailto:abdurrazzak118348@gmail.com", label: "Email", color: "hover:text-[#EA4335]" },
];

export const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
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
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center py-20 lg:py-0 px-6 sm:px-12 lg:px-20 overflow-hidden bg-[#020617]">

      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        {!isMobile && (
          <motion.div
            style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
            className="absolute w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"
          />
        )}
      </div>

      <div className="container max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8 order-2 lg:order-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3 h-3" /> Full-Stack MERN Developer
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1]">
                Abdur <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-500">Razzak</span>
              </h1>
              <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                Crafting the future of the web through <span className="text-white font-medium">performance-first</span> development. I bridge the gap between robust backend architecture and fluid user experiences using <span className="text-white font-medium">Next.js and the MERN stack</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#projects" className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-2xl transition-all hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] active:scale-95">
                View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/resume.pdf" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-bold rounded-2xl transition-all hover:bg-white/10 active:scale-95">
                <Download className="w-4 h-4" /> Resume
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className={`text-gray-500 transition-all p-2 rounded-xl border border-white/5 bg-white/5 ${link.color} hover:border-primary/50 hover:bg-primary/5 active:scale-125`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Image Orbit */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Outer Glowing Rings */}
              <div className="absolute inset-0 rounded-[2.5rem] border border-primary/20 scale-[1.1] animate-[pulse_4s_infinite]" />
              <div className="absolute inset-0 rounded-[2.5rem] border border-purple-500/10 scale-[1.2] animate-[pulse_6s_infinite]" />

              {/* Main Image Card */}
              <div className="relative z-10 w-64 h-80 sm:w-80 sm:h-[420px] p-2 rounded-[2.5rem] bg-gradient-to-tr from-primary/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 overflow-hidden shadow-2xl">
                <img
                  src="/razzakpic.png" // Use the second photo here
                  alt="Abdur Razzak"
                  className="w-full h-full object-cover rounded-[2rem] grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />

                {/* Status Badge */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-2xl bg-gray-950/80 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/50">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-tighter text-emerald-400">Available for Hire</span>
                </div>
              </div>

              {/* Decorative Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 p-4 rounded-2xl bg-[#0f172a] border border-white/10 shadow-2xl hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-[#0f172a] bg-primary/20" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-gray-400">15+ Projects</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-gray-600"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
};