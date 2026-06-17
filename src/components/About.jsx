import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaHeart, FaCode, FaUser } from "react-icons/fa";

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.12 },
    }),
};

const aboutCards = [
    {
        icon: <FaBullseye />,
        title: "Missão",
        content: (
            <p className="about-p">
                Contribuir para que empresas e pessoas estejam seguras no mundo digital,
                oferecendo soluções de desenvolvimento web robustas, com design atrativo e
                segurança rigorosa contra vulnerabilidades.
            </p>
        ),
    },
    {
        icon: <FaHeart />,
        title: "Valores",
        content: (
            <ul className="about-list">
                <li>Disciplina e foco (aprendidos no kickboxing de alto rendimento)</li>
                <li>Segurança e responsabilidade em cada projeto</li>
                <li>Criatividade e inovação tecnológica</li>
                <li>Compromisso com resultados e melhoria contínua</li>
            </ul>
        ),
    },
    {
        icon: <FaCode />,
        title: "Skills / Diferenciais",
        content: (
            <ul className="about-list">
                <li>Pentesting (Footprinting, análise de vulnerabilidades, mitigação)</li>
                <li>IoT &amp; Segurança de Dispositivos</li>
                <li>React / Next.js, HTML, CSS, JavaScript</li>
                <li>Git/GitHub &amp; CI/CD</li>
                <li>Disciplina e foco para entregar resultados de qualidade</li>
            </ul>
        ),
    },
    {
        icon: <FaUser />,
        title: "Mini Bio",
        content: (
            <p className="about-p">
                Sou Júlia Carlini, apaixonada por tecnologia e atleta de alto rendimento em
                kickboxing. Combino disciplina, criatividade e rigor técnico em cada projeto
                que desenvolvo, sempre com foco em impacto real e crescimento profissional.
            </p>
        ),
    },
];

const education = [
    {
        img: "img/iconf1.png",
        alt: "TESP Cibersegurança",
        title: "TESP Cibersegurança e Redes Informáticas",
        school: "Politécnico de Leiria",
    },
    {
        img: "img/iconf2.png",
        alt: "WEB Design",
        title: "WEB Design",
        school: "Udemy",
    },
    {
        img: "img/iconf2.png",
        alt: "React + Redux",
        title: "React + Redux",
        school: "Udemy",
    },
];

export default function About() {
    return (
        <div className="about-div">
            <motion.h2
                className="about-titulo"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Sobre mim
            </motion.h2>

            <section id="about" className="about-section">
                <div className="about-cards">
                    {aboutCards.map((card, i) => (
                        <motion.div
                            key={card.title}
                            className="about-card"
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            <h3 className="about-subtitle">
                                <span className="about-card-icon">{card.icon}</span>
                                {card.title}
                            </h3>
                            {card.content}
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="education-section">
                <motion.h2
                    className="about-titulo"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Estudos Adquiridos
                </motion.h2>
                <div className="education-cards">
                    {education.map((edu, i) => (
                        <motion.div
                            key={edu.title}
                            className="education-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                        >
                            <img src={edu.img} alt={edu.alt} />
                            <p>{edu.title}</p>
                            <h3>{edu.school}</h3>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
