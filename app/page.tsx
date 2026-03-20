import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import InfrastructureStack from '@/components/InfrastructureStack'
import Differentials from '@/components/Differentials'
import TechStackShowcase from '@/components/TechStackShowcase'
import CasesPortfolio from '@/components/CasesPortfolio'
import ProcessTimeline from '@/components/ProcessTimeline'
import PricingCards from '@/components/PricingCards'
import FooterCTA from '@/components/FooterCTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <InfrastructureStack />

      <Differentials />

      <section id="cases">
        <TechStackShowcase />
      </section>

      <CasesPortfolio />

      <ProcessTimeline />

      <section id="pricing">
        <PricingCards />
      </section>

      <section id="contact">
        <FooterCTA />
      </section>
    </main>
  )
}
