import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        
      </h1>
      <p className="mb-4">
        {` Hi I'm Eli, a technical trainer with experience in IT support, freelancing, and coding. I specialize in 
          breaking down complex technical concepts into clear, actionable lessons, 
          empowering learners to excel in their tech journeys..`}
      </p>

      <p className="mb-4">
        {` I bring practical, real-world insights to my training sessions inspiring and equiping individuals
          with the skills they need to succeed in the ever-evolving world of technology..`}
      </p>
      
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

