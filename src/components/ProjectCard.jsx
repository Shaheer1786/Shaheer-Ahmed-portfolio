import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const hasLive = project.liveUrl && project.liveUrl !== "#";
  const hasSource = project.githubUrl && project.githubUrl !== "#";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 transition-colors duration-300 hover:border-signal-cyan/30"
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-xs text-mist-700">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-mist-500">
          {project.category}
        </span>
      </div>

      <h3 className="mt-6 font-display text-xl font-semibold text-mist-100">
        {project.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-mist-500">
        {project.description}
      </p>

      {project.technologies.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 px-2 py-1 text-[11px] text-mist-300"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="mt-7 flex items-center gap-3 border-t border-white/[0.06] pt-5">
        <ProjectLink href={project.liveUrl} active={hasLive} icon={<ArrowUpRight size={14} />}>
          View Project
        </ProjectLink>
        <ProjectLink href={project.githubUrl} active={hasSource} icon={<Github size={14} />}>
          Source Code
        </ProjectLink>
      </div>
    </motion.article>
  );
}

function ProjectLink({ href, active, icon, children }) {
  if (!active) {
    return (
      <span
        aria-disabled="true"
        title="Link not available yet"
        className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-lg border border-white/[0.06] px-3.5 py-2 text-xs text-mist-700"
      >
        {icon}
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3.5 py-2 text-xs text-mist-300 transition-colors hover:border-signal-cyan/50 hover:text-signal-cyan"
    >
      {icon}
      {children}
    </a>
  );
}
