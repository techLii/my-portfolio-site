import { About } from 'app/components/about'
import { BlogPosts } from 'app/components/posts'
import { Projects } from 'app/components/projects'
import { Skills } from 'app/components/skills'

export default function Page() {
  return (
    <section id="top" className="space-y-16">
      <div>
        <About />
        <Skills />
      </div>

      <section id="about">
        <h2 className="font-semibold text-2xl mb-8 tracking-tighter">
          Educator. Architect. Systems Thinker.
        </h2>
        <div className="prose prose-neutral dark:prose-invert">
          <p>
            I am a <b>Developer Education & Secure Systems Enablement Specialist</b>.
            My work sits at the intersection of technical pedagogy and production-grade software architecture.
          </p>
          <p>
            I do not just "teach coding." I help early-career developers and TVET graduates bridge the massive gap between
            <i>"I know syntax"</i> and <i>"I can ship secure, scalable systems."</i>
          </p>
          <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

          <h3 className="font-medium text-xl mb-4 tracking-tighter">My Philosophy</h3>
          <p>
            Software development is not about memorizing tools; it is about <b>structured thinking</b>.
            I believe in:
          </p>
          <ul>
            <li><b>Security as a Mindset:</b> Security is not a feature you add later. It is how you write code from line one.</li>
            <li><b>Systems Over Scripts:</b> moving from writing isolated scripts to architecting resilient ecosystems.</li>
            <li><b>Structured Mentorship:</b> Growth happens through deliberate practice and expert feedback, not random tutorials.</li>
          </ul>

          <h3 className="font-medium text-xl mb-4 tracking-tighter">Background</h3>
          <p>
            With extensive experience in <b>Technical and Vocational Education and Training (TVET)</b> and
            hands-on software engineering, I understand exactly where traditional education fails and how to fix it.
          </p>
        </div>
      </section>

      <section id="mentorship">
        <h2 className="font-semibold text-2xl mb-8 tracking-tighter">
          12-Week Production-Ready Developer Program
        </h2>

        <div className="prose prose-neutral dark:prose-invert">
          <p className="text-lg mb-8">
            The definitive bridge from "learning to code" to <b>shipping secure, scalable production software</b>.
          </p>

          <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 mb-8">
            <h3 className="font-medium text-xl mb-4 tracking-tighter mt-0">Who This Is For</h3>
            <ul className="mt-0">
              <li><b>Early-Career Developers</b> stuck in "tutorial hell" who need to build real systems.</li>
              <li><b>TVET Graduates</b> seeking to professionalize their diverse skill sets.</li>
              <li><b>Self-Taught Engineers</b> who want to master secure-by-design architecture.</li>
            </ul>
          </div>

          <h3 className="font-medium text-xl mb-4 tracking-tighter">Program Outcomes</h3>
          <p>
            We do not focus on "learning React" or "learning Python." We focus on:
          </p>
          <ul>
            <li><b>Secure-by-Design Development:</b> Implement auth, data validation, and threat modeling from day one.</li>
            <li><b>Production Infrastructure:</b> CI/CD pipelines, containerization, and cloud deployment.</li>
            <li><b>Professional Maturity:</b> Code reviews, documentation, and collaborative workflows.</li>
          </ul>

          <h3 className="font-medium text-xl mb-4 tracking-tighter">Format</h3>
          <p>
            This is a <b>structured, high-intensity mentorship</b>.
            It includes weekly code reviews, architectural planning sessions, and a capstone project that is actually production-grade.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 items-center">
            <a
              href="mailto:eleeakim@gmail.com?subject=Mentorship%20Application"
              className="bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              Apply for the Next Cohort
            </a>
            <span className="text-sm text-neutral-500">
              Limited spots available for personalized attention.
            </span>
          </div>
        </div>

        <hr className="my-12 border-neutral-100 dark:border-neutral-800" />

        <div className="prose prose-neutral dark:prose-invert">
          <h3 className="font-medium text-lg mb-2">Other Services</h3>
          <ul>
            <li><b>Institutional Curriculum Design:</b> Helping TVETs and bootcamps modernize their syllabus.</li>
            <li><b>Developer Enablement Consulting:</b> Setting up internal training structures for tech teams.</li>
          </ul>
        </div>
      </section>

      <section id="projects">
        <h2 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h2>
        <Projects />
      </section>

      <section id="blog">
        <h2 className="font-semibold text-2xl mb-4 tracking-tighter">Field Notes</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl">
          Insights on <b>Developer Maturity</b>, <b>Production-Ready Practices</b>, and <b>Practical Security</b>.
          <br />
          No fluff. Just the systems thinking needed to ship.
        </p>
        <BlogPosts />
      </section>
    </section>
  )
}
