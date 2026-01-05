export function Skills() {
    // Focused competencies for the new brand
    const pillars = [
        "Secure Software Development",
        "Systems Architecture",
        "Technical Pedagogy",
        "DevSecOps Pipelines",
        "Developer Maturity Models"
    ]

    return (
        <div className="my-16">
            <h2 className="text-2xl font-semibold mb-6 tracking-tighter">Core Competencies</h2>
            <div className="flex flex-wrap gap-2">
                {pillars.map((skill) => (
                    <span
                        key={skill}
                        className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm font-medium text-neutral-800 dark:text-neutral-200"
                    >
                        {skill}
                    </span>
                ))}
            </div>
            <p className="mt-4 text-sm text-neutral-500">
                Focusing on the <b>intersections</b> of these fields, not just the syntax.
            </p>
        </div>
    )
}
