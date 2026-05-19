import { Button } from './ui/button'
import { ChevronUp } from 'lucide-react'

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="flex justify-center mt-10">
      <Button
        onClick={scrollToTop}
        variant="secondary"
        className="px-6 py-3 text-slate-100 hover:bg-slate-800"
      >
        <div className="flex items-center gap-2">
          <ChevronUp className="w-4 h-4" />
          <span className="font-semibold">Back to top</span>
        </div>
      </Button>
    </div>
  )
}

export default BackToTop
