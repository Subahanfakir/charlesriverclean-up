import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import { Microscope, Globe, Users, TreePine, Waves, Fish, Droplets } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      title: "Ocean Currents & Circulation",
      description: "Explore surface gyres, thermohaline circulation, upwelling zones, and how water moves around the globe.",
      icon: Waves,
      link: "/inside-ocean",
      gradient: "bg-gradient-ocean"
    },
    {
      title: "Chemical Oceanography",
      description: "Understand salinity, dissolved gases, ocean acidification, and nutrient cycles in seawater.",
      icon: Fish,
      link: "/chemical-ocean",
      gradient: "bg-gradient-wave"
    },
    {
      title: "Currents & Climate",
      description: "Discover how the Gulf Stream, El Niño, and ocean circulation patterns shape weather and climate.",
      icon: Globe,
      link: "/humans-ocean",
      gradient: "bg-gradient-coral"
    },
    {
      title: "Energy of the Sea",
      description: "Learn about waves, tides, and how the ocean stores and transfers energy across vast distances.",
      icon: Droplets,
      link: "/future",
      gradient: "bg-gradient-depth"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* The Ocean Engine */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-ocean bg-clip-text text-transparent">
            The Ocean Engine
          </h2>
          <h3 className="text-xl md:text-2xl text-primary mb-6">
            How Ocean Currents Shape Our World
          </h3>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            "The oceans are a major contributor to global climate patterns... Knowledge of oceanography 
            is important for understanding winds and currents, tides and wave patterns. The ocean covers 
            71% of the Earth's surface and contains 97% of Earth's water."
          </p>
          <p className="text-base text-muted-foreground italic">
            — From <em>Introduction to Oceanography</em> by Paul Webb (CC-BY 4.0)
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-ocean bg-clip-text text-transparent">
              A Living Machine Connecting All Continents
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Based on Webb's Chapters 6, 9, and 10, this project explores how ocean currents, waves, and 
              circulation drive our climate, weather, and marine ecosystems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <h2 className="text-4xl font-bold mb-6">Understand the Ocean's Power</h2>
            <p className="text-xl mb-8 text-white/90">
              Discover how ocean motion connects continents, regulates our climate, and sustains life on Earth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/inside-ocean"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
              >
                Explore Currents
              </Link>
              <Link 
                to="/humans-ocean"
                className="inline-flex items-center justify-center px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Climate Connection
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
