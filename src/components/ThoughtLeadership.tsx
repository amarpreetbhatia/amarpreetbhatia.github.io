import { Card, CardContent } from './ui/card'

const pillars = [
  {
    title: 'Enterprise AI Architecture',
    insights: [
      'Design AI-native reference architectures for data, model and application convergence.',
      'Deliver scalable, secure platforms built for hybrid cloud and regulated environments.'
    ]
  },
  {
    title: 'Platform Modernization',
    insights: [
      'Modernize legacy systems through API, event-driven and cloud-native platform strategies.',
      'Enable developer velocity with reusable platform services and golden-path delivery.'
    ]
  },
  {
    title: 'AI Governance',
    insights: [
      'Align governance, risk and compliance with enterprise AI decision-making.',
      'Operationalize controls, explainability and trustworthy AI practices.'
    ]
  },
  {
    title: 'Agentic Workflows',
    insights: [
      'Translate AI capabilities into practical automation and decision support loops.',
      'Design workflows that amplify engineering teams while preserving operational control.'
    ]
  }
]

const ThoughtLeadership = () => {
  return (
    <section id="thought-leadership" className="mb-16">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">Architecture & Thought Leadership</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-white max-w-3xl">Strategic perspectives for enterprise AI, platform engineering and modernization leadership.</h2>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {pillars.map((pillar) => (
          <Card key={pillar.title} className="border border-slate-800 bg-slate-900/90 shadow-xl shadow-slate-900/10">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-white mb-4">{pillar.title}</h3>
              <ul className="space-y-3 text-slate-200">
                {pillar.insights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default ThoughtLeadership
