import Link from "next/link"
import { Play, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  duration: string
  year: number
}

interface ProjectItemProps {
  project: Project
  index: number
}

export default function ProjectItem({ project, index }: ProjectItemProps) {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] gap-4 px-6 py-2 hover:bg-gray-800/50 group">
      <div className="w-8 flex items-center text-gray-400 group-hover:text-white">{index}</div>
      <div className="space-y-1">
        <Link href={`/projects/${project.id}`} className="font-medium hover:underline">
          {project.title}
        </Link>
        <p className="text-sm text-gray-400">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span key={i} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-400">{project.duration}</span>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
            <Play className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

