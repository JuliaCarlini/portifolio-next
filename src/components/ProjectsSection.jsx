import React from "react";
import Link from "next/link";
import { projects } from "./projects.js";

export default function Projects() {
  return (
    <section className="card4" id="projetos">
      <div className="card4-head">
        <h2 className="h2">Trabalho recente</h2>
        <div className="card4-links">
          <Link className="btn2" href="/projects-web">
            Projetos web <span className="ico ico-arrow" aria-hidden="true"></span>
          </Link>
          <Link className="btn2" href="/projects-cyber">
            Projetos de segurança <span className="ico ico-arrow" aria-hidden="true"></span>
          </Link>
        </div>
      </div>
      <div className="projects">
        {projects
          .filter((p) => p.featured)
          .map((p) => (
            <a key={p.title} className="card5" href={p.liveUrl || p.repoUrl} target="_blank" rel="noopener noreferrer">
              <img className="img" src={p.thumbSrc} alt="" loading="lazy" />
              <span className="card5-body">
                <span className="t1">{p.shortTitle}</span>
                <span className="t2">{p.label} • {p.stack}</span>
              </span>
              <span className="ico ico-arrow" aria-hidden="true"></span>
            </a>
          ))}
      </div>
    </section>
  );
}
