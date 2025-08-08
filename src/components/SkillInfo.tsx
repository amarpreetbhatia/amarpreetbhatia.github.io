import { Card, CardContent } from './ui/card'
import BackToTop from './BackToTop'

const SkillInfo = () => {
  const skillCategories = [
    {
      title: "Cloud & System Design",
      logos: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", alt: "AWS Logo", title: "AWS" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg", alt: "Kubernetes Logo", title: "Kubernetes" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg", alt: "GraphQL Logo", title: "GraphQL" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg", alt: "Kafka Logo", title: "Kafka" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg", alt: "RabbitMQ Logo", title: "RabbitMQ" }
      ],
      details: [
        { label: "Core Architectures", value: "Microservices, Event-Driven, Serverless" },
        { label: "API Design", value: "RESTful APIs, GraphQL" },
        { label: "Security & Compliance", value: "OAuth2, OpenID Connect, OWASP" }
      ]
    },
    {
      title: "AI & Intelligent Engineering",
      logos: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", alt: "Spring Logo", title: "Spring AI" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", alt: "GitHub Logo", title: "GitHub Copilot" }
      ],
      details: [
        { label: "LLM Frameworks", value: "LlamaIndex, Spring AI, CrewAI" },
        { label: "Core Concepts", value: "Retrieval-Augmented Generation (RAG)" },
        { label: "AI-Augmented Development", value: "GitHub Copilot, Cursor" }
      ]
    },
    {
      title: "Platform Engineering & DevOps",
      logos: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg", alt: "Docker Logo", title: "Docker" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg", alt: "Jenkins Logo", title: "Jenkins" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", alt: "Git Logo", title: "Git" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg", alt: "GitHub Actions Logo", title: "GitHub Actions" },
      ],
      details: [
        { label: "Infrastructure", value: "Infrastructure as Code (IaC), AWS CDK, GitOps" },
        { label: "Testing Methodologies", value: "TDD, BDD" }
      ]
    },
    {
      title: "Core Technologies",
      logos: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", alt: "Java Logo", title: "Java" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", alt: "Spring Boot Logo", title: "Spring Boot" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", alt: "Node.js Logo", title: "Node.js" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", alt: "React Logo", title: "React" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", alt: "Python Logo", title: "Python" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL Logo", title: "PostgreSQL" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", alt: "MongoDB Logo", title: "MongoDB" }
      ],
      details: [
        { label: "Also proficient in", value: "Kotlin, NextJS, Angular, Oracle, SQL Server, Redis" }
      ]
    }
  ]

  return (
    <section id="skills" className="mb-12">
      <h2 className="text-3xl font-semibold text-white mb-6 relative">
        My Technical Skills
        <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mt-2 rounded"></div>
      </h2>
      
      <p className="text-white/90 text-lg mb-8 max-w-4xl">
        My expertise spans across modern cloud architecture, AI-driven engineering, and full-stack development. Here are the core technologies and methodologies I use to build robust, scalable solutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="animate-in fade-in-50 duration-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">
                {category.title}
              </h3>
              
              {/* Logo Grid */}
              <div className="grid grid-cols-5 gap-3 mb-6">
                {category.logos.map((logo, logoIndex) => (
                  <div key={logoIndex} className="flex items-center justify-center p-2 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">
                    <img 
                      src={logo.src} 
                      alt={logo.alt} 
                      title={logo.title}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                ))}
              </div>
              
              {/* Details List */}
              <ul className="space-y-2">
                {category.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-gray-700">
                    <strong>{detail.label}:</strong> {detail.value}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      <BackToTop />
    </section>
  )
}

export default SkillInfo
