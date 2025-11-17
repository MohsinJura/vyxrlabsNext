// app/services/seo/page.tsx
import Banner from "@/app/components/Banner";
import ChooseUs from "@/app/components/ChooseUs";
import ConsultationForm from "@/app/components/ConsultationForm";
import FAQ from "@/app/components/FAQs";
import LetWorldKnow from "@/app/components/LetWorldKnow";
import NewsletterSection from "@/app/components/NewsletterSection";
import TestimonialSection from "@/app/components/Testimonial";
import Sbanner from "@/app/components/Sbanner"

const SEO: React.FC = () => {
  return (
    <main>
      <Sbanner 
        bgImage={'https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/bgseo.png'} 
        logo='https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/Logo.png' 
        breadcrumb={'Search Engine Optimization'} 
        title1={"SEO Services: "} 
        title2={'Rank higher, Get'} 
        title3={''} 
        title4={'More Traffic!'} 
        description={'Boost visibility with expert SEO services. From keyword research to link building, we help you rank higher and grow your business online.'} 
      />
      <div className='bg-skygreen md:rounded-tl-4xl md:rounded-tr-4xl'>
      <LetWorldKnow />
      </div>
      <ChooseUs />
      <TestimonialSection />
      <FAQ />
      <ConsultationForm />
      <NewsletterSection />
    </main>
  );
};

export default SEO;
