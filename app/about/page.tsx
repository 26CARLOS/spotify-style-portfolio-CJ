import Image from "next/image"
import Link from "next/link"
import { Book, Heart, Music, Coffee, Code, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import Footer from "@/components/footer"
import avatar from "@/public/me1.jpg"

export default function AboutPage() {
  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="flex flex-col h-full">
          <Header />
          <div className="flex-1 p-6 space-y-8 max-w-4xl mx-auto">
            <section className="space-y-4">
              <h1 className="text-3xl font-bold">About Me</h1>
              <div className="bg-gray-900 rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center md:items-start">
                <Image
                  src={avatar}
                  alt="John Smith"
                  width={200}
                  height={200}
                  className="rounded-full bg-gray-800"
                />
                <div className="space-y-4 text-center md:text-left">
                  <h2 className="text-2xl font-bold">Carlos Juma</h2>
                  <p className="text-xl text-emerald-500">Fullstack Developer</p>
                  <p className="text-gray-400 max-w-lg">
                    Passionate about creating beautiful, responsive, and user-friendly web applications. With almost 2
                    years of experience, I specialize in React and modern JavaScript frameworks.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Button asChild>
                      <Link href="/resume">View Full Resume</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/contact">Get in Touch</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Book className="h-6 w-6 text-emerald-500" />
                My Story
              </h2>
              <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                <p>
                  My journey into web development began during my college years when I built my first website for a
                  local non-profit. The ability to create something that could reach and impact people globally
                  fascinated me, and I've been hooked ever since.
                </p>
                <p>
                  After graduating with a degree in Computer Science, I dove headfirst into the world of frontend
                  development. I've had the privilege of working with startups and large corporations, constantly
                  learning and adapting to new technologies and methodologies.
                </p>
                <p>
                  Today, I'm passionate about creating intuitive user interfaces and optimizing web performance. I
                  believe in the power of clean, maintainable code and the importance of staying current with industry
                  trends and best practices.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Heart className="h-6 w-6 text-emerald-500" />
                Core Values
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-900 rounded-lg p-6 space-y-2">
                  <h3 className="font-bold text-lg">User-Centric Design</h3>
                  <p className="text-gray-400">
                    I believe that the best applications are those that prioritize the user's needs and experiences.
                  </p>
                </div>
                <div className="bg-gray-900 rounded-lg p-6 space-y-2">
                  <h3 className="font-bold text-lg">Continuous Learning</h3>
                  <p className="text-gray-400">
                    In the ever-evolving world of web development, I'm committed to staying updated and expanding my
                    skillset.
                  </p>
                </div>
                <div className="bg-gray-900 rounded-lg p-6 space-y-2">
                  <h3 className="font-bold text-lg">Collaboration</h3>
                  <p className="text-gray-400">
                    Great products are built by great teams. I value open communication and collaborative
                    problem-solving.
                  </p>
                </div>
                <div className="bg-gray-900 rounded-lg p-6 space-y-2">
                  <h3 className="font-bold text-lg">Code Quality</h3>
                  <p className="text-gray-400">
                    I strive to write clean, efficient, and maintainable code that stands the test of time.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Coffee className="h-6 w-6 text-emerald-500" />
                When I'm Not Coding
              </h2>
              <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                <p>
                  While I'm passionate about web development, I believe in maintaining a healthy work-life balance. When
                  I'm not in front of a computer, you can find me:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>Exploring hiking trails and enjoying nature</li>
                  <li>Experimenting with new recipes in the kitchen</li>
                  <li>Reading sci-fi novels and tech blogs</li>
                  <li>Playing guitar and attending local music gigs</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Music className="h-6 w-6 text-emerald-500" />
                What People Say
              </h2>
              <div className="bg-gray-900 rounded-lg p-6 space-y-6">
                <blockquote className="border-l-4 border-emerald-500 pl-4 italic">
                  "John is an exceptional developer with a keen eye for detail. His ability to translate complex ideas
                  into user-friendly interfaces is truly remarkable."
                  <footer className="text-gray-400 mt-2">
                    - Sarah Johnson, Project Manager at Tech Innovations Inc.
                  </footer>
                </blockquote>
                <blockquote className="border-l-4 border-emerald-500 pl-4 italic">
                  "Working with John was a pleasure. He's not only technically proficient but also a great team player
                  who always goes the extra mile."
                  <footer className="text-gray-400 mt-2">- Mike Chen, Lead Developer at Digital Solutions LLC</footer>
                </blockquote>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Code className="h-6 w-6 text-emerald-500" />
                Let's Build Something Amazing
              </h2>
              <div className="bg-gray-900 rounded-lg p-6 text-center">
                <p className="mb-4">
                  I'm always open to new opportunities and exciting projects. Whether you have a specific project in
                  mind or just want to connect, I'd love to hear from you.
                </p>
                <Button asChild className="gap-2">
                  <Link href="/contact">
                    Get in Touch <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </section>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  )
}

