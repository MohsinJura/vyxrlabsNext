// app/page.tsx

import WhyChooseUs from "../components/ChooseUs"
import Testimonial from "../components/Testimonial"
import FAQ from "../components/FAQs"
import ConsultationForm from "../components/ConsultationForm"
import NewsletterSection from "../components/NewsletterSection"
import Banner from "../components/Banner"
import CareerForm from "../components/CareerForm"
import JobLists from "../components/JobLists"

export default function HomePage() {
  return (
    <main className="min-h-screen">
        <Banner
            bgImage={'https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/carbgimg.png'} 
            breadcrumb={'Careers'} 
            logo={'/logo.png'} 
            title={"Careers. Work with "} 
            description={''} 
        />
        <CareerForm 
            title={'Careers'} 
            head1={'Your career starts here,'} 
            head2={"build your experience!"} 
        />
        <JobLists />
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
