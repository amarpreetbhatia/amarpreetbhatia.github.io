import { Card, CardContent } from './ui/card'

const CertificationsInfo = () => {
  const certifications = [
    "AWS Certified Solutions Architect - Associate",
    "Certified Kubernetes Application Developer (CKAD)",
    "Certified SAFe® 5 Practitioner",
    "Microsoft Certified: Azure Fundamentals",
    "Architecting with Google Kubernetes Engine (Coursera)",
    "AI-Powered Software and System Design (deeplearning.ai)"
  ]

  return (
    <section id="certifications" className="mb-12">
      <h2 className="text-3xl font-semibold text-white mb-6 relative">
        Certifications
        <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mt-2 rounded"></div>
      </h2>
      <Card className="animate-in fade-in-50 duration-500">
        <CardContent className="p-6">
          <ul className="space-y-2 text-gray-700">
            {certifications.map((cert, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {cert}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}

export default CertificationsInfo
