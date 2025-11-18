// app/services/page.tsx
import Banner from "../components/Banner";
import ConsultationForm from "../components/ConsultationForm";
import FAQ from "../components/FAQs";
import NewsletterSection from "../components/NewsletterSection";
import OurTeam from "../components/OurTeam";
import StartWithUs from "../components/StartWithUs";
import TestimonialSection from "../components/Testimonial";
import WhoWeAre from "../components/WhoWeAre";
import WhyChooseUs from "../components/ChooseUs"
import Testimonial from "../components/Testimonial"

const AboutusPage: React.FC = () => {
  return (
    <main>
      <Banner 
      bgImage={
          "https://cdn.jsdelivr.net/gh/VyxrLab/media-storage/vyxreact/images/abimg.jpg"
        }
        logo={'/logo.png'}
        breadcrumb={"About Us"}
        title={"Meet the team"}
        description={"All about us and our team."}
      />
      <WhoWeAre />
      <OurTeam />
      <StartWithUs />
      <WhyChooseUs />
      <TestimonialSection />
      <FAQ />
      <ConsultationForm />
      <NewsletterSection />
    </main>
  );
};

export default AboutusPage;
