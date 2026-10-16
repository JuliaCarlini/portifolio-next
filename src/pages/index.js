import Header from "../components/Header"
import Homepag from "../components/Homepag"
import Services from "../components/Services"
import Projects from "../components/ProjectsSection.jsx"
import CallToAction from "../components/CallToAction"
import About from "../components/About"
import Contacts from "../components/Contacts"

export default function Home() {
  return (
    <>
      <Header />
      <main className="page">
        <Homepag />
        <div className="sections">
          <Services />
          <Projects />
          <CallToAction />
          <About />
          <Contacts />
        </div>
      </main>
      <footer className="footer t3">
        © {new Date().getFullYear()} Julia Carlini · Leiria, Portugal
      </footer>
    </>
  )
}
