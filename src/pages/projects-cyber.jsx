import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../components/projects";
import Header from "@/components/Header";

export default function ProjectsCyber() {
  return (
    <>
      <Header />
      <main className="page projects-page">
        <section className="projects-hero">
          <p className="t3 badge">Projetos</p>
          <h1 className="h1">Segurança e redes</h1>
          <p className="t1 hero-lead">
            Testes de intrusão, redes empresariais e virtualização, desenvolvidos
            em ambiente controlado durante a formação. Cada projeto tem o relatório
            técnico completo.
          </p>
        </section>

        <section className="projects-list">
            {projects
              .filter((project) => project.category === "cyber")
              .map((p) => (
                <ProjectCard key={p.title} {...p} />
              ))}
        </section>
      </main>
    </>
  );
}
