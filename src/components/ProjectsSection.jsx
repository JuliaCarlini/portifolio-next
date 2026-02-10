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
      <Link href="/projects-cyber" className="button-green">
        Projetos Cibersegurança
      </Link>
      <Link href="/projects-web" className="button-green">
        Projetos Web Development
      </Link>
    </section>
  );
}

