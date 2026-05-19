import { useState, useEffect } from 'react'
import { Button } from './components/ui/button'
import { Linkedin, Moon, SunMedium } from 'lucide-react'
import AboutMe from './components/AboutMe'
import AITransformationFocus from './components/AITransformationFocus'
import SkillInfo from './components/SkillInfo'
import ExperienceInfo from './components/ExperienceInfo'
import ThoughtLeadership from './components/ThoughtLeadership'
import CredentialsInfo from './components/CredentialsInfo'
import ContactInfo from './components/ContactInfo'
import Navigation from './components/Navigation'
import BackToTop from './components/BackToTop'

function App() {
  const [activeSection, setActiveSection] = useState('aboutme')
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    if (window.matchMedia?.('(prefers-color-scheme: light)').matches) {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
  }, [theme])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(sectionId)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['aboutme', 'ai-transformation', 'experience', 'thought-leadership', 'skills', 'contact']
      const scrollPosition = window.scrollY + 220

      if (scrollPosition < 300) {
        setActiveSection('aboutme')
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

  const heroMetrics = [
    {
      label: 'Enterprise impact',
      value: '20+ years enabling regulated modernization and AI adoption'
    },
    {
      label: 'AI-first leadership',
      value: 'Strategy, governance, platform, and delivery at scale'
    },
    {
      label: 'Modernization focus',
      value: 'Cloud-native platforms, DevSecOps and enterprise integration'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/95 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-300/80">Amarpreet Bhatia</p>
              <p className="text-sm font-semibold text-slate-100">AI Enablement Architect | Enterprise Modernization | Platform Engineering</p>
            </div>

            <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-end">
              <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
              <Button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                variant="ghost"
                size="icon"
                className="text-slate-200 hover:text-white"
                aria-label="Toggle light and dark mode"
              >
                {theme === 'dark' ? <SunMedium className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden px-4 py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),_transparent_24%)] pointer-events-none" />
        <div className="relative container mx-auto">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80 mb-4">AI Enablement Architect | Enterprise Modernization Leader</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">Enterprise AI transformation leadership for cloud-native platforms and governance-ready delivery.</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">I partner with executive teams to define AI-first strategies, modernize platform ecosystems, and deliver measurable value with secure, scalable engineering and platform modernization programs.</p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-5">
            <Button onClick={() => scrollToSection('ai-transformation')} className="w-full sm:w-auto bg-cyan-400 text-slate-950 hover:bg-cyan-300 px-6 py-3 font-semibold shadow-lg shadow-cyan-400/20">Explore AI Strategy</Button>
            <Button asChild className="w-full sm:w-auto bg-slate-900/90 text-white border border-slate-700 hover:bg-slate-800 px-6 py-3 font-semibold shadow-sm">
              <a href="https://www.linkedin.com/in/amarpreetbhatia/" target="_blank" rel="noopener noreferrer"><Linkedin className="w-4 h-4 mr-2 inline-block" />Connect on LinkedIn</a>
            </Button>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <div key={metric.label} className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/90">{metric.label}</p>
                <p className="mt-4 text-lg font-semibold text-white">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <AboutMe />
        <AITransformationFocus />
        <ExperienceInfo />
        <ThoughtLeadership />
        <SkillInfo />
        <CredentialsInfo />
        <ContactInfo />

        <footer className="text-center py-10 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Amarpreet Bhatia. Strategic AI enablement and enterprise modernization leadership.</p>
        </footer>
      </main>

      <BackToTop />
    </div>
  )
}

export default App 