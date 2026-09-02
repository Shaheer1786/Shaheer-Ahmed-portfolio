import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import {
  EMAIL_HREF,
  GITHUB_URL,
  LINKEDIN_URL,
  PROFILE,
} from "../data/constants";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="glass-panel relative overflow-hidden rounded-3xl px-7 py-14 text-center sm:px-14"
        >
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 h-[240px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal-blue/20 blur-[110px]"
          />

          <span className="relative font-mono text-xs text-signal-cyan/70">
            07
          </span>

          <h2 className="relative mt-3 font-display text-3xl font-semibold text-mist-100 text-balance sm:text-4xl">
            Let's Build Something
          </h2>

          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-mist-500 sm:text-base">
            I'm currently open to opportunities in frontend development,
            React.js development and junior software development.
          </p>

          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={EMAIL_HREF}
              className="inline-flex items-center gap-2 rounded-lg bg-signal-gradient px-6 py-3 text-sm font-medium text-ink-950 shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Get In Touch
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/12 px-6 py-3 text-sm font-medium text-mist-100 transition-colors hover:border-signal-cyan/50 hover:text-signal-cyan"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>

          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-mist-500">
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} className="text-signal-cyan" />
              {PROFILE.location}
            </span>

            <a
              href={EMAIL_HREF}
              className="transition-colors hover:text-signal-cyan"
            >
              {PROFILE.email}
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-signal-cyan"
              aria-label="Visit Shaheer Ahmed's GitHub profile"
            >
              <Github size={15} />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}