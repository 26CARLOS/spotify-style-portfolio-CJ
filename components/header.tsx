"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Bell, Menu, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-b from-gray-800 to-transparent p-6 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search projects..."
              className="pl-10 bg-gray-800 border-gray-700 focus:border-emerald-500 w-full"
            />
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Bell className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
              <span className="font-bold text-black">CJ</span>
            </div>
            <span className="font-medium">Carlos Juma</span>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="mt-4 md:hidden">
          <ul className="space-y-2">
            <li>
              <Link href="/" className="block py-2 px-4 hover:bg-gray-800 rounded-md">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="block py-2 px-4 hover:bg-gray-800 rounded-md">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 px-4 hover:bg-gray-800 rounded-md">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 px-4 hover:bg-gray-800 rounded-md">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/resume" className="block py-2 px-4 hover:bg-gray-800 rounded-md">
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

