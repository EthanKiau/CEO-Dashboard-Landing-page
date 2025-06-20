
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const ModulesShowcase = () => {
  const moduleCategories = [
    {
      title: "Daily Practices",
      modules: [
        { 
          name: "Daily Journal", 
          description: "Record your thoughts and reflections with guided prompts",
          images: [
            "/lovable-uploads/cccc6b71-de09-41b4-abf4-a4371d73da2b.png"
          ]
        },
        { 
          name: "Weekly Rhythm", 
          description: "Plan and review your weekly priorities and goals",
          images: [
            "/lovable-uploads/9d4339cc-fb5a-413e-8500-be791ea4f20f.png"
          ]
        },
        { 
          name: "Habit Tracker", 
          description: "Track your daily habits and build consistency",
          images: [
            "/lovable-uploads/c3622682-2d1c-4c45-b8f8-8041feb87e52.png"
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
            "/lovable-uploads/0571b04f-4bf8-48a9-bc01-f5c9a7bd7921.png"
          ]
        },
        { 
          name: "Weekly Design Sprint", 
          description: "Plan and track your weekly activities with a design focus",
          images: [
            "/lovable-uploads/7f9297e4-9626-4110-aa40-e4f49f32c644.png"
          ]
        },
        { 
          name: "Project Management", 
          description: "Organize and track your projects from start to finish",
          images: [
            "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop"
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
            "/lovable-uploads/77ac6f1e-3107-4af0-8b84-f0a8422a9786.png"
          ]
        },
        { 
          name: "Bucket List", 
          description: "Create and manage your life goals and dreams",
          images: [
            "/lovable-uploads/fb01924f-66c7-4fda-8487-e54bcf8de069.png"
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
            "/lovable-uploads/7ac55d26-5d6c-494e-96d7-5ec52c97e77a.png"
          ]
        },
        { 
          name: "Five Percent Review", 
          description: "Track and review your progress with 5% improvements",
          images: [
            "/lovable-uploads/e164c680-f89b-4000-9e69-878b4194a114.png"
          ]
        },
        { 
          name: "Future Me", 
          description: "Send letters to your future self for reflection and growth",
          images: [
            "/lovable-uploads/295e0ebc-d09f-4915-9d23-6121b91205d6.png"
          ]
        },
        { 
          name: "Ikigai", 
          description: "Discover your life's purpose by exploring your ikigai",
          images: [
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
          ]
        },
        { 
          name: "Dreamboard", 
          description: "Create a visual dream board with drawings, texts, and images",
          images: [
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
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
                      {module.images.length > 1 ? (
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
                      ) : (
                        <img 
                          src={module.images[0]} 
                          alt={`${module.name} screenshot`}
                          className="w-full h-48 object-cover"
                        />
                      )}
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
