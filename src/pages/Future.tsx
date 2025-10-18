import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Waves, Wind, Droplets } from "lucide-react";

const Future = () => {
  const topics = [
    {
      title: "Tides",
      icon: Waves,
      color: "bg-gradient-ocean",
      sections: [
        {
          title: "Tidal Forces",
          content: "Moon's gravity pulls ocean water creating bulge facing Moon. Centrifugal force from Earth-Moon rotation creates bulge on opposite side. Result: two high tides and two low tides per day (in most places). Sun contributes ~45% as much tidal force as Moon.",
          facts: ["Moon creates 2 bulges", "Sun enhances/diminishes tides", "Earth rotates under bulges"]
        },
        {
          title: "Spring & Neap Tides",
          content: "Spring tides: Sun and Moon aligned (new/full moon), gravitational forces add together, highest tidal range. Neap tides: Sun and Moon perpendicular (quarter moons), forces partially cancel, lowest tidal range. Cycle repeats every ~14 days.",
          facts: ["Spring: highest range", "Neap: lowest range", "14-day cycle"]
        },
        {
          title: "Tidal Classifications",
          content: "Diurnal: one high and one low tide per day (Gulf of Mexico). Semidiurnal: two equal high and two equal low tides per day (US East Coast). Mixed: two unequal highs and two unequal lows per day (US West Coast). Pattern depends on basin shape and latitude.",
          facts: ["East Coast: semidiurnal", "Gulf: diurnal", "West Coast: mixed"]
        }
      ]
    },
    {
      title: "Waves",
      icon: Wind,
      color: "bg-gradient-wave",
      sections: [
        {
          title: "Wave Energy",
          content: "Waves transport energy across ocean basins without moving water forward. Energy created by wind friction on surface. Wave size depends on wind speed, wind duration, and fetch (distance). Water particles move in circular orbits. Energy decreases exponentially with depth.",
          facts: ["Energy travels, water stays", "Orbital motion below surface", "Depth of wave influence = ½ wavelength"]
        },
        {
          title: "Wave Power",
          content: "Ocean waves contain enormous energy potential. Global wave power estimated at 2-3 terawatts. Wave energy devices convert wave motion to electricity. Most promising in high-latitude storm belts. Renewable, predictable, high energy density compared to solar/wind.",
          facts: ["2-3 TW global potential", "Higher energy density than wind", "Predictable and consistent"]
        },
        {
          title: "Tidal Energy",
          content: "Tidal currents can drive underwater turbines. Tidal range creates potential energy. Best sites: narrow channels with large tidal range (>5m). Examples: Bay of Fundy (16m range), Severn Estuary. Predictable 100 years in advance. No greenhouse gas emissions.",
          facts: ["Requires >5m tidal range", "100% predictable", "Zero emissions"]
        }
      ]
    },
    {
      title: "Ocean's Future",
      icon: Droplets,
      color: "bg-gradient-coral",
      sections: [
        {
          title: "Changing Circulation",
          content: "Atlantic Meridional Overturning Circulation (AMOC) may be slowing due to freshwater input from melting ice. Slowdown would alter heat distribution, cooling Europe while tropics warm more. Models predict 15-50% slowdown by 2100. Would disrupt marine ecosystems and fisheries.",
          facts: ["AMOC shows signs of slowing", "Europe could cool", "Ecosystem disruption likely"]
        },
        {
          title: "Ocean as Climate Solution",
          content: "Ocean has absorbed 30% of CO₂ emissions and 90% of excess heat, slowing atmospheric warming. But capacity is finite. Continued absorption causes acidification. Future depends on reducing emissions to prevent overwhelming ocean's buffering capacity.",
          facts: ["30% of CO₂ absorbed", "90% of heat absorbed", "Capacity is limited"]
        },
        {
          title: "Understanding & Monitoring",
          content: "Argo floats: 4,000+ autonomous devices measuring temperature, salinity, and depth worldwide. Satellites monitor sea surface temperature, height, and color. Data reveals ocean's changing state. Better understanding leads to better predictions and policy decisions.",
          facts: ["4,000 Argo floats deployed", "Satellite monitoring essential", "Data drives climate models"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-depth text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Droplets className="h-16 w-16 mx-auto mb-6 animate-wave" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Energy of the Sea</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Explore how tides and waves store and transfer energy—from the physics of ocean motion 
              to renewable energy potential.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl space-y-20">
          {topics.map((topic) => (
            <div key={topic.title}>
              <div className="text-center mb-12">
                <div className={`inline-flex p-4 rounded-xl ${topic.color} text-white mb-6`}>
                  <topic.icon className="h-12 w-12" />
                </div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-ocean bg-clip-text text-transparent">
                  {topic.title}
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {topic.sections.map((section) => (
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
            </div>
          ))}
        </div>
      </section>

      {/* Attribution */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-sm text-muted-foreground">
            Content based on <em>Introduction to Oceanography</em> by Paul Webb (Chapters 10 & 11), 
            used under CC-BY 4.0 license
          </p>
        </div>
      </section>
    </div>
  );
};

export default Future;
