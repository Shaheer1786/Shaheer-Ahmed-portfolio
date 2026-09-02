import { motion } from "framer-motion";
import {
  Boxes,
  Code2,
  Database,
  FileSpreadsheet,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/skills";

const groupIcons = {
  Frontend: Code2,
  Programming: Boxes,
  Database: Database,
  Productivity: FileSpreadsheet,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          index="02"
          title="Tech Stack"
          subtitle="Technologies and tools I use to design, build and reason about frontend applications."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, gi) => {
            const GroupIcon = groupIcons[group.group] ?? Code2;
            return (
              <motion.div
                key={group.group}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: gi * 0.06, ease: "easeOut" }}
                className="glass-panel rounded-2xl p-6"
              >
                <div className="flex items-center gap-2.5">
                  <GroupIcon size={16} className="text-signal-cyan" />
                  <h3 className="text-sm font-medium text-mist-100">
                    {group.group}
                  </h3>
                </div>

                <ul className="mt-5 space-y-4">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <p className="text-sm font-medium text-mist-100">
                        {item.name}
                      </p>
                      <p className="mt-0.5 text-xs text-mist-500">
                        {item.label}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
