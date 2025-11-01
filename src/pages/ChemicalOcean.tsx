import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ChemicalOcean = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-16 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-ocean bg-clip-text text-transparent">
            Chemical & Biological Impacts
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Exploring the chemical processes and biological consequences in the Charles River ecosystem
          </p>
        </div>

        {/* Evidence Card - Wide 2-Photo Layout */}
        <Card className="mb-16 overflow-hidden border-primary/20 shadow-lg">
          <CardHeader className="bg-gradient-ocean/10 py-8">
            <CardTitle className="text-3xl text-center">Visual Evidence of Eutrophication</CardTitle>
            <CardDescription className="text-center text-lg">Algal bloom observed during the cleanup event</CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Photo Placeholder 1: Green Scummy Water */}
              <div className="space-y-3">
                <div className="bg-muted rounded-lg aspect-video flex items-center justify-center border-2 border-dashed border-muted-foreground/25">
                  <p className="text-muted-foreground text-center px-4">
                    📸 INSERT PHOTO: Bright Green, Scummy Water
                    <br />
                    <span className="text-sm">(Evidence of algal bloom in inlet)</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-primary">Eutrophication & Primary Production</h3>
                  <p className="text-sm text-muted-foreground">
                    The vibrant green color indicates an intense algal bloom caused by excessive nutrients (non-conservative ions) from urban runoff. This represents unchecked primary production.
                  </p>
                </div>
              </div>

              {/* Photo Placeholder 2: Surface Scum */}
              <div className="space-y-3">
                <div className="bg-muted rounded-lg aspect-video flex items-center justify-center border-2 border-dashed border-muted-foreground/25">
                  <p className="text-muted-foreground text-center px-4">
                    📸 INSERT PHOTO: Green Surface Scum Near Dock
                    <br />
                    <span className="text-sm">(Algae + decaying leaves at water's edge)</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-primary">Hypoxia Potential</h3>
                  <p className="text-sm text-muted-foreground">
                    The accumulation of decaying organic material (leaves + algae) consumes dissolved oxygen through respiration, creating hypoxic conditions that threaten aquatic life.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Nutrient Budget Section - Asymmetric Layout */}
        <Card className="mb-16 border-primary/20 shadow-lg">
          <CardHeader className="bg-gradient-wave/10 py-8">
            <CardTitle className="text-3xl text-center">Nutrient Budget & Non-Conservative Ions</CardTitle>
            <CardDescription className="text-center text-lg">How excess nutrients fuel algal blooms</CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-[1fr,1.3fr] gap-8">
              {/* Photo Placeholder 3: Bags of Leaves */}
              <div className="space-y-3">
                <div className="bg-muted rounded-lg aspect-video flex items-center justify-center border-2 border-dashed border-muted-foreground/25">
                  <p className="text-muted-foreground text-center px-4">
                    📸 INSERT PHOTO: Bags of Leaves Lined Up
                    <br />
                    <span className="text-sm">(Massive volume of collected organic debris)</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-primary">Preventing Nutrient Loading</h3>
                  <p className="text-sm text-muted-foreground">
                    These bags contain terrigenous sediment that, if left to decay, would release nitrogen and phosphorus (non-conservative nutrients) into the water, fueling further algal growth.
                  </p>
                </div>
              </div>

              {/* Explanation Section */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">The Nutrient Cycle Problem</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Urban Runoff:</strong> Carries fertilizers, pet waste, and decomposing organic matter into the river</li>
                  <li>• <strong>Non-Conservative Nutrients:</strong> Nitrogen (N) and Phosphorus (P) are consumed by phytoplankton, driving excessive primary production</li>
                  <li>• <strong>Algal Blooms:</strong> Rapid growth of microscopic algae turns water green and cloudy</li>
                  <li>• <strong>Oxygen Depletion:</strong> When algae die and decompose, bacteria consume dissolved O₂, creating "dead zones"</li>
                  <li>• <strong>Volunteer Impact:</strong> Removing leaf litter prevents this nutrient input from ever reaching the water</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dissolved Oxygen Section - Full Width */}
        <Card className="mb-16 border-primary/20 shadow-lg bg-primary/5">
          <CardHeader className="py-8">
            <CardTitle className="text-3xl text-center">Dissolved Oxygen & Respiration</CardTitle>
            <CardDescription className="text-center text-lg">The hidden crisis beneath the surface</CardDescription>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <div className="prose prose-sm max-w-none text-muted-foreground">
              <p>
                Dissolved oxygen (DO) is a <strong>conservative property</strong> in the open ocean but becomes <strong>non-conservative</strong> in eutrophic estuaries like the Charles River. Here's why:
              </p>
              <ul>
                <li><strong>Photosynthesis vs. Respiration:</strong> During the day, algae produce O₂ through photosynthesis. At night, they consume O₂ through respiration—along with bacteria decomposing organic matter.</li>
                <li><strong>Temperature Dependency:</strong> Warm water (common in summer) holds less dissolved oxygen than cold water, compounding the problem.</li>
                <li><strong>Biochemical Oxygen Demand (BOD):</strong> The amount of oxygen required to break down organic material. High BOD = rapid oxygen depletion.</li>
                <li><strong>Hypoxic Zones:</strong> When DO drops below 2-3 mg/L, fish and invertebrates suffocate. This is a direct consequence of unchecked eutrophication.</li>
              </ul>
            </div>

            {/* Photo Placeholder 4: Water's Edge */}
            <div className="grid lg:grid-cols-[1.3fr,1fr] gap-8 mt-8">
              <div className="space-y-3">
                <div className="bg-muted rounded-lg aspect-video flex items-center justify-center border-2 border-dashed border-muted-foreground/25">
                  <p className="text-muted-foreground text-center px-4">
                    📸 INSERT PHOTO: Water's Edge with Leaves/Trash
                    <br />
                    <span className="text-sm">(Accumulated organic debris)</span>
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  This debris is a ticking time bomb for dissolved oxygen. As it decomposes, bacteria will consume O₂ faster than it can be replenished by diffusion or photosynthesis.
                </p>
              </div>

              <div className="flex items-center">
                <div className="space-y-3">
                  <h3 className="font-semibold text-primary">Why Volunteer Cleanups Matter</h3>
                  <p className="text-sm text-muted-foreground">
                    By removing organic debris <em>before</em> it enters the water, volunteers directly prevent oxygen depletion events. This is anthropogenic intervention with a <strong>positive</strong> impact on the chemical budget.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* pH and Ocean Acidification Analog - Full Width */}
        <Card className="border-primary/20 shadow-lg">
          <CardHeader className="bg-gradient-coral/10 py-8">
            <CardTitle className="text-3xl text-center">pH Fluctuations & Acidification</CardTitle>
            <CardDescription className="text-center text-lg">Urban rivers as microcosms of global ocean chemistry</CardDescription>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <div className="prose prose-sm max-w-none text-muted-foreground">
              <p>
                While the Charles River is not acidifying like the global ocean, it experiences <strong>dramatic pH swings</strong> due to biological activity:
              </p>
              <ul>
                <li><strong>Daytime:</strong> Algae consume CO₂ during photosynthesis, raising pH (more basic)</li>
                <li><strong>Nighttime:</strong> Respiration releases CO₂, lowering pH (more acidic)</li>
                <li><strong>Runoff Impact:</strong> Acid rain and pollutants can further depress pH</li>
                <li><strong>Carbonate Chemistry:</strong> While seawater buffers pH well, freshwater systems like rivers are more vulnerable to pH changes</li>
              </ul>
              <p className="mt-4">
                This serves as a powerful analogy for <strong>ocean acidification</strong>, where rising atmospheric CO₂ dissolves in seawater, forming carbonic acid and lowering pH. In both cases, the chemistry is driven by CO₂—either from respiration/decomposition (river) or fossil fuels (ocean).
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ChemicalOcean;
