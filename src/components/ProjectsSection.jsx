import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "KajBondhu",
    description: "A service booking web app where users hire local workers for tasks. Built with React.js, Tailwind CSS, Node.js,Express.js, and MongoDB. Features: service filtering, user authentication, REST API, admin panel, Firebase hostingand authentication.",
    image: "/projects/project1.png",
    tags: ["JavaScript", "React", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "Firebase"],
    demoUrl: "https://kajbondu.web.app/",
    githubUrl: "https://github.com/Razzak118348/kajbondu",
    backend: "https://github.com/Razzak118348/kajbondu-server/"
  },

  {
    id: 2,
    title: "Crafted Canvas",
    description:
      "Full-stack artist platform, User can publish their card or delete their craft.It is a vartual platform to shere craft. MERN Stack and Tailwind CSS also use Firebase,REST API.",
    image: "/projects/project2.png",
    tags: ["JavaScript", "React", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "Firebase"],
    demoUrl: "https://craftedcanvas10.web.app/",
    githubUrl: "https://github.com/Razzak118348/CraftedCanvas-client-site",
    backend: "https://github.com/Razzak118348/CraftedCanvas-server-site"
  },
  {
    id: 3,
    title: "DIoT Lab",
    description:
      "DIoT Lab is a cutting-edge platform designed to support academic research and innovation in the Internet of Things (IoT) domain. Created for university students and researchers, it serves as a hub for over 200 students to explore, collaborate, and contribute to groundbreaking projects.",
    image: "/projects/project3.png",
    tags: ["React", "JavaScript", "TailwindCss", "Firebase", "JSON"],
    demoUrl: "https://lab-research-f5c1b.web.app/",
    githubUrl: "https://github.com/Razzak118348/Lab-website",
  },
];

const moreProjects = [

  {
    title: "Alpha Musical Club",
    url: "https://loquacious-caramel-8a51e9.netlify.app/",

  },
  {
    title: "Charming Cottage",
    url: "https://charming-cottage.web.app/",
  },
  {
    title: "Car Service",
    url: "https://car-service21.web.app/",

  },
  {
    title: "Book Review",
    url: "https://bookreview-razzak.netlify.app/",
  },

  {
    title: "Daily News",
    url: "https://daily-news-with-react.web.app/",
  },
{
title:"YouTube Control Extension",
url: "https://github.com/Razzak118348/Youtube-filter-extension",
},
  {
    title: "HSTU Bus",
    url: "https://hstubussshedule.web.app/",

  },
  {
    title: "Typing Game",
    url: "https://razzak118348.github.io/Alpha-clash-game/index.html",
  },
];


export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>

                    <a href={project.backend ? project.backend : "#"}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-server"><rect x="2" y="3" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="13" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="7" x2="6.01" y2="7"></line><line x1="6" y1="17" x2="6.01" y2="17"></line></svg>
                    </a>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More projects */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-center">More Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {moreProjects.map((project, idx) => (
              <a
                key={idx}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-lg shadow-xs p-5 flex flex-col items-center hover:shadow-md transition"
              >
                <span className="font-medium mb-2">{project.title}</span>
                <ExternalLink className="text-primary group-hover:scale-110 transition-transform" size={18} />
              </a>
            ))}
          </div>
        </div>

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
