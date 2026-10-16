import Link from "next/link";

const links = [
  { href: "/#servicos", label: "Serviços" },
  { href: "/#projetos", label: "Projetos" },
  { href: "/#sobre", label: "Sobre" },
];

const Header = () => (
  <header className="nav">
    <Link className="nav-brand" href="/#inicio">
      <img className="av" src="/img/portrait.jpg" alt="" />
      <span className="h3">Julia Carlini</span>
    </Link>
    <nav className="nav-links" aria-label="Principal">
      {links.map((link) => (
        <Link key={link.href} className="lnk" href={link.href}>{link.label}</Link>
      ))}
      <Link className="btn" href="/#contacto">
        Contacto <span className="ico ico-arrow" aria-hidden="true"></span>
      </Link>
    </nav>
  </header>
);

export default Header;
