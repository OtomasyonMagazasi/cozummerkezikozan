import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import About from './components/About';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import AdminPanel from './components/AdminPanel';
import WashingMachineWaterNotDraining from './components/blog/WashingMachineWaterNotDraining';
import FridgeNotCooling from './components/blog/FridgeNotCooling';
import AirConditionerNotCooling from './components/blog/AirConditionerNotCooling';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Services />
      <WhyUs />
      <About />
      <Process />
      <Testimonials />
      <Contact />
      <WhatsAppButton />
      <AdminPanel />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/camasir-makinesi-su-bosaltmiyor" element={<WashingMachineWaterNotDraining />} />
        <Route path="/blog/buzdolabi-sogutmuyor" element={<FridgeNotCooling />} />
        <Route path="/blog/klima-sogutmuyor" element={<AirConditionerNotCooling />} />
      </Routes>
    </Router>
  );
}

export default App;
