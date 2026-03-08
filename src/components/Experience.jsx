import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Briefcase, Code, Globe } from "lucide-react";

import "react-vertical-timeline-component/style.min.css";

export const Experience = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-20 px-4 bg-[#030712] text-white">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-xl md:text-2xl font-bold text-center mb-16">
          Professional <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Experience</span>
        </h2>

        <VerticalTimeline lineColor="hsl(var(--primary))" layout="2-columns">

            {/* ================= NerdCoders ================= */}
          <VerticalTimelineElement
            date="Feb 2025 – Jun 2025"
            icon={<Briefcase />}
            iconStyle={{
              background: "hsl(var(--primary))",
              color: "#fff"
            }}
            contentStyle={{
              background: "hsl(var(--card))",
              borderRadius: "14px"
            }}
          >
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }}>
              <h3 className="text-xl font-semibold">
                Software Engineer (Intern)
              </h3>

              <h4 className="text-primary font-medium mt-1">
                NerdCoders Ltd · Remote (Bangladesh)
              </h4>

              <ul className="mt-4 list-disc pl-5 text-sm space-y-2">
                <li>Contributed to frontend & backend using React, Next.js & FastAPI</li>
                <li>Applied Clean Code principles (DRY, KISS, SOLID)</li>
                <li>Used Git, PR reviews, and Agile workflows</li>
                <li>Participated in sprint planning & daily stand-ups and Team work</li>
              </ul>
            </motion.div>
          </VerticalTimelineElement>

          {/* ================= CodeAlpha ================= */}
          <VerticalTimelineElement
            date="Aug 2025 – Oct 2025"
            icon={<Code />}
            iconStyle={{
              background: "hsl(var(--primary))",
              color: "#fff"
            }}
            contentStyle={{
              background: "hsl(var(--card))",
              borderRadius: "14px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
            }}
          >
            <motion.div {...fadeUp}>
              <h3 className="text-xl font-semibold">
                Full-Stack Developer (Intern)
              </h3>

              <h4 className="text-primary font-medium mt-1">
                CodeAlpha · Remote (India)
              </h4>

              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                Real-world project-based full-stack development internship.
              </p>

              <ul className="mt-4 list-disc pl-4 text-sm space-y-2">
                <li>Worked on production-level MERN stack projects</li>
                <li>Implemented frontend & backend features collaboratively</li>
                <li>Focused on clean, scalable, and maintainable code</li>
              </ul>
            </motion.div>
          </VerticalTimelineElement>

          {/* ================= IEEE ================= */}
          <VerticalTimelineElement
            date="May 2025 – January 2026"
            icon={<Globe />}
            iconStyle={{
              background: "hsl(var(--primary))",
              color: "#fff"
            }}
            contentStyle={{
              background: "hsl(var(--card))",
              borderRadius: "14px"
            }}
          >
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <h3 className="text-xl font-semibold">Webmaster</h3>

              <h4 className="text-primary font-medium mt-1">
                IEEE Computer Society – HSTU Student Branch
              </h4>

              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                Led the digital presence of the IEEE HSTU chapter.
              </p>

              <ul className="mt-4 list-disc pl-5 text-sm space-y-2">
                <li>Designed & maintained a professional, responsive website</li>
                <li>Managed content, visuals, and updates</li>
                <li>Ensured alignment with IEEE global standards</li>
              </ul>
            </motion.div>
          </VerticalTimelineElement>



        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;