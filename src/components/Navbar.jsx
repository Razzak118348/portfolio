import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", id: "#hero" },
  { name: "About", id: "#about" },
  { name: "Experience", id: "#experience" },
  { name: "Skills", id: "#skills" },
  { name: "Projects", id: "#projects" },
  { name: "Education", id: "#education" },
  { name: "Contact", id: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  // Detect scroll and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleNavClick = (id) => {
    setIsMenuOpen(false);
    const section = document.querySelector(id);
    if (section) {
      const offset = 80; // Offset for fixed navbar
      const elementPosition = section.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-300",
          isScrolled
            ? "py-3 bg-gray-900/95 backdrop-blur-md shadow-lg"
            : "py-5 bg-transparent"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-2 text-xl md:text-2xl font-bold text-white hover:cursor-pointer transition-all duration-300 relative group z-50"
          >
            <img
              src="/favicon.ico"
              alt="logo"
              className="w-7 h-7 md:w-8 md:h-8 object-contain"
            />
            <span className="hidden sm:inline text-glow">Abdur Razzak</span>
            <span className="sm:hidden text-glow">AR</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  "cursor-pointer text-sm lg:text-base transition-all duration-300 relative group",
                  activeSection === item.id
                    ? "text-primary"
                    : "text-gray-300 hover:text-primary"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300",
                    activeSection === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  )}
                />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white z-50 bg-gray-800/50 rounded-lg backdrop-blur-sm"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl z-40 md:hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-700">
                <span className="text-xl font-bold text-white">Menu</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto py-8">
                <div className="flex flex-col space-y-2 px-4">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleNavClick(item.id)}
                      className={cn(
                        "text-left px-4 py-3 rounded-lg transition-all duration-300 text-lg",
                        activeSection === item.id
                          ? "bg-primary/20 text-primary font-semibold"
                          : "text-gray-300 hover:bg-gray-800 hover:text-white"
                      )}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-700">
                <p className="text-sm text-gray-400 text-center">
                  © 2024 Abdur Razzak
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};