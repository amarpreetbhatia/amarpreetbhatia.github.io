import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Button } from './components/ui/button'
import { Linkedin, Mail, Github } from 'lucide-react'
import AboutMe from './components/AboutMe'
import SkillInfo from './components/SkillInfo'
import ExperienceInfo from './components/ExperienceInfo'

function App() {
  const [activeSection, setActiveSection] = useState('aboutme')

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['aboutme', 'skills', 'experience', 'education', 'certifications', 'contact']
      const scrollPosition = window.scrollY + 200

      // Check if we're at the top (hero section)
      if (scrollPosition < 300) {
        setActiveSection('')
        return
      }

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-900 to-orange-600">
      {/* Header */}
      <header className="relative z-50 bg-white/95 backdrop-blur-sm shadow-sm" role="banner">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
                         {/* Profile Picture */}
             <div className="flex items-center">
               <img 
                 src="/profile_pic.png" 
                 alt="This is Amarpreet Bhatia's Portfolio website" 
                 className="w-20 h-20 rounded-full object-cover border-3 border-orange-300 shadow-lg"
               />
             </div>
            
            {/* Navigation Menu */}
            <nav>
              <div className="flex space-x-8">
                {[
                  { id: 'aboutme', label: 'About Me' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'education', label: 'Education' },
                  { id: 'certifications', label: 'Certifications' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-medium transition-colors hover:text-orange-600 ${
                      activeSection === item.id ? 'text-orange-600' : 'text-gray-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-in fade-in-50 duration-700">
            Driving the Next Wave of Digital Transformation.
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed animate-in fade-in-50 duration-700 delay-200">
            As a Principal Engineer at the intersection of Cloud Architecture, Platform Engineering, and Generative AI, I help organizations modernize their technology, automate their processes, and unlock new value.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in-50 duration-700 delay-300">
            <Button 
              onClick={() => scrollToSection('experience')}
              className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg font-semibold"
            >
              View My Work
            </Button>
                         <Button 
               asChild
               className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg font-semibold"
             >
               <a href="https://www.linkedin.com/in/amarpreetbhatia/" target="_blank" rel="noopener noreferrer">
                 <Linkedin className="w-5 h-5 mr-2" />
                 Connect on LinkedIn
               </a>
             </Button>
          </div>
        </div>
      </section>

             {/* Main Content */}
       <main className="container mx-auto px-4 py-16">
                  {/* About Me Section */}
         <AboutMe />

                   {/* Skills Section */}
          <SkillInfo />

          {/* Experience Section */}
          <ExperienceInfo />

        {/* Education Section */}
        <section id="education" className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-6 relative">
            Education
            <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mt-2 rounded"></div>
          </h2>
          <Card className="animate-in fade-in-50 duration-500">
            <CardContent className="p-6">
              <ul className="space-y-2 text-gray-700">
                <li>Bachelor of Engineering (B.E.), Computer Science</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-6 relative">
            Certifications
            <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mt-2 rounded"></div>
          </h2>
          <Card className="animate-in fade-in-50 duration-500">
            <CardContent className="p-6">
              <ul className="space-y-2 text-gray-700">
                <li>AWS Certified Solutions Architect - Associate</li>
                <li>Certified Kubernetes Application Developer (CKAD)</li>
                <li>Certified SAFe® 5 Practitioner</li>
                <li>Microsoft Certified: Azure Fundamentals</li>
                <li>Architecting with Google Kubernetes Engine (Coursera)</li>
                <li>AI-Powered Software and System Design (deeplearning.ai)</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-6 relative">
            Contact
            <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mt-2 rounded"></div>
          </h2>
          <Card className="animate-in fade-in-50 duration-500">
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">
                If you would like to get in touch, please connect with me on LinkedIn.
              </p>
              <div className="flex space-x-4">
                <Button asChild variant="outline">
                  <a href="https://www.linkedin.com/in/amarpreetbhatia/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="mailto:contact@amarpreetbhatia.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://github.com/amarpreetbhatia" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 text-white/70">
          <p>&copy; 2025 Amarpreet Bhatia. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}

export default App 