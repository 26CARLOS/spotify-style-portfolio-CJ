import Link from "next/link"
import React from "react"

interface ProjectCardProps {
  title: string
  description: string
  icon: string | JSX.Element
  year: string
  category: string
}

export default function ProjectCard({ title, description, icon, year, category }: ProjectCardProps) {
  return (
    <Link href={`/projects/${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition-all hover:translate-y-[-4px] h-full flex flex-col">
        <div className="w-full aspect-square bg-gray-800 rounded mb-4 flex items-center justify-center">
          <span className="text-4xl">{icon}</span>
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

