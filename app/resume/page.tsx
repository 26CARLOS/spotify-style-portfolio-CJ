import { Download, ExternalLink, Calendar, MapPin, Briefcase, GraduationCap, Award, User, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ResumeSection from "@/components/resume-section"
import ExperienceItem from "@/components/experience-item"
import SkillBadge from "@/components/skill-badge"

export default function ResumePage() {
  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="flex flex-col h-full">
          <Header />
          <div className="flex-1 p-6 space-y-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h1 className="text-3xl font-bold">Resume</h1>
              <div className="flex gap-3">
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download PDF
                </Button>
                <Button className="gap-2 bg-emerald-500 hover:bg-emerald-600 text-black">
                  <ExternalLink className="h-4 w-4" />
                  View Online
                </Button>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                  <span className="text-black font-bold text-2xl">CJ</span>
                </div>
                <div className="space-y-3 text-center md:text-left">
                  <h2 className="text-2xl font-bold">Carlos Juma</h2>
                  <p className="text-gray-400">Fullstack Developer</p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <span className="flex items-center gap-1 text-sm text-gray-400">
                      <MapPin className="h-4 w-4 text-emerald-500" /> Pretora, GP
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-400">
                      <Calendar className="h-4 w-4 text-emerald-500" /> Available
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <ResumeSection title="About Me" icon={<User className="h-5 w-5 text-emerald-500" />}>
              <p className="text-gray-300">
                Curious Fullstack developer with 1+ years of experience building responsive, user-friendly web
                applications. Specialized in React and modern JavaScript frameworks with a strong focus on creating
                exceptional user experiences. Committed to writing clean, maintainable code and staying current with
                emerging technologies and best practices.
              </p>
            </ResumeSection>

            <ResumeSection title="Work Experience" icon={<Briefcase className="h-5 w-5 text-emerald-500" />}>
              <div className="space-y-6">
                <ExperienceItem
                  title="Freelance developer"
                  company="---"
                  date="2021 - Present"
                  location="Pretoria, GP"
                  description="Developed custom web applications for clients in various industries. Collaborated with designers to create responsive, pixel-perfect UI components and animations."
                  technologies={["React", "TypeScript", "Next.js", "Tailwind CSS"]}
                />
              </div>
            </ResumeSection>

            <ResumeSection title="Education" icon={<GraduationCap className="h-5 w-5 text-emerald-500" />}>
              <div className="space-y-6">

              <ExperienceItem
                  title="Matric"
                  company="Curro Academy Pretoria"
                  date="2021"
                  location="Pretoria, GP"
                  description="Graduated with 4 distinctions in Mathematics, Physical Sciences, English and Computer Applications Technology."
                />


                <ExperienceItem
                  title="Bacehlor of Science in Information and Knowledge Systems"
                  company="University of Pretoria"
                  date="2022-2024"
                  location="Pretoria, GP"
                  description="A degree focusing on computer science and informatics. "
                />

                
              </div>
            </ResumeSection>

            <ResumeSection title="Skills" icon={<Code className="h-5 w-5 text-emerald-500" />}>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="JavaScript" level={90} />
                    <SkillBadge name="TypeScript" level={85} />
                    <SkillBadge name="HTML5" level={95} />
                    <SkillBadge name="CSS3" level={90} />
                    <SkillBadge name="C++" level={70} />
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Frameworks & Libraries</h4>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="React" level={95} />
                    <SkillBadge name="Next.js" level={85} />
                    <SkillBadge name="Vue.js" level={80} />
                    <SkillBadge name="Tailwind CSS" level={90} />
                    <SkillBadge name="Node.js" level={75} />
                    <SkillBadge name="Express" level={70} />
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Tools & Platforms</h4>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="Git" level={90} />
                    <SkillBadge name="Webpack" level={80} />
                    <SkillBadge name="Docker" level={65} />
                    <SkillBadge name="AWS" level={70} />
                    <SkillBadge name="Figma" level={85} />
                  </div>
                </div>
              </div>
            </ResumeSection>

            <ResumeSection title="Certifications & Awards" icon={<Award className="h-5 w-5 text-emerald-500" />}>
                <div className="space-y-6">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Meta Advanced React Certificate</h4>
                    <span className="text-sm text-gray-400">2024</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">Meta</p>
                </div>
                </div>
            </ResumeSection>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  )
}

