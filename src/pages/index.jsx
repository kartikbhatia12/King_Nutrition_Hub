import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import ProductsSection from "../components/ProductsSection";
import WhyChooseUs from "../components/WhyChooseUs";
import ReviewsSection from "../components/ReviewsSection";
import LocationSection from "../components/LocationSection";

import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhyChooseUs />
      <ReviewsSection />
      <LocationSection />
      
      <Footer />
    </div>
  );
};

export default Index;
