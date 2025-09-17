import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Microscope, Mountain, Beaker, Fish, Clock, Globe } from "lucide-react";

const Oceanography = () => {
  const branches = [
    {
      title: "Physical Oceanography",
      description: "Studies ocean currents, waves, tides, and the physical properties of seawater including temperature, salinity, and density.",
      icon: Globe,
      color: "bg-gradient-ocean",
      topics: ["Ocean Currents", "Waves & Tides", "Temperature & Salinity", "Ocean Circulation"]
    },
    {
      title: "Geological Oceanography", 
      description: "Examines the ocean floor, marine sediments, plate tectonics, and the geological history of ocean basins.",
      icon: Mountain,
      color: "bg-gradient-depth",
      topics: ["Seafloor Spreading", "Marine Sediments", "Hydrothermal Vents", "Ocean Basin Formation"]
    },
    {
      title: "Chemical Oceanography",
      description: "Focuses on the chemical composition of seawater, marine chemistry cycles, and chemical interactions in the ocean.",
      icon: Beaker,
      color: "bg-gradient-wave",
      topics: ["Ocean Chemistry", "Carbon Cycle", "pH & Acidification", "Nutrient Cycles"]
    },
    {
      title: "Biological Oceanography",
      description: "Studies marine organisms, ocean ecosystems, food webs, and the distribution of life in the ocean.",
      icon: Fish,
      color: "bg-gradient-coral",
      topics: ["Marine Ecosystems", "Plankton", "Food Webs", "Marine Biodiversity"]
    }
  ];

  const timeline = [
    { 
      period: "Ancient Times", 
      event: "Polynesian Navigation", 
      description: "Pacific islanders develop sophisticated ocean navigation techniques using stars, currents, and wave patterns." 
    },
    { 
      period: "1519-1522", 
      event: "Magellan's Expedition", 
      description: "First circumnavigation of the globe, proving the Earth is round and mapping ocean routes." 
    },
    { 
      period: "1872-1876", 
      event: "HMS Challenger", 
      description: "First scientific expedition dedicated to oceanography, discovering deep-sea life and mapping ocean depths." 
    },
    { 
      period: "1957-1958", 
      event: "International Geophysical Year", 
      description: "Global cooperation in ocean research leads to major discoveries about ocean circulation and climate." 
    },
    { 
      period: "1960s-Present", 
      event: "Satellite Era", 
      description: "Satellites and submersibles revolutionize ocean observation, enabling global monitoring and deep-sea exploration." 
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-ocean text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Microscope className="h-16 w-16 mx-auto mb-6 animate-wave" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Oceanography 101</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Discover the interdisciplinary science that studies our planet's oceans, 
              from their physical properties to the life they sustain.
            </p>
          </div>
        </div>
      </section>

      {/* What is Oceanography */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-ocean bg-clip-text text-transparent">
              What is Oceanography?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Oceanography is the scientific study of the ocean, integrating multiple disciplines 
              to understand the complex systems that govern our blue planet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {branches.map((branch, index) => (
              <Card key={branch.title} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`h-2 ${branch.color}`} />
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg ${branch.color} text-white mr-4`}>
                      <branch.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{branch.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {branch.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {branch.topics.map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why it Matters */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-wave bg-clip-text text-transparent">
            Why Oceanography Matters
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-background p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">71%</div>
              <p className="text-muted-foreground">of Earth's surface is covered by oceans</p>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-accent mb-2">50%</div>
              <p className="text-muted-foreground">of oxygen we breathe comes from marine plants</p>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-coral mb-2">80%</div>
              <p className="text-muted-foreground">of ocean life remains unexplored</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Understanding our oceans is crucial for climate science, marine conservation, 
            sustainable fisheries, and predicting how our planet will respond to environmental changes.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-4xl font-bold mb-6 bg-gradient-depth bg-clip-text text-transparent">
              Timeline of Ocean Exploration
            </h2>
            <p className="text-xl text-muted-foreground">
              From ancient navigation to modern deep-sea exploration
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-ocean"></div>
            
            {timeline.map((item, index) => (
              <div key={item.period} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <Card className="shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">{item.period}</CardTitle>
                      <CardDescription className="font-semibold text-foreground">
                        {item.event}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Oceanography;