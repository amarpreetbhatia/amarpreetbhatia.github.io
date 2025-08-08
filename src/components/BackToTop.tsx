import { Button } from './ui/button'
import { ChevronUp, Sparkles } from 'lucide-react'

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="flex justify-center mt-8">
      <Button
        onClick={scrollToTop}
        className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative flex items-center space-x-2">
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span className="font-semibold">Return to the Summit</span>
          <ChevronUp className="w-4 h-4 group-hover:animate-bounce" />
        </div>
      </Button>
    </div>
  )
}

export default BackToTop
