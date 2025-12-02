import { notFound } from 'next/navigation'
import { getUnits, getUnitTopics } from 'app/lib/units'
import Link from 'next/link'

export function generateStaticParams() {
    const units = getUnits()
    return units.map((unit) => ({
        slug: unit.slug,
    }))
}

export default function UnitPage({ params }: { params: { slug: string } }) {
    const unit = getUnits().find((u) => u.slug === params.slug)
    const topics = getUnitTopics(params.slug)

    if (!unit) {
        notFound()
    }

    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">{unit.title}</h1>
            <div className="grid gap-4">
                {topics.map((topic) => (
                    <Link
                        key={topic.slug}
                        href={`/units/${unit.slug}/${topic.slug}`}
                        className="block border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                    >
                        <h2 className="text-lg font-medium">{topic.metadata.title}</h2>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">{topic.metadata.summary}</p>
                    </Link>
                ))}
            </div>
        </section>
    )
}
