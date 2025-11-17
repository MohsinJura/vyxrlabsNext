// app/services/webdesign/page.tsx
import Banner from "@/app/components/Banner";
import ChooseUs from "@/app/components/ChooseUs";
import ConsultationForm from "@/app/components/ConsultationForm";
import FAQ from "@/app/components/FAQs";
import InnovativeTransformation from "@/app/components/InnovativeTransformation";
import NewsletterSection from "@/app/components/NewsletterSection";
import TestimonialSection from "@/app/components/Testimonial";
import Sbanner from "@/app/components/Sbanner"

const WebDesign: React.FC = () => {
  return (
    <main>
      <Sbanner 
      bgImage={
          "https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/bgweb.png"
        }
        logo="https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/Logo.png"
        breadcrumb={"Web Design & Development"}
        title1={"Website Design & "}
        title2={"Development:"}
        title3={"Your brand’s "}
        title4={"true impression"}
        description={
          "From clicks to connections; websites that capture your brand’s essence and leaves an impression worth returning to."
        }
      />
      <div className='bg-skygreen md:rounded-tl-4xl md:rounded-tr-4xl'>
      <InnovativeTransformation />
      </div>
      <ChooseUs />
      <TestimonialSection />
      <FAQ />
      <ConsultationForm />
      <NewsletterSection />
    </main>
  );
};

export default WebDesign;
