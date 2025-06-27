
import { Book, Calendar, Star, Users, CheckCircle, Clock, DollarSign, Target, TrendingUp, User, Eye, Palette } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ModulesShowcase = () => {
  const moduleCategories = [
    {
      title: "Daily Practices",
      modules: [
        {
          icon: Book,
          title: "Daily Journal",
          description: "Record your thoughts and reflections with guided journaling",
          status: "Action needed!",
          color: "orange"
        },
        {
          icon: Calendar,
          title: "Weekly Rhythm...",
          description: "Plan and review your weekly priorities and goals",
          status: "Action needed!",
          color: "green"
        },
        {
          icon: CheckCircle,
          title: "Habit Tracker",
          description: "Track your daily habits and build consistency",
          status: "Action needed!",
          color: "red"
        }
      ]
    },
    {
      title: "Productivity",
      modules: [
        {
          icon: CheckCircle,
          title: "To-do List",
          description: "A simple and easy-to-use to-do list, like a piece of paper",
          status: null,
          color: "blue"
        },
        {
          icon: Calendar,
          title: "Weekly Design S...",
          description: "Plan and track your weekly activities with a structured approach",
          status: null,
          color: "blue"
        },
        {
          icon: Target,
          title: "Project Manage...",
          description: "Organize and track your projects from start to finish",
          status: null,
          color: "blue"
        }
      ]
    },
    {
      title: "Life & Finance",
      modules: [
        {
          icon: DollarSign,
          title: "Personal Finance",
          description: "Track income, expenses, and manage your budget effectively",
          status: null,
          color: "teal"
        },
        {
          icon: Star,
          title: "Bucket List",
          description: "Create and manage your life goals and dreams",
          status: null,
          color: "pink"
        }
      ]
    },
    {
      title: "Self-Growth",
      modules: [
        {
          icon: Target,
          title: "Manifestation",
          description: "Set intentions and track your manifestation journey",
          status: null,
          color: "purple"
        },
        {
          icon: TrendingUp,
          title: "Five Percent Rev...",
          description: "Track and review your progress with 5% improvements",
          status: null,
          color: "blue"
        },
        {
          icon: User,
          title: "Future Me",
          description: "Send letters to your future self for reflection and growth",
          status: null,
          color: "orange"
        },
        {
          icon: Eye,
          title: "Ikigai",
          description: "Discover your life's purpose by exploring your ikigai",
          status: null,
          color: "red"
        },
        {
          icon: Palette,
          title: "Dreamboard",
          description: "Create a visual dream board with drawings, text, and goals",
          status: null,
          color: "purple"
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      orange: "border-l-orange-400 bg-orange-50",
      green: "border-l-green-400 bg-green-50",
      red: "border-l-red-400 bg-red-50",
      blue: "border-l-blue-400 bg-blue-50",
      teal: "border-l-teal-400 bg-teal-50",
      pink: "border-l-pink-400 bg-pink-50",
      purple: "border-l-purple-400 bg-purple-50"
    };
    return colorMap[color as keyof typeof colorMap] || "border-l-gray-400 bg-gray-50";
  };

  const getIconColor = (color: string) => {
    const colorMap = {
      orange: "text-orange-600",
      green: "text-green-600",
      red: "text-red-600",
      blue: "text-blue-600",
      teal: "text-teal-600",
      pink: "text-pink-600",
      purple: "text-purple-600"
    };
    return colorMap[color as keyof typeof colorMap] || "text-gray-600";
  };

  return (
    <section id="modules" className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-800 mb-6">
            ✨ 15+ Powerful Modules
          </div>
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 leading-tight">
            Everything You Need
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              To Excel
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Every aspect of personal and professional growth covered in one 
            <span className="font-semibold text-blue-600"> comprehensive dashboard</span>
          </p>
        </div>

        {/* Modules Grid */}
        <div className="max-w-7xl mx-auto space-y-12">
          {moduleCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.modules.map((module, moduleIndex) => (
                  <Card 
                    key={moduleIndex} 
                    className={`border-l-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${getColorClasses(module.color)}`}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg bg-white/80 ${getIconColor(module.color)}`}>
                            <module.icon className="w-5 h-5" />
                          </div>
                          <CardTitle className="text-lg font-semibold text-gray-900">
                            {module.title}
                          </CardTitle>
                        </div>
                        {module.status && (
                          <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-700 border-orange-200">
                            {module.status}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {module.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesShowcase;
