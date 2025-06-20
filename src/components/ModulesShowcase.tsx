
const ModulesShowcase = () => {
  const modules = [
    { name: "Daily Journal", description: "Capture thoughts and insights" },
    { name: "Habit Tracker", description: "Build powerful routines" },
    { name: "Bucket List", description: "Life goals and dreams" },
    { name: "Task Manager", description: "Organize your priorities" },
    { name: "Goal Setting", description: "Define and achieve objectives" },
    { name: "Time Tracker", description: "Monitor productivity" },
    { name: "Mood Tracker", description: "Emotional wellness insights" },
    { name: "Financial Planner", description: "Wealth building strategies" },
    { name: "Health Monitor", description: "Wellness and fitness tracking" },
    { name: "Learning Log", description: "Knowledge acquisition" },
    { name: "Network Manager", description: "Relationship building" },
    { name: "Decision Matrix", description: "Strategic thinking tools" },
    { name: "Vision Board", description: "Visualize your future" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            13 Powerful Modules
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every aspect of personal and professional growth covered in one comprehensive dashboard.
          </p>
        </div>

        {/* Screenshot Placeholder */}
        <div className="mb-16 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">📸</span>
                </div>
                <p className="text-gray-600 text-lg">Dashboard Screenshot Will Be Added Here</p>
                <p className="text-gray-500 text-sm mt-2">Upload your CEO Dashboard screenshots to showcase the interface</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">{index + 1}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{module.name}</h3>
              <p className="text-gray-600 text-sm">{module.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesShowcase;
