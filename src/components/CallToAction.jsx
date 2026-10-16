import React from "react";
import { socialLinks } from "./social";

export default function CallToAction() {
  return (
    <section className="card6">
      <h2 className="h2">Tem um<br />projeto em<br />mente?</h2>
      <p className="t1">Conte-me o que precisa e respondo com uma proposta.</p>
      <a className="btn" href="#contacto">
        Enviar mensagem <span className="ico ico-arrow" aria-hidden="true"></span>
      </a>
      <ul className="social">
        {socialLinks.map((s) => (
          <li key={s.icon}>
            <a href={s.href} target={s.external ? "_blank" : undefined} rel={s.external ? "noreferrer" : undefined} aria-label={s.label}>
              <span className={`ico ico-${s.icon}`} aria-hidden="true"></span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
