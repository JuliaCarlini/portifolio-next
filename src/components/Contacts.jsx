import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// Ícones importados dinamicamente para evitar Hydration errors
const FaGithub = dynamic(() => import("react-icons/fa").then(mod => mod.FaGithub), { ssr: false });
const FaLinkedin = dynamic(() => import("react-icons/fa").then(mod => mod.FaLinkedin), { ssr: false });
const MdEmail = dynamic(() => import("react-icons/md").then(mod => mod.MdEmail), { ssr: false });

// ID do formulário no Formspree (https://formspree.io/forms)
const FORMSPREE_ID = "xnpjbelk";
const EMAIL = "julia.dornelas@outlook.com";

const Contacts = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error(res.statusText);
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="section">
      <div className="section-inner contact">
        <div>
          <span className="eyebrow">Contacto</span>
          <h2 className="section-title">Tem um projeto em mente?</h2>
          <p className="section-lead">
            Conte-me o que precisa e respondo com uma proposta.
          </p>

          <ul className="contact-links">
            <li>
              <a href={`mailto:${EMAIL}`}>
                <MdEmail aria-hidden="true" /> {EMAIL}
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/julia-carlini" target="_blank" rel="noreferrer">
                <FaLinkedin aria-hidden="true" /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/JuliaCarlini" target="_blank" rel="noreferrer">
                <FaGithub aria-hidden="true" /> GitHub
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-field">
            <label htmlFor="contact-name">Nome</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">Mensagem</label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              placeholder="Que tipo de site precisa? Tem algum prazo?"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="button-primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'A enviar…' : 'Enviar mensagem'}
          </button>
          <p className={`form-status ${status}`} role="status" aria-live="polite">
            {status === 'sent' && '✓ Mensagem enviada. Respondo em breve.'}
            {status === 'error' && (
              <>Não foi possível enviar. Tente de novo ou escreva para{' '}
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</>
            )}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
