import { skills } from 'app/data/skills'

export function Skills() {
    return (
        <div className="my-10">
            <h2 className="text-2xl font-semibold mb-6">Skills</h2>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill.name}
                        className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-sm font-medium text-neutral-700 dark:text-neutral-300"
                    >
                        {skill.name}
                    </span>
                ))}
            </div>
        </div>
    )
}
