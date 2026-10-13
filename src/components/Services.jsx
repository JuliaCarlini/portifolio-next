import React from "react";
import { motion } from "framer-motion";
import { FiMonitor, FiShield, FiRefreshCw } from "react-icons/fi";

const services = [
    {
        icon: <FiMonitor />,
        title: "Sites institucionais",
        text: "Site responsivo, rápido e preparado para aparecer no Google, do design à publicação.",
    },
    {
        icon: <FiShield />,
        title: "Revisão de segurança",
        text: "Análise do seu site ou rede, com autorização por escrito. Recebe um relatório com o que foi encontrado, explicado em linguagem simples e com as correções por prioridade.",
    },
    {
        icon: <FiRefreshCw />,
        title: "Manutenção",
        text: "Atualizações, cópias de segurança e monitorização, para o site continuar seguro depois de publicado.",
    },
];

const steps = [
    { title: "Conversa inicial", text: "Percebo o seu negócio e o que o site precisa de fazer." },
    { title: "Proposta e prazo", text: "Recebe um orçamento fechado e uma data de entrega." },
    { title: "Desenvolvimento", text: "Acompanha o progresso e pede revisões pelo caminho." },
    { title: "Publicação", text: "O site vai para o ar, testado e com os acessos entregues." },
];

export default function Services() {
    return (
        <section id="servicos" className="section section-alt">
            <div className="section-inner">
                <span className="eyebrow">Serviços</span>
                <h2 className="section-title">Como posso ajudar</h2>
                <p className="section-lead">
                    Do primeiro site à verificação de segurança de um que já existe.
                </p>

                <div className="services-grid">
                    {services.map((s, i) => (
                        <motion.article
                            key={s.title}
                            className="service-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                        >
                            <span className="service-icon" aria-hidden="true">{s.icon}</span>
                            <h3>{s.title}</h3>
                            <p>{s.text}</p>
                        </motion.article>
                    ))}
                </div>

                <ol className="process" aria-label="Como trabalho">
                    {steps.map((step) => (
                        <li key={step.title}>
                            <strong>{step.title}</strong>
                            <span>{step.text}</span>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
