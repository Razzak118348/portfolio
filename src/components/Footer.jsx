import { ArrowUp, Github, Linkedin, Facebook,  } from "lucide-react";
import { motion } from "framer-motion";
import { FaMedium } from "react-icons/fa";
export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-12 px-4 bg-gray-900 text-white border-t border-gray-700 mt-12 flex flex-col md:flex-row items-center justify-between gap-4"
    >
      {/* Copyright */}
      <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Abdur Razzak, All rights reserved.
      </p>

      {/* Social Icons */}
      <div className="flex space-x-4">
        <a
          href="https://linkedin.com/in/abdur-razzak-0a3b91321"
          target="_blank"
          className="hover:text-primary transition-colors"
        >
          <Linkedin className="h-6 w-6" />
        </a>
        <a
          href="https://github.com/Razzak118348"
          target="_blank"
          className="hover:text-primary transition-colors"
        >
          <Github className="h-6 w-6" />
        </a>
        <a
          href="https://www.facebook.com/abdurrazzak118348"
          target="_blank"
          className="hover:text-primary transition-colors"
        >
          <Facebook className="h-6 w-6" />
        </a>
        <a
          href="https://medium.com/@abdurrazzak118348"
          target="_blank"
          className="hover:text-primary transition-colors"
        >
          <FaMedium  className="h-6 w-6" />
        </a>
      </div>

      {/* Scroll to Top */}
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors transform hover:-translate-y-1 hover:scale-110"
      >
        <ArrowUp size={20} />
      </a>
    </motion.footer>
  );
};
