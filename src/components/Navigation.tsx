import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

interface NavigationProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

const Navigation = ({ activeSection, scrollToSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { id: 'aboutme', label: 'About' },
    { id: 'ai-transformation', label: 'AI Focus' },
    { id: 'experience', label: 'Work' },
    { id: 'thought-leadership', label: 'Insights' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ]

  const handleMenuClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  return (
    <nav className="relative w-full" aria-label="Primary navigation">
      <div className="hidden md:flex items-center gap-8">
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToSection(item.id)}
            className={`text-sm font-medium transition-colors ${
              activeSection === item.id ? 'text-cyan-300' : 'text-slate-300 hover:text-white'
            }`}
            aria-current={activeSection === item.id ? 'page' : undefined}
          >
            {item.label}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-3 rounded-2xl bg-slate-900/90 hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
      >
        {isMenuOpen ? (
          <X className="w-6 h-6 text-slate-200" aria-hidden="true" />
        ) : (
          <Menu className="w-6 h-6 text-slate-200" aria-hidden="true" />
        )}
      </button>

      {isMenuOpen && (
        <div id="mobile-menu" className="absolute inset-x-0 top-full z-50 md:hidden">
          <div className="mx-4 mt-3 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/95 p-6 shadow-2xl shadow-slate-950/40">
            <div className="flex items-center justify-between mb-8">
              <span className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">Navigation</span>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-slate-200" aria-hidden="true" />
              </button>
            </div>
            <div className="space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleMenuClick(item.id)}
                  className={`block w-full rounded-3xl px-5 py-4 text-left text-base font-semibold transition-all ${
                    activeSection === item.id ? 'bg-cyan-500/15 text-cyan-300 shadow-inner' : 'text-slate-200 hover:bg-slate-900/80'
                  }`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
