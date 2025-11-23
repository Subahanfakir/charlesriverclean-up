import { Button } from "@/components/ui/button";
import { ArrowDown, Waves } from "lucide-react";
import { Link } from "react-router-dom";
import oceanHero from "@/assets/charles.jpeg";

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
          Charles River Cleanup
          <span className="bg-gradient-wave bg-clip-text text-transparent block mt-2 pb-2">
            Oceanography in Action
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
          Applying Physical & Chemical Oceanography to Urban River Restoration
        </p>
        
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          A volunteer project documenting sediment management, pollution removal, and ecosystem health at the Charles River Conservancy
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link to="/inside-ocean">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3">
              View Project
            </Button>
          </Link>
          <Link to="/chemical-ocean">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-blue hover:bg-white/10 backdrop-blur-sm px-8 py-3"
            >
              Oceanography Concepts
            </Button>
          </Link>
        </div>

        {/* Course Info */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 max-w-2xl mx-auto">
          <p className="text-white/90 text-sm leading-relaxed">
            <strong>Final Project for EE 144:</strong> Introduction to Oceanography<br />
            Volunteer experience at Charles River Conservancy, October 25, 2025
          </p>
        </div>
      </div>

      {/* Scroll indicator (arrow bounces; small label added for clarity) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <ArrowDown className="h-6 w-6 text-white/70 animate-bounce" />
        <span className="mt-1 text-xs text-white/70 uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;