
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ModulesShowcase = () => {
  const moduleCategories = [
    {
      title: "Daily Practices",
      modules: [
        { 
          name: "Daily Journal", 
          description: "Record your thoughts and reflections with guided prompts",
          detailedDescription: "Transform your daily routine with our comprehensive journaling system. Features guided prompts, mood tracking, gratitude exercises, and reflection spaces to help you process your thoughts and emotions. Build a consistent writing habit that promotes self-awareness and personal growth.",
          images: [
            "/lovable-uploads/cccc6b71-de09-41b4-abf4-a4371d73da2b.png"
          ]
        },
        { 
          name: "Weekly Rhythm", 
          description: "Plan and review your weekly priorities and goals",
          detailedDescription: "Establish a powerful weekly planning system that helps you stay focused on what matters most. Set intentions, track progress, and reflect on your achievements. Perfect for busy professionals who want to maintain work-life balance while achieving their goals.",
          images: [
            "/lovable-uploads/9d4339cc-fb5a-413e-8500-be791ea4f20f.png"
          ]
        },
        { 
          name: "Habit Tracker", 
          description: "Track your daily habits and build consistency",
          detailedDescription: "Build lasting positive habits with our intuitive tracking system. Monitor your progress, identify patterns, and celebrate streaks. Features customizable habits, visual progress indicators, and insights to help you understand your behavior patterns.",
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
          detailedDescription: "Experience the simplicity of a digital to-do list that feels as natural as pen and paper. Quickly capture tasks, set priorities, and check off completed items. Perfect for those who prefer minimalist productivity tools without overwhelming features.",
          images: [
            "/lovable-uploads/0571b04f-4bf8-48a9-bc01-f5c9a7bd7921.png"
          ]
        },
        { 
          name: "Weekly Design Sprint", 
          description: "Plan and track your weekly activities with a design focus",
          detailedDescription: "Structure your creative projects with our design sprint methodology. Break down complex projects into manageable weekly sprints, track deliverables, and maintain momentum on your creative endeavors. Ideal for designers, developers, and creative professionals.",
          images: [
            "/lovable-uploads/7f9297e4-9626-4110-aa40-e4f49f32c644.png"
          ]
        },
        { 
          name: "Project Management", 
          description: "Organize and track your projects from start to finish",
          detailedDescription: "Comprehensive project management tools to keep your initiatives on track. Features include milestone tracking, deadline management, resource allocation, and progress visualization. Perfect for managing multiple projects simultaneously.",
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
          detailedDescription: "Take control of your financial future with comprehensive budget tracking and expense management. Monitor income streams, categorize expenses, set savings goals, and visualize your financial health with intuitive charts and reports.",
          images: [
            "/lovable-uploads/77ac6f1e-3107-4af0-8b84-f0a8422a9786.png"
          ]
        },
        { 
          name: "Bucket List", 
          description: "Create and manage your life goals and dreams",
          detailedDescription: "Turn your dreams into actionable plans with our bucket list manager. Categorize goals by timeline, track progress, add photos and memories, and celebrate achievements. Perfect for maintaining motivation and focus on your life aspirations.",
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
          detailedDescription: "Harness the power of intention setting with our manifestation tracker. Visualize your goals, track synchronicities, practice gratitude, and monitor your progress toward your desires. Includes guided exercises and reflection prompts.",
          images: [
            "/lovable-uploads/7ac55d26-5d6c-494e-96d7-5ec52c97e77a.png"
          ]
        },
        { 
          name: "Five Percent Review", 
          description: "Track and review your progress with 5% improvements",
          detailedDescription: "Embrace the philosophy of continuous improvement with our 5% better methodology. Track small, incremental changes that compound over time. Perfect for sustainable personal development without overwhelming yourself.",
          images: [
            "/lovable-uploads/e164c680-f89b-4000-9e69-878b4194a114.png"
          ]
        },
        { 
          name: "Future Me", 
          description: "Send letters to your future self for reflection and growth",
          detailedDescription: "Connect with your future self through time-delayed letters and messages. Set reminders for important milestones, reflect on your growth journey, and maintain perspective on your long-term goals. A powerful tool for self-reflection and motivation.",
          images: [
            "/lovable-uploads/295e0ebc-d09f-4915-9d23-6121b91205d6.png"
          ]
        },
        { 
          name: "Ikigai", 
          description: "Discover your life's purpose by exploring your ikigai",
          detailedDescription: "Discover your reason for being through the Japanese concept of Ikigai. Explore the intersection of what you love, what you're good at, what the world needs, and what you can be paid for. Features interactive exercises and reflection tools.",
          images: [
            "/lovable-uploads/a5a312cb-e64c-4ef8-a123-fcf76bd6dbf1.png"
          ]
        },
        { 
          name: "Dreamboard", 
          description: "Create a visual dream board with drawings, texts, and images",
          detailedDescription: "Visualize your dreams and goals with our interactive dreamboard creator. Add images, drawings, text, and symbols to create a powerful visual representation of your aspirations. Features collaborative tools and export options.",
          images: [
            "/lovable-uploads/56f0c4ce-30d3-47dc-a1a2-e031c0a470b2.png"
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
                  <Dialog key={moduleIndex}>
                    <DialogTrigger asChild>
                      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden cursor-pointer">
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
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-center mb-4">
                          {module.name}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        {/* Image Gallery */}
                        <div className="w-full">
                          {module.images.length > 1 ? (
                            <Carousel className="w-full" opts={{ loop: true }}>
                              <CarouselContent>
                                {module.images.map((image, imageIndex) => (
                                  <CarouselItem key={imageIndex}>
                                    <img 
                                      src={image} 
                                      alt={`${module.name} screenshot ${imageIndex + 1}`}
                                      className="w-full h-80 object-cover rounded-lg"
                                    />
                                  </CarouselItem>
                                ))}
                              </CarouselContent>
                              <CarouselPrevious />
                              <CarouselNext />
                            </Carousel>
                          ) : (
                            <img 
                              src={module.images[0]} 
                              alt={`${module.name} screenshot`}
                              className="w-full h-80 object-cover rounded-lg"
                            />
                          )}
                        </div>
                        
                        {/* Detailed Description */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-gray-900">About This Module</h3>
                          <p className="text-gray-700 leading-relaxed">{module.detailedDescription}</p>
                        </div>
                        
                        {/* Features List */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-gray-900">Key Features</h3>
                          <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Intuitive and user-friendly interface</li>
                            <li>Real-time progress tracking</li>
                            <li>Customizable settings and preferences</li>
                            <li>Export and backup capabilities</li>
                            <li>Mobile-responsive design</li>
                          </ul>
                        </div>
                        
                        {/* CTA Button */}
                        <div className="flex justify-center pt-4">
                          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold">
                            Get Started with {module.name}
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
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
