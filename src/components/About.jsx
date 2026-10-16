import React from "react";

const education = [
    { date: "2026/27 — atual", title: "Licenciatura em Engenharia Informática", school: "Politécnico de Leiria · 1.º ano" },
    { date: "Concluído em 2025/26", title: "CTeSP em Cibersegurança e Redes Informáticas", school: "Politécnico de Leiria" },
];

export default function About() {
    return (
        <section className="section" id="sobre">
            <h2 className="h2">Sobre</h2>
            <p className="t1">
                Estudo Engenharia Informática e concluí um CTeSP em Cibersegurança e Redes
                Informáticas. Essa combinação define a forma como trabalho: cada site é pensado
                desde o início para ser difícil de atacar, com formulários protegidos,
                dependências atualizadas e servidor bem configurado.
            </p>
            <ul className="card7">
                {education.map((edu) => (
                    <li key={edu.title}>
                        <span className="t3">{edu.date}</span>
                        <span className="t1">{edu.title}</span>
                        <span className="t2">{edu.school}</span>
                    </li>
                ))}
            </ul>
            <a className="btn2" href="/cv-juliacarlini.pdf" download>
                Descarregar CV (PDF) <span className="ico ico-arrow" aria-hidden="true"></span>
            </a>
        </section>
    );
}
