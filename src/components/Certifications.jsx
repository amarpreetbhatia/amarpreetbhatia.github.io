export default function Certifications() {
    const certifications = [
      "AWS Certified Solutions Architect - Associate",
      "CKAD: Certified Kubernetes Application Developer",
      "Certified SAFe® 5 Practitioner",
      "Architecting with Google Kubernetes Engine",
      "Generative AI for Software Development"
    ]
    return (
      <section id="certifications" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
          <ul className="list-disc list-inside max-w-2xl mx-auto">
            {certifications.map((cert, index) => (
              <li key={index} className="text-lg text-gray-700">{cert}</li>
            ))}
          </ul>
        </div>
      </section>
    )
  }