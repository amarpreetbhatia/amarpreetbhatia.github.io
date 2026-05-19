import { Card, CardContent } from './ui/card'

const AboutMe = () => {
  return (
    <section id="aboutme" className="mb-16">
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">About</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-white">Enterprise AI enablement and strategic modernization leadership.</h2>
        </div>
      </div>

      <Card className="border border-slate-800 bg-slate-900/90 shadow-xl shadow-cyan-500/10">
        <CardContent className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start p-8">
          <div className="space-y-6 text-slate-200 leading-relaxed">
            <p>
              I am <strong>Amarpreet Bhatia</strong>, an enterprise AI enablement architect who helps organizations shift from legacy operating models to AI-first platforms and modern engineering practices. My focus is on delivering strategic transformation, governance-ready AI systems, and cloud-native platform capabilities that move businesses forward.
            </p>
            <p>
              I partner with leadership and delivery teams to define AI adoption roadmaps, build resilient platform foundations, and orchestrate data, AI, and cloud ecosystems for measurable value. My strength is translating complex enterprise requirements into executable modernization programs.
            </p>
            <p>
              I bring experience across regulated environments, platform engineering, DevSecOps, enterprise integration, and AI governance — creating the structure that ensures intelligent systems scale securely and sustainably.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-inner shadow-slate-950/20">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Role</p>
                <p className="mt-2 text-lg font-semibold text-white">AI Enablement Architect</p>
              </div>
            </div>
            <div className="space-y-4 text-slate-300">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Focus</p>
                <p className="mt-2">AI-first transformation, platform modernization, enterprise architecture and governance.</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Approach</p>
                <p className="mt-2">Strategic roadmaps, AI-native platforms, secure DevSecOps and enterprise integration.</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Outcome</p>
                <p className="mt-2">Faster decision-making, reduced risk, and sustainable modernization across enterprise teams.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export default AboutMe
