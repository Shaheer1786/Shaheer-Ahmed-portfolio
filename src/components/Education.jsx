import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading index="05" title="Education" />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="glass-panel flex flex-col gap-6 rounded-2xl p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-signal-gradient">
              <GraduationCap size={20} className="text-ink-950" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-mist-100">
                Muhammad Ali Jinnah University
              </h3>
              <p className="mt-1 text-sm text-mist-500">
                Bachelor of Science in Computer Science
              </p>
              <div className="mt-2 flex items-center gap-1.5 text-xs text-mist-700">
                <MapPin size={13} />
                Karachi, Pakistan
              </div>
            </div>
          </div>

          <span className="inline-flex w-fit items-center rounded-full border border-signal-cyan/30 bg-signal-cyan/10 px-4 py-1.5 text-xs font-medium text-signal-cyan">
            Graduate
          </span>
        </motion.div>
      </div>
    </section>
  );
}
