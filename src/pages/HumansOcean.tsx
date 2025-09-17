import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Droplets, Thermometer, Users, Factory, Recycle } from "lucide-react";

const HumansOcean = () => {
  const impacts = [
    {
      title: "Plastic Pollution",
      icon: Recycle,
      severity: "Critical",
      description: "8 million tons of plastic enter our oceans annually, forming massive garbage patches and harming marine life.",
      stats: "5.25 trillion pieces of plastic debris in oceans",
      solutions: ["Reduce single-use plastics", "Support plastic alternatives", "Participate in beach cleanups"],
      color: "bg-gradient-coral"
    },
    {
      title: "Climate Change",
      icon: Thermometer,
      severity: "Urgent",
      description: "Rising temperatures cause sea level rise, ocean acidification, and coral bleaching events.",
      stats: "Ocean pH has dropped 0.1 units since 1750",
      solutions: ["Reduce carbon footprint", "Support renewable energy", "Advocate for climate policies"],
      color: "bg-gradient-ocean"
    },
    {
      title: "Overfishing",
      icon: Factory,
      severity: "High",
      description: "Industrial fishing has depleted 90% of large fish populations and disrupted marine ecosystems.",
      stats: "34% of fish stocks are overfished globally",
      solutions: ["Choose sustainable seafood", "Support fishing quotas", "Eat lower on the food chain"],
      color: "bg-gradient-wave"
    }
  ];

  const connections = [
    {
      title: "Food Security",
      description: "Over 3 billion people depend on fish as their primary source of protein",
      impact: "Global Impact",
      color: "border-l-accent"
    },
    {
      title: "Coastal Communities",
      description: "40% of the world's population lives within 100km of the coast",
      impact: "Social Impact", 
      color: "border-l-primary"
    },
    {
      title: "Economic Value",
      description: "Ocean economy worth $2.5 trillion annually worldwide",
      impact: "Economic Impact",
      color: "border-l-coral"
    },
    {
      title: "Cultural Heritage",
      description: "Indigenous communities have sustainable ocean relationships spanning thousands of years",
      impact: "Cultural Impact",
      color: "border-l-seafoam"
    }
  ];

  const ethicalQuestions = [
    {
      question: "Should deep-sea mining be allowed to extract rare earth metals?",
      context: "Deep-sea mining could provide materials for renewable energy technology but may destroy unique ecosystems we barely understand.",
      considerations: [
        "Environmental: Unknown impacts on deep-sea life",
        "Economic: Valuable minerals for green technology", 
        "Ethical: Right to exploit unexplored ecosystems"
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
      question: "How should we balance economic needs with ocean conservation?",
      context: "Coastal communities often depend on ocean resources for survival, but overfishing and pollution threaten long-term sustainability.",
      considerations: [
        "Economic: Immediate livelihoods at stake",
        "Environmental: Long-term ecosystem health",
        "Social: Intergenerational equity"
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