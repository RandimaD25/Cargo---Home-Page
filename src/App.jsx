import Navbar from "./components/Navbar";
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
      </div>
    </>
  );
}

export default App;
