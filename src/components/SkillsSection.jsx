import { motion } from "framer-motion";


import { SiHtml5, SiTailwindcss, SiJavascript ,SiCss ,SiReact,
  SiRedux,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,} from "react-icons/si";
  import { VscVscode } from "react-icons/vsc";
const skills = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Redux", icon: SiRedux },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Firebase", icon: SiFirebase },
  { name: "MySQL", icon: SiMysql },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Figma", icon: SiFigma },
  { name: "Vscode", icon: VscVscode },

];

export const SkillsSection = () => {
  return (
    <section className="py-8 bg-[#030712] text-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">
            My <span className="text-indigo-500">Tech Stack</span>
          </h2>
          <p className="text-gray-200 mt-3">
            Technologies I use to build modern web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
<motion.div
  key={index}
  whileHover={{ y: -5 }}
  transition={{ duration: 0.25 }}
  className="group relative flex items-center gap-2 px-3 py-4
  rounded-xl bg-gray-900 border border-gray-800
  hover:border-indigo-500
  hover:shadow-[0_0_15px_rgba(99,102,241,0.35)]
  transition-all duration-300"
>

  {/* Gradient Glow */}
  <div className="absolute inset-0 rounded-xl bg-gradient-to-r
  from-indigo-500/10 via-purple-500/10 to-pink-500/10
  opacity-0 group-hover:opacity-100 transition duration-300"></div>

  {/* Icon */}
  <Icon
    size={20}
    className="relative z-10 text-indigo-400 group-hover:scale-110 transition"
  />

  {/* Name */}
  <p className="relative z-10 text-xs md:text-sm font-medium text-gray-300 whitespace-nowrap">
    {skill.name}
  </p>

</motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};