import Header from "../components/Header"
import Homepag from "../components/Homepag"
import Services from "../components/Services"
import Projects from "../components/ProjectsSection.jsx"
import About from "../components/About"
import Contacts from "../components/Contacts"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Homepag />
        <Services />
        <Projects />
        <About />
        <Contacts />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} Julia Carlini · Leiria, Portugal
      </footer>
    </>
  )
}
