import Link from 'next/link'
import { getUnits } from 'app/lib/units'

export const metadata = {
    title: 'Teaching Units',
    description: 'Modular teaching units for web development.',
}

export default function UnitsPage() {
    const units = getUnits()

    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Teaching Units</h1>
            <div className="grid gap-6">
                {units.map((unit) => (
                    <Link
                        key={unit.slug}
                        href={`/units/${unit.slug}`}
                        className="block border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                    >
                        <h2 className="text-xl font-semibold mb-2">{unit.title}</h2>
                        <p className="text-neutral-600 dark:text-neutral-400">{unit.description}</p>
                    </Link>
                ))}
            </div>
        </section>
    )
}
