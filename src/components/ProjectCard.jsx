import React from "react";

export default function ProjectCard({ title, label, imageSrc, description, challenge, result, repoUrl, liveUrl, tools }) {
  const isReport = repoUrl?.endsWith(".pdf");

  return (
    <article className="project-card">
      <img src={imageSrc} alt={`Imagem do projeto ${title}`} loading="lazy" className="img project-image" />
      <div className="project-body">
        {label && <span className="t3 project-label">{label}</span>}
        <h2 className="h2 project-title">{title}</h2>
        <p className="t1 project-description">{description}</p>

        <dl className="project-details">
          <dt className="t3">Desafio</dt>
          <dd className="t2">{challenge}</dd>
          <dt className="t3">Resultado</dt>
          <dd className="t2">{result}</dd>
        </dl>

        <ul className="practices project-tools" aria-label="Tecnologias">
          {tools.map((tool) => (
            <li key={tool} className="t3">{tool}</li>
          ))}
        </ul>

        <div className="project-links">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn2">
              Ver site <span className="ico ico-arrow" aria-hidden="true"></span>
            </a>
          )}
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="btn2">
              {isReport ? "Ler relatório (PDF)" : "Ver código"} <span className="ico ico-arrow" aria-hidden="true"></span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
