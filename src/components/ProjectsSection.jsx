import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./projects.js";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projetos" className="section">
      <div className="section-inner">
        <span className="eyebrow">Projetos</span>
        <h2 className="section-title">Trabalho recente</h2>
        <p className="section-lead">
          Sites feitos para clientes e projetos de segurança desenvolvidos na formação.
        </p>
        <div className="projects-grid">
          {projects
            .filter(p => p.featured)
            .map(p => (
              <ProjectCard key={p.title} {...p} />
            ))}
        </div>
        <div className="projects-more">
          <Link href="/projects-web" className="button-secondary">
            Todos os projetos web
          </Link>
          <Link href="/projects-cyber" className="button-secondary">
            Projetos de segurança
          </Link>
        </div>
      </div>
    </section>
  );
}
