import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // fecha o menu ao clicar
    }
  };

  return (
    <header>
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
