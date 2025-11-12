// app/page.tsx
import Hero from "./components/Hero"
import Expertise from "./components/OurExpertise"
import WhyChooseUs from "./components/ChooseUs"
import Testimonial from "./components/Testimonial"
import FAQ from "./components/FAQs"
import ConsultationForm from "./components/ConsultationForm"
import NewsletterSection from "./components/NewsletterSection"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Expertise />
      <div className="bg-[url('/whyus.png')] bg-cover bg-center bg-no-repeat">
        <WhyChooseUs />
        <Testimonial />
      </div>
      <FAQ />
      <ConsultationForm />
      <NewsletterSection />

    </main>
  )
}
