// app/services/page.tsx
import ChooseUs from "../components/ChooseUs";
import ConsultationForm from "../components/ConsultationForm";
import FAQ from "../components/FAQs";
import NewsletterSection from "../components/NewsletterSection";
import Serviceban from "../components/Serviceban";
import ServiceCards from "../components/ServiceCards";
import TestimonialSection from "../components/Testimonial";

const ServicesPage: React.FC = () => {
  return (
    <main>
      <Serviceban
        bgImage="/sbgimg.png"
        breadcrumb="Services"
        logo="/logo.png"
        title="Everything that we have to offer."
        description="Discover a complete range of solutions designed to elevate your brand. From crafting impactful websites to building tailored strategies that spark engagement and growth, we bring every element together to help your business thrive. Whatever your goals are, we shape our services around your vision and delivering results that truly matter."
      />

      <ServiceCards />
      <ChooseUs />
      <TestimonialSection />
      <FAQ />
      <ConsultationForm />
      <NewsletterSection />
    </main>
  );
};

export default ServicesPage;
