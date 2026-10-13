import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../components/projects";
import Header from "@/components/Header";

export default function ProjectsWeb() {
  return (
    <>
      <Header />
      <main className="projects-page">
        <section className="projects-hero">
          <span className="eyebrow">Projetos</span>
          <h1>Desenvolvimento web</h1>
          <p>
            Sites para clientes e aplicações web, com foco em desempenho,
            responsividade e segurança.
          </p>
        </section>

        <section className="projects-list">
          <div className="projects-grid">
            {projects
              .filter((project) => project.category === "web")
              .map((p) => (
                <ProjectCard key={p.title} {...p} />
              ))}
          </div>
        </section>
      </main>
    </>
  );
}
