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
          <h1>Projetos Web</h1>
          <p>
            Aplicações web desenvolvidas com foco em usabilidade, responsividade
            e boas práticas de desenvolvimento front-end e back-end.
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
