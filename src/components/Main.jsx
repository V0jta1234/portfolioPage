import About from './main/About'
import Projects from './main/Projects'
import Contact from './main/Contact'
function Main() {
    return (
        <div>
            <section id="about">
                <About />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    )
}

export default Main
