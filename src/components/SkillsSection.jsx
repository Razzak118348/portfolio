import { useState } from "react";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 100, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 100, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "Firebase", level: 70, category: "backend" },
  { name: "MySQL", level: 70, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-12 px-4 relative  text-white">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category, key) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(category)}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "px-5 py-2 rounded-full font-medium transition-colors duration-300 capitalize border-2 border-transparent hover:border-primary",
                activeCategory === category
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                  : "bg-gray-800 text-gray-300"
              )}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 mb-4">
                <CircularProgressbar
                  value={skill.level}
                  text={`${skill.level}%`}
                  strokeWidth={6}
                  styles={buildStyles({
                    pathColor: `linear-gradient(45deg, #4ade80, #3b82f6)`,
                    textColor: "#fff",
                    trailColor: "#1f2937",
                    textSize: "16px",
                  })}
                />
              </div>
              <h4 className="text-center font-medium">{skill.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
