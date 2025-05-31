import Navbar from "./components/Navbar";
import ClientLogoSection from "./section/ClientLogoSection";
import NewsSection from "./section/NewsSection";
import ServicesSection from "./section/ServicesSection";
import SliderSection from "./section/SliderSection";
import StatsSection from "./section/StatsSection";
import TestimonialsSection from "./section/TestimonialsSection";
import WelcomeSection from "./section/WelcomeSection";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <SliderSection />
        <WelcomeSection />
        <ServicesSection />
        <StatsSection />
        <TestimonialsSection />
        <ClientLogoSection />
        <NewsSection />
      </div>
    </>
  );
}

export default App;
