import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../components/projects";
import Header from "@/components/Header";

export default function ProjectsCyber() {
  return (
    <>
      <Header />
      <main className="projects-page">
        <section className="projects-hero">
          <h1>Projetos de Cibersegurança</h1>
          <p>
            Análises de vulnerabilidades, configuração de redes empresariais,
            virtualização e implementação de protocolos seguros em ambientes controlados.
          </p>
        </section>

        <section className="projects-list">
          <div className="projects-grid">
            {projects
              .filter((project) => project.category === "cyber")
              .map((p) => (
                <ProjectCard key={p.title} {...p} />
              ))}
          </div>
        </section>
      </main>
    </>
  );
}
