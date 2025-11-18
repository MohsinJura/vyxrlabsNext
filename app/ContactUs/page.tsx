// app/page.tsx

import WhyChooseUs from "../components/ChooseUs"
import Testimonial from "../components/Testimonial"
import FAQ from "../components/FAQs"
import ConsultationForm from "../components/ConsultationForm"
import NewsletterSection from "../components/NewsletterSection"
import Banner from "../components/Banner"
import ContactForm from "../components/ContactForm"
import ConnectUs from "../components/ConnectUs"
import { url } from "inspector"

export default function HomePage() {
  return (
    <main className="min-h-screen">
        <Banner 
            bgImage={'https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/bgimg.png'} 
            breadcrumb={'Contact Us'} 
            logo='/logo.png' 
            title={"Your next stop for "} 
            description={'Get in touch with us.'} 
            txtclr={'white'} 
        />
        <ContactForm />
        <ConnectUs />
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
