import { useState } from 'react'
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

  return (
    <nav className="relative">
      <div className="hidden md:flex items-center space-x-8">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`text-sm font-medium transition-colors ${
              activeSection === item.id ? 'text-cyan-300' : 'text-slate-300 hover:text-white'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X className="w-6 h-6 text-slate-200" />
        ) : (
          <Menu className="w-6 h-6 text-slate-200" />
        )}
      </button>

      {isMenuOpen && (
        <div className="absolute top-full right-0 mt-2 w-64 rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl z-50">
          <div className="py-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                  activeSection === item.id ? 'text-cyan-300 bg-slate-900' : 'text-slate-300 hover:bg-slate-900/80'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  )
}

export default Navigation
