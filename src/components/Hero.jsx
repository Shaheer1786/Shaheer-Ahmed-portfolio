import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { EMAIL_HREF, GITHUB_URL, LINKEDIN_URL, CV_PATH, PROFILE } from "../data/constants";

const panelLines = [
  { key: "graduate", text: "graduate: true" },
  { key: "focus", text: "focus: 'frontend development'" },
  { key: "stack", text: "stack: ['React.js', 'JavaScript', 'HTML', 'CSS']" },
  { key: "location", text: "location: 'Karachi, Pakistan'" },
  { key: "learning", text: "learning: 'continuously'" },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-28 pb-20"
    >
      <div className="section-shell grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr,0.95fr]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-mist-300">
            <span className="h-1.5 w-1.5 rounded-full bg-signal-cyan" />
            Computer Science Graduate
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.12] text-mist-100 text-balance sm:text-5xl lg:text-[3.2rem]">
            Building clean, responsive and user-friendly web experiences as a{" "}
            <span className="bg-signal-gradient bg-clip-text text-transparent">
              Frontend Developer
            </span>
            .
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-mist-500 sm:text-lg">
            I'm a Computer Science graduate focused on frontend development,
            with hands-on experience in React.js, JavaScript, HTML and CSS.
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm text-mist-500">
            <MapPin size={15} className="text-signal-cyan" />
            {PROFILE.location}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-signal-gradient px-6 py-3 text-sm font-medium text-ink-950 shadow-glow transition-transform hover:-translate-y-0.5"
            >
              View My Projects
            </a>
            <a
              href={CV_PATH}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-white/12 px-6 py-3 text-sm font-medium text-mist-100 transition-colors hover:border-signal-cyan/50 hover:text-signal-cyan"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <SocialLink href={LINKEDIN_URL} label="LinkedIn" icon={<Linkedin size={18} />} />
            <SocialLink href={GITHUB_URL} label="GitHub" icon={<Github size={18} />} />
            <SocialLink href={EMAIL_HREF} label="Email" icon={<Mail size={18} />} />
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <EditorPanel reduceMotion={shouldReduceMotion} />
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-mist-700 transition-colors hover:text-signal-cyan sm:block"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}

function SocialLink({ href, label, icon }) {
  const isPlaceholder = href === "#";
  return (
    <a
      href={href}
      aria-label={label}
      aria-disabled={isPlaceholder}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-mist-300 transition-colors ${
        isPlaceholder
          ? "cursor-not-allowed opacity-40"
          : "hover:border-signal-cyan/50 hover:text-signal-cyan"
      }`}
      onClick={(e) => isPlaceholder && e.preventDefault()}
    >
      {icon}
    </a>
  );
}

function EditorPanel({ reduceMotion }) {
  return (
    <div className="glass-panel rounded-2xl shadow-glow">
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 font-mono text-xs text-mist-700">profile.config.js</span>
      </div>

      <div className="px-6 py-7 font-mono text-[13px] leading-8 sm:text-sm">
        <div className="text-mist-500">
          <span className="text-signal-blue">const</span> shaheer = {"{"}
        </div>
        {panelLines.map((line, i) => (
          <motion.div
            key={line.key}
            initial={reduceMotion ? false : { opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.5 + i * 0.18 }}
            className="pl-5 text-mist-300"
          >
            {line.text},
          </motion.div>
        ))}
        <div className="text-mist-500">{"}"};</div>
        <motion.span
          aria-hidden="true"
          className="mt-2 inline-block h-4 w-2 bg-signal-cyan/70"
          animate={reduceMotion ? {} : { opacity: [1, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>
    </div>
  );
}
