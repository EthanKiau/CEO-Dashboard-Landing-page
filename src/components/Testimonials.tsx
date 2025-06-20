
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Tech Startup CEO",
      content: "CEO Dashboard transformed how I manage my personal and professional life. The habit tracking alone has been a game-changer.",
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "Fortune 500 Executive",
      content: "Finally, a tool that understands the complexity of executive life. All 13 modules work seamlessly together.",
      avatar: "MR"
    },
    {
      name: "Emily Thompson",
      role: "Entrepreneur",
      content: "The yearly plan is incredible value. I've achieved more goals in 6 months than I did in the previous 2 years.",
      avatar: "ET"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Leaders Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful executives who have transformed their lives with CEO Dashboard.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
