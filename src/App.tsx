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

function Logo() {
  return (
    <svg width="18" height="18" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        fill="currentColor"
        d="M 160 88 L 194 34 L 216 0 L 256 0 L 256 40 L 221.5 93.5 L 200 128 L 256 128 L 256 256 L 96 256 L 96 168 L 64.246 220 L 40 256 L 0 256 L 0 216 L 34 162 L 56 128 L 0 128 L 0 0 L 160 0 Z"
      />
    </svg>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState('aboutme')
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

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
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <a
        href="#main-content"
        className="skip-link absolute left-4 top-4 z-50 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground opacity-0 transition-opacity duration-200 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to main content
      </a>
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full w-10 h-10 sm:w-11 sm:h-11 shrink-0 bg-secondary">
                <Logo />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">Amarpreet Bhatia</p>
                <p className="text-sm font-semibold text-foreground">AI Enablement Architect | Enterprise Modernization | Platform Engineering</p>
              </div>
            </div>

            <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-end">
              <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
              <Button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground"
                aria-label="Toggle light and dark mode"
              >
                {theme === 'dark' ? <SunMedium className="w-5 h-5" aria-hidden="true" /> : <Moon className="w-5 h-5" aria-hidden="true" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden px-4 py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),_transparent_24%)] pointer-events-none" />
        <div className="relative container mx-auto">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-[12px] uppercase tracking-[0.32em] text-primary/90 mb-4">AI Enablement Architect | Enterprise Modernization Leader</p>
            <h1 className="text-[1.75rem] sm:text-[2.5rem] leading-[1.1] font-semibold tracking-tight text-foreground">Enterprise AI transformation leadership for cloud-native platforms and governance-ready delivery.</h1>
            <p className="mx-auto mt-6 max-w-3xl text-[13px] leading-7 text-muted-foreground">I partner with executive teams to define AI-first strategies, modernize platform ecosystems, and deliver measurable value with secure, scalable engineering and platform modernization programs.</p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-5">
            <Button onClick={() => scrollToSection('ai-transformation')} className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 font-semibold shadow-lg shadow-primary/20">Explore AI Strategy</Button>
            <Button asChild className="w-full sm:w-auto bg-card text-foreground border border-border hover:bg-card/80 px-6 py-3 font-semibold shadow-sm">
              <a href="https://www.linkedin.com/in/amarpreetbhatia/" target="_blank" rel="noopener noreferrer"><Linkedin className="w-4 h-4 mr-2 inline-block" aria-hidden="true" />Connect on LinkedIn</a>
            </Button>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <div key={metric.label} className="rounded-3xl border border-border bg-secondary p-6 shadow-xl shadow-black/10">
                <p className="text-sm uppercase tracking-[0.28em] text-primary">{metric.label}</p>
                <p className="mt-4 text-lg font-semibold text-foreground">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main id="main-content" className="container mx-auto px-4 py-8">
        <AboutMe />
        <AITransformationFocus />
        <ExperienceInfo />
        <ThoughtLeadership />
        <SkillInfo />
        <CredentialsInfo />
        <ContactInfo />

        <footer className="text-center py-10 text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Amarpreet Bhatia. Strategic AI enablement and enterprise modernization leadership.</p>
        </footer>
      </main>

      <BackToTop />
    </div>
  )
}

export default App 