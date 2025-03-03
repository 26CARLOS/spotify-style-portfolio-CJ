import Link from "next/link"
import Image from "next/image"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Sidebar from "@/components/sidebar"
import ProjectCard from "@/components/project-card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import avatar from "@/public/me1.jpg"
import dripaLogo from "@/public/dripanomics-logo.png"
import innov8Logo from "@/public/INNOV8.png"
import dripaStatic from "@/public/dripaStatic.png"

// Mock function to simulate fetching projects data
function getProjects() {
  return [
    {
      id: "dripamics-grail-lms",
      title: "Dripamics Grail - LMS",
      description: "Learning Management System built with React and Node.js",
      icon: dripaLogo,
      year: "2025",
      category: "Fullstack",
    },
    {
      id: "innov8-home-exclusives",
      title: "Innov8 Home Exclusives",
      description: "Website for a home renovations company built with React.js hosted on AWS Amplify",
      icon: innov8Logo,
      year: "2024",
      category: "Frontend",
    },
    {
      id: "spotify-style-portfolio",
      title: "Spotify Inspired Portfolio Website",
      description: "Personal portfolio site built with Next.js and Tailwind CSS",
      year: "2025",
      category: "Frontend",
    },
    {
      id: "dripanomics-tutorials",
      title: "Dripanomics Tutorials",
      description: "Website for a Johannesburg based tutoring company built with React.js",
      icon: dripaStatic,
      year: "2023",
      category: "Backend",
    },
  ]
}  

export default function Home() {
  const projects = getProjects()

  return (
    <div className="flex h-svh bg-black text-white overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-auto relative">
        <div className="flex flex-col min-h-full">
          <Header />
          <div className="flex-1 p-6 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Carlos Juma, Fullstack Developer</h2>
              <div className="bg-gradient-to-b from-emerald-800 to-black p-6 rounded-lg flex flex-col md:flex-row gap-6 items-center">
                <div className="w-48 h-48 min-w-48 bg-emerald-900 rounded shadow-lg flex items-center justify-center">
                <Image
                    src={avatar}
                    alt="Carlos Juma"
                    className="w-32 h-32 rounded-full"
                    width={128}
                    height={128}
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold">whoami</h3>
                  <p className="text-gray-300 max-w-2xl">
                    A full-stack developer specializing in React, Node.js, and MongoDB. 1.5 years of experience building web applications and APIs. Passionate about learning new technologies and solving complex problems.
                  </p>
                  <div className="flex items-center gap-4">
                    <Button className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-black font-bold px-8">
                      <Play className="mr-2 h-4 w-4" /> About Me
                    </Button>
                    <span className="text-sm text-gray-400"> &infin; • Full Stack</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Recent Projects</h2>
                <Link href="/projects" className="text-sm text-gray-400 hover:text-white hover:underline">
                  Show all
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    icon={project.icon}
                    year={project.year}
                    category={project.category}
                  />
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Skills & Technologies</h2>
              <div className="bg-gray-900 rounded-lg p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "JavaScript",
                    "React",
                    "Node.js",
                    "TypeScript",
                    "Next.js",
                    "MongoDB",
                    "GraphQL",
                    "Tailwind CSS",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="bg-gray-800 p-3 rounded-md text-center hover:bg-gray-700 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  )
}

