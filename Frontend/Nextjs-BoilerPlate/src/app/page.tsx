import TestimonialCarousel from "@/components/Testmonials/testimonials"
import Navbar from "../components/Navbar/navbar"
import MainHero from "@/components/MainHeroSec/Herosection"
import Footer from "@/components/Footer/Footer"
import QuoteRequestForm from "@/components/Qoute/Qoute"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation - Fixed positioning */}
      <Navbar />
      
      {/* Hero Section - Full viewport with proper spacing */}
      <section className="relative section-clear">
        <MainHero />
      </section>
      
      {/* Quote Request Section - Clear separation */}
      <section className="section-clear section-separator">
        <QuoteRequestForm />
      </section>
      
      {/* Testimonials Section - Proper spacing */}
      <section className="section-clear section-separator">
        <TestimonialCarousel />
      </section>
      
      {/* Footer Section - Final section */}
      <footer className="relative z-10 mt-8">
        <Footer />
      </footer>
    </main>
  )
}
