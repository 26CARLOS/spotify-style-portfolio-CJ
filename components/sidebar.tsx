"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Briefcase, User, Mail, Code, Bookmark } from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <aside className="w-64 bg-black border-r border-gray-800 p-6 hidden md:flex flex-col h-full">
      <div className="mb-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
            <Code className="h-5 w-5 text-black" />
          </div>
          <span className="text-xl font-bold">DevPortfolio</span>
        </Link>
      </div>

      <nav className="space-y-1 flex-1">
        <Link
          href="/"
          className={`flex items-center gap-3 py-2 px-4 rounded-md transition-colors ${
            isActive("/") ? "text-white bg-gray-800" : "text-gray-400 hover:text-white hover:bg-gray-800"
          }`}
        >
          <Home className="h-5 w-5" />
          <span>Home</span>
        </Link>
        <Link
          href="/projects"
          className={`flex items-center gap-3 py-2 px-4 rounded-md transition-colors ${
            isActive("/projects") ? "text-white bg-gray-800" : "text-gray-400 hover:text-white hover:bg-gray-800"
          }`}
        >
          <Briefcase className="h-5 w-5" />
          <span>Projects</span>
        </Link>
        <Link
          href="/about"
          className={`flex items-center gap-3 py-2 px-4 rounded-md transition-colors ${
            isActive("/about") ? "text-white bg-gray-800" : "text-gray-400 hover:text-white hover:bg-gray-800"
          }`}
        >
          <User className="h-5 w-5" />
          <span>About</span>
        </Link>
        <Link
          href="/contact"
          className={`flex items-center gap-3 py-2 px-4 rounded-md transition-colors ${
            isActive("/contact") ? "text-white bg-gray-800" : "text-gray-400 hover:text-white hover:bg-gray-800"
          }`}
        >
          <Mail className="h-5 w-5" />
          <span>Contact</span>
        </Link>
      </nav>

      <div className="pt-6 border-t border-gray-800">
        <Link
          href="/resume"
          className={`flex items-center gap-3 py-2 px-4 rounded-md transition-colors ${
            isActive("/resume") ? "text-white bg-gray-800" : "text-gray-400 hover:text-white hover:bg-gray-800"
          }`}
        >
          <Bookmark className="h-5 w-5" />
          <span>Resume</span>
        </Link>
      </div>
    </aside>
  )
}

