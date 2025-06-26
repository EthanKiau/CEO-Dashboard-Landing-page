
import Hero from "@/components/Hero";
import ModulesShowcase from "@/components/ModulesShowcase";
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Hero />
      <Features />
      <ModulesShowcase />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
