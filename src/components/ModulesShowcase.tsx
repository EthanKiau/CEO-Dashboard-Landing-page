
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const ModulesShowcase = () => {
  const moduleCategories = [
    {
      title: "Daily Practices",
      modules: [
        { 
          name: "Daily Journal", 
          description: "Record your thoughts and reflections with guided prompts",
          images: [
            "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
          ]
        },
        { 
          name: "Weekly Rhythm", 
          description: "Plan and review your weekly priorities and goals",
          images: [
            "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop"
          ]
        },
        { 
          name: "Habit Tracker", 
          description: "Track your daily habits and build consistency",
          images: [
            "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop"
          ]
        }
      ]
    },
    {
      title: "Productivity",
      modules: [
        { 
          name: "To-do List", 
          description: "A simple and easy-to-use to-do list, like a piece of paper",
          images: [
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
          ]
        },
        { 
          name: "Weekly Design Sprint", 
          description: "Plan and track your weekly activities with a design focus",
          images: [
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop"
          ]
        },
        { 
          name: "Project Management", 
          description: "Organize and track your projects from start to finish",
          images: [
            "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
          ]
        }
      ]
    },
    {
      title: "Life & Finance",
      modules: [
        { 
          name: "Personal Finance", 
          description: "Track income, expenses, and manage your budget",
          images: [
            "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
          ]
        },
        { 
          name: "Bucket List", 
          description: "Create and manage your life goals and dreams",
          images: [
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop"
          ]
        }
      ]
    },
    {
      title: "Self-Growth",
      modules: [
        { 
          name: "Manifestation", 
          description: "Set intentions and track your manifestation journey",
          images: [
            "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
          ]
        },
        { 
          name: "Five Percent Review", 
          description: "Track and review your progress with 5% improvements",
          images: [
            "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop"
          ]
        },
        { 
          name: "Future Me", 
          description: "Send letters to your future self for reflection and growth",
          images: [
            "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop"
          ]
        },
        { 
          name: "Ikigai", 
          description: "Discover your life's purpose by exploring your ikigai",
          images: [
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
          ]
        },
        { 
          name: "Dreamboard", 
          description: "Create a visual dream board with drawings, texts, and images",
          images: [
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop"
          ]
        }
      ]
    }
  ];

  const totalModules = moduleCategories.reduce((total, category) => total + category.modules.length, 0);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {totalModules} Powerful Modules
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every aspect of personal and professional growth covered in one comprehensive dashboard.
          </p>
        </div>

        {/* Dashboard Screenshot */}
        <div className="mb-16 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border">
            <img 
              src="/lovable-uploads/3d36dae3-f70e-4cd7-b0cd-4db9be68cd21.png" 
              alt="CEO Dashboard Interface showing all modules organized by categories"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>

        {/* Modules by Category */}
        <div className="space-y-12">
          {moduleCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
                {category.title}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.modules.map((module, moduleIndex) => (
                  <div key={moduleIndex} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
                    {/* Image Slideshow */}
                    <div className="h-48 bg-gray-100">
                      <Carousel className="w-full h-full" opts={{ loop: true }}>
                        <CarouselContent>
                          {module.images.map((image, imageIndex) => (
                            <CarouselItem key={imageIndex}>
                              <img 
                                src={image} 
                                alt={`${module.name} screenshot ${imageIndex + 1}`}
                                className="w-full h-48 object-cover"
                              />
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                      </Carousel>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-white font-bold text-lg">
                          {categoryIndex === 0 ? '📝' : 
                           categoryIndex === 1 ? '⚡' : 
                           categoryIndex === 2 ? '💰' : '🌱'}
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{module.name}</h4>
                      <p className="text-gray-600 text-sm">{module.description}</p>
                    </div>
                  </div>
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
