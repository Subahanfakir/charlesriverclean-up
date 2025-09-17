import { Button } from "@/components/ui/button";
import { ArrowDown, Waves } from "lucide-react";
import { Link } from "react-router-dom";
import oceanHero from "@/assets/ocean-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={oceanHero}
          alt="Beautiful underwater ocean scene with coral reefs and marine life"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/60" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 1.2}s`,
            }}
          >
            <Waves className="h-6 w-6 text-seafoam" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
        <div className="mb-6">
          <Waves className="h-16 w-16 mx-auto text-seafoam animate-wave mb-4" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Welcome to the{" "}
          <span className="bg-gradient-wave bg-clip-text text-transparent">
            Blue Planet
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
          Explore the interdisciplinary science of oceanography and discover how the oceans shape our world
        </p>
        
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          A digital dive into the physical, geological, chemical, and biological aspects of our oceans—and why they matter to humanity
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link to="/oceanography">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3">
              Start Exploring
            </Button>
          </Link>
          <Link to="/humans-ocean">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3"
            >
              Our Ocean Impact
            </Button>
          </Link>
        </div>

        {/* Course Info */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 max-w-2xl mx-auto">
          <p className="text-white/90 text-sm leading-relaxed">
            <strong>Final Project for EE 144:</strong> Introduction to Oceanography<br />
            Exploring the science of the oceans and their critical importance to our planet
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;