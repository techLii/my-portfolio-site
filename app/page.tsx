import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <div className="flex items-center mb-8">
        <img 
          src="images/profile-picture.png" 
          alt="Eli's Profile picture" 
          className="w-20 h-20 rounded-full mr-4 object-cover" 
        />
        <h1 className="text-2xl font-semibold tracking-tighter">
          Technical Trainer | Web Dev
        </h1>
      </div>
      <p className="mb-4">
  Hi I'm Eli, a technical trainer by day, web developer by night. I teach humans to talk to machines. Want in?  
  <a 
    href="mailto:eleeakim@gmail.com.com" 
    className="text-blue-500 hover:underline ml-1"
  >
    Email me here 🚀
  </a>
</p>
      
      <div className="my-10">
  <h2 className="text-2xl font-semibold mb-6 text-center">Web Design Projects</h2>
  <div className="grid gap-6 md:grid-cols-2">
    {[
      {
        name: "Scride Consulting Agency",
        link: "https://www.scrideconsulting.agency",
        img: "/images/scride-logo.png",
        desc: "Scride helps organizations improve their operations through strategic analysis, program management, and sustainability consulting.",
      },
      {
        name: "Thrive From Thorns Kenya",
        link: "https://thrive-from-thorns-tft.vercel.app/",
        img: "/images/tft-logo.png",
        desc: "A nonprofit tackling root causes of poverty and trauma to help communities in Kenya thrive.",
      },
    ].map(({ name, link, img, desc }) => (
      <a
        key={name}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block border rounded-2xl p-5 hover:shadow-md transition-shadow duration-300"
      >
        {img && <img src={img} alt={name} className="w-full rounded-lg mb-3" />}
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
      </a>
    ))}
  </div>
</div>

      
      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Recent blog Posts</h2>
        <BlogPosts />
      </div>
    </section>
  )
}