export default function Experience() {
    const experiences = [
      {
        title: "Senior Engineer/Technical Lead, Westpac",
        duration: "May 2022 – Present",
        description: "Architected cloud-native microservices and APIs using Java, Spring Boot, and AWS. Led digital transformation and implemented secure SSO with OAuth 2.0."
      },
      {
        title: "Principal Engineering Lead, Cognizant",
        duration: "Nov 2016 – Apr 2022",
        description: "Developed full-stack solutions with ReactJS and Node.js, designed API integrations with Apigee, and automated CI/CD pipelines."
      },
      // Add more roles as needed
    ]
    return (
      <section id="experience" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-900 pl-4">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-gray-600">{exp.duration}</p>
                <p className="text-gray-700 mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }