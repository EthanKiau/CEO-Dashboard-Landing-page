
const ModulesShowcase = () => {
  const moduleCategories = [
    {
      title: "Daily Practices",
      modules: [
        { name: "Daily Journal", description: "Record your thoughts and reflections with guided prompts" },
        { name: "Weekly Rhythm", description: "Plan and review your weekly priorities and goals" },
        { name: "Habit Tracker", description: "Track your daily habits and build consistency" }
      ]
    },
    {
      title: "Productivity",
      modules: [
        { name: "To-do List", description: "A simple and easy-to-use to-do list, like a piece of paper" },
        { name: "Weekly Design Sprint", description: "Plan and track your weekly activities with a design focus" },
        { name: "Project Management", description: "Organize and track your projects from start to finish" }
      ]
    },
    {
      title: "Life & Finance",
      modules: [
        { name: "Personal Finance", description: "Track income, expenses, and manage your budget" },
        { name: "Bucket List", description: "Create and manage your life goals and dreams" }
      ]
    },
    {
      title: "Self-Growth",
      modules: [
        { name: "Manifestation", description: "Set intentions and track your manifestation journey" },
        { name: "Five Percent Review", description: "Track and review your progress with 5% improvements" },
        { name: "Future Me", description: "Send letters to your future self for reflection and growth" },
        { name: "Ikigai", description: "Discover your life's purpose by exploring your ikigai" },
        { name: "Dreamboard", description: "Create a visual dream board with drawings, texts, and images" }
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
                  <div key={moduleIndex} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
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
