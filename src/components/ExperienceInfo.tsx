import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

const ExperienceInfo = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Engineering Knowledge Base",
      challenge: "A key challenge for the engineering division was the slow and difficult process for developers to find accurate technical information and onboard onto complex projects. Documentation was scattered, and institutional knowledge was siloed within teams.",
      solution: "I designed and delivered a proof-of-concept for a centralized, AI-powered knowledge base. The solution used Amazon Bedrock to create a system that could understand natural language queries and provide contextual, accurate answers by drawing from a wide range of internal documentation.",
      impact: "This initiative demonstrated a clear path to significantly reducing developer onboarding time and improving day-to-day engineering productivity by providing instant, reliable access to information."
    },
    {
      id: 2,
      title: "Platform Modernization & DevOps Transformation",
      challenge: "A critical business division was hampered by slow, manual, and error-prone deployment processes for its legacy applications, which delayed innovation and increased operational risk.",
      solution: "I engineered and established a \"golden path\" for developers by creating fully automated CI/CD pipelines deploying to a modern cloud platform (Azure Kubernetes Service). This involved containerizing applications, automating testing gates, and implementing Infrastructure as Code principles.",
      impact: "The new automated pipeline cut the end-to-end deployment time by 50%. This dramatically increased release velocity, improved system stability, and allowed development teams to focus on building features rather than managing deployments."
    },
    {
      id: 3,
      title: "Modernizing a Core Legacy Banking System",
      challenge: "A major Australian financial institution needed to modernize one of its core legacy systems, which was monolithic, inflexible, and difficult to update.",
      solution: "I led the architectural redesign, transitioning the monolith into a flexible, cloud-native microservices architecture using Java and Spring Boot. As part of this, I designed and built modular micro-frontend SPAs using React and Module Federation, allowing different teams to develop UI components independently and efficiently.",
      impact: "This transformation significantly improved the bank's business agility, enabling faster development cycles and greater scalability. The micro-frontend approach further accelerated UI development and improved team autonomy."
    }
  ]

  return (
    <section id="experience" className="mb-12">
      <h2 className="text-3xl font-semibold text-white mb-6 relative">
        Featured Projects & Case Studies
        <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mt-2 rounded"></div>
      </h2>
      
      <p className="text-white/90 text-lg mb-8 max-w-4xl">
        Here is a selection of recent challenges where I've architected and delivered high-impact technical solutions.
      </p>

      <Accordion
        type="single"
        collapsible
        className="w-full space-y-4"
        defaultValue="case-study-1"
      >
        {caseStudies.map((study) => (
          <AccordionItem 
            key={study.id} 
            value={`case-study-${study.id}`}
            className="border border-orange-200 bg-white/95 rounded-lg overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-4 hover:bg-orange-50 transition-colors">
              <div className="text-left">
                <h3 className="text-lg font-semibold text-orange-600">
                  Case Study {study.id}: {study.title}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                    The Challenge
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                    My Solution
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                    The Impact
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{study.impact}</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

export default ExperienceInfo
