import React from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const stats = [
    { number: "4+", label: "Projetos Cyber" },
    { number: "2+", label: "Projetos Web" },
    { number: "🥋", label: "Alto Rendimento" },
];

const Homepag = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) { element.scrollIntoView({ behavior: "smooth" }); }
    };

    return (
        <div>
            <div className="pag-p">
                <div className="pag-p-overlay"></div>

                <section className="text-p">
                    <motion.span
                        className="hero-badge"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Disponível para novas oportunidades
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                    >
                        Olá, sou a{" "}
                        <span className="hero-accent">Julia<br />Carlini.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Especialista em Cibersegurança &amp; Redes<br />
                        Informáticas · Desenvolvedora Web
                    </motion.p>

                    <motion.div
                        className="hero-stats"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        {stats.map((s, i) => (
                            <React.Fragment key={s.label}>
                                <div className="hero-stat">
                                    <span className="hero-stat-number">{s.number}</span>
                                    <span className="hero-stat-label">{s.label}</span>
                                </div>
                                {i < stats.length - 1 && <div className="hero-stat-divider" />}
                            </React.Fragment>
                        ))}
                    </motion.div>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.62 }}
                    >
                        <button className="button-green" onClick={() => scrollToSection("projects")}>
                            Ver Projetos
                        </button>
                        <a href="/cv-julia-carlini.pdf" download className="button-outline">
                            Download CV
                        </a>
                    </motion.div>
                </section>

                <motion.div
                    className="hero-photo-wrapper"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <img
                        className="hero-photo"
                        src="img/myImg.png"
                        alt="Julia Carlini"
                    />
                </motion.div>

                <motion.button
                    className="scroll-indicator"
                    onClick={() => scrollToSection("skills")}
                    aria-label="Rolar para baixo"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <FaChevronDown />
                </motion.button>
            </div>
        </div>
    );
};

export default Homepag;
