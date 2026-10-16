import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../components/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProjectsWeb() {
  return (
    <>
      <Header />
      <main className="page projects-page">
        <section className="projects-hero">
          <p className="t3 badge">Projetos</p>
          <h1 className="h1">Desenvolvimento web</h1>
          <p className="t1 hero-lead">
            Sites para clientes e aplicações web, com foco em desempenho,
            responsividade e segurança.
          </p>
        </section>

        <section className="projects-list">
            {projects
              .filter((project) => project.category === "web")
              .map((p) => (
                <ProjectCard key={p.title} {...p} />
              ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
