import React from "react";
import { socialLinks } from "./social";

export default function Footer() {
  return (
    <footer className="footer t3">
      <span>© {new Date().getFullYear()} Julia Carlini · Leiria, Portugal</span>
      <ul className="social">
        {socialLinks.map((s) => (
          <li key={s.icon}>
            <a href={s.href} target={s.external ? "_blank" : undefined} rel={s.external ? "noreferrer" : undefined} aria-label={s.label}>
              <span className={`ico ico-${s.icon}`} aria-hidden="true"></span>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
