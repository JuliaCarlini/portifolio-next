import { useState } from "react";
import { useRouter } from "next/router";

const links = [
  { id: "servicos", label: "Serviços" },
  { id: "projetos", label: "Projetos" },
  { id: "sobre", label: "Sobre" },
  { id: "contacto", label: "Contacto", cta: true },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const doScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return false;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    return true;
  };

  const scrollToSection = async (id) => {
    setIsOpen(false);

    if (router.pathname !== "/") {
      await router.push("/");
      let attempts = 0;
      const tryScroll = () => {
        if (doScroll(id)) return;
        attempts++;
        if (attempts < 20) {
          setTimeout(tryScroll, 50);
        }
      };
      setTimeout(tryScroll, 300);
    } else {
      setTimeout(() => doScroll(id), 50);
    }
  };

  return (
    <header className="header">
      <button className="header-brand" onClick={() => scrollToSection("inicio")}>
        <img className="my-img" src="/img/myImg.png" alt="" />
        Julia Carlini
      </button>

      <button
        className={`toggle-btn ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        aria-controls="main-nav"
      >
        {isOpen ? "×" : "☰"}
      </button>

      <nav id="main-nav" className={`nav ${isOpen ? "open" : ""}`} aria-label="Principal">
        {links.map((link) => (
          <button
            key={link.id}
            className={link.cta ? "nav-cta" : undefined}
            onClick={() => scrollToSection(link.id)}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
