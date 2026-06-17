
import { Navbar } from "../components/navbar";
import HeroSection from "../sections/hero-section";
import TrustBar from "../sections/trust-bar";
import WhyDietsFail from "../sections/why-diets-fail";
import HowItWorks from "../sections/how-it-works";
import ResultsSection from "../sections/results-section";
import CookTraining from "../sections/cook-training";
import SuccessStories from "../sections/success-stories";
import FAQSection from "../sections/faq-section";
import FinalCTA from "../sections/final-cta";
import Footer from "../sections/footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TrustBar />
      <WhyDietsFail />
      <HowItWorks />
      <ResultsSection />
      <CookTraining />
      <SuccessStories />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}