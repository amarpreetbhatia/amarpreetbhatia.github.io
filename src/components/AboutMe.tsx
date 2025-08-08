import { Card, CardContent } from './ui/card'
import BackToTop from './BackToTop'

const AboutMe = () => {
  return (
    <section id="aboutme" className="mb-12">
      <h1 className="text-3xl font-semibold text-white mb-6 relative">
        About Me
        <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mt-2 rounded"></div>
      </h1>
      
      <Card className="animate-in fade-in-50 duration-500">
        <CardContent className="p-8">
          <div className="flex flex-col items-center mb-8">
            <img 
              src="/amarpreet_pic.png" 
              alt="Amarpreet Bhatia - Principal Engineer and Full Stack Solution Architect" 
              className="w-48 h-48 rounded-full object-cover border-4 border-orange-200 shadow-xl"
            />
          </div>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Hello, I'm <strong>Amarpreet Bhatia</strong>, a Principal Engineer and Full Stack Solution Architect with a passion for building leading-edge solutions that exceed customer expectations. For more than 20 years, my career has been focused on delivering cloud-native platforms, distributed systems, and AI-integrated applications within the highly regulated financial services industry.
            </p>
            
            <p>
              From architecting scalable microservices with Java and Spring Boot to pioneering the adoption of Generative AI tools like LlamaIndex and Spring AI, I thrive on solving complex technical challenges. My experience is grounded in a deep understanding of cloud technologies across AWS and Azure, secure DevOps practices, and the entire application lifecycle.
            </p>
            
            <p>
              As a certified AWS Solutions Architect and Kubernetes Developer, I am committed to both hands-on implementation and shaping an engineering culture that values excellence, security, and innovation.
            </p>
          </div>
        </CardContent>
      </Card>
      <BackToTop />
    </section>
  )
}

export default AboutMe
