import React from "react";
import { motion } from "framer-motion";
import {
    SiNextdotjs, SiJavascript, SiHtml5, SiReact, SiGit, SiPhp, SiBootstrap,
    SiNetlify, SiVercel, SiCloudflare, SiWireshark, SiMqtt,
    SiVmware, SiVirtualbox, SiFortinet,
} from "react-icons/si";
import { FaLinux, FaNetworkWired, FaShieldAlt, FaCss3Alt, FaWindows } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const principles = [
    { title: "Prazos claros", text: "Sabe desde o início o que vai receber e quando." },
    { title: "Comunicação sem jargão", text: "Explico as decisões técnicas em linguagem simples." },
    { title: "Segurança por defeito", text: "Boas práticas de segurança em todos os projetos, não como extra." },
];

const education = [
    {
        date: "2026/27 — atual",
        title: "Licenciatura em Engenharia Informática",
        school: "Politécnico de Leiria · 1.º ano",
        current: true,
    },
    {
        date: "Concluído em 2025/26",
        title: "CTeSP em Cibersegurança e Redes Informáticas",
        school: "Politécnico de Leiria",
    },
    {
        date: "Curso livre",
        title: "Web Design · React + Redux",
        school: "Udemy",
    },
];

const skillCategories = [
    {
        title: "Desenvolvimento web",
        skills: [
            { name: "React", icon: <SiReact /> },
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "HTML", icon: <SiHtml5 /> },
            { name: "CSS", icon: <FaCss3Alt /> },
            { name: "PHP", icon: <SiPhp /> },
            { name: "Bootstrap", icon: <SiBootstrap /> },
            { name: "Git", icon: <SiGit /> },
        ],
    },
    {
        title: "Segurança e redes",
        skills: [
            { name: "Pentesting", icon: <MdSecurity /> },
            { name: "Gestão de vulnerabilidades", icon: <FaShieldAlt /> },
            { name: "Wireshark", icon: <SiWireshark /> },
            { name: "Linux", icon: <FaLinux /> },
            { name: "Análise de redes", icon: <FaNetworkWired /> },
            { name: "Fortinet / Firewall", icon: <SiFortinet /> },
            { name: "MQTT / IoT", icon: <SiMqtt /> },
        ],
    },
    {
        title: "Infraestrutura e publicação",
        skills: [
            { name: "Windows Server", icon: <FaWindows /> },
            { name: "Active Directory", icon: <FaShieldAlt /> },
            { name: "VMware", icon: <SiVmware /> },
            { name: "VirtualBox", icon: <SiVirtualbox /> },
            { name: "Vercel", icon: <SiVercel /> },
            { name: "Netlify", icon: <SiNetlify /> },
            { name: "Cloudflare", icon: <SiCloudflare /> },
        ],
    },
];

const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
};

export default function About() {
    return (
        <section id="sobre" className="section section-alt">
            <div className="section-inner about-grid">
                <motion.div className="about-text" {...reveal}>
                    <span className="eyebrow">Sobre</span>
                    <h2 className="section-title">Desenvolvimento e segurança, no mesmo projeto</h2>
                    <p>
                        Estudo <strong>Engenharia Informática</strong> e concluí um CTeSP em
                        <strong> Cibersegurança e Redes Informáticas</strong>. Essa combinação define
                        a forma como trabalho: cada site é pensado desde o início para ser difícil
                        de atacar, com formulários protegidos, dependências atualizadas e servidor
                        bem configurado.
                    </p>
                    <p>
                        Trabalho com negócios que precisam de uma presença online profissional, e
                        faço revisões de segurança para quem já tem um site ou uma rede e quer
                        saber onde está exposto.
                    </p>

                    <ul className="principles">
                        {principles.map((p) => (
                            <li key={p.title}>
                                <strong>{p.title}</strong>
                                <span>{p.text}</span>
                            </li>
                        ))}
                    </ul>

                    <a href="/cv-juliacarlini.pdf" className="button-secondary" download>
                        Descarregar CV (PDF)
                    </a>
                </motion.div>

                <motion.div {...reveal} transition={{ duration: 0.5, delay: 0.1 }}>
                    <div className="education">
                        <h3>Formação</h3>
                        <ul className="education-list">
                            {education.map((edu) => (
                                <li key={edu.title} className={edu.current ? "current" : undefined}>
                                    <span className="education-date">{edu.date}</span>
                                    <span className="education-title">{edu.title}</span>
                                    <span className="education-school">{edu.school}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="skills">
                        <h3>Competências</h3>
                        {skillCategories.map((cat) => (
                            <div key={cat.title} className="skills-category">
                                <h4 className="skills-category-title">{cat.title}</h4>
                                <ul className="skills-grid">
                                    {cat.skills.map((skill) => (
                                        <li key={skill.name} className="skill-chip">
                                            <span className="skill-icon" aria-hidden="true">{skill.icon}</span>
                                            {skill.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
