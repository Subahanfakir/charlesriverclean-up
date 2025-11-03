import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Camera, Heart } from "lucide-react";

const Future = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="bg-primary/5 rounded-2xl p-8 backdrop-blur-sm border border-primary/10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
              Pollution & Conservation
            </h1>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed">
              Anthropogenic Impacts and Solutions for Urban Estuaries
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl space-y-16">
          
          {/* Photo 7: Bag of Trash (Close-up) */}
          <Card className="border-primary/20 shadow-lg">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-[1.3fr,1fr] gap-8">
                <div className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
                    <div className="text-center p-4">
                      <Camera className="h-12 w-12 mx-auto mb-2 text-muted-foreground/50" />
                      <p className="text-sm text-muted-foreground font-mono">
                        {"INSERT PHOTO: Close-up inside white bag showing plastic/cups/trash"}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Non-Conservative Pollutants</h3>
                    <p className="text-muted-foreground mb-3">
                      Collected waste reveals the scope of anthropogenic pollution
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Microplastics</Badge>
                      <Badge variant="secondary">Chemical Pollutants</Badge>
                    </div>
                  </div>
                </div>
                <div className="bg-muted p-6 rounded-lg space-y-3">
                  <h4 className="font-semibold text-primary mb-3">🌊 Non-Conservative Ions</h4>
                  <p className="text-sm mb-3">
                    These plastic, glass, and paper products represent a direct source of <strong>long-term 
                    pollutants</strong> and <strong>microplastics</strong>. Unlike conservative ions (which 
                    maintain constant proportions), these pollutants are non-conservative—they vary widely and 
                    interfere with the natural chemical budget.
                  </p>
                  <div className="bg-background p-3 rounded">
                    <p className="text-xs font-semibold mb-1">Key Impacts:</p>
                    <ul className="text-xs space-y-1 list-disc list-inside">
                      <li>Plastics break down into microplastics</li>
                      <li>Chemical leaching alters water chemistry</li>
                      <li>Toxins accumulate in food web</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Volunteer Impact Section - Full Width */}
          <Card className="bg-gradient-ocean/10 border-primary/20 shadow-lg">
            <CardHeader className="py-8">
              <CardTitle className="flex items-center justify-center gap-3 text-3xl">
                <Heart className="h-8 w-8 text-primary" />
                The Power of Volunteer Conservation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 p-8">
              <p className="text-muted-foreground text-center max-w-4xl mx-auto text-lg">
                The Charles River Conservancy's volunteer program demonstrates that <strong>positive anthropogenic 
                intervention</strong> can counteract negative human impacts. By removing pollutants before they 
                enter the ecosystem, volunteers prevent cascading effects throughout the estuarine environment.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-primary mb-3 text-lg">Chemical Protection</h4>
                  <p className="text-sm text-muted-foreground">
                    Preventing excess nutrients and pollutants from altering the river's dissolved oxygen and pH balance.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-primary mb-3 text-lg">Physical Maintenance</h4>
                  <p className="text-sm text-muted-foreground">
                    Reducing terrigenous sediment load and maintaining healthy water clarity and flow patterns.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-primary mb-3 text-lg">Ecosystem Health</h4>
                  <p className="text-sm text-muted-foreground">
                    Supporting biological productivity by maintaining balanced nutrient levels and habitat quality.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Oceanography Concepts Applied - Enhanced Layout */}
          <Card className="border-primary/20 shadow-lg">
            <CardHeader className="bg-primary/5 py-8">
              <CardTitle className="text-3xl text-center">Oceanography Concepts Applied</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-8">
                <div>
                  <h4 className="font-semibold text-2xl mb-4 text-primary text-center">Physical Oceanography</h4>
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div className="bg-muted p-4 rounded-lg shadow-sm">
                      <p className="font-semibold mb-2 text-base">Sediment Transport</p>
                      <p className="text-muted-foreground">
                        Understanding how tides and currents move terrigenous material through the estuary.
                      </p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg shadow-sm">
                      <p className="font-semibold mb-2 text-base">Estuarine Circulation</p>
                      <p className="text-muted-foreground">
                        Recognizing the mixing zone where freshwater meets tidal saltwater influence.
                      </p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg shadow-sm">
                      <p className="font-semibold mb-2 text-base">Wave Energy</p>
                      <p className="text-muted-foreground">
                        Observing how shallow water waves impact erosion and sediment deposition.
                      </p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg shadow-sm">
                      <p className="font-semibold mb-2 text-base">Tidal Dynamics</p>
                      <p className="text-muted-foreground">
                        Understanding flood and ebb currents that drive water movement and mixing.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-2xl mb-4 text-primary text-center">Chemical Oceanography</h4>
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div className="bg-muted p-4 rounded-lg shadow-sm">
                      <p className="font-semibold mb-2 text-base">Dissolved Oxygen</p>
                      <p className="text-muted-foreground">
                        Preventing hypoxia by removing organic matter that consumes O₂ during decomposition.
                      </p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg shadow-sm">
                      <p className="font-semibold mb-2 text-base">Nutrient Budget</p>
                      <p className="text-muted-foreground">
                        Managing non-conservative nutrients (N, P) to prevent eutrophication and algal blooms.
                      </p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg shadow-sm">
                      <p className="font-semibold mb-2 text-base">pH Balance</p>
                      <p className="text-muted-foreground">
                        Maintaining healthy pH by preventing excess carbonic acid from organic decomposition.
                      </p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg shadow-sm">
                      <p className="font-semibold mb-2 text-base">Chemical Pollutants</p>
                      <p className="text-muted-foreground">
                        Removing non-conservative pollutants that interfere with natural chemical processes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Reflection - Full Width Enhanced */}
          <Card className="bg-gradient-wave text-white border-0 shadow-xl">
            <CardContent className="p-12">
              <h3 className="text-4xl font-bold mb-8 text-center">Reflection: Science in Action</h3>
              <div className="max-w-5xl mx-auto space-y-6">
                <p className="text-white/90 text-lg leading-relaxed">
                  This volunteer experience brought oceanography textbook concepts to life. Every bag of leaves 
                  prevented excess terrigenous sediment. Every piece of trash removed was one less source of 
                  microplastic pollution. Every hour spent raking was a direct intervention in the river's 
                  nutrient budget.
                </p>
                <p className="text-white/90 text-lg leading-relaxed">
                  Seeing the bright green algal bloom was a stark reminder of eutrophication's visual impact. 
                  Understanding the estuary's tidal dynamics made me appreciate how connected the entire system 
                  is—from upstream runoff to downstream mixing with ocean waters.
                </p>
                <p className="text-white/90 text-lg leading-relaxed">
                  Most importantly, this project showed me that <strong>positive anthropogenic intervention is 
                  possible</strong>. While humans have damaged coastal ecosystems, we also have the power to 
                  restore them through informed, science-based conservation efforts.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CRC Impact Stats - Enhanced */}
          <Card className="border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-ocean/10 py-8">
              <CardTitle className="text-3xl text-center">Charles River Conservancy Impact</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-3">
                  <p className="text-5xl font-bold text-primary">37,000+</p>
                  <p className="text-base text-muted-foreground">Volunteers since 2002</p>
                </div>
                <div className="space-y-3">
                  <p className="text-5xl font-bold text-primary">$2.4M+</p>
                  <p className="text-base text-muted-foreground">Donated labor value</p>
                </div>
                <div className="space-y-3">
                  <p className="text-5xl font-bold text-primary">2,000</p>
                  <p className="text-base text-muted-foreground">Annual volunteers</p>
                </div>
              </div>
              <div className="mt-8 p-6 bg-muted rounded-lg shadow-sm">
                <p className="text-sm text-center text-muted-foreground">
                  Learn more at <a href="https://thecharles.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">thecharles.org</a>
                </p>
              </div>
            </CardContent>
          </Card>

        </div>
      </section>
    </div>
  );
};

export default Future;
