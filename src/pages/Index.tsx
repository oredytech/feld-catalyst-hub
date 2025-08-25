import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import DomainesSection from "@/components/DomainesSection";
import ProjetsSection from "@/components/ProjetsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <AboutSection />
        <DomainesSection />
        <ProjetsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
