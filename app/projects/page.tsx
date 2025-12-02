import { Projects } from 'app/components/projects'

export const metadata = {
    title: 'Projects',
    description: 'Web design projects and work.',
}

export default function ProjectsPage() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>
            <Projects />
        </section>
    )
}
