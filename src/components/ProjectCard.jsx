import React from "react";
import { FaLinux, FaServer, FaNetworkWired, FaReact, FaCss3Alt } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { SiWireshark, SiMqtt, SiNextdotjs, SiVercel } from "react-icons/si";


const iconsMap = {
  linux: <FaLinux />,
  wireshark: <SiWireshark />,
  mqtt: <SiMqtt />,
  pentest: <MdSecurity />,
  network: <FaNetworkWired />,
  server: <FaServer />,
  react: <FaReact />,
  next: <SiNextdotjs />,
  css: <FaCss3Alt />,
  vercel: <SiVercel />,
};



export default function ProjectCard({ title, imageSrc, description, challenge, result, repoUrl, liveUrl, tools }) {
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

      <div className="project-tools">
        <strong>Tecnologias:</strong>{" "}
        {tools.map((tool) => (
          <span key={tool} className="tool-icon">
            {iconsMap[tool.toLowerCase()] || tool}
            <span className="tooltip">{tool}</span>
          </span>
        ))}
      </div>

      <div className="project-links">
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
            Ver ao vivo
          </a>
        )}
        {repoUrl && (
          <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
             GitHub / Relatorio 
          </a>
        )}
      </div>
    </div>
  );
}
