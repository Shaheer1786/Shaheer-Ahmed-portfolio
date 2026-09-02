import { motion } from "framer-motion";
import { BookOpen, Briefcase, MapPin, Target } from "lucide-react";
import SectionHeading from "./SectionHeading";

const infoCards = [
  { icon: MapPin, label: "Location", value: "Karachi, Pakistan" },
  { icon: BookOpen, label: "Education", value: "Computer Science" },
  { icon: Target, label: "Focus", value: "Frontend Development" },
  { icon: Briefcase, label: "Experience", value: "Frontend Dev. Internship" },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading index="01" title="About Me" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-5 text-[15px] leading-relaxed text-mist-300 sm:text-base"
          >
            <p>
              I'm a Computer Science graduate from Muhammad Ali Jinnah
              University, based in Karachi, with a clear focus on frontend
              development. Most of my hands-on work has centered around
              React.js, JavaScript, HTML and CSS — building interfaces that
              are structured, responsive and easy to use.
            </p>
            <p>
              That focus was put into practice during a Frontend Development
              internship at Systems, where I worked on user-facing web
              interfaces and contributed to an Adobe project, gaining direct
              exposure to how frontend work happens inside a professional
              software team.
            </p>
            <p>
              Outside of that, I've built a handful of academic projects
              spanning different problem spaces — from inventory tracking to
              data-based estimation and learning tools — each one a chance to
              practice turning a problem into a working interface. I'm still
              early in my career and genuinely enjoy the process of learning,
              which keeps pulling me toward new frontend concepts and
              real-world applications to build.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {infoCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
                className="glass-panel rounded-xl p-5"
              >
                <card.icon size={18} className="text-signal-cyan" />
                <p className="mt-4 text-xs text-mist-500">{card.label}</p>
                <p className="mt-1 text-sm font-medium text-mist-100">
                  {card.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
