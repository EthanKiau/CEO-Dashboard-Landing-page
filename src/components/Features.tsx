import { Book, Calendar, Star, Users, CheckCircle, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Book,
      title: "Daily Journaling",
      description: "Reflect, grow, and track your thoughts with our advanced journaling system."
    },
    {
      icon: CheckCircle,
      title: "Habit Tracking",
      description: "Build lasting habits and monitor your progress with detailed analytics."
    },
    {
      icon: Star,
      title: "Bucket List",
      description: "Set and achieve your life goals with our comprehensive goal tracking system."
    },
    {
      icon: Calendar,
      title: "Schedule Management",
      description: "Optimize your time and increase productivity with smart scheduling."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Lead your team effectively with collaborative productivity tools."
    },
    {
      icon: Clock,
      title: "Time Analytics",
      description: "Understand how you spend your time and optimize for maximum impact."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to Excel
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive suite of tools designed specifically for leaders who demand excellence in every aspect of their lives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
