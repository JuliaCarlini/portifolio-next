import React from "react";

// Pilha 3D decorativa: infra → web → segurança
const Stack3D = () => (
    <div className="media" aria-hidden="true">
        <div className="scene">
            <div className="layers">
                <div className="layer layer-infra">
                    <span className="layer-label">infra</span>
                    <span className="nodes"><i></i><i></i><i></i><i></i></span>
                </div>
                <div className="layer layer-web">
                    <span className="layer-label">web</span>
                    <span className="browser-bar"><i></i><i></i><i></i></span>
                    <span className="code"><i></i><i></i><i></i><i></i><i></i></span>
                </div>
                <div className="layer layer-sec">
                    <span className="layer-label">segurança</span>
                    <span className="shield"><span className="ico ico-lock"></span></span>
                </div>
            </div>
        </div>
    </div>
);

const Homepag = () => (
    <div className="row-top" id="inicio">
        <section className="hero">
            <p className="t3 badge">
                Disponível para projetos freelance <span className="badge-place">· Leiria, PT</span>
            </p>
            <h1 className="h1">Julia<br />Carlini</h1>
            <p className="h3 hero-slogan">Sites profissionais,<br />construídos com segurança.</p>
            <p className="t1 hero-lead">
                Sou a Julia Carlini, desenvolvedora web e estudante de Engenharia Informática,
                com formação em Cibersegurança. Crio sites à medida para negócios e verifico
                se resistem a ataques antes de irem para o ar.
            </p>
            <div className="hero-actions">
                <a className="btn" href="#contacto">
                    Pedir orçamento <span className="ico ico-arrow" aria-hidden="true"></span>
                </a>
                <a className="btn2" href="#projetos">
                    Ver projetos <span className="ico ico-arrow" aria-hidden="true"></span>
                </a>
            </div>
        </section>

        <Stack3D />
    </div>
);

export default Homepag;
