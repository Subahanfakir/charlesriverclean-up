import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Microscope, Mountain, Beaker, Fish, Clock, Globe } from "lucide-react";

const Oceanography = () => {
  const branches = [
    {
      title: "Physical Oceanography",
      description: "Studies the physical properties and processes of the ocean including pressure, temperature, density, sound, light transmission, as well as waves, tides, and ocean circulation patterns.",
      icon: Globe,
      color: "bg-gradient-ocean",
      topics: ["Pressure & Density", "Temperature Profiles", "Waves & Tides", "Ocean Circulation", "Sound & Light"]
    },
    {
      title: "Geological Oceanography (Marine Geology)", 
      description: "Examines plate tectonics, the ocean floor, continental margins, marine sediments, hydrothermal vents, and the geological history of ocean basins.",
      icon: Mountain,
      color: "bg-gradient-depth",
      topics: ["Plate Tectonics", "Seafloor Spreading", "Continental Margins", "Hydrothermal Vents", "Ocean Sediments"]
    },
    {
      title: "Chemical Oceanography",
      description: "Focuses on the chemical composition and properties of seawater, including salinity, dissolved gases (oxygen and CO₂), pH, ocean acidification, and nutrient cycles.",
      icon: Beaker,
      color: "bg-gradient-wave",
      topics: ["Salinity Patterns", "Dissolved Oxygen", "Ocean Acidification", "Carbon Cycle", "Nitrogen & Nutrients"]
    },
    {
      title: "Biological Oceanography",
      description: "Studies marine life and ecosystems, including primary production by phytoplankton, marine food webs, and the distribution of organisms throughout the ocean.",
      icon: Fish,
      color: "bg-gradient-coral",
      topics: ["Primary Production", "Phytoplankton", "Marine Food Webs", "Ocean Ecosystems"]
    }
  ];

  const timeline = [
    { 
      period: "Mid-18th Century", 
      event: "Industrial Era Begins", 
      description: "The use of fossil fuels drives machinery and trains, marking the beginning of significant human impact on ocean chemistry and climate." 
    },
    { 
      period: "1914", 
      event: "International Ice Patrol", 
      description: "Following the Titanic disaster, the International Ice Observation and Ice Patrol Service is established to monitor icebergs in shipping lanes." 
    },
    { 
      period: "1979-Present", 
      event: "Satellite Monitoring", 
      description: "Satellite data begins tracking Arctic sea ice extent, revealing a 3% per decade decline and providing crucial climate change evidence." 
    },
    { 
      period: "1988", 
      event: "IPCC Established", 
      description: "The United Nations establishes the Intergovernmental Panel on Climate Change to review scientific literature and issue reports on climate change." 
    },
    { 
      period: "2000", 
      event: "Southern Ocean Recognition", 
      description: "The Southern Ocean (all water from Antarctica to 60°S) is submitted for recognition as the fifth major ocean basin." 
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
              Oceanography is the interdisciplinary scientific study of the ocean, combining geology, chemistry, 
              physics, and biology to understand the complex processes and systems of our planet's oceans.
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
              <div className="text-3xl font-bold text-accent mb-2">97%</div>
              <p className="text-muted-foreground">of Earth's water is in the oceans</p>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-coral mb-2">3,800m</div>
              <p className="text-muted-foreground">average depth of the world ocean</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Understanding oceanography is vital for climate science, resource extraction, international trade, 
            marine biology, environmental science, and predicting how our planet responds to change.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-4xl font-bold mb-6 bg-gradient-depth bg-clip-text text-transparent">
              Milestones in Oceanography
            </h2>
            <p className="text-xl text-muted-foreground">
              Key developments in ocean science and observation
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