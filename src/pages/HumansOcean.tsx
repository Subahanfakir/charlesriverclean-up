import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Thermometer, Wind, Waves } from "lucide-react";

const HumansOcean = () => {
  const topics = [
    {
      title: "Ocean Currents & Climate",
      icon: Globe,
      color: "bg-gradient-ocean",
      content: "Ocean currents transport heat from equator to poles, moderating global climate. Without ocean heat transport, tropics would be unbearably hot and poles even colder.",
      sections: [
        {
          title: "Gulf Stream Impact",
          content: "The Gulf Stream transports warm tropical water northward along US East Coast to Europe. Northwestern Europe is 5-10°C warmer than same latitudes elsewhere. London (51°N) has milder winters than Calgary (51°N) due to ocean heat transport.",
          facts: ["Moderates European climate", "Transports 100 Sverdrups", "May slow with climate change"]
        },
        {
          title: "Global Heat Distribution",
          content: "Oceans transfer ~20% of heat from tropics to poles through currents. Surface currents move warm water poleward. Thermohaline circulation moves cold water equatorward at depth. This heat redistribution prevents extreme temperature gradients.",
          facts: ["Balances incoming solar radiation", "Moderates seasonal extremes", "Takes centuries to circulate"]
        }
      ]
    },
    {
      title: "El Niño & La Niña",
      icon: Thermometer,
      color: "bg-gradient-wave",
      content: "El Niño-Southern Oscillation (ENSO) is periodic warming/cooling of tropical Pacific affecting global weather patterns.",
      sections: [
        {
          title: "Normal Conditions",
          content: "Trade winds blow westward across Pacific. Warm water piles up in western Pacific. Thermocline tilts: deep in west, shallow in east. Upwelling along South America brings cold, nutrient-rich water supporting fisheries.",
          facts: ["Strong upwelling off Peru", "High fish productivity", "Walker circulation active"]
        },
        {
          title: "El Niño Events",
          content: "Trade winds weaken. Warm water flows eastward. Thermocline flattens. Upwelling reduced/stops along South America. Fish populations crash. Heavy rain in eastern Pacific, drought in western Pacific/Indonesia. Global climate disruptions.",
          facts: ["Occurs every 2-7 years", "2015-16 event affected 100M people", "Peru fishing suspended"]
        },
        {
          title: "La Niña Events",
          content: "Trade winds strengthen. Thermocline tilts more than normal. Enhanced upwelling. Colder than average eastern Pacific. Opposite weather patterns from El Niño. More hurricanes in Atlantic.",
          facts: ["Stronger upwelling", "Increased Pacific fish productivity", "Drought in southern US"]
        }
      ]
    },
    {
      title: "Ocean & Climate Change",
      icon: Wind,
      color: "bg-gradient-coral",
      content: "Ocean absorbs 90% of excess heat from greenhouse effect and 30% of CO₂ emissions, moderating climate change but altering ocean chemistry.",
      sections: [
        {
          title: "Ocean Warming",
          content: "Global ocean temperature increased 0.11°C per decade since 1971. Surface warms fastest. Thermal expansion contributes ~30% of sea level rise. Warming slows thermohaline circulation. Stratification increases, reducing nutrient mixing.",
          facts: ["Absorbs 90% of excess heat", "Thermal expansion raises sea level", "May slow AMOC circulation"]
        },
        {
          title: "Sea Level Rise",
          content: "Sea level rose 20cm since 1750. Current rate: 3.4mm/year. Projected rise by 2100: 0.5-2.0m. Even if emissions stop today, committed to 1.3-1.9m rise from thermal expansion already in system. Threatens 150M coastal residents by 2070.",
          facts: ["20cm rise since 1750", "Accelerating: 3.4mm/year now", "Cities at risk: Miami, Shanghai, Mumbai"]
        },
        {
          title: "Hurricane Intensity",
          content: "Warmer sea surface temperatures fuel stronger hurricanes. Atlantic sea-surface temperature strongly correlates with hurricane intensity since 1975. Category 4-5 hurricanes increasing. More intense rainfall from warmer atmosphere holding more moisture.",
          facts: ["Warmer water = more energy", "Category 4-5 storms increasing", "Economic damages rising"]
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
            <Waves className="h-16 w-16 mx-auto mb-6 animate-wave" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Currents & Climate</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Discover how ocean circulation patterns shape global weather, regulate Earth's temperature, 
              and respond to climate change.
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
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  {topic.content}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
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
                        <h4 className="font-semibold text-sm text-muted-foreground mb-3">Key Points:</h4>
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
            Content based on <em>Introduction to Oceanography</em> by Paul Webb (Chapters 8, 9 & 14), 
            used under CC-BY 4.0 license
          </p>
        </div>
      </section>
    </div>
  );
};

export default HumansOcean;
