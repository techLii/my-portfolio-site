import Link from 'next/link'
import Image from 'next/image'

export function About() {
    return (
        <section className="mb-16">
            <div className="flex flex-col-reverse md:flex-row items-start md:items-center mb-8 gap-6">
                <div className="flex-1">
                    <h1 className="text-3xl font-bold tracking-tighter mb-4">
                        Helping early-career developers ship secure, production-ready software.
                    </h1>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                        I bridge the gap between "I can code" and "I can architect".
                        Focusing on <b>developer education</b>, <b>real-world systems</b>, and <b>security as a first-class citizen</b>.
                    </p>
                    <div className="flex gap-4">
                        <Link
                            href="#mentorship"
                            className="bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 px-6 py-2.5 rounded-md font-medium hover:opacity-90 transition-opacity"
                        >
                            Join the Mentorship
                        </Link>
                        <Link
                            href="#about"
                            className="px-6 py-2.5 rounded-md font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                        >
                            Learn Methodology
                        </Link>
                    </div>
                </div>
                <Image
                    src="/images/profile-picture.png"
                    alt="Eli's Profile picture"
                    width={120}
                    height={120}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-neutral-100 dark:border-neutral-800"
                    priority
                />
            </div>
        </section>
    )
}
