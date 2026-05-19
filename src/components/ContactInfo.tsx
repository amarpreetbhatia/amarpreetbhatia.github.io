import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Linkedin, Mail } from 'lucide-react'

const ContactInfo = () => {
  return (
    <section id="contact" className="mb-16">
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-8">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">Contact</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-white">Let’s explore AI-first transformation and enterprise modernization.</h2>
        </div>
      </div>

      <Card className="border border-slate-800 bg-slate-900/95 shadow-xl shadow-slate-950/20">
        <CardContent className="p-8">
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>
              I work with boards, CTOs and platform leaders to shape AI-enabled operating models, secure cloud platforms and modern delivery practices. Reach out if you want to accelerate enterprise change with clarity and confidence.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild variant="secondary" className="w-full sm:w-auto px-6 py-3">
              <a href="https://www.linkedin.com/in/amarpreetbhatia/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2 inline-block" />
                Connect on LinkedIn
              </a>
            </Button>
            <Button asChild variant="secondary" className="w-full sm:w-auto px-6 py-3">
              <a href="mailto:contact@amarpreetbhatia.com">
                <Mail className="w-4 h-4 mr-2 inline-block" />
                Email Me
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export default ContactInfo
