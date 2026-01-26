import { ArrowRight, ExternalLink, Github } from "lucide-react";
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
    githubUrl:""
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
    backend: "https://github.com/Razzak118348/kajbondu-server/"
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
  },
];

const moreProjects = [
  { title: "Alpha Musical Club", url: "https://loquacious-caramel-8a51e9.netlify.app/" },
  { title: "Charming Cottage", url: "https://charming-cottage.web.app/" },
  { title: "Car Service", url: "https://car-service21.web.app/" },
  { title: "Book Review", url: "https://bookreview-razzak.netlify.app/" },
  { title: "Daily News", url: "https://daily-news-with-react.web.app/" },
  { title: "YouTube Control Extension", url: "https://github.com/Razzak118348/Youtube-filter-extension" },
  { title: "HSTU Bus", url: "https://hstubussshedule.web.app/" },
  { title: "Typing Game", url: "https://razzak118348.github.io/Alpha-clash-game/index.html" },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 text-white">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects, carefully crafted with attention to detail, performance, and user experience.
        </p>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.25}
                glareColor="#ffffff"
                glarePosition="all"
                className="rounded-xl bg-linear-to-r from-gray-800 via-gray-700 to-gray-800 p-1 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-gray-900 rounded-lg overflow-hidden h-full flex flex-col">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm flex-1">{project.description}</p>
                    <div className="flex space-x-3 mt-4">
                      <a href={project.demoUrl} target="_blank" className="hover:text-primary transition-colors">
                        <ExternalLink size={20} />
                      </a>
                      <a href={project.githubUrl} target="_blank" className="hover:text-primary transition-colors">
                        <Github size={20} />
                      </a>
                      {project.backend && (
                        <a href={project.backend} target="_blank" className="hover:text-primary transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-server"><rect x="2" y="3" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="13" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="7" x2="6.01" y2="7"></line><line x1="6" y1="17" x2="6.01" y2="17"></line></svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* More Projects */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-center">More Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {moreProjects.map((project, idx) => (
              <a
                key={idx}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-800 rounded-lg shadow-lg p-5 flex flex-col items-center hover:shadow-2xl transition-all"
              >
                <span className="font-medium mb-2">{project.title}</span>
                <ExternalLink className="text-primary group-hover:scale-110 transition-transform" size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Github Button */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Razzak118348"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
