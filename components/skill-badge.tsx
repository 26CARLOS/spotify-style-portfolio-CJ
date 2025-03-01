interface SkillBadgeProps {
    name: string
    level: number
  }
  
  export default function SkillBadge({ name, level }: SkillBadgeProps) {
    return (
      <div className="group relative">
        <div className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-full text-sm transition-colors">{name}</div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black border border-gray-700 rounded px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          {level}% proficiency
        </div>
      </div>
    )
  }
  
  