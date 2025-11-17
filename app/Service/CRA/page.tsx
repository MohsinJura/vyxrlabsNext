// app/services/seo/page.tsx
import Banner from "@/app/components/Banner";
import ChooseUs from "@/app/components/ChooseUs";
import ConsultationForm from "@/app/components/ConsultationForm";
import EveryClickMatters from "@/app/components/EveryClickMatters";
import FAQ from "@/app/components/FAQs";
import NewsletterSection from "@/app/components/NewsletterSection";
import TestimonialSection from "@/app/components/Testimonial";

const CRA: React.FC = () => {
  return (
    <main>
      <Banner
          bgImage="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/bgba.png"
          logo="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/Logo.png"
          breadcrumb="Buisness Automation"
          title1="Automate your "
          title2="Business,"
          title3="Elevate your "
          title4="Brand"
          description="We help businesses streamline workflows, reduce manual tasks, and boost efficiency with smart automation solutions tailored to your needs."
        />
      <div className='bg-skygreen md:rounded-tl-4xl md:rounded-tr-4xl'>  
      <EveryClickMatters />
      </div>
      <ChooseUs />
      <TestimonialSection />
      <FAQ />
      <ConsultationForm />
      <NewsletterSection />
    </main>
  );
};

export default CRA;
