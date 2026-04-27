import { useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Server,
  Award,
  ChevronUp,
  Layout
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";

// --- Project Data ---
const projects = [
  {
    id: 1,
    title: "Nirapod Bangladesh Songstha",
    description: "A full-stack MERN platform for a non-profit. Implemented secure JWT-based authentication and a robust admin dashboard for resource management. High emphasis on client-driven customization and scalable architecture.",
    image: "/projects/safebdproject.jpg",
    tags: ["MERN", "JWT", "Firebase", "Admin Panel"],
    demoUrl: "https://www.nirapodbangladesh.org/",
    githubUrl: null, // Private project
    featured: true
  },
  {
    id: 2,
    title: "KajBondhu",
    description: "Service booking ecosystem connecting local labor with clients. Built with a RESTful API, dynamic filtering, and integrated Firebase hosting for fast content delivery and secure user sessions.",
    image: "/projects/project1.png",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    demoUrl: "https://kajbondu.web.app/",
    githubUrl: "https://github.com/Razzak118348/kajbondu",
    backend: "https://github.com/Razzak118348/kajbondu-server/",
    featured: true
  },
  {
    id: 3,
    title: "Alpha Community",
    description: "A high-performance brand site for a rock music community. Focused on engagement through striking UI components, event highlights, and optimized REST API data fetching.",
    image: "/projects/project4.png",
    tags: ["React", "Firebase", "Netlify", "UI/UX"],
    demoUrl: "https://loquacious-caramel-8a51e9.netlify.app/",
    githubUrl: "https://github.com/Razzak118348/Alpha-community",
    featured: true
  },
  {
    id: 4,
    title: "DIoT Lab",
    description: "Academic research hub supporting 200+ students. Features collaborative research tracking and an intuitive project management interface for academic transparency.",
    image: "/projects/project3.png",
    tags: ["React", "IoT", "Firebase", "JSON"],
    demoUrl: "https://lab-research-f5c1b.web.app/",
    githubUrl: "https://github.com/Razzak118348/Lab-website",
    featured: true
  },
  {
    id: 5,
    title: "Get Hyped",
    description: "A motion-heavy landing page showcasing advanced GSAP scroll-trigger animations and React 19 concurrent features. Includes complex SVG filtering and micro-interactions.",
    image: "/projects/project5.png",
    tags: ["React 19", "GSAP", "Framer", "Micro-interact"],
    demoUrl: "https://gethyped121.netlify.app/",
    githubUrl: "https://github.com/Razzak118348/GetHyped",
    featured: true
  }
];

const moreProjects = [
  { title: "Alpha Musical Club", url: "https://loquacious-caramel-8a51e9.netlify.app/", category: "Music" },
  { title: "Charming Cottage", url: "https://charming-cottage.web.app/", category: "Real Estate" },
  { title: "Car Service", url: "https://car-service21.web.app/", category: "Automotive" },
  { title: "Book Review", url: "https://bookreview-razzak.netlify.app/", category: "Literature" },
  { title: "Daily News", url: "https://daily-news-with-react.web.app/", category: "News" },
  { title: "YouTube Control Extension", url: "https://github.com/Razzak118348/Youtube-filter-extension", category: "Extension" },
  { title: "HSTU Bus", url: "https://hstubussshedule.web.app/", category: "Transit" },
  { title: "Typing Game", url: "https://razzak118348.github.io/Alpha-clash-game/index.html", category: "Game" },
];

// --- Sub-Component: Project Card ---
const ProjectCard = ({ project, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.1}
      tiltMaxAngleX={7}
      tiltMaxAngleY={7}
      className="h-full"
    >
      <div className="group relative h-full flex flex-col bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 shadow-2xl">
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80" />

          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-black/60 backdrop-blur-md border border-white/10 rounded-lg text-white">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          <div className="mt-auto flex items-center gap-3 pt-6 border-t border-white/5">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white font-bold text-xs rounded-xl hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] transition-all active:scale-95"
            >
              <ExternalLink size={14} /> LIVE DEMO
            </a>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all"
                title="Frontend Code"
              >
                <Github size={18} />
              </a>
            )}

            {project.backend && (
              <a
                href={project.backend}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all"
                title="Backend Code"
              >
                <Server size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </Tilt>
  </motion.div>
);

// --- Main Section Component ---
export const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="relative py-28 px-6 bg-[#020617] text-white overflow-hidden">
      {/* Dynamic Background Element */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Layout size={14} /> Portfolio
          </div>
          <h2 className="text-2xl md:text-4xl font-black mb-6">
            All of My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-fuchsia-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Focusing on scalable MERN architectures and high-fidelity user interfaces.
            Each project represents a unique challenge in performance and usability.
          </p>
        </motion.div>

        {/* 3-Column Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Toggle Button */}
        {projects.length > 3 && (
          <div className="flex justify-center mt-16">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative flex items-center gap-3 px-10 py-4 bg-transparent border-2 border-primary/50 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-primary transition-all duration-300"
            >
              {showAll ? (
                <>Collapse Projects <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" /></>
              ) : (
                <>View All Works <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
              )}
            </button>
          </div>
        )}

        {/* More Projects Micro-Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 border-t border-white/5"
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <Award className="text-primary" /> Additional Projects
              </h3>
              <p className="text-gray-500 mt-2">Small tools, UI kits, and legacy applications</p>
            </div>
            <a
              href="https://github.com/Razzak118348"
              className="text-gray-200 font-bold text-sm hover:underline flex items-center gap-2 hover:text-white transition-colors"
            >
              See full Archive on GitHub <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {moreProjects.map((project, idx) => (
              <motion.a
                key={idx}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-primary/20 transition-all"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-md uppercase">
                    {project.category}
                  </span>
                  <ExternalLink size={14} className="text-gray-600 group-hover:text-primary transition-colors" />
                </div>
                <h4 className="font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};