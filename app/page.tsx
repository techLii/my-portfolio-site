import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        
      </h1>
      <p className="mb-4">
        {`Hi I'm Eli, I am a technical trainer, when I'm not teaching I'm coding.`}
      </p>
      
      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded p-4">
            <h3 className="text-lg font-medium mb-2"> <a href="https://www.scrideconsulting.agency" target="_blank" rel="noopener noreferrer">
              Scride Consulting</a></h3>
            <img src="/projects/scride-consulting.jpg" alt="Scride Consulting" className="w-full h-auto mb-2 rounded" />
            <p className="text-sm"><a href="https://www.scrideconsulting.agency" target="_blank" rel="noopener noreferrer">A consulting platform focused on technical solutions and advisory services.</a></p>
          </div>
          <div className="border rounded p-4">
            <h3 className="text-lg font-medium mb-2"> <a href="https://www.thrivefromthorns.org" target="_blank" rel="noopener noreferrer">
              Thrive From Thorns</a></h3>
            <img src="/projects/scride-consulting.jpg" alt="Thrive From Thorns" className="w-full h-auto mb-2 rounded" />
            <p className="text-sm"><a href="https://www.thrivefromthorns.org" target="_blank" rel="noopener noreferrer">A consulting platform focused on technical solutions and advisory services.</a></p>
          </div>
        </div>
      </div>
      
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}