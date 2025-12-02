import Image from 'next/image'

export function About() {
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
                    sizes="100vw"
                />
                <h1 className="text-2xl font-semibold tracking-tighter">
                    Software, Information Technology and Cyber Security Specialist
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
        </section>
    )
}
