// app/services/page.tsx
import Banner from "../components/Banner";
import ConsultationForm from "../components/ConsultationForm";
import FAQ from "../components/FAQs";
import NewsletterSection from "../components/NewsletterSection";
import OurTeam from "../components/OurTeam";
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
      <div className="bg-[url('/whyus.png')] bg-cover bg-center bg-no-repeat">
        <WhyChooseUs />
        <Testimonial />
      </div>
      <FAQ />
      <ConsultationForm />
      <NewsletterSection />
    </main>
  );
};

export default AboutusPage;
