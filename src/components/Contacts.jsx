import React, { useState } from 'react';

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
    <form className="form" id="contacto" onSubmit={handleSubmit}>
      <h2 className="h2">Contacto</h2>
      <label className="t1" htmlFor="f-name">Nome</label>
      <input className="in" id="f-name" name="name" type="text" autoComplete="name"
        value={formData.name} onChange={handleChange} required />
      <label className="t1" htmlFor="f-email">Email</label>
      <input className="in" id="f-email" name="email" type="email" autoComplete="email"
        value={formData.email} onChange={handleChange} required />
      <label className="t1" htmlFor="f-message">Mensagem</label>
      <textarea className="in" id="f-message" name="message" rows="5"
        placeholder="Que tipo de site precisa? Tem algum prazo?"
        value={formData.message} onChange={handleChange} required></textarea>
      <button className="btn" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'A enviar…' : 'Enviar mensagem'} <span className="ico ico-arrow" aria-hidden="true"></span>
      </button>
      <p className={`t2 form-status ${status}`} role="status" aria-live="polite">
        {status === 'sent' && 'Mensagem enviada. Respondo em breve.'}
        {status === 'error' && (
          <>Não foi possível enviar. Tente de novo ou escreva para{' '}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</>
        )}
      </p>
    </form>
  );
};

export default Contacts;
