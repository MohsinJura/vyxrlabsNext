// app/services/bussinessautomation/page.tsx
import Banner from "@/app/components/Banner";
import ChooseUs from "@/app/components/ChooseUs";
import ConsultationForm from "@/app/components/ConsultationForm";
import FAQ from "@/app/components/FAQs";
import NewsletterSection from "@/app/components/NewsletterSection";
import OurAutomationSolutions from "@/app/components/OurAutomationSolutions";
import TestimonialSection from "@/app/components/Testimonial";
import Sbanner from "@/app/components/Sbanner"

const ServicesPage: React.FC = () => {
  return (
    <main>
      <Sbanner
        bgImage={
          "https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/bgba.png"
        }
        logo="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/Logo.png"
        breadcrumb={"Buisness Automation"}
        title1={"Automate your "}
        title2={"Business,"}
        title3={"Elevate your "}
        title4={"Brand"}
        description={
          "We help businesses streamline workflows, reduce manual tasks, and boost efficiency with smart automation solutions tailored to your needs."
        }
      />
      <div className='bg-skygreen md:rounded-tl-4xl md:rounded-tr-4xl'>
      <OurAutomationSolutions />
      </div>
      <ChooseUs />
      <TestimonialSection />
      <FAQ />
      <ConsultationForm />
      <NewsletterSection />
    </main>
  );
};

export default ServicesPage;
