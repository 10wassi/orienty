import { Features } from "../components/features"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { Hero } from "../components/hero"
import { Testimonials } from "../components/testimonials"
import { PhoneIcon } from 'lucide-react'
import { Layout } from "../layouts/layout";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
      </main>
      <Footer />
      
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/yourphonenumber"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <PhoneIcon className="h-6 w-6" />
      </a>
    </div>
  )
}

