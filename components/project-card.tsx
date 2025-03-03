import Image from "next/image"
import Link from "next/link"
import { Code } from "lucide-react"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  icon: any,
  year: string
  category: string
}

export default function ProjectCard({ id, title, description, icon, year, category }: ProjectCardProps) {
  return (
    <Link href={`/projects/${id}`} className="block">
      <div className="bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition-all hover:translate-y-[-4px] h-full flex flex-col">
        <div className="w-full aspect-square  rounded mb-4 flex items-center justify-center">
          {
            icon ? (
              <Image
            src={icon}
            alt={title}
            width={264}
            height={264}
            className="rounded"
          /> ): (
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
              <Code className="h-5 w-5 text-black" />
            </div>
            )
          }
          
        </div>
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-gray-400 text-sm flex-1">{description}</p>
        <div className="text-xs text-gray-500 mt-3">
          {year} • {category}
        </div>
      </div>
    </Link>
  )
}

