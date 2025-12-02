import { About } from 'app/components/about'
import { Projects } from 'app/components/projects'
import { Skills } from 'app/components/skills'

export default function Page() {
  return (
    <section>
      <About />
      <Projects />
      <Skills />
    </section>
  )
}
