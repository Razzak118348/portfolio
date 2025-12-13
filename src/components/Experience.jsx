import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import {
  Briefcase,
  Code,
  Globe,
} from "lucide-react";

import "react-vertical-timeline-component/style.min.css";

export const Experience = () => {
  return (
    <section id="experience" className="py-12 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Professional <span className="text-primary">Experience</span>
        </motion.h2>

        <VerticalTimeline lineColor="hsl(var(--primary))">
          {/* CodeAlpha */}
          <VerticalTimelineElement
            contentStyle={{
              background: "hsl(var(--card))",
              color: "hsl(var(--foreground))",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid hsl(var(--card))",
            }}
            date="Aug 2025 – Oct 2025"
            iconStyle={{
              background: "hsl(var(--primary))",
              color: "#fff",
            }}
            icon={<Code />}
          >
            <h3 className="text-xl font-semibold">Full-Stack Developer (Intern)</h3>
            <h4 className="text-primary font-medium">
              CodeAlpha · Remote (India)
            </h4>

            <p className="text-muted-foreground mt-3">
              Real-world project-based full-stack development internship.
            </p>

            <ul className="mt-4 list-disc pl-5 space-y-2 text-sm">
              <li>Worked on production-level MERN stack projects</li>
              <li>Implemented frontend & backend features collaboratively</li>
              <li>Focused on clean, scalable, and maintainable code</li>
            </ul>
          </VerticalTimelineElement>

          {/* IEEE */}
          <VerticalTimelineElement
            contentStyle={{
              background: "hsl(var(--card))",
              color: "hsl(var(--foreground))",
              borderRadius: "12px",
            }}
            contentArrowStyle={{
              borderRight: "7px solid hsl(var(--card))",
            }}
            date="May 2025 – Oct 2025"
            iconStyle={{
              background: "hsl(var(--primary))",
              color: "#fff",
            }}
            icon={<Globe />}
          >
            <h3 className="text-xl font-semibold">Webmaster</h3>
            <h4 className="text-primary font-medium">
              IEEE Computer Society – HSTU Student Branch
            </h4>

            <p className="text-muted-foreground mt-3">
              Led the digital presence of the IEEE HSTU chapter.
            </p>

            <ul className="mt-4 list-disc pl-5 space-y-2 text-sm">
              <li>Designed & maintained a professional, responsive website</li>
              <li>Managed content, visuals, and updates</li>
              <li>Ensured alignment with IEEE global standards</li>
            </ul>
          </VerticalTimelineElement>

          {/* NerdCoders */}
          <VerticalTimelineElement
            contentStyle={{
              background: "hsl(var(--card))",
              color: "hsl(var(--foreground))",
              borderRadius: "12px",
            }}
            contentArrowStyle={{
              borderRight: "7px solid hsl(var(--card))",
            }}
            date="Feb 2025 – Jun 2025"
            iconStyle={{
              background: "hsl(var(--primary))",
              color: "#fff",
            }}
            icon={<Briefcase />}
          >
            <h3 className="text-xl font-semibold">Software Engineer (Intern)</h3>
            <h4 className="text-primary font-medium">
              NerdCoders Ltd · Remote (Bangladesh)
            </h4>

            <ul className="mt-4 list-disc pl-5 space-y-2 text-sm">
              <li>
                Contributed to frontend & backend using React, Next.js & FastAPI
              </li>
              <li>
                Applied Clean Code principles (DRY, KISS, SOLID)
              </li>
              <li>
                Used Git, PR reviews, and Agile workflows
              </li>
              <li>
                Participated in sprint planning & daily stand-ups
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};
export default Experience;