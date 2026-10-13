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
          <span className="eyebrow">Projetos</span>
          <h1>Segurança e redes</h1>
          <p>
            Testes de intrusão, redes empresariais e virtualização, desenvolvidos
            em ambiente controlado durante a formação. Cada projeto tem o relatório
            técnico completo.
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
