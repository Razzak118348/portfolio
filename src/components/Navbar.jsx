import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "Education", href: "#education" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-gray-900/80 backdrop-blur-md shadow-md"
          : "py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <a
          className="text-2xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10 text-glow text-white">
            Abdur Razzak
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-gray-300 hover:text-primary transition-all duration-300 relative group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-white z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-gray-900/95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8 text-2xl"
            >
              {navItems.map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  className="text-gray-300 hover:text-primary transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
