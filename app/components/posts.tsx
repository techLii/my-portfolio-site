import { formatDate, getBlogPosts } from 'app/lib/blog'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <div key={post.slug} className="flex flex-col space-y-2 mb-6">
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
            {post.metadata.summary ? (
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {post.metadata.summary}
              </p>
            ) : null}
          </div>
        ))}
    </div>
  )
}
