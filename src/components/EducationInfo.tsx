import { Card, CardContent } from './ui/card'

const EducationInfo = () => {
  const education = [
    "Bachelor of Engineering (B.E.), Computer Science"
  ]

  return (
    <section id="education" className="mb-12">
      <h2 className="text-3xl font-semibold text-white mb-6 relative">
        Education
        <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mt-2 rounded"></div>
      </h2>
      <Card className="animate-in fade-in-50 duration-500">
        <CardContent className="p-6">
          <ul className="space-y-2 text-gray-700">
            {education.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}

export default EducationInfo
