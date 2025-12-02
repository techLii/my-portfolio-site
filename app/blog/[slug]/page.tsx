import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts } from 'app/lib/blog'
import { baseUrl } from 'app/sitemap'

// Generate static params for static generation
export function generateStaticParams() {
  const posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// UPDATE 1: Define params as a Promise for Next.js 15
type Props = {
  params: Promise<{ slug: string }>
}

// Generate metadata (SEO + OG tags)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // UPDATE 2: Await the params
  const { slug } = await params
  const post = getBlogPosts().find((post) => post.slug === slug)

  if (!post) {
    return { title: 'Post Not Found' }
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata

  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

// The actual page component
// UPDATE 3: Make the component async
export default async function BlogPost({ params }: Props) {
  // UPDATE 4: Await the params here too
  const { slug } = await params
  const post = getBlogPosts().find((post) => post.slug === slug)

  if (!post) {
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
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `${baseUrl}/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />

      <h1 className="title font-semibold text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>

      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>

      <article className="prose prose-neutral dark:prose-invert max-w-[650px]">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}