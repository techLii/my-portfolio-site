import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Eliakim Nyawinda Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-4 tracking-tighter">Field Notes</h1>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl">
        Insights on <b>Developer Maturity</b>, <b>Production-Ready Practices</b>, and <b>Practical Security</b>.
        <br />
        No fluff. Just the systems thinking needed to ship.
      </p>
      <BlogPosts />
    </section>
  )
}
