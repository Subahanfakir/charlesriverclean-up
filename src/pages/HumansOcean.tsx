import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Droplets, Thermometer, Users, Factory, Recycle } from "lucide-react";

const HumansOcean = () => {
  const impacts = [
    {
      title: "Ocean Acidification",
      icon: Recycle,
      severity: "Critical",
      description: "Ocean pH has declined from 8.2 to 8.1 in the last century (30% increase in acidity). By 2100, pH may drop to 7.8 (120% increase in acidity), dissolving calcium carbonate shells of marine organisms.",
      stats: "Atmospheric CO₂ increase causes declining ocean pH and carbonate availability",
      solutions: ["Reduce CO₂ emissions", "Support ocean monitoring", "Protect shell-forming species"],
      color: "bg-gradient-coral"
    },
    {
      title: "Climate Change & Ocean Warming",
      icon: Thermometer,
      severity: "Urgent",
      description: "Global temperature has increased 0.8°C since industrialization (1750), with two-thirds of warming since 1975. Sea level has risen 20cm since 1750 and is projected to rise 0.5-2.0m by 2100.",
      stats: "Committed to 1.3-1.9m future sea level rise even if we stop emissions today",
      solutions: ["Reduce fossil fuel use", "Support renewable energy", "Advocate for climate policies"],
      color: "bg-gradient-ocean"
    },
    {
      title: "El Niño & Ocean Disruption",
      icon: Factory,
      severity: "High",
      description: "El Niño-Southern Oscillation (ENSO) events disrupt normal ocean circulation patterns. The 2014-2016 El Niño was one of strongest on record, causing droughts, floods, and fishery collapses affecting 100 million people.",
      stats: "Peru suspended anchovy fishing in 2015-16 with 20% reduction in yearly catch",
      solutions: ["Monitor ENSO conditions", "Support climate-resilient fisheries", "Prepare for extreme weather"],
      color: "bg-gradient-wave"
    }
  ];

  const connections = [
    {
      title: "Food Security & Fisheries",
      description: "Ocean provides critical protein source. Upwelling regions like Peru create productive fishing grounds. Climate change and ENSO events disrupt these systems.",
      impact: "Global Impact",
      color: "border-l-accent"
    },
    {
      title: "Sea Level Rise Threat",
      description: "By 2070, ~150 million coastal people at flood risk. Cities at risk: Shanghai, Mumbai, Miami, New York. Assets at risk: $35 trillion.",
      impact: "Social Impact", 
      color: "border-l-primary"
    },
    {
      title: "Climate & Hurricane Intensity",
      description: "Warming oceans fuel stronger hurricanes. Atlantic sea-surface temperature strongly correlates with hurricane intensity since 1975.",
      impact: "Economic Impact",
      color: "border-l-coral"
    },
    {
      title: "Polar Ice Loss",
      description: "Arctic sea ice declining 3% per decade since 1979. Greenland melt would raise sea level 7m; complete Antarctic melt would raise it 60m.",
      impact: "Environmental Impact",
      color: "border-l-seafoam"
    }
  ];

  const ethicalQuestions = [
    {
      question: "Should deep-sea mining be allowed at hydrothermal vents and seamounts?",
      context: "Hydrothermal vents support unique chemosynthetic ecosystems found nowhere else. Mining could destroy these fragile communities that took millions of years to develop. However, vents contain valuable minerals needed for green technology.",
      considerations: [
        "Environmental: Unique vent ecosystems may be irreplaceable",
        "Economic: Minerals needed for batteries and technology", 
        "Ethical: Do we have the right to destroy what we barely understand?"
      ]
    },
    {
      question: "Who owns the ocean's resources in international waters?",
      context: "The high seas cover 64% of the ocean but lack comprehensive governance, leading to conflicts over fishing rights and resource extraction.",
      considerations: [
        "Legal: Common heritage vs. national interests",
        "Environmental: Need for conservation measures",
        "Social: Rights of developing nations"
      ]
    },
    {
      question: "Are we obligated to reduce emissions given ocean acidification impacts?",
      context: "Ocean pH has already declined 30% and is projected to increase 120% by 2100. This dissolves shells of pteropods, corals, and shellfish - the base of marine food webs. Yet reducing emissions requires economic transformation.",
      considerations: [
        "Environmental: Entire marine ecosystems at risk",
        "Economic: Cost of transitioning from fossil fuels",
        "Ethical: Responsibility to future generations and marine life"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-coral text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="h-16 w-16 mx-auto mb-6 animate-wave" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Humans & the Ocean</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Exploring our complex relationship with the ocean—from the impacts we create 
              to the connections that sustain us.
            </p>
          </div>
        </div>
      </section>

      {/* Human Impacts */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-destructive" />
            <h2 className="text-4xl font-bold mb-6 bg-gradient-ocean bg-clip-text text-transparent">
              Major Human Impacts
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Human activities are rapidly changing ocean systems worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {impacts.map((impact, index) => (
              <Card key={impact.title} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`h-2 ${impact.color}`} />
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${impact.color} text-white`}>
                      <impact.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="destructive" className="text-xs">
                      {impact.severity}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-3">{impact.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed mb-4">
                    {impact.description}
                  </CardDescription>
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="text-sm font-semibold text-primary">{impact.stats}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3 text-sm">What You Can Do:</h4>
                  <div className="space-y-2">
                    {impact.solutions.map((solution, solutionIndex) => (
                      <div key={solutionIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full mr-2" />
                        {solution}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ocean Connections */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <Droplets className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-4xl font-bold mb-6 bg-gradient-wave bg-clip-text text-transparent">
              Ocean-Human Connections
            </h2>
            <p className="text-xl text-muted-foreground">
              The ocean shapes human societies in profound ways
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {connections.map((connection, index) => (
              <Card key={connection.title} className={`border-l-4 ${connection.color} hover:shadow-lg transition-shadow`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{connection.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {connection.impact}
                    </Badge>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {connection.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ethical Questions */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-depth bg-clip-text text-transparent">
              Ethical Questions for Our Time
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              As we face unprecedented changes to our oceans, we must consider 
              difficult questions about rights, responsibilities, and future generations.
            </p>
          </div>

          <div className="space-y-12">
            {ethicalQuestions.map((item, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-2xl mb-4 text-primary">
                    {item.question}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed mb-6">
                    {item.context}
                  </CardDescription>
                  
                  <div>
                    <h4 className="font-semibold mb-4 text-foreground">Key Considerations:</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {item.considerations.map((consideration, considIndex) => (
                        <div key={considIndex} className="bg-muted p-4 rounded-lg">
                          <p className="text-sm">{consideration}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-gradient-ocean text-white border-0 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Your Perspective Matters</h3>
                <p className="text-white/90 leading-relaxed">
                  These ethical questions don't have simple answers. As future leaders, 
                  your generation will shape how humanity interacts with our oceans. 
                  What values and principles should guide these decisions?
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumansOcean;