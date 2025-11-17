// app/services/page.tsx
import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import ConsultationForm from "../components/ConsultationForm";
import FAQ from "../components/FAQs";
import NewsletterSection from "../components/NewsletterSection";
import OurTeam from "../components/OurTeam";
import TestimonialSection from "../components/Testimonial";
import WhoWeAre from "../components/WhoWeAre";

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
      <ChooseUs />
      <TestimonialSection />
      <FAQ />
      <ConsultationForm />
      <NewsletterSection />
    </main>
  );
};

export default AboutusPage;
