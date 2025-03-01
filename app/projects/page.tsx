"use client"

import { useState } from "react"
import { Play, Clock, Filter, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProjectItem from "@/components/project-item"
const projects = [
  {
    id: 1,
    title: "Dripamics Grail - LMS",
    description: "Learning Management System built with React and Node.js",
    tech: ["React", "Node.js", "JavaScript", "MongoDB", "AWS", "Tailwind CSS"], 
    duration: "1 month",
    year: 2025,
    category: "Fullstack",
    icon: "🎓"
  },
  {
    id: 2,
    title: "Innov8 Home Exclusives",
    description: "Website for a home renovations company built with React.js hosted on AWS Amplify",
    tech: ["React.js", "AWS Amplify", "Tailwind CSS"],
    duration: "2 weeks",
    year: 2024,
    category: "Frontend",
    icon: "✅"
  },
  {
    id: 3,
    title: "Spotify Inspired Portfolio Website",
    description: "Personal portfolio site built with Next.js and Tailwind CSS",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    duration: "4 days",
    year: 2025,
    category: "Frontend",
    icon: "🎨"
  },
  {
    id: 4,
    title: "Dripanomics Tutorials",
    description: "Website for a Johannesburg based tutoring company built with React.js",
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    duration: "2 weeks",
    year: 2023,
    category: "Backend",
    icon: "📝"
  }
]

export default function ProjectsPage() {
  const [sortBy, setSortBy] = useState<"date" | "name">("date")

  const sortedProjects = [...projects].sort((a, b) => {
    if (sortBy === "date") {
      return b.year - a.year
    } else {
      return a.title.localeCompare(b.title)
    }
  })

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="flex flex-col h-full">
          <Header />
          <div className="flex-1 p-6 space-y-8">
            <section className="space-y-4">
              <div className="flex items-end gap-6">
                <div className="w-52 h-52 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg shadow-lg flex items-center justify-center">
                  <span className="text-6xl">🚀</span>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 uppercase">Project Playlist</h4>
                  <h1 className="text-5xl font-bold mt-2 mb-4">My Projects</h1>
                  <p className="text-gray-400">Carlos Juma • {projects.length} projects</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-4">
                <Button className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-black px-8">
                  <Play className="mr-2 h-4 w-4" /> Play All
                </Button>
                <div className="flex items-center gap-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="text-gray-400 hover:text-white">
                        <Filter className="mr-2 h-4 w-4" />
                        Sort by: {sortBy === "date" ? "Date" : "Name"}
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => setSortBy("date")}>Date</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSortBy("name")}>Name</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className="bg-gray-900/50 rounded-lg">
                <div className="grid grid-cols-[auto_1fr_auto] gap-4 px-6 py-2 text-gray-400 text-sm">
                  <div className="w-8">#</div>
                  <div>Title</div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4" />
                  </div>
                </div>
                {sortedProjects.map((project, index) => (
                  <ProjectItem key={project.id} project={project} index={index + 1} />
                ))}
              </div>
            </section>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  )
}

