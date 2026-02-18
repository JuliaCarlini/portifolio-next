import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// Ícones importados dinamicamente para evitar Hydration errors
const FaGithub = dynamic(() => import("react-icons/fa").then(mod => mod.FaGithub), { ssr: false });
const FaLinkedin = dynamic(() => import("react-icons/fa").then(mod => mod.FaLinkedin), { ssr: false });
const FaInstagram = dynamic(() => import("react-icons/fa6").then(mod => mod.FaInstagram), { ssr: false });
const MdEmail = dynamic(() => import("react-icons/md").then(mod => mod.MdEmail), { ssr: false });

const Contacts = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada! (Integre com Netlify Forms)');
    // Para Netlify: adicione name="form-name" no form e configure no painel
  };

  return (
    <div>
      <section className="contact-section">
        <h2>Contato</h2>
        <form
          onSubmit={handleSubmit}
          className="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="text"
            name="name"
            placeholder="Seu Nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Sua Mensagem"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>

      <div className="div-icons">
        <video className="animacao-icons" autoPlay loop muted playsInline>
          <source src="/img/animacao.mp4" type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>

        <section className="section-icons">
          <a href="https://github.com/JuliaCarlini" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <a href="https://www.instagram.com/carlini.julia/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/julia-carlini" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:julia.dornelas@outlook.com" aria-label="Email">
            <MdEmail size={24} />
          </a>
        </section>
      </div>
    </div>
  );
};

export default Contacts;
