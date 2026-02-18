import React from "react";
import Link from "next/link";
import { useState } from "react";

const Homepag = () => {
    const [isOpen, setIsOpen] = useState(false);    
    const scrollToSection = (id) => { 
        const element = document.getElementById(id); 
        if (element) { element.scrollIntoView({ behavior: "smooth" }); 
        setIsOpen(false); // fecha o menu ao clicar 
        } 
};
    return (
        <div>
            <div className="pag-p">
                <div className="pag-p-overlay"></div>
                <section className="text-p">
                    <h1>Olá, sou a Julia <br />
                    Carlini.</h1>
                    <p>Desenvolvedora Web + <br />
                    Recém licenciada em Cibersegurança e <br /> Redes informáticas</p>
                    <button className="button-green" onClick={() => scrollToSection("projects")}>Veja o Meu Portfólio</button>
                </section>

                <img className="pag-img" src="img/processador.jpg" alt="Processador" />
            </div>
        </div>
    );
};

export default Homepag;
