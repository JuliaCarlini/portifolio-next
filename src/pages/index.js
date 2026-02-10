import Header from "../components/Header"
import Homepag from "../components/Homepag"
import About from "../components/About"
import Projects from "../components/Projects.jsx"
import Contacts from "../components/Contacts"

export default function Home() {
  return (
    <>
      <Header />
      <div id="home">
        <Homepag />
      </div>
      <div id="about">  
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>

      <div id="contacts">
        <Contacts />
      </div> 
    </>
  )
}
