import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Mail, Sparkles } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
export const HeroSection = () => {
  const socialLinks = [
    {
      icon: <Github className="h-5 w-5 md:h-6 md:w-6" />,
      href: "https://github.com/Razzak118348",
      label: "GitHub",
      color: "hover:bg-gray-800"
    },
    {
      icon: <Linkedin className="h-5 w-5 md:h-6 md:w-6" />,
      href: "https://linkedin.com/in/abdur-razzak-0a3b91321",
      label: "LinkedIn",
      color: "hover:bg-blue-600/20"
    },
    {
      icon: <Facebook className="h-5 w-5 md:h-6 md:w-6" />,
      href: "https://www.facebook.com/abdurrazzak118348",
      label: "Facebook",
      color: "hover:bg-blue-500/20"
    },
    {
    icon: <SiLeetcode className="h-5 w-5 md:h-6 md:w-6" />,
    href: "https://leetcode.com/u/abdur_razzak1344/",
    label: "LeetCode",
    color: "hover:bg-yellow-500/20"
  },
    {
      icon: (
        <svg className="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      ),
      href: "https://medium.com/@abdurrazzak118348",
      label: "Medium",
      color: "hover:bg-gray-700"
    },
    {
      icon: <Mail className="h-5 w-5 md:h-6 md:w-6" />,
      href: "mailto:abdurrazzak118348@gmail.com",
      label: "Email",
      color: "hover:bg-red-500/20"
    }
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-[128px] animate-pulse delay-1000" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}} />
      </div>

      <div className="container max-w-5xl mx-auto text-center z-10">
        {/* Profile Picture with Enhanced Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          className="flex justify-center mb-8 relative"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl animate-pulse" />

          {/* Profile Image */}
          <div className="relative group">
            <img
              src="/razzakpic.png"
              alt="Abdur Razzak"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-300"
            />

            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs px-3 py-1 rounded-full whitespace-nowrap z-20 shadow-lg"
            >
              <span className="flex items-center gap-1">
                <Sparkles size={12} />
                Open to Work
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Hero Text */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary mb-4">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl md:text-3xl font-bold tracking-tight"
          >
            <span className="text-gray-400">Hi,I am</span>{" "}
            <span className="text-primary">Abdur</span>{" "}
            <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Razzak
            </span>
          </motion.h1>


          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-200 leading-relaxed max-w-2xl mx-auto text-base md:text-lg"
          >
            I develop stellar web experiences with modern technologies. Specializing
            in front-end and MERN stack, Next.js development, I build interfaces that are
            both beautiful and functional.
          </motion.p>

          {/* Social Media Links - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative p-3 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-primary/50 transition-all duration-300 ${social.color}`}
                aria-label={social.label}
              >
                {/* Tooltip */}
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {social.label}
                </span>

                {/* Icon with hover effect */}
                <span className="text-gray-300 group-hover:text-primary transition-colors">
                  {social.icon}
                </span>

                {/* Ripple effect on hover */}
                <span className="absolute inset-0 rounded-xl bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-6"
          >
            <a
              href="#projects"
              className="group relative px-6 py-2 bg-primary text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
            >
              <span className="relative z-10">View My Work</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

           <a
                href="https://drive.google.com/file/d/16b7UKkenUbMs_QfXQHjGLgzZiDb_8KwS/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator - Enhanced */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};