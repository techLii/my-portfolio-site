
import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'
import { projects } from 'app/data/projects'
import { skills } from 'app/data/skills'

export default function Page() {
  return (
    <section>
      <div className="flex items-center mb-8">
        <Image
          src="/images/profile-picture.png"
          alt="Eli's Profile picture"
          width={80}
          height={80}
          className="w-20 h-20 rounded-full mr-4 object-cover"
          priority
          sizes="100vw" // Added sizes prop
        />
        <h1 className="text-2xl font-semibold tracking-tighter">
          Technical Trainer | Web Dev
        </h1>
      </div>
      <p className="mb-4">
        Hi I'm Eli, a technical trainer by day, web developer by night. I teach humans to talk to machines. Want in?
        <a
          href="mailto:eleeakim@gmail.com"
          className="text-blue-500 hover:underline ml-1"
        >
          Email me here 🚀
        </a>
      </p>

      <div className="my-10">
        <h2 className="text-2xl font-semibold mb-6">Web Design Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map(({ name, link, img, desc }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-300 group"
            >
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={img}
                  alt={name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
            </a>
          ))}
        </div>
      </div>

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

      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-6">Recent Blog Posts</h2>
        <BlogPosts />
      </div>
    </section>
  )
}
