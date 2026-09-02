import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading index="06" title="Certifications & Courses" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.course}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
              className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-signal-cyan/30"
            >
              <Award size={18} className="text-signal-cyan" />
              <h3 className="mt-4 text-sm font-medium text-mist-100">
                {cert.course}
              </h3>
              <p className="mt-1.5 text-xs text-mist-500">{cert.provider}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
