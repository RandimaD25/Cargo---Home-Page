import Navbar from "./components/Navbar";
import ServicesSection from "./section/ServicesSection";
import SliderSection from "./section/SliderSection";
import StatsSection from "./section/StatsSection";
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
      </div>
    </>
  );
}

export default App;
