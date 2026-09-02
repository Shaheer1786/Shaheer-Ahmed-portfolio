import { motion } from "framer-motion";

export default function SectionHeading({ index, title, subtitle, align = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mb-12 ${align === "center" ? "text-center mx-auto max-w-xl" : ""}`}
    >
      <div className={`flex items-baseline gap-3 ${align === "center" ? "justify-center" : ""}`}>
        {index && (
          <span className="font-mono text-sm text-signal-cyan/70">{index}</span>
        )}
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-mist-100 text-balance">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="mt-3 text-mist-500 leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}
