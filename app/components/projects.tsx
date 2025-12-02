import Image from 'next/image'
import { projects } from 'app/data/projects'

export function Projects() {
    return (
        <div className="my-10">
            <h2 className="text-2xl font-semibold mb-6">Web Design Projects</h2>
            <div className="space-y-4">
                {projects.map(({ name, link, img, desc }) => (
                    <a
                        key={name}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors group"
                    >
                        <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded-md">
                            <Image
                                src={img}
                                alt={name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {name}
                            </h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{desc}</p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1 truncate">
                                {link}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}
