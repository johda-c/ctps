import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import PermitInfo from '@/components/PermitInfo'
import EmbargoCalendar from '@/components/EmbargoCalendar'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <About />
      <PermitInfo />
      <EmbargoCalendar />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
