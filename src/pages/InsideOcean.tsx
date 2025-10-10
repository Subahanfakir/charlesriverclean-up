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
            content: "Surface currents (top 10% of ocean) driven by wind patterns. Deep currents (90% of ocean) driven by density differences from temperature and salinity - called thermohaline circulation. Move at 10-20 km/year vs. surface currents at km/hour.",
            facts: ["Surface gyres driven by winds", "Deep water forms at poles", "Thermohaline circulation takes centuries"]
          },
          {
            title: "Waves",
            content: "Wind-driven waves created by friction on water surface. Wave height depends on wind speed, duration, and fetch. Waves transfer energy, not water. Deep water waves occur where depth > half wavelength.",
            facts: ["Energy moves, water stays", "Tsunamis from earthquakes", "Rogue waves from constructive interference"]
          },
          {
            title: "Tides",
            content: "Gravitational forces from moon and sun create tidal bulges. Earth-moon system rotates around barycenter (center of mass). Dynamic theory explains amphidromic circulation patterns in ocean basins.",
            facts: ["Diurnal: 1 high/low per day", "Semidiurnal: 2 high/low per day", "Mixed tides vary in height"]
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
            content: "Average ocean salinity is 35 PSU (practical salinity units) or 35 parts per thousand. Conservative ions maintain constant proportions regardless of salinity. Affected by evaporation (increases), precipitation, river input, and ice formation/melting.",
            facts: ["Major ions are conservative", "Density increases with salinity", "Mediterranean: high evaporation"]
          },
          {
            title: "Ocean Acidification",
            content: "Ocean pH declined from 8.2 to 8.1 in last century (30% increase in acidity). By 2100, may drop to 7.8 (120% increase). CO₂ dissolves forming carbonic acid, bicarbonate, and carbonate. Lower pH dissolves calcium carbonate shells.",
            facts: ["Ocean holds 45x more carbon than atmosphere", "pH 8.1 is still basic but trending acidic", "Carbonate ions decline with pH"]
          },
          {
            title: "Dissolved Oxygen",
            content: "O₂ enters ocean through air-sea exchange and photosynthesis. Consumed by respiration and decomposition. Cold water holds more dissolved gas. Oxygen minimum zones at intermediate depths. Hypoxia = O₂ < 2 mg/L, Anoxia = O₂ < 0.5 mg/L.",
            facts: ["Surface: high O₂ from photosynthesis", "Mid-depth: O₂ minimum from respiration", "Deep: higher O₂ in cold dense water"]
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
            title: "Divergent Boundaries",
            content: "Mid-ocean ridges where plates move apart and new crust forms through seafloor spreading. Magma rises from mantle, cools to form basaltic oceanic crust. Ridge systems span 65,000 km globally.",
            facts: ["Atlantic spreads 2-3 cm/year", "Creates youngest crust", "Hydrothermal vents at ridges"]
          },
          {
            title: "Convergent Boundaries & Trenches",
            content: "Convergent boundaries where plates collide. Ocean trenches form at subduction zones where denser oceanic plate sinks. Challenger Deep in Mariana Trench: 11,022m deep. Pressure increases 1 atm per 10m depth.",
            facts: ["Mariana Trench: deepest at 11,022m", "Pressure at 1000m = 101 atm", "Trenches act as sediment traps"]
          },
          {
            title: "Hydrothermal Vents",
            content: "Hot springs at mid-ocean ridges where seawater seeps into crust, gets superheated (up to 400°C), and erupts with dissolved minerals. Support chemosynthetic ecosystems independent of sunlight. Bacteria convert chemical energy to organic compounds.",
            facts: ["Water can exceed 400°C", "Chemosynthesis, not photosynthesis", "Unique vent communities"]
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
            title: "Primary Production & Plankton",
            content: "Phytoplankton (diatoms, dinoflagellates, coccolithophores) conduct photosynthesis using nutrients (nitrate, phosphate, silica). Confined to euphotic zone (0-200m). Primary producers support all marine food webs.",
            facts: ["Require nutrients and light", "Diatoms use silica tests", "Coccolithophores use calcium carbonate"]
          },
          {
            title: "Coral Reefs",
            content: "Diverse ecosystems built by coral polyps in tropical waters. Home to 25% of marine species despite covering <1% of ocean.",
            facts: ["Support 500 million people globally", "Provide coastal protection", "Threatened by warming and acidification"]
          },
          {
            title: "Deep Sea Life",
            content: "75% of ocean's living space is in bathypelagic zone and below (>1000m). Organisms adapted to aphotic zone (no light), extreme pressure (1 atm/10m depth), and cold temperatures. Many exhibit bioluminescence.",
            facts: ["Pressure at 1000m = 101 atm", "Aphotic zone below 1000m", "Boyle's Law: pressure compresses gases"]
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
              { zone: "Epipelagic (Sunlight)", depth: "0-200m", temp: "Variable", description: "Euphotic/photic zone where photosynthesis occurs, 75% of living space below", color: "bg-gradient-wave" },
              { zone: "Mesopelagic (Twilight)", depth: "200-1000m", temp: "Cooler", description: "Dysphotic zone with some light but not enough for photosynthesis", color: "bg-gradient-ocean" },
              { zone: "Bathypelagic (Midnight)", depth: "1000-4000m", temp: "Cold", description: "Aphotic zone with no light, contains 75% of ocean's living space", color: "bg-gradient-depth" },
              { zone: "Abyssopelagic (Abyssal)", depth: "4000-6000m", temp: "Near-freezing", description: "Extends to seafloor in most areas, extreme pressure", color: "bg-gradient-coral" },
              { zone: "Hadalpelagic (Hadal)", depth: "6000m+", temp: "1-4°C", description: "Deep ocean trenches like Mariana (11,022m deep), crushing pressure", color: "bg-primary" }
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