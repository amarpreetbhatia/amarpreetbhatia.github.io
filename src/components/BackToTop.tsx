import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { ChevronUp } from 'lucide-react'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 420)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-5 right-5 z-50 transition-opacity duration-300 sm:bottom-6 sm:right-6">
      <Button
        onClick={scrollToTop}
        variant="secondary"
        className="inline-flex items-center gap-2 rounded-full bg-slate-900/95 text-slate-100 px-4 py-3 shadow-2xl shadow-slate-950/40 hover:bg-slate-800"
        aria-label="Scroll back to top"
      >
        <ChevronUp className="w-4 h-4" />
        <span className="hidden sm:inline">Back to top</span>
      </Button>
    </div>
  )
}

export default BackToTop
