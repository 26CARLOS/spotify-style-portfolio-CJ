import { MapPin } from "lucide-react"
import { Briefcase } from "lucide-react"

interface ExperienceItemProps {
  title: string
  company: string
  date: string
  location: string
  description?: string
  technologies?: string[]
}

export default function ExperienceItem({
  title,
  company,
  date,
  location,
  description,
  technologies,
}: ExperienceItemProps) {
  return (
    <div className="border-l-2 border-gray-800 pl-4 pb-2">
      <div className="relative">
        <div className="absolute -left-[21px] top-1 w-4 h-4 rounded-full bg-emerald-500"></div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
          <h4 className="font-bold">{title}</h4>
          <div className="text-sm text-emerald-500 font-medium">{date}</div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Briefcase className="h-3 w-3" />
            {company}
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {location}
          </div>
        </div>
        {description && <p className="mt-2 text-gray-300 text-sm">{description}</p>}
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {technologies.map((tech) => (
              <span key={tech} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

