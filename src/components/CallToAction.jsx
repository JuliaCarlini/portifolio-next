import React from "react";

const EMAIL = "julia.dornelas@outlook.com";

export default function CallToAction() {
  return (
    <section className="card6">
      <h2 className="h2">Tem um<br />projeto em<br />mente?</h2>
      <p className="t1">Conte-me o que precisa e respondo com uma proposta.</p>
      <a className="btn" href="#contacto">
        Enviar mensagem <span className="ico ico-arrow" aria-hidden="true"></span>
      </a>
      <ul className="social">
        <li><a href="https://www.linkedin.com/in/julia-carlini" target="_blank" rel="noreferrer" aria-label="LinkedIn"><span className="ico ico-linkedin" aria-hidden="true"></span></a></li>
        <li><a href="https://github.com/JuliaCarlini" target="_blank" rel="noreferrer" aria-label="GitHub"><span className="ico ico-github" aria-hidden="true"></span></a></li>
        <li><a href={`mailto:${EMAIL}`} aria-label="Email"><span className="ico ico-mail" aria-hidden="true"></span></a></li>
      </ul>
    </section>
  );
}
