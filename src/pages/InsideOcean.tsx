import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Waves, Wind, Beaker, Fish, Mountain, Thermometer } from "lucide-react";

const InsideOcean = () => {
  const topics = [
    {
      id: "physical",
      title: "Physical Oceanography",
      icon: Wind,
      color: "bg-gradient-ocean",
      content: {
        title: "Currents, Waves & Tides",
        description: "The ocean is in constant motion, driven by winds, temperature differences, and gravitational forces.",
        sections: [
          {
            title: "Ocean Currents",
            content: "Massive rivers of water flowing through the ocean, driven by wind patterns, temperature differences, and the Earth's rotation. The Gulf Stream alone carries 30 times more water than all the world's rivers combined.",
            facts: ["Surface currents are driven by wind", "Deep currents are driven by density differences", "Currents redistribute heat globally"]
          },
          {
            title: "Waves",
            content: "Most ocean waves are created by wind friction on the water surface. Wave height depends on wind speed, duration, and fetch (distance over which wind blows).",
            facts: ["Waves can travel thousands of miles", "Wave energy doesn't move water forward", "Tsunamis are caused by underwater earthquakes"]
          },
          {
            title: "Tides",
            content: "The gravitational pull of the moon and sun creates predictable rises and falls in sea level. Tidal ranges vary dramatically around the world.",
            facts: ["Bay of Fundy has 16-meter tidal range", "Spring tides occur during new/full moons", "Neap tides occur during quarter moons"]
          }
        ]
      }
    },
    {
      id: "chemical",
      title: "Chemical Oceanography", 
      icon: Beaker,
      color: "bg-gradient-wave",
      content: {
        title: "Ocean Chemistry & Carbon Cycle",
        description: "The ocean's chemical composition affects all marine life and plays a crucial role in global climate regulation.",
        sections: [
          {
            title: "Salinity",
            content: "Average ocean salinity is 35 parts per thousand (3.5%). This varies due to evaporation, precipitation, river input, and ice formation.",
            facts: ["Dead Sea: 34% salinity", "Arctic Ocean: 3.2% salinity", "Salinity affects water density"]
          },
          {
            title: "Ocean Acidification",
            content: "As oceans absorb CO₂ from the atmosphere, they become more acidic. pH has dropped from 8.2 to 8.1 since pre-industrial times.",
            facts: ["Ocean absorbs 25% of human CO₂", "pH drop affects shell-forming organisms", "Coral reefs are particularly vulnerable"]
          },
          {
            title: "Oxygen Levels",
            content: "Oxygen enters the ocean through air-sea exchange and photosynthesis. Oxygen minimum zones occur at intermediate depths.",
            facts: ["Phytoplankton produce 50% of Earth's oxygen", "Deep waters have less oxygen", "Dead zones are expanding globally"]
          }
        ]
      }
    },
    {
      id: "geological",
      title: "Geological Oceanography",
      icon: Mountain,
      color: "bg-gradient-coral",
      content: {
        title: "Seafloor & Plate Tectonics",
        description: "The ocean floor is one of the most geologically active places on Earth, constantly being created and destroyed.",
        sections: [
          {
            title: "Mid-Ocean Ridges",
            content: "Underwater mountain ranges where new oceanic crust is formed. The Mid-Atlantic Ridge spreads at 2-3 cm per year.",
            facts: ["65,000 km of ridges globally", "Seafloor spreading creates new crust", "Hydrothermal vents support unique life"]
          },
          {
            title: "Ocean Trenches",
            content: "The deepest parts of the ocean, formed where oceanic plates subduct beneath other plates. Mariana Trench is 11 km deep.",
            facts: ["Challenger Deep: deepest known point", "Subduction creates trenches", "Extreme pressure: 1000x surface pressure"]
          },
          {
            title: "Hydrothermal Vents",
            content: "Underwater hot springs where superheated water rich in minerals erupts from the seafloor, supporting unique ecosystems.",
            facts: ["Water temperatures reach 400°C", "Support chemosynthetic life", "Discovered only in 1977"]
          }
        ]
      }
    },
    {
      id: "biological",
      title: "Biological Oceanography",
      icon: Fish,
      color: "bg-gradient-depth",
      content: {
        title: "Marine Life & Ecosystems",
        description: "The ocean teems with life, from microscopic plankton to massive whales, forming complex food webs.",
        sections: [
          {
            title: "Plankton",
            content: "Floating organisms that form the base of marine food webs. Phytoplankton are marine plants, zooplankton are animals.",
            facts: ["Phytoplankton produce 50% of oxygen", "Support all marine food webs", "Respond quickly to climate changes"]
          },
          {
            title: "Coral Reefs",
            content: "Diverse ecosystems built by coral polyps in tropical waters. Home to 25% of marine species despite covering <1% of ocean.",
            facts: ["Support 500 million people globally", "Provide coastal protection", "Threatened by warming and acidification"]
          },
          {
            title: "Deep Sea Life",
            content: "Adapted to extreme conditions of pressure, cold, and darkness. Many species exhibit bioluminescence.",
            facts: ["95% of deep sea unexplored", "Pressure increases 1 atm per 10m", "No sunlight below 1000m"]
          }
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-wave text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Waves className="h-16 w-16 mx-auto mb-6 animate-wave" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Inside the Ocean</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Explore the physical, chemical, geological, and biological processes 
              that make our oceans the most dynamic systems on Earth.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Tabs */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="physical" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 h-auto p-1">
              {topics.map((topic) => (
                <TabsTrigger 
                  key={topic.id} 
                  value={topic.id}
                  className="flex flex-col items-center p-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <topic.icon className="h-6 w-6 mb-2" />
                  <span className="text-xs font-medium">{topic.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {topics.map((topic) => (
              <TabsContent key={topic.id} value={topic.id} className="mt-8">
                <div className="text-center mb-12">
                  <div className={`inline-flex p-4 rounded-xl ${topic.color} text-white mb-6`}>
                    <topic.icon className="h-12 w-12" />
                  </div>
                  <h2 className="text-4xl font-bold mb-4 bg-gradient-ocean bg-clip-text text-transparent">
                    {topic.content.title}
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {topic.content.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {topic.content.sections.map((section, index) => (
                    <Card key={section.title} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className={`h-2 ${topic.color}`} />
                      <CardHeader>
                        <CardTitle className="text-xl mb-3">{section.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {section.content}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm text-muted-foreground mb-3">Key Facts:</h4>
                          {section.facts.map((fact, factIndex) => (
                            <Badge 
                              key={factIndex} 
                              variant="secondary" 
                              className="text-xs mr-2 mb-2 px-3 py-1"
                            >
                              {fact}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Temperature & Depth Visualization */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <Thermometer className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-4xl font-bold mb-6 bg-gradient-depth bg-clip-text text-transparent">
              Ocean Zones by Depth
            </h2>
            <p className="text-xl text-muted-foreground">
              The ocean is divided into distinct zones, each with unique characteristics
            </p>
          </div>

          <div className="space-y-4">
            {[
              { zone: "Sunlight Zone", depth: "0-200m", temp: "20-25°C", description: "Where most marine life exists, photosynthesis occurs", color: "bg-gradient-wave" },
              { zone: "Twilight Zone", depth: "200-1000m", temp: "4-20°C", description: "Limited light, many bioluminescent creatures", color: "bg-gradient-ocean" },
              { zone: "Midnight Zone", depth: "1000-4000m", temp: "1-4°C", description: "Complete darkness, extreme pressure", color: "bg-gradient-depth" },
              { zone: "Abyssal Zone", depth: "4000-6000m", temp: "1-3°C", description: "Near-freezing temperatures, sparse life", color: "bg-gradient-coral" },
              { zone: "Hadal Zone", depth: "6000m+", temp: "1-2°C", description: "Ocean trenches, extreme conditions", color: "bg-primary" }
            ].map((zone, index) => (
              <Card key={zone.zone} className="overflow-hidden">
                <div className="flex">
                  <div className={`w-2 ${zone.color}`} />
                  <div className="flex-1 p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{zone.zone}</h3>
                        <p className="text-muted-foreground mb-2">{zone.description}</p>
                      </div>
                      <div className="flex flex-col md:text-right space-y-1">
                        <Badge variant="outline" className="w-fit md:ml-auto">
                          Depth: {zone.depth}
                        </Badge>
                        <Badge variant="secondary" className="w-fit md:ml-auto">
                          Temp: {zone.temp}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsideOcean;