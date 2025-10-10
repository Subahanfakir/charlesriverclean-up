import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Beaker, Droplet, Wind, Leaf } from "lucide-react";

const ChemicalOcean = () => {
  const topics = [
    {
      title: "Salinity: What's in Seawater?",
      description: "Salinity is the measure of dissolved salts in seawater, averaging about 35 parts per thousand (ppt) or 3.5%. The major ions in seawater are chloride (Cl⁻) and sodium (Na⁺), which make up about 85% of the dissolved material. Ocean salinity varies with evaporation, precipitation, river input, and ice formation. The saltiest ocean regions are in subtropical areas with high evaporation and low precipitation.",
      icon: Droplet,
      color: "bg-gradient-ocean",
      facts: [
        "Average ocean salinity: 35 ppt (3.5%)",
        "Major ions: Chloride (55%) and Sodium (30%)",
        "Salinity increases with evaporation",
        "Freshwater input decreases salinity"
      ]
    },
    {
      title: "Dissolved Oxygen",
      description: "Oxygen enters the ocean through air-sea gas exchange at the surface and through photosynthesis by phytoplankton. Surface waters are typically saturated with oxygen, but oxygen decreases with depth as it is consumed by respiration and decomposition. A prominent feature of the ocean is the oxygen minimum zone (OMZ) at mid-depths (200-1000m), where oxygen can drop to very low levels due to high biological oxygen demand.",
      icon: Wind,
      color: "bg-gradient-wave",
      facts: [
        "Surface waters: saturated with O₂",
        "Oxygen minimum zones at 200-1000 m depth",
        "Produced by photosynthesis, consumed by respiration",
        "Essential for marine aerobic life"
      ]
    },
    {
      title: "Ocean Acidification",
      description: "The ocean absorbs about 30% of the CO₂ emitted into the atmosphere. When CO₂ dissolves in seawater, it forms carbonic acid, which lowers the pH of the ocean. Since the Industrial Revolution, ocean pH has decreased by about 0.1 pH units (a 30% increase in acidity). This ocean acidification makes it harder for organisms like corals, shellfish, and pteropods to build calcium carbonate shells and skeletons.",
      icon: Beaker,
      color: "bg-gradient-coral",
      facts: [
        "Ocean pH has decreased by 0.1 units since pre-industrial times",
        "Oceans absorb ~30% of atmospheric CO₂",
        "Threatens coral reefs and shell-forming organisms",
        "pH expected to drop another 0.3-0.4 units by 2100"
      ]
    },
    {
      title: "Nutrients & the Carbon Cycle",
      description: "Nutrients like nitrogen, phosphorus, and iron are essential for phytoplankton growth. The ocean plays a crucial role in the global carbon cycle through the biological pump: phytoplankton absorb CO₂ during photosynthesis, and when they die, their carbon sinks to the deep ocean, storing it for centuries. This biological carbon pump helps regulate Earth's climate by removing CO₂ from the atmosphere.",
      icon: Leaf,
      color: "bg-gradient-depth",
      facts: [
        "Nitrogen often limits phytoplankton growth",
        "Biological pump stores carbon in deep ocean",
        "Upwelling brings nutrients to surface",
        "Ocean stores 50x more carbon than atmosphere"
      ]
    }
  ];

  const properties = [
    {
      property: "Temperature",
      range: "-2°C to 30°C",
      description: "Affects density, gas solubility, and marine life distribution"
    },
    {
      property: "pH",
      range: "7.5 to 8.3",
      description: "Ocean is slightly alkaline but becoming more acidic"
    },
    {
      property: "Dissolved Oxygen",
      range: "0 to 10 mL/L",
      description: "Varies with temperature, depth, and biological activity"
    },
    {
      property: "Nutrients (Nitrate)",
      range: "0 to 40 μM",
      description: "Low in surface waters, high in deep waters and upwelling zones"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-wave text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Beaker className="h-16 w-16 mx-auto mb-6 animate-wave" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">The Chemistry of the Sea</h1>
            <p className="text-xl text-white/90 leading-relaxed mb-4">
              Chemical Oceanography: Understanding Seawater Composition
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Explore the chemical composition and properties of seawater, including salinity, 
              dissolved gases, pH, ocean acidification, and nutrient cycles.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">The Ocean: A Chemical Soup</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Seawater is much more than just water and salt. It contains dissolved gases, nutrients, 
              and trace elements that are essential for marine life and play critical roles in global 
              biogeochemical cycles. The chemical properties of seawater influence ocean circulation, 
              climate, and the distribution of life in the ocean.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Understanding ocean chemistry is crucial for addressing modern environmental challenges 
              like ocean acidification, deoxygenation, and the impacts of climate change on marine ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* Main Topics */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-ocean bg-clip-text text-transparent">
              Chemical Processes
            </h2>
            <p className="text-xl text-muted-foreground">
              The chemistry that drives ocean systems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {topics.map((topic) => (
              <Card key={topic.title} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`h-2 ${topic.color}`} />
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg ${topic.color} text-white mr-4`}>
                      <topic.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{topic.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {topic.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {topic.facts.map((fact, index) => (
                      <div key={index} className="flex items-start">
                        <Badge variant="secondary" className="mr-2 mt-0.5">•</Badge>
                        <span className="text-sm text-muted-foreground">{fact}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chemical Properties */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-coral bg-clip-text text-transparent">
              Key Chemical Properties
            </h2>
            <p className="text-xl text-muted-foreground">
              Measuring and understanding seawater chemistry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {properties.map((item) => (
              <Card key={item.property} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{item.property}</CardTitle>
                    <Badge variant="outline" className="text-sm">{item.range}</Badge>
                  </div>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ocean Acidification Impact */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-l-4 border-l-coral shadow-lg bg-gradient-to-r from-coral/5 to-transparent">
            <CardHeader>
              <CardTitle className="text-2xl text-coral">Ocean Acidification: A Growing Threat</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base leading-relaxed">
                <strong>The Problem:</strong> Human activities have increased atmospheric CO₂ from about 280 ppm 
                (pre-industrial) to over 420 ppm today. The ocean has absorbed much of this excess CO₂, which 
                has helped slow global warming but at the cost of changing ocean chemistry.
              </p>
              <p className="text-base leading-relaxed">
                <strong>The Impact:</strong> Ocean acidification affects shell-forming organisms like corals, 
                oysters, clams, and tiny pteropods (sea butterflies) that form the base of many food webs. 
                As the ocean becomes more acidic, it becomes harder for these organisms to build and maintain 
                their calcium carbonate structures.
              </p>
              <p className="text-base leading-relaxed">
                <strong>The Future:</strong> If CO₂ emissions continue unabated, ocean pH could drop by another 
                0.3-0.4 units by 2100, threatening marine ecosystems and the billions of people who depend on 
                the ocean for food and livelihoods.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-l-4 border-l-primary shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Chemical Facts About the Ocean</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base leading-relaxed">
                💧 If you evaporated all the water from the ocean, the remaining salt would cover the entire 
                land surface of Earth to a depth of about 150 meters (500 feet).
              </p>
              <p className="text-base leading-relaxed">
                🌊 The ocean contains about 50 times more carbon than the atmosphere, making it a critical 
                component of Earth's climate system.
              </p>
              <p className="text-base leading-relaxed">
                🐚 The pH scale is logarithmic, so a decrease of 0.1 pH units represents a 30% increase in 
                acidity—a significant change for marine life adapted to stable conditions.
              </p>
              <p className="text-base leading-relaxed">
                🌬️ About 50-80% of Earth's oxygen production comes from the ocean, mostly from phytoplankton 
                photosynthesis.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ChemicalOcean;