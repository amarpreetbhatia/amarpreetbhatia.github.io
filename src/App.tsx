import { useState, useEffect } from 'react'
import { Button } from './components/ui/button'
import { Linkedin } from 'lucide-react'
import AboutMe from './components/AboutMe'
import SkillInfo from './components/SkillInfo'
import ExperienceInfo from './components/ExperienceInfo'
import EducationInfo from './components/EducationInfo'
import CertificationsInfo from './components/CertificationsInfo'
import ContactInfo from './components/ContactInfo'
import Navigation from './components/Navigation'

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
                        src="./profile_pic.png" 
                        alt="This is Amarpreet Bhatia's Portfolio website" 
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-3 border-orange-300 shadow-lg"
                      />
                    </div>
                    
                    {/* Navigation Menu */}
                    <Navigation 
                      activeSection={activeSection}
                      scrollToSection={scrollToSection}
                    />
                  </div>
                </div>
              </header>

                    {/* Hero Section */}
              <section className="relative py-12 md:py-20 px-4">
                <div className="container mx-auto text-center">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-in fade-in-50 duration-700">
                    Driving the Next Wave of Digital Transformation.
                  </h1>
                  
                  <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed animate-in fade-in-50 duration-700 delay-200 px-4">
                    As a Principal Engineer at the intersection of Cloud Architecture, Platform Engineering, and Generative AI, I help organizations modernize their technology, automate their processes, and unlock new value.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center animate-in fade-in-50 duration-700 delay-300 px-4">
                                 <Button 
                      onClick={() => scrollToSection('experience')}
                      className="bg-white text-orange-600 hover:bg-orange-50 px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-semibold w-full sm:w-auto"
                    >
                      View My Work
                    </Button>
                    <Button 
                      asChild
                      className="bg-white text-orange-600 hover:bg-orange-50 px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-semibold w-full sm:w-auto"
                    >
                      <a href="https://www.linkedin.com/in/amarpreetbhatia/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                        Connect on LinkedIn
                      </a>
                    </Button>
                    <Button 
                      asChild
                      className="bg-white text-orange-600 hover:bg-orange-50 px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-semibold w-full sm:w-auto"
                    >
                      <a href="https://medium.com/@amarpreetbhatia" target="_blank" rel="noopener noreferrer">
                        <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                        </svg>
                        Read My Insights
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
          <EducationInfo />

                  {/* Certifications Section */}
          <CertificationsInfo />

          {/* Contact Section */}
          <ContactInfo />

        {/* Footer */}
        <footer className="text-center py-8 text-white/70">
          <p>&copy; 2025 Amarpreet Bhatia. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}

export default App 