import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <div className="flex items-center mb-8">
        <img 
          src="images/profile-picture.png" 
          alt="Eli's Profile" 
          className="w-20 h-20 rounded-full mr-4 object-cover" 
        />
        <h1 className="text-2xl font-semibold tracking-tighter">
          Eliakim Nyawinda
        </h1>
      </div>
      <p className="mb-4">
        {`Hi I'm Eli, a technical trainer based in Eldoret, Kenya.`}
      </p>
      
      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">Check out some of my work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded p-4">
            <h3 className="text-lg font-medium mb-2"> <a href="https://www.scrideconsulting.agency" target="_blank" rel="noopener noreferrer">
              Scride Consulting Agency</a></h3>
            <img src="/images/scride-logo.png" alt="Scride Consulting" className="w-full h-auto mb-2 rounded" />
            <p className="text-sm"><a href="https://www.scrideconsulting.agency" target="_blank" rel="noopener noreferrer">Scride helps organizations improve their operations through strategic analysis, program management, and sustainability consulting.</a></p>
          </div>
          <div className="border rounded p-4">
            <h3 className="text-lg font-medium mb-2"> <a href="https://www.thrivefromthorns.org" target="_blank" rel="noopener noreferrer">
              Thrive From Thorns Kenya</a></h3>
            <img src="/images/tft-logo.png" alt="Thrive From Thorns" className="w-full h-auto mb-2 rounded" />
            <p className="text-sm"><a href="https://www.thrivefromthorns.org" target="_blank" rel="noopener noreferrer">A nonprofit tackling root causes of poverty and trauma to help communities in Kenya thrive.</a></p>
          </div>
        </div>
      </div>
      
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}