import { Card, CardContent } from './ui/card'
import BackToTop from './BackToTop'

const skillCategories = [
  {
    title: 'Enterprise Architecture',
    items: [
      'AI-first reference architectures',
      'Modernization roadmaps and target operating models',
      'Hybrid cloud and integration strategy'
    ]
  },
  {
    title: 'AI Enablement',
    items: [
      'Retrieval-Augmented Generation (RAG)',
      'Agentic workflow design',
      'AI governance and trust frameworks'
    ]
  },
  {
    title: 'Platform Engineering',
    items: [
      'Golden path delivery experiences',
      'Platform services and developer enablement',
      'Infrastructure as code and self-service portals'
    ]
  },
  {
    title: 'Cloud & DevSecOps',
    items: [
      'Secure CI/CD and GitOps practices',
      'Cloud-native resilience and operations',
      'Compliance-aware automation'
    ]
  },
  {
    title: 'AI Engineering',
    items: [
      'Model orchestration and observability',
      'Prompt engineering for enterprise workflows',
      'Hybrid data and AI pipeline design'
    ]
  },
  {
    title: 'Enterprise Integration',
    items: [
      'API mesh and event-driven connectivity',
      'Legacy modernization with secure interfaces',
      'Data-to-decision integration patterns'
    ]
  },
  {
    title: 'Modern Frontend Platforms',
    items: [
      'Executive experience design for operations',
      'Data-driven dashboards and intelligent applications',
      'Pragmatic low-code and hybrid UI strategies'
    ]
  },
  {
    title: 'Observability & Governance',
    items: [
      'Risk-aware observability and analytics',
      'Policy-driven controls and audit readiness',
      'Trust, compliance and operational transparency'
    ]
  }
]

const SkillInfo = () => {
  return (
    <section id="skills" className="mb-16">
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-8">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">Skills</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-white">Strategic capabilities for AI transformation and enterprise modernization.</h2>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {skillCategories.map((category) => (
          <Card key={category.title} className="border border-slate-800 bg-slate-900/95 shadow-xl shadow-slate-950/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-5">{category.title}</h3>
              <ul className="space-y-4 text-slate-300">
                {category.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                    <span>{item}</span>
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
