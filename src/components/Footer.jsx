import { Github, Linkedin, Mail } from "lucide-react";
import { EMAIL_HREF, FOOTER_LINKS, GITHUB_URL, LINKEDIN_URL } from "../data/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12">
      <div className="section-shell flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <p className="font-display text-sm font-semibold text-mist-100">
            Shaheer Ahmed
          </p>
          <p className="mt-1 text-sm text-mist-500">Frontend Developer</p>
          <p className="mt-3 text-xs leading-relaxed text-mist-700">
            Building clean, responsive and user-friendly web experiences.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-mist-500">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-signal-cyan">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-3">
          <FooterIcon href={LINKEDIN_URL} label="LinkedIn" icon={<Linkedin size={16} />} />
          <FooterIcon href={GITHUB_URL} label="GitHub" icon={<Github size={16} />} />
          <FooterIcon href={EMAIL_HREF} label="Email" icon={<Mail size={16} />} />
        </div>
      </div>

      <div className="section-shell mt-10 border-t border-white/[0.05] pt-6">
        <p className="text-xs text-mist-700">
          © 2026 Shaheer Ahmed. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterIcon({ href, label, icon }) {
  const isPlaceholder = href === "#";
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      onClick={(e) => isPlaceholder && e.preventDefault()}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-mist-500 transition-colors ${
        isPlaceholder ? "cursor-not-allowed opacity-40" : "hover:border-signal-cyan/50 hover:text-signal-cyan"
      }`}
    >
      {icon}
    </a>
  );
}
