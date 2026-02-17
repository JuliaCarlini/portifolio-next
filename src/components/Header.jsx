import { useState } from "react";
import { useRouter } from "next/router";

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
      // Pequeno delay para fechar o menu antes de scrollar
      setTimeout(() => doScroll(id), 50);
    }
  };

  return (
    <header className="header">
      <img className="my-img" src="/img/myImg.jpg" alt="my-Img" />
      <p className="header-p">Julia Carlini</p>

      <button
        className={`toggle-btn ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "×" : "☰"}
      </button>

      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <button onClick={() => scrollToSection("home")}>Home</button>
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("projects")}>Projects</button>
        <button onClick={() => scrollToSection("contacts")}>Contacts</button>
      </nav>
    </header>
  );
};

export default Header;
