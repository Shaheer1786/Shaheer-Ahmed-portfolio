import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading index="04" title="Experience" />

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-[9px] top-2 bottom-2 w-px bg-white/[0.08] sm:left-[11px]"
          />

          <ol className="space-y-10">
            {experience.map((job, i) => (
              <motion.li
                key={job.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="relative pl-9 sm:pl-11"
              >
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-1.5 h-[19px] w-[19px] rounded-full border-2 sm:h-[23px] sm:w-[23px] ${
                    job.featured
                      ? "border-signal-cyan bg-ink-950 shadow-[0_0_0_4px_rgba(76,211,232,0.12)]"
                      : "border-white/20 bg-ink-950"
                  }`}
                />

                <div
                  className={`rounded-2xl p-6 ${
                    job.featured
                      ? "glass-panel shadow-glow sm:p-7"
                      : "border border-white/[0.06] bg-white/[0.015]"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3
                      className={`font-display font-semibold ${
                        job.featured ? "text-lg text-mist-100" : "text-base text-mist-300"
                      }`}
                    >
                      {job.company}
                    </h3>
                    <span className="font-mono text-xs text-mist-700">
                      {job.duration}
                    </span>
                  </div>

                  <p
                    className={`mt-1 text-sm ${
                      job.featured ? "text-signal-cyan" : "text-mist-500"
                    }`}
                  >
                    {job.role}
                    {job.stack ? ` · ${job.stack}` : ""}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-2.5 text-sm leading-relaxed text-mist-500"
                      >
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-mist-700" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
