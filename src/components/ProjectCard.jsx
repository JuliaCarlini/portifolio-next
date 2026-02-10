import React from "react";

export default function ProjectCard({
  title,
  imageSrc,
  description,
  challenge,
  result,
  repoUrl,
  liveUrl,
}) {
  return (
    <div className="project-card">
      <img
        src={imageSrc}
        alt={`Screenshot do projeto ${title}`}
        loading="lazy"
        className="project-image"
      />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <p className="project-challenge">
        <strong>Desafio:</strong> {challenge}
      </p>
      <p className="project-result">
        <strong>Resultado:</strong> {result}
      </p>
      <div className="project-links">
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
            Ver ao vivo
          </a>
        )}
        {repoUrl && (
          <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
            Código / GitHub
          </a>
        )}
      </div>
    </div>
  );
}
