import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./projects.js";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projetos</h2>
      <div className="projects-grid">
        {projects
          .filter(p => p.featured)
          .map(p => (
            <ProjectCard key={p.title} {...p} />
          ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
        <Link href="/projects-cyber" className="button-green" style={{ margin: 0 }}>
          Projetos Cibersegurança
        </Link>
        <Link href="/projects-web" className="button-green" style={{ margin: 0 }}>
          Projetos Web Development
        </Link>
      </div>
    </section>
  );
}

