import type { ReactNode } from "react"

interface ResumeSectionProps {
  title: string
  icon: ReactNode
  children: ReactNode
}

export default function ResumeSection({ title, icon, children }: ResumeSectionProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="bg-gray-900 rounded-lg p-6">{children}</div>
    </section>
  )
}

