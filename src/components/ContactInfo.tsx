import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Linkedin, Mail, Github } from 'lucide-react'

const ContactInfo = () => {
  return (
    <section id="contact" className="mb-12">
      <h2 className="text-3xl font-semibold text-white mb-6 relative">
        Contact
        <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mt-2 rounded"></div>
      </h2>
      <Card className="animate-in fade-in-50 duration-500">
        <CardContent className="p-6">
          <p className="text-gray-700 mb-4">
            If you would like to get in touch, please connect with me on my social media accounts.
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
            <Button asChild variant="outline">
              <a href="https://dev.to/amarpreetbhatia" target="_blank" rel="noopener noreferrer">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.53-.02c.3 0 .53-.05.65-.15.21-.18.31-.51.31-.89 0-.19-.03-.37-.09-.54zm6.84 0c-.18-.16-.46-.23-.84-.23h-.76l.02 2.44.04 2.45.53-.02c.3 0 .53-.05.65-.15.21-.18.31-.51.31-.89 0-.19-.03-.37-.09-.54z"/>
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                DEV.to
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export default ContactInfo
