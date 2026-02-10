import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../components/projects";
import Header from "@/components/Header";

export default function ProjectsWeb() {
  return (
    <main className="projects-page">
        <Header></Header>
      {/* HERO */}
      <section className="projects-hero">
        <h1>Projetos</h1>
        <p>
          Projetos práticos em desenvolvimento web,
          com foco em segurança, performance e soluções reais.
        </p>
      </section>

      {/* LISTA DE PROJETOS */}
      <section className="projects-list">
        <div className="projects-grid">
          {
          projects.filter(
        (project) => project.category === "web"
      ).map((p) => (  
            <ProjectCard key={p.title} {...p} />
            ))}
        </div>
      </section>
    </main>
  );
}
