import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Beaker, Droplets, FlaskConical } from "lucide-react";

const ChemicalOcean = () => {
  const topics = [
    {
      title: "Salinity & Major Ions",
      icon: Droplets,
      color: "bg-gradient-ocean",
      sections: [
        {
          title: "Salinity Basics",
          content: "Average ocean salinity is 35 PSU (practical salinity units) or 35 parts per thousand. Six major ions comprise 99.4% of dissolved salts: Chloride (55%), Sodium (30.6%), Sulfate (7.7%), Magnesium (3.7%), Calcium (1.2%), Potassium (1.1%).",
          facts: ["Chloride + Sodium = table salt", "Rule of constant proportions", "Measured by conductivity"]
        },
        {
          title: "Conservative vs. Non-Conservative Ions",
          content: "Conservative ions maintain constant proportions regardless of total salinity - the major six ions. Non-conservative ions fluctuate based on biological uptake, input sources, or chemical reactions. Mixing time ~1000 years vs. residence times of millions of years for major ions.",
          facts: ["Major ions are conservative", "Nutrients are non-conservative", "Residence time > mixing time"]
        },
        {
          title: "Salinity Variations",
          content: "Affected by: evaporation (increases salinity), precipitation (decreases), river input (decreases), ice formation/melting (formation increases, melting decreases). Mediterranean: high evaporation, ~40 PSU. Baltic Sea: high river input, ~10 PSU. Dead Sea: ~330 PSU.",
          facts: ["Tropics: high evaporation", "Polar: low evaporation + melting", "Equator: high rain lowers salinity"]
        }
      ]
    },
    {
      title: "Dissolved Gases",
      icon: FlaskConical,
      color: "bg-gradient-wave",
      sections: [
        {
          title: "Oxygen (O₂)",
          content: "Enters ocean via air-sea exchange and photosynthesis. Consumed by respiration and decomposition. Surface: highest O₂ from photosynthesis. Oxygen minimum layer (200-1000m): O₂ removed by respiration, too deep for photosynthesis. Deep water: cold temperature and high pressure increase solubility.",
          facts: ["Surface: ~8 mg/L O₂", "Mid-depth: oxygen minimum", "Deep: O₂ from cold polar water"]
        },
        {
          title: "Carbon Dioxide (CO₂)",
          content: "Ocean holds 50 times more CO₂ than atmosphere and 20 times more than land/vegetation. CO₂ dissolves forming carbonic acid (H₂CO₃), then dissociates to bicarbonate (HCO₃⁻) and carbonate (CO₃²⁻). Cold water holds more dissolved CO₂. Ocean acts as CO₂ sink absorbing ~30% of human emissions.",
          facts: ["Ocean: 45x more carbon than atmosphere", "Solubility increases in cold water", "Absorbs anthropogenic CO₂"]
        },
        {
          title: "Nitrogen & Nutrients",
          content: "Nitrogen gas (N₂) dissolved from atmosphere. Bacteria fix N₂ into usable forms: nitrate (NO₃⁻), nitrite (NO₂⁻), ammonia (NH₃). Phosphate (PO₄³⁻) from weathering and decomposition. Silica (SiO₂) needed by diatoms. Nutrients consumed in surface, regenerated at depth through decomposition.",
          facts: ["Limiting nutrients control productivity", "Upwelling brings nutrients up", "Deep water is nutrient-rich"]
        }
      ]
    },
    {
      title: "Ocean Acidification",
      icon: Beaker,
      color: "bg-gradient-coral",
      sections: [
        {
          title: "pH Decline",
          content: "Pre-industrial ocean pH: 8.2 (basic). Current pH: 8.1 (30% increase in H⁺ ions/acidity). By 2100: projected pH 7.8 (120% increase in acidity). pH scale is logarithmic: each 0.1 decrease = 30% more acidic. Ocean is becoming less basic/more acidic.",
          facts: ["pH 8.1 is still basic but declining", "30% more acidic since 1750", "Fastest change in 300 million years"]
        },
        {
          title: "Carbonate Chemistry",
          content: "CO₂ + H₂O → H₂CO₃ (carbonic acid). H₂CO₃ → H⁺ + HCO₃⁻ (bicarbonate). HCO₃⁻ → H⁺ + CO₃²⁻ (carbonate). Lower pH means more H⁺ ions, which combine with CO₃²⁻ to form HCO₃⁻, reducing carbonate availability. Carbonate needed for shells and skeletons.",
          facts: ["CO₂ creates carbonic acid", "H⁺ ions consume carbonate", "Less CO₃²⁻ available"]
        },
        {
          title: "Biological Impacts",
          content: "Organisms using calcium carbonate (CaCO₃) affected: corals, mollusks, pteropods, coccolithophores. Shells/skeletons dissolve in acidic water. Pteropods (sea butterflies) are base of Arctic food web. Coral reefs provide habitat for 25% of marine species. Acidification threatens entire food webs.",
          facts: ["Pteropod shells dissolving", "Coral growth slows 15-20%", "Shellfish larvae vulnerable"]
        }
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
            <Beaker className="h-16 w-16 mx-auto mb-6 animate-wave" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Chemical Oceanography</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Understanding the ocean's chemistry—from salinity and dissolved gases to ocean acidification 
              and its impacts on marine life.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl space-y-20">
          {topics.map((topic, topicIndex) => (
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
            Content based on <em>Introduction to Oceanography</em> by Paul Webb (Chapter 5), 
            used under CC-BY 4.0 license
          </p>
        </div>
      </section>
    </div>
  );
};

export default ChemicalOcean;
