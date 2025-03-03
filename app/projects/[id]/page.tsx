import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Github, ExternalLink, Calendar, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Mock function to simulate fetching project data
function getProjectData(id: string) {
  const projects = {
    "e-commerce-platform": {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product management, and payment processing.",
      date: "2023",
      category: "Full Stack",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      imageUrl: "/placeholder.svg",
      githubUrl: "https://github.com/username/e-commerce-platform",
      liveUrl: "https://e-commerce-platform-demo.com",
      features: [
        "User authentication and authorization",
        "Product catalog with search and filter functionality",
        "Shopping cart and checkout process",
        "Payment integration with Stripe",
        "Admin dashboard for product and order management",
      ],
      challenges: [
        "Implementing a secure and scalable user authentication system",
        "Optimizing database queries for large product catalogs",
        "Ensuring a smooth and intuitive checkout process",
        "Integrating and testing the payment gateway",
      ],
      outcomes: [
        "Increased online sales by 150% within the first three months",
        "Reduced cart abandonment rate by 30%",
        "Improved website load times by 40% through optimizations",
      ],
    },
    "weather-app": {
      title: "Weather App",
      description:
        "A React-based weather application with OpenWeather API integration, providing real-time weather information for locations worldwide.",
      date: "2023",
      category: "Frontend",
      technologies: ["React", "OpenWeather API", "Axios", "Styled Components"],
      imageUrl: "/placeholder.svg",
      githubUrl: "https://github.com/username/weather-app",
      liveUrl: "https://weather-app-demo.com",
      features: [
        "Current weather conditions display",
        "5-day forecast",
        "Location search functionality",
        "Responsive design for mobile and desktop",
        "Unit conversion (Celsius/Fahrenheit)",
      ],
      challenges: [
        "Handling API rate limits and optimizing requests",
        "Implementing accurate geolocation services",
        "Designing an intuitive and visually appealing UI for weather data",
      ],
      outcomes: [
        "Achieved 10,000+ active users within the first month",
        "Received positive feedback for the app's accuracy and ease of use",
        "Featured in a local tech blog as one of the best weather apps of the year",
      ],
    },
  }

  return projects[id as keyof typeof projects]
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProjectData(params.id)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="flex flex-col h-full">
          <Header />
          <div className="flex-1 p-6 space-y-8 max-w-4xl mx-auto">
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <Link href="/projects" className="text-sm text-gray-400 hover:text-white flex items-center gap-1">
                  <ChevronLeft className="h-4 w-4" />
                  Back to Projects
                </Link>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/projects">
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      Previous
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/projects">
                      Next
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
              <h1 className="text-3xl font-bold">{project.title}</h1>
              <div className="flex flex-wrap gap-2 items-center text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {project.date}
                </div>
                <div className="flex items-center gap-1">
                  <Tag className="h-4 w-4" />
                  {project.category}
                </div>
              </div>
            </section>

            <section className="bg-gray-900 rounded-lg overflow-hidden">
              <Image
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={400}
                className="w-full object-cover h-64 md:h-96"
              />
              <div className="p-6 space-y-4">
                <p className="text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Live
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Challenges & Solutions</h2>
              <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="border-l-2 border-emerald-500 pl-4">
                    <h3 className="font-bold text-emerald-500">Challenge {index + 1}</h3>
                    <p className="text-gray-300">{challenge}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Outcomes & Results</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {project.outcomes.map((outcome, index) => (
                  <div key={index} className="bg-gray-900 rounded-lg p-4 text-center">
                    <p className="text-emerald-500 font-bold text-lg mb-2">Result {index + 1}</p>
                    <p className="text-gray-300">{outcome}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gray-900 rounded-lg p-6 text-center">
              <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
              <p className="text-gray-300 mb-4">I'm always open to new projects and collaborations.</p>
              <Button asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </section>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  )
}

