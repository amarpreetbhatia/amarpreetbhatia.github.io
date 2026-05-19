import { Card, CardContent } from './ui/card'

const focusAreas = [
  {
    title: 'AI Enablement Strategy',
    description: 'Define enterprise AI adoption pathways, governance guardrails, and operating models that align AI investments with business transformation objectives.',
    bullets: [
      'AI-first operating model design',
      'Business-aligned transformation roadmaps',
      'Capability, data and platform strategy'
    ]
  },
  {
    title: 'Agentic & RAG Architectures',
    description: 'Design retrieval-augmented systems and agentic workflows that bridge data, knowledge, and actionable automation for high-value use cases.',
    bullets: [
      'RAG systems for secure knowledge access',
      'Agentic workflows for decision support',
      'Context-aware AI orchestration'
    ]
  },
  {
    title: 'AI-first Delivery',
    description: 'Embed AI at the heart of the software delivery lifecycle with AI-assisted engineering, secure CI/CD, and continuous learning pipelines.',
    bullets: [
      'AI-augmented platform engineering',
      'Automated quality gates and risk controls',
      'Modern data-to-decision delivery loops'
    ]
  },
  {
    title: 'Governance & Risk',
    description: 'Ensure enterprise-grade resilience by balancing innovation with responsible AI policies, compliance checks and observability across systems.',
    bullets: [
      'Policy-driven AI governance',
      'Operational risk and controls',
      'Transparency and explainability'
    ]
  }
]

const AITransformationFocus = () => {
  return (
    <section id="ai-transformation" className="mb-16">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">AI Transformation Focus</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-white max-w-3xl">Enterprise AI strategy, RAG systems, agentic workflows and governance for high-impact transformation.</h2>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {focusAreas.map((area) => (
          <Card key={area.title} className="border border-slate-800 bg-slate-900/90 shadow-xl shadow-cyan-500/10">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
              <p className="text-slate-300 leading-relaxed mb-5">{area.description}</p>
              <ul className="space-y-3">
                {area.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-slate-200">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                    {bullet}
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

export default AITransformationFocus
