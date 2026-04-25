import { ArrowRight, ExternalLink, Github, Server, Award, Star } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    id:1,
    title:"Nirapod Bangladesh Songstha",
    description:"Nirapod Bangladesh(SAFE BD) is a non-government organization dedicated to helping vulnerable communities build safer homes and stronger futures.I used Full stack MERN and JWT,Firebase for authentication.Fully customize and client satisfaction project.This is a private project so source code do not provided here.",
    image:"/projects/safebdproject.jpg",
    tags:["JavaScript", "React", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "Firebase","JWT","Admin pannel"],
    demoUrl:"https://www.nirapodbangladesh.org/",
    githubUrl:"",
    featured: true
  },
  {
    id: 2,
    title: "KajBondhu",
    description:
      "A service booking web app where users hire local workers for tasks. Built with React.js, Tailwind CSS, Node.js, Express.js, and MongoDB. Features: service filtering, user authentication, REST API, admin panel, Firebase hosting and authentication.",
    image: "/projects/project1.png",
    tags: ["JavaScript", "React", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "Firebase"],
    demoUrl: "https://kajbondu.web.app/",
    githubUrl: "https://github.com/Razzak118348/kajbondu",
    backend: "https://github.com/Razzak118348/kajbondu-server/",
    featured: true
  },
  {
    id: 3,
    title: "Alpha Community",
    description:
      "Responsive website for Alpha Community, a rock music brand. Striking homepage, event highlights, and engaging UI.This is client satisfaction project and it was built using React.js, Tailwind CSS, and Firebase,Rest API integration and Firebase hosting.",
    image: "/projects/project4.png",
    tags: ["JavaScript", "React", "TailwindCSS", "Firebase"],
    demoUrl: "https://loquacious-caramel-8a51e9.netlify.app/",
    githubUrl: "https://github.com/Razzak118348/Alpha-community",
    featured: true
  },
  {
    id: 4,
    title: "DIoT Lab",
    description:
      "Platform supporting academic research in IoT. Hub for 200+ students to explore and collaborate on projects.Features are=>1)Research Collaboration: A centralized space for students and professors to share ideas and findings.2)Project Management: Simplifies organizing and tracking research progress with an intuitive interface.",
    image: "/projects/project3.png",
    tags: ["React", "JavaScript", "TailwindCss", "Firebase", "JSON"],
    demoUrl: "https://lab-research-f5c1b.web.app/",
    githubUrl: "https://github.com/Razzak118348/Lab-website",
    featured: true
  },
 {
    id: 5,
    title: "Get Hyped",
    description: "A motion-first landing page utilizing React 19 and GSAP. Features high-end micro-interactions, smooth scroll orchestration, and advanced SVG filtering.",
    image: "/projects/project5.png",
    tags: ["React 19", "GSAP", "Framer Motion", "Tailwind"],
    demoUrl: "https://gethyped121.netlify.app/",
    githubUrl: "https://github.com/Razzak118348/GetHyped",
    featured:true
  },
];

const moreProjects = [
  { title: "Alpha Musical Club", url: "https://loquacious-caramel-8a51e9.netlify.app/", category: "Music" },
  { title: "Charming Cottage", url: "https://charming-cottage.web.app/", category: "Real Estate" },
  { title: "Car Service", url: "https://car-service21.web.app/", category: "Automotive" },
  { title: "Book Review", url: "https://bookreview-razzak.netlify.app/", category: "Literature" },
  { title: "Daily News", url: "https://daily-news-with-react.web.app/", category: "News" },
  { title: "YouTube Control Extension", url: "https://github.com/Razzak118348/Youtube-filter-extension", category: "Browser Extension" },
  { title: "HSTU Bus", url: "https://hstubussshedule.web.app/", category: "Transportation" },
  { title: "Typing Game", url: "https://razzak118348.github.io/Alpha-clash-game/index.html", category: "Game" },
];

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.15 }
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-20 px-4 text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >


          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects, carefully crafted with attention to detail,
            performance, and user experience.
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              custom={i}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#8b5cf6"
                glarePosition="all"
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                className="group relative h-full"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />

                {/* Card */}
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-800 hover:border-primary/30 transition-all duration-300 h-full">
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Tags overlay */}
                    <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs text-white  font-bold bg-black/60 backdrop-blur-sm border border-primary/30 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-2">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 pt-2 border-t border-gray-800">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-all group/link"
                      >
                        <ExternalLink size={16} className="text-primary group-hover/link:scale-110 transition-transform" />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all group/link"
                        >
                          <Github size={16} className="group-hover/link:scale-110 transition-transform" />
                          <span className="text-sm font-medium">Code</span>
                        </a>
                      )}

                      {project.backend && (
                        <a
                          href={project.backend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all group/link"
                        >
                          <Server size={16} className="group-hover/link:scale-110 transition-transform" />
                          <span className="text-sm font-medium">Backend</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        {/* More Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold inline-flex items-center gap-2">
              <Award size={24} className="text-primary" />
              More Projects
            </h3>
            <p className="text-gray-200 mt-2">Explore my other creations and experiments</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {moreProjects.map((project, idx) => (
              <motion.a
                key={idx}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-3 border border-gray-800 hover:border-primary/30 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                  <ExternalLink size={16} className="text-gray-500 group-hover:text-primary group-hover:rotate-12 transition-all" />
                </div>
                <h4 className="font-medium text-lg mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Razzak118348"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-purple-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition-all"
          >
            <Github size={20} className="group-hover:rotate-12 transition-transform" />
            <span>View All Projects on GitHub</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Star size={16} className="text-primary" />
              <span>20+ Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Active Development</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};