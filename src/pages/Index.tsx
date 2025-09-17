import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import { Microscope, Globe, Users, TreePine, Waves, Fish } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      title: "Oceanography 101",
      description: "Discover the four main branches of oceanography and explore the history of ocean exploration from ancient navigation to modern technology.",
      icon: Microscope,
      link: "/oceanography",
      gradient: "bg-gradient-ocean"
    },
    {
      title: "Inside the Ocean",
      description: "Dive deep into ocean currents, marine chemistry, geological formations, and the incredible diversity of marine life.",
      icon: Fish,
      link: "/inside-ocean",
      gradient: "bg-gradient-wave"
    },
    {
      title: "Humans & the Ocean",
      description: "Examine our relationship with the ocean, from pollution and climate change to cultural connections and ethical considerations.",
      icon: Users,
      link: "/humans-ocean",
      gradient: "bg-gradient-coral"
    },
    {
      title: "Future of Our Oceans",
      description: "Learn what you can do to help protect our oceans and explore the latest in ocean conservation and research.",
      icon: TreePine,
      link: "/future",
      gradient: "bg-gradient-depth"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-ocean bg-clip-text text-transparent">
              Explore Ocean Science
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Journey through the fascinating world of oceanography, from basic science to human impact, 
              and discover why our oceans are crucial for life on Earth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-ocean text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Waves className="h-16 w-16 mx-auto mb-6 animate-wave" />
            <h2 className="text-4xl font-bold mb-6">Ready to Dive In?</h2>
            <p className="text-xl mb-8 text-white/90">
              Start your journey into the fascinating world of oceanography and discover 
              how the ocean shapes our planet and our lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/oceanography"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
              >
                Begin Learning
              </Link>
              <Link 
                to="/humans-ocean"
                className="inline-flex items-center justify-center px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Ocean & Humans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
