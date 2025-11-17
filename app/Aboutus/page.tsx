// app/services/page.tsx
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
