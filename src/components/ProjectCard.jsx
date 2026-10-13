import React from "react";

export default function ProjectCard({ title, label, imageSrc, description, challenge, result, repoUrl, liveUrl, tools }) {
  const isReport = repoUrl?.endsWith(".pdf");

  return (
    <article className="project-card">
      <img
        src={imageSrc}
        alt={`Imagem do projeto ${title}`}
        loading="lazy"
        className="project-image"
      />
      <div className="project-body">
        {label && (
          <span className={`project-label ${label === "Cliente" ? "client" : ""}`}>{label}</span>
        )}
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <dl className="project-details">
          <dt>Desafio</dt>
          <dd>{challenge}</dd>
          <dt>Resultado</dt>
          <dd>{result}</dd>
        </dl>

        <ul className="project-tools" aria-label="Tecnologias">
          {tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>

        <div className="project-links">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              Ver site ↗
            </a>
          )}
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              {isReport ? "Ler relatório (PDF) ↗" : "Ver código ↗"}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
