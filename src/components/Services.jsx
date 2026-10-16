import React from "react";

const services = [
    { icon: "monitor", title: "Sites institucionais", text: "Site responsivo, rápido e preparado para aparecer no Google, do design à publicação." },
    { icon: "shield", title: "Revisão de segurança", text: "Análise do seu site ou rede, com autorização por escrito." },
    { icon: "refresh", title: "Manutenção", text: "Atualizações, cópias de segurança e monitorização." },
];

const tech = [
    { icon: "react", label: "React" },
    { icon: "js", label: "JavaScript" },
    { icon: "next", label: "Next.js" },
    { icon: "linux", label: "Linux" },
    { icon: "cloudflare", label: "Cloudflare" },
];

const practices = ["Formulários protegidos", "Dependências atualizadas", "Servidor bem configurado"];

const steps = [
    { title: "Conversa inicial", text: "Percebo o seu negócio e o que o site precisa de fazer." },
    { title: "Proposta e prazo", text: "Recebe um orçamento fechado e uma data de entrega." },
    { title: "Desenvolvimento", text: "Acompanha o progresso e pede revisões pelo caminho." },
    { title: "Publicação", text: "O site vai para o ar, testado e com os acessos entregues." },
];

export default function Services() {
    return (
        <>
            <section className="card" id="servicos">
                <h2 className="h2">Como posso ajudar</h2>
                <ul className="services">
                    {services.map((s) => (
                        <li key={s.title}>
                            <span className="ico-box" aria-hidden="true"><span className={`ico ico-${s.icon}`}></span></span>
                            <div>
                                <h3 className="t1">{s.title}</h3>
                                <p className="t2">{s.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <ul className="tech" aria-label="Tecnologias">
                    {tech.map((t) => (
                        <li key={t.icon}><span className={`ico ico-tech ico-${t.icon}`} role="img" aria-label={t.label}></span></li>
                    ))}
                </ul>
            </section>

            <section className="card2" aria-label="Segurança por defeito">
                <span className="card2-text">
                    <span className="t3">Segurança por defeito.</span>
                    <span className="t2">Boas práticas em todos os projetos, não como extra.</span>
                    <span className="practices">
                        {practices.map((p) => <span key={p} className="t3">{p}</span>)}
                    </span>
                </span>
            </section>

            <section className="card3">
                <h2 className="h2">Como trabalho</h2>
                <ol className="steps">
                    {steps.map((step, i) => (
                        <li key={step.title}>
                            <span className="t3">{String(i + 1).padStart(2, "0")}</span>
                            <div>
                                <h3 className="t1">{step.title}</h3>
                                <p className="t2">{step.text}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </section>
        </>
    );
}
