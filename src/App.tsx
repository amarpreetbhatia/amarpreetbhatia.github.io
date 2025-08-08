import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Button } from './components/ui/button'
import { Linkedin, Mail, Github } from 'lucide-react'

function App() {
  const [activeSection, setActiveSection] = useState('aboutme')

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['aboutme', 'skills', 'experience', 'education', 'certifications', 'contact']
      const scrollPosition = window.scrollY + 100

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

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-600">
      {/* Header with Banner */}
      <header className="relative" role="banner">
        <div className="relative">
          <img 
            src="/banner-image-2.png" 
            alt="Amarpreet Bhatia - Principal Cloud Architect and AI Architect in Sydney Australia" 
            className="w-full max-h-[350px] object-cover block"
          />
          {/* Navigation Bar */}
          <nav className="absolute left-0 right-0 bottom-0 z-10 bg-white/98 backdrop-blur-sm shadow-sm">
            <div className="container mx-auto px-4">
              <div className="flex justify-end">
                <div className="flex space-x-6 py-4">
                  {[
                    { id: 'aboutme', label: 'About Me' },
                    { id: 'skills', label: 'Skills' },
                    { id: 'experience', label: 'Experience' },
                    { id: 'education', label: 'Education' },
                    { id: 'certifications', label: 'Certifications' },
                    { id: 'contact', label: 'Contact' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                        activeSection === item.id ? 'text-blue-600' : 'text-gray-600'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* About Me Section */}
        <section id="aboutme" className="mb-12">
          <h1 className="text-3xl font-semibold text-white mb-6 relative">
            Principal Cloud Architect & AI Architect in Sydney Australia
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mt-2 rounded"></div>
          </h1>
          <Card className="animate-in fade-in-50 duration-500">
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed">
                Experienced <strong>Principal Cloud Architect</strong> and <strong>AI Architect in Sydney Australia</strong> with 20+ years in enterprise software engineering. 
                As a <strong>Full-Stack Solutions Designer in Sydney Australia</strong>, I specialize in Java, Spring Boot, NodeJS, ReactJS, microservices architecture, 
                and cloud-native solutions (AWS, Azure, GCP). Proven leadership as a <strong>Principal Solution Architect in Sydney</strong> steering multiple scrum teams, 
                driving digital transformation, DevOps culture adoption, and platform modernization initiatives. 
                Strong expertise as an <strong>AWS Architect in Sydney</strong> and <strong>GCP Architect in Sydney</strong> with hands-on experience in technical innovation, 
                API management, CI/CD practices, and team mentorship. Certified AWS Solutions Architect and Kubernetes Developer, 
                passionate about delivering scalable, resilient systems and enhancing engineering best practices. 
                As a <strong>hands on Java and React Developer</strong>, I'm passionate about fostering innovation, 
                implementing best practices, and enhancing development workflows to achieve operational excellence.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-6 relative">
            Core Competencies - Full-Stack Solutions Designer
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mt-2 rounded"></div>
          </h2>
          <Card className="animate-in fade-in-50 duration-500">
            <CardContent className="p-6">
              <ul className="space-y-2 text-gray-700">
                <li><strong>Hands on Java and React Developer:</strong> Java, Spring Boot, NodeJS, ReactJS, Typescript, Redux, Swagger API, Kafka</li>
                <li><strong>Principal Solution Architect:</strong> Microservices Architecture | API Design | Cloud Platforms (AWS, GCP)</li>
                <li><strong>AWS Architect & GCP Architect:</strong> DevOps | CI/CD Automation (Bamboo, Jenkins, Git) | Docker | Kubernetes</li>
                <li><strong>AI Architect:</strong> Leadership and Mentoring | Agile/Scrum | Technical Strategy Development</li>
                <li><strong>Principal Cloud Architect:</strong> Digital Transformation | Legacy Modernization | Event-Driven Architectures</li>
                <li>Authentication & Authorization (OAuth2, OIDC, PingOne)</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-6 relative">
            Professional Experience
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mt-2 rounded"></div>
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Senior Engineer / Technical Lead, Financial Institute",
                points: [
                  "Led technical delivery across multiple scrum teams on cloud-native, microservices, and micro frontend initiatives to simplify banking platforms.",
                  "Architected and developed scalable REST APIs using Java, Spring Boot, and AWS integrations for enterprise-grade banking applications.",
                  "Led proof-of-concept initiatives for emerging technologies, delivering MVPs to production and presenting solutions to program stakeholders as part of Westpac One initiative.",
                  "Implemented robust SSO authentication using OAuth 2.0 and OIDC protocols via PingOne SaaS.",
                  "Provided technical leadership, code reviews, mentorship, and architectural guidance across cross-functional teams.",
                  "Championed DevOps practices, automating deployments via Bamboo pipelines to Azure Kubernetes Service (Westpac Mesh), cutting deployment time by 50%.",
                  "Mentored a team of 8 engineers, conducting training on cloud architecture and best practices, elevating team capability.",
                  "Drafted Swagger specifications and technical design documents, ensuring compliance with banking standards and facilitating cross-team collaboration."
                ]
              },
              {
                title: "Senior Technical Lead, Financial Institute",
                points: [
                  "Led the design and development of modernization of legacy application, an end-to-end batch processing solution for branch data reconciliation with downstream systems, enabling data migration for Westpac and its subsidiaries.",
                  "Authored technical documents, including high-level and low-level diagrams, solution and architecture diagrams, and Architecture Decision Records (ADRs)."
                ]
              },
              {
                title: "Principal Engineering Lead",
                points: [
                  "Provided leadership across digital banking projects by designing full-stack cloud solutions using Java, Spring Boot, NodeJS, ReactJS, and microservices architecture.",
                  "Architected event-driven systems using CQRS patterns and Axon framework, ensuring scalable, high-performing applications.",
                  "Implemented API strategies via Apigee for enterprise integration and managed gateway security and compliance.",
                  "Mentored developers, facilitated agile ceremonies, and promoted engineering excellence through code reviews and technical sessions.",
                  "Led initiatives for serverless deployments using AWS Lambda and cloud-native patterns."
                ]
              }
            ].map((job, index) => (
              <Card key={index} className="animate-in fade-in-50 duration-500">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">{job.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    {job.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-6 relative">
            Education
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mt-2 rounded"></div>
          </h2>
          <Card className="animate-in fade-in-50 duration-500">
            <CardContent className="p-6">
              <ul className="space-y-2 text-gray-700">
                <li>Bachelor of Engineering (B.E.), Computer Science</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-6 relative">
            Certifications
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mt-2 rounded"></div>
          </h2>
          <Card className="animate-in fade-in-50 duration-500">
            <CardContent className="p-6">
              <ul className="space-y-2 text-gray-700">
                <li>AWS Certified Solutions Architect - Associate</li>
                <li>Certified Kubernetes Application Developer (CKAD)</li>
                <li>Certified SAFe® 5 Practitioner</li>
                <li>Microsoft Certified: Azure Fundamentals</li>
                <li>Architecting with Google Kubernetes Engine (Coursera)</li>
                <li>AI-Powered Software and System Design (deeplearning.ai)</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-6 relative">
            Contact
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mt-2 rounded"></div>
          </h2>
          <Card className="animate-in fade-in-50 duration-500">
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">
                If you would like to get in touch, please connect with me on LinkedIn.
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
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 text-white/70">
          <p>&copy; 2025 Amarpreet Bhatia. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}

export default App 