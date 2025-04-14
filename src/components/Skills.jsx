export default function Skills() {
    const skills = [
      "Java", "Spring Boot", "NodeJS", "TypeScript", "ReactJS", "AWS", "Azure", "GCP",
      "Kubernetes", "Docker", "CI/CD", "Apigee", "RESTful APIs", "Microservices", "DevSecOps"
    ]
    return (
      <section id="skills" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <p className="text-lg font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }