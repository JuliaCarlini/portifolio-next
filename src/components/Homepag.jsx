import React from "react";
import { motion } from "framer-motion";

const facts = [
    { value: "2", label: "sites em produção para clientes" },
    { value: "3", label: "relatórios técnicos de segurança" },
    { value: "Leiria", label: "· trabalho remoto" },
];

const fadeUp = (delay) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
});

const Homepag = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) { element.scrollIntoView({ behavior: "smooth" }); }
    };

    return (
        <section id="inicio" className="hero">
            <div className="hero-text">
                <motion.span className="hero-badge" {...fadeUp(0.1)}>
                    Disponível para projetos freelance
                </motion.span>

                <motion.h1 {...fadeUp(0.2)}>
                    Sites profissionais, construídos com segurança.
                </motion.h1>

                <motion.p className="hero-lead" {...fadeUp(0.3)}>
                    Sou a Julia Carlini, desenvolvedora web e estudante de Engenharia
                    Informática, com formação em Cibersegurança. Crio sites à medida para
                    negócios e verifico se resistem a ataques antes de irem para o ar.
                </motion.p>

                <motion.div className="hero-buttons" {...fadeUp(0.4)}>
                    <button className="button-primary" onClick={() => scrollToSection("contacto")}>
                        Pedir orçamento
                    </button>
                    <button className="button-secondary" onClick={() => scrollToSection("projetos")}>
                        Ver projetos
                    </button>
                </motion.div>

                <motion.ul className="hero-facts" {...fadeUp(0.5)}>
                    {facts.map((f) => (
                        <li key={f.value}>
                            <strong>{f.value}</strong> {f.label}
                        </li>
                    ))}
                </motion.ul>
            </div>

            <motion.div
                className="hero-photo-wrapper"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <img className="hero-photo" src="/img/myImg.png" alt="Julia Carlini" />
            </motion.div>
        </section>
    );
};

export default Homepag;
