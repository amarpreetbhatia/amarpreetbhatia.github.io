import { Card, CardContent } from './ui/card'

const caseStudies = [
  {
    id: 1,
    title: 'Enterprise AI Enablement for a Financial Services Division',
    challenge: 'A regulated business unit struggled to turn fragmented knowledge into trusted operational insight for engineering and product teams.',
    solution: 'I led a strategic AI enablement initiative to build a centralized knowledge layer with retrieval-augmented generation, integrated governance controls, and a clear path for enterprise consumption.',
    impact: 'The solution improved decision confidence for delivery teams, accelerated time to insight, and established an enterprise-ready foundation for AI-assisted operations.'
  },
  {
    id: 2,
    title: 'Platform Modernization & DevSecOps Acceleration',
    challenge: 'Legacy deployment practices slowed innovation and created risk across a complex application portfolio.',
    solution: 'I architected a golden-path platform with automated pipelines, secure cloud deployment patterns, and platform services that standardised delivery across multiple teams.',
    impact: 'This transformation reduced release cycle times, improved reliability, and enabled the organization to shift from maintenance mode to value-driven delivery.'
  },
  {
    id: 3,
    title: 'AI Governance and Integration for Regulated Systems',
    challenge: 'The organization needed to introduce AI capabilities while preserving compliance, explainability and operational control.',
    solution: 'I defined enterprise governance frameworks, risk-aware AI workflows, and a secure integration layer that connected legacy systems to modern AI services.',
    impact: 'The result was a scalable AI operating model that balanced innovation with risk management and accelerated executive adoption of AI initiatives.'
  }
]

const ExperienceInfo = () => {
  return (
    <section id="experience" className="mb-16">
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-8">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">Work</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-white">Strategic engagements delivering enterprise modernization and AI transformation.</h2>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <Card key={study.id} className="border border-slate-800 bg-slate-900/95 shadow-xl shadow-slate-950/20">
            <CardContent className="p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-300/80">Case Study {study.id}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{study.title}</h3>
              <div className="mt-6 space-y-5 text-slate-300">
                <div>
                  <p className="font-semibold text-slate-100 mb-2">Challenge</p>
                  <p>{study.challenge}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-100 mb-2">Solution</p>
                  <p>{study.solution}</p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-4 border border-slate-800 text-slate-200">
                  <p className="font-semibold text-white mb-2">Impact</p>
                  <p>{study.impact}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default ExperienceInfo
