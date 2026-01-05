
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About',
    description: 'Technical Trainer & Secure Systems Architect',
}

export default function AboutPage() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                Educator. Architect. Systems Thinker.
            </h1>
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

                <h2 className="font-medium text-xl mb-4 tracking-tighter">My Philosophy</h2>
                <p>
                    Software development is not about memorizing tools; it is about <b>structured thinking</b>.
                    I believe in:
                </p>
                <ul>
                    <li><b>Security as a Mindset:</b> Security is not a feature you add later. It is how you write code from line one.</li>
                    <li><b>Systems Over Scripts:</b> moving from writing isolated scripts to architecting resilient ecosystems.</li>
                    <li><b>Structured Mentorship:</b> Growth happens through deliberate practice and expert feedback, not random tutorials.</li>
                </ul>

                <h2 className="font-medium text-xl mb-4 tracking-tighter">Background</h2>
                <p>
                    With extensive experience in <b>Technical and Vocational Education and Training (TVET)</b> and
                    hands-on software engineering, I understand exactly where traditional education fails and how to fix it.
                </p>
            </div>
        </section>
    )
}
