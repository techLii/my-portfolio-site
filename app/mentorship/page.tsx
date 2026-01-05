
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Mentorship',
    description: '12-Week Production-Ready Developer Program',
}

export default function MentorshipPage() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                12-Week Production-Ready Developer Program
            </h1>

            <div className="prose prose-neutral dark:prose-invert">
                <p className="text-lg mb-8">
                    The definitive bridge from "learning to code" to <b>shipping secure, scalable production software</b>.
                </p>

                <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 mb-8">
                    <h2 className="font-medium text-xl mb-4 tracking-tighter mt-0">Who This Is For</h2>
                    <ul className="mt-0">
                        <li><b>Early-Career Developers</b> stuck in "tutorial hell" who need to build real systems.</li>
                        <li><b>TVET Graduates</b> seeking to professionalize their diverse skill sets.</li>
                        <li><b>Self-Taught Engineers</b> who want to master secure-by-design architecture.</li>
                    </ul>
                </div>

                <h2 className="font-medium text-xl mb-4 tracking-tighter">Program Outcomes</h2>
                <p>
                    We do not focus on "learning React" or "learning Python." We focus on:
                </p>
                <ul>
                    <li><b>Secure-by-Design Development:</b> Implement auth, data validation, and threat modeling from day one.</li>
                    <li><b>Production Infrastructure:</b> CI/CD pipelines, containerization, and cloud deployment.</li>
                    <li><b>Professional Maturity:</b> Code reviews, documentation, and collaborative workflows.</li>
                </ul>

                <h2 className="font-medium text-xl mb-4 tracking-tighter">Format</h2>
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
    )
}
