export default function Projects() {
    const projects = [
      {
        title: "Cloud-Native Microservices Platform",
        description: "Designed and implemented a scalable microservices architecture using Spring Boot and Kubernetes, deployed on AWS.",
        link: "https://github.com/amarpreetbhatia"
      },
      {
        title: "API Integration Hub",
        description: "Developed RESTful APIs with Apigee and Node.js, enabling seamless connectivity for enterprise clients.",
        link: "https://github.com/amarpreetbhatia"
      },
    ]
    return (
      <section id="projects" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-700 mt-2">{project.description}</p>
                <a href={project.link} className="text-blue-900 hover:underline mt-4 inline-block">View on GitHub</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }