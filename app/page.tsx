'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PainPoints from '@/components/PainPoints'
import SolutionOverview from '@/components/SolutionOverview'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import ResultsMetrics from '@/components/ResultsMetrics'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import RegisterModal from '@/components/RegisterModal'
import FloatingCTA from '@/components/FloatingCTA'

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('business')

  const openModal = (plan?: string) => {
    setSelectedPlan(plan || 'business')
    setModalOpen(true)
  }

  return (
    <>
      <Navbar onRegisterClick={() => openModal()} />

      <main>
        <Hero onRegisterClick={() => openModal()} />
        <PainPoints />
        <SolutionOverview />
        <Features />
        <HowItWorks />
        <ResultsMetrics />
        <Testimonials />
        <Pricing onRegisterClick={openModal} />
        <FAQ />
        <FinalCTA onRegisterClick={() => openModal()} />
      </main>

      <Footer />

      <RegisterModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultPlan={selectedPlan}
      />

      <FloatingCTA onRegisterClick={() => openModal()} />
    </>
  )
}
