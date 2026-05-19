import { Card, CardContent } from './ui/card'
import BackToTop from './BackToTop'

const credentials = [
  {
    label: 'Academic Background',
    items: ['Bachelor of Engineering (Computer Science)']
  },
  {
    label: 'Enterprise Credentials',
    items: [
      'AWS Certified Solutions Architect - Associate',
      'Certified Kubernetes Application Developer (CKAD)',
      'Certified SAFe® 5 Practitioner',
      'Microsoft Certified: Azure Fundamentals',
      'Architecting with Google Kubernetes Engine (Coursera)',
      'AI-Powered Software and System Design (deeplearning.ai)'
    ]
  }
]

const CredentialsInfo = () => {
  return (
    <section id="credentials" className="mb-16">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">Credentials & Validation</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-white max-w-3xl">Proven enterprise credentials that support modernization and AI-led transformation.</h2>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {credentials.map((group) => (
          <Card key={group.label} className="border border-slate-800 bg-slate-900/90 shadow-xl shadow-slate-900/10">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-white mb-4">{group.label}</h3>
              <ul className="space-y-3 text-slate-200">
                {group.items.map((item) => (
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

export default CredentialsInfo
