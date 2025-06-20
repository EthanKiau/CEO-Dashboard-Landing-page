
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const features = [
    "All 13 powerful modules",
    "Unlimited entries and tracking",
    "Advanced analytics and insights",
    "Cloud sync across devices",
    "Priority customer support",
    "Regular feature updates",
    "Data export capabilities",
    "Custom goal templates"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Choose the plan that works for you. Cancel anytime, no questions asked.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Monthly Plan */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Monthly Plan</h3>
              <div className="text-5xl font-bold mb-2">$15</div>
              <div className="text-blue-200">per month</div>
            </div>
            
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-blue-100">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button className="w-full bg-white/20 hover:bg-white/30 border border-white/30 text-white font-semibold py-3 rounded-xl transition-all duration-300">
              Start Monthly Plan
            </Button>
          </div>

          {/* Yearly Plan */}
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-8 text-black relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="bg-black text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold">
                Recommended
              </span>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Yearly Plan</h3>
              <div className="text-5xl font-bold mb-2">$100</div>
              <div className="text-black/70">per year</div>
              <div className="text-sm mt-2 bg-black/10 rounded-lg px-3 py-1 inline-block">
                Save $80 per year!
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-black/80">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button className="w-full bg-black hover:bg-black/80 text-yellow-400 font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
              Start Yearly Plan
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-blue-200">
            30-day money-back guarantee • No setup fees • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
