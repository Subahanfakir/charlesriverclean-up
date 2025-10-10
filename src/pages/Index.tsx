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
      
      {/* Why the Ocean Matters */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-ocean bg-clip-text text-transparent">
            Why the Ocean Matters
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            "Over 70% of the earth's surface is ocean, with an average depth of 3,800 m (2.4 miles). 
            The oceans contain 97% of the earth's water, and without them, Earth would be an uninhabitable 
            rock in space. Yet we know less about our own ocean than we do about the surface of some other planets."
          </p>
          <p className="text-base text-muted-foreground italic">
            — Introduction to Oceanography by Paul Webb
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-ocean bg-clip-text text-transparent">
              Explore Ocean Science
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              An interactive digital guide inspired by Paul Webb's Introduction to Oceanography, 
              exploring the four main branches of ocean science.
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
