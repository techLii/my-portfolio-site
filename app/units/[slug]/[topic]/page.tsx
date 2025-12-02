import { notFound } from 'next/navigation'
import { getUnits, getUnitTopics, getTopic } from 'app/lib/units'
import { CustomMDX } from 'app/components/mdx'
import { formatDate } from 'app/lib/blog'

export function generateStaticParams() {
    const units = getUnits()
    let params: { slug: string; topic: string }[] = []

    units.forEach((unit) => {
        const topics = getUnitTopics(unit.slug)
        topics.forEach((topic) => {
            params.push({
                slug: unit.slug,
                topic: topic.slug,
            })
        })
    })

    return params
}

export default function TopicPage({ params }: { params: { slug: string; topic: string } }) {
    const topic = getTopic(params.slug, params.topic)

    if (!topic) {
        notFound()
    }

    return (
        <section>
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Article',
                        headline: topic.metadata.title,
                        datePublished: topic.metadata.publishedAt,
                        description: topic.metadata.summary,
                    }),
                }}
            />

            <h1 className="title font-semibold text-2xl tracking-tighter max-w-[650px]">
                {topic.metadata.title}
            </h1>

            <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {formatDate(topic.metadata.publishedAt)}
                </p>
            </div>

            <article className="prose prose-neutral dark:prose-invert max-w-[650px]">
                <CustomMDX source={topic.content} />
            </article>
        </section>
    )
}
