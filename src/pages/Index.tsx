import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import { Waves, Droplets, Leaf, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      title: "Project Overview & Photos",
      description: "Documentation of the volunteer cleanup event with photo evidence of restoration work and ecosystem management.",
      icon: Waves,
      link: "/inside-ocean",
      gradient: "bg-gradient-ocean"
    },
    {
      title: "Chemical & Biological Impacts",
      description: "Eutrophication, algal blooms, dissolved oxygen, and how nutrient pollution affects the Charles River ecosystem.",
      icon: Droplets,
      link: "/chemical-ocean",
      gradient: "bg-gradient-wave"
    },
    {
      title: "Physical & Geological Processes",
      description: "Sediment transport, tidal currents, erosion, and the role of terrigenous material in estuarine systems.",
      icon: Leaf,
      link: "/humans-ocean",
      gradient: "bg-gradient-coral"
    },
    {
      title: "Pollution & Conservation",
      description: "Understanding anthropogenic impacts, microplastics, and how volunteer action protects water quality.",
      icon: Trash2,
      link: "/future",
      gradient: "bg-gradient-depth"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Project Context */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-ocean bg-clip-text text-transparent">
            Volunteering Meets Science
          </h2>
          <h3 className="text-xl md:text-2xl text-primary mb-6">
            Charles River Conservancy Cleanup — October 25, 2025
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This project documents a volunteer cleanup event at Herter Park in Allston/Brighton, where I removed 
            litter, raked leaves, and witnessed firsthand the chemical and physical oceanography principles that 
            govern estuarine ecosystems like the Charles River.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-slide-up px-4">
            <div className="bg-primary/5 rounded-2xl p-8 backdrop-blur-sm border border-primary/10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Oceanography Concepts in an Urban River
              </h2>
              <p className="text-xl md:text-2xl text-foreground max-w-4xl mx-auto leading-relaxed">
                From sediment transport to eutrophication, this volunteer experience reveals the physical and chemical 
                processes shaping the Charles River, an estuarine system facing urban pollution and ecological challenges.
              </p>
            </div>
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
            <h2 className="text-4xl font-bold mb-6">Conservation Begins with Understanding</h2>
            <p className="text-xl mb-8 text-white/90">
              See how volunteer action protects urban waterways and learn the science behind ecosystem restoration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/inside-ocean"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
              >
                View Project Photos
              </Link>
              <Link 
                to="/chemical-ocean"
                className="inline-flex items-center justify-center px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Learn the Science
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
