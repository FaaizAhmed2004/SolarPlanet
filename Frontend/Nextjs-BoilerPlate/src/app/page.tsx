import TestimonialCarousel from "@/components/Testmonials/testimonials"
import Navbar from "../components/Navbar/navbar"
import MainHero from "@/components/MainHeroSec/Herosection"
import Footer from "@/components/Footer/Footer"
import QuoteRequestForm from "@/components/Qoute/Qoute"

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto mt-10 p-4">
   
      </div>
      <MainHero/>
      <QuoteRequestForm/>
      <TestimonialCarousel/>
      <Footer/>
    </main>
  )
}
