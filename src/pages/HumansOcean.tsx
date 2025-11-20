import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Waves, Camera } from "lucide-react";

const HumansOcean = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-orange-950/30 dark:via-red-950/30 dark:to-pink-950/30 rounded-2xl p-8 backdrop-blur-sm border-2 border-orange-200/50 dark:border-orange-800/50 shadow-lg">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Physical & Geological Processes
            </h1>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed">
              How Water Moves, Shapes the Land, and Carries Materials
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl space-y-16">
          
          {/* Introduction - Full Width */}
          <Card className="bg-gradient-coral/10 border-primary/20 shadow-lg">
            <CardHeader className="py-8">
              <CardTitle className="text-3xl text-center">Seeing Oceanography in an Urban River</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <p>
                The Charles River shows how water moves, shapes the land, and interacts with everything around it. 
                During our cleanup day, I noticed several natural processes happening—the same ones you'd see along 
                any coastline or estuary. These aren't just abstract concepts from textbooks; they're real forces 
                actively shaping our local waterway.
              </p>
              <div className="grid md:grid-cols-3 gap-4 pt-4">
                <div className="bg-background p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary mb-1">Tides</div>
                  <div className="text-sm">Water Rising & Falling</div>
                </div>
                <div className="bg-background p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary mb-1">Currents</div>
                  <div className="text-sm">Moving & Sorting Materials</div>
                </div>
                <div className="bg-background p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary mb-1">Erosion</div>
                  <div className="text-sm">Water Shaping the Shore</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Photo 1: Water's Edge with Leaves and Trash */}
          <Card className="border-primary/20 shadow-lg">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-[1.2fr,1fr] gap-8">
                <div className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
                    <div className="text-center p-4">
                      <Camera className="h-12 w-12 mx-auto mb-2 text-muted-foreground/50" />
                      <p className="text-sm text-muted-foreground font-mono">
                        {"INSERT PHOTO: Water's edge with accumulated leaves and trash"}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-primary">Material Transport & Accumulation</h3>
                    <p className="text-muted-foreground mb-3">
                      Mixed debris at the waterline showing how currents move and deposit materials
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Current Transport</Badge>
                      <Badge variant="secondary">Deposition Zone</Badge>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-coral/10 p-6 rounded-lg space-y-3 border border-primary/20">
                  <h4 className="font-semibold text-primary text-lg mb-3">🌊 How Currents Sort Materials</h4>
                  <p className="text-base mb-3 leading-relaxed">
                    This pile contains everything from tiny leaves to large sticks and plastic trash—all mixed together. 
                    When river currents slow down, they drop whatever they're carrying. Heavier items settle first, 
                    while lighter materials keep floating until the water becomes completely still. This natural sorting 
                    process happens constantly as tides rise and fall.
                  </p>
                  <div className="bg-background p-3 rounded">
                    <p className="text-sm font-semibold mb-2">What's Happening Here:</p>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li><strong>Tidal cycles:</strong> Water rises and falls twice daily</li>
                      <li><strong>Natural sorting:</strong> Heavy items drop first, light items last</li>
                      <li><strong>Accumulation zones:</strong> Debris collects where current slows</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Photo 2: Wide Shot of River - Reverse */}
          <Card className="border-primary/20 shadow-lg">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-[1fr,1.2fr] gap-8">
                <div className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
                    <div className="text-center p-4">
                      <Camera className="h-12 w-12 mx-auto mb-2 text-muted-foreground/50" />
                      <p className="text-sm text-muted-foreground font-mono">
                        {"INSERT PHOTO: Wide shot of river, dock, and city background"}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-primary">Estuarine Environment</h3>
                    <p className="text-muted-foreground mb-3">
                      The Charles River estuary with urban infrastructure and engineered stabilization structures
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Estuary</Badge>
                      <Badge variant="secondary">Hard Stabilization</Badge>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-coral/10 p-6 rounded-lg space-y-3 border border-primary/20 order-first lg:order-last">
                  <h4 className="font-semibold text-primary text-lg mb-3">🌊 Estuarine Classification</h4>
                  <p className="text-base mb-3 leading-relaxed">
                    The Charles River is a classic <strong>partially mixed estuary</strong>—a semi-enclosed coastal 
                    body where freshwater from upstream mixes with saltwater from Boston Harbor. The Charles River Dam 
                    creates a controlled system, but tidal influence still affects water levels and salinity downstream.
                  </p>
                  <div className="bg-background p-3 rounded">
                    <p className="text-sm font-semibold mb-2">Estuarine Characteristics:</p>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li><strong>Salinity gradient:</strong> Fresh to brackish water mixing</li>
                      <li><strong>Tidal influence:</strong> Water level changes twice daily</li>
                      <li><strong>Engineered structures:</strong> Docks and pilings alter flow</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Photo 3: Submerged Dock Area */}
          <Card className="border-primary/20 shadow-lg">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-[1.2fr,1fr] gap-8">
                <div className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
                    <div className="text-center p-4">
                      <Camera className="h-12 w-12 mx-auto mb-2 text-muted-foreground/50" />
                      <p className="text-sm text-muted-foreground font-mono">
                        {"INSERT PHOTO: Submerged dock with clear water showing leaves on bottom"}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-primary">Tide Effects & Underwater Visibility</h3>
                    <p className="text-muted-foreground mb-3">
                      Clear shallow water showing tidal influence and debris that settled to the bottom
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Tidal Movement</Badge>
                      <Badge variant="secondary">Water Clarity</Badge>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-coral/10 p-6 rounded-lg space-y-3 border border-primary/20">
                  <h4 className="font-semibold text-primary text-lg mb-3">🌊 Tides in Action</h4>
                  <p className="text-base mb-3 leading-relaxed">
                    Even though the Charles River is controlled by a dam, you can still see tidal effects. The water 
                    level rises and falls twice a day, pushing water upstream during <strong>flood tide</strong> and 
                    pulling it back during <strong>ebb tide</strong>. In shallow areas like this, boat wakes create 
                    waves that reach all the way to the bottom, stirring up leaves and sediment.
                  </p>
                  <div className="bg-background p-3 rounded">
                    <p className="text-sm font-semibold mb-2">Observing Tidal Patterns:</p>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li><strong>Clear water:</strong> Shows low pollution and sediment</li>
                      <li><strong>Bottom visible:</strong> Shallow depth typical of nearshore zones</li>
                      <li><strong>Settled leaves:</strong> Deposited when water movement stopped</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Photo 4: Vegetated Bank - Reverse */}
          <Card className="border-primary/20 shadow-lg">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-[1fr,1.2fr] gap-8">
                <div className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
                    <div className="text-center p-4">
                      <Camera className="h-12 w-12 mx-auto mb-2 text-muted-foreground/50" />
                      <p className="text-sm text-muted-foreground font-mono">
                        {"INSERT PHOTO: Me collecting debris near vegetated bank"}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-primary">Plants Protecting the Shoreline</h3>
                    <p className="text-muted-foreground mb-3">
                      Thick vegetation along the bank helping prevent soil from washing away
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Root Systems</Badge>
                      <Badge variant="secondary">Natural Defense</Badge>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-coral/10 p-6 rounded-lg space-y-3 border border-primary/20 order-first lg:order-last">
                  <h4 className="font-semibold text-primary text-lg mb-3">🌊 Nature's Erosion Control</h4>
                  <p className="text-base mb-3 leading-relaxed">
                    All these plants growing along the water's edge aren't just decorative—they're actually holding 
                    the soil together. Their roots act like a natural net underground, preventing the bank from 
                    washing into the river. This is way better than building concrete walls, which just push the 
                    erosion problem somewhere else. Plus, the plants slow down runoff and filter out pollutants.
                  </p>
                  <div className="bg-background p-3 rounded">
                    <p className="text-sm font-semibold mb-2">How Plants Help:</p>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li><strong>Underground roots:</strong> Lock soil in place like a web</li>
                      <li><strong>Wave absorption:</strong> Plants slow down wave energy</li>
                      <li><strong>Pollution filter:</strong> Trap sediment before it reaches water</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Photo 5: River Current Patterns */}
          <Card className="border-primary/20 shadow-lg">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-[1.2fr,1fr] gap-8">
                <div className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
                    <div className="text-center p-4">
                      <Camera className="h-12 w-12 mx-auto mb-2 text-muted-foreground/50" />
                      <p className="text-sm text-muted-foreground font-mono">
                        {"INSERT PHOTO: River surface showing smooth flow patterns"}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-primary">Calm Water Movement</h3>
                    <p className="text-muted-foreground mb-3">
                      Smooth surface showing gentle water flow in the protected estuary
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Water Flow</Badge>
                      <Badge variant="secondary">Oxygen Transfer</Badge>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-coral/10 p-6 rounded-lg space-y-3 border border-primary/20">
                  <h4 className="font-semibold text-primary text-lg mb-3">🌊 Flow Patterns</h4>
                  <p className="text-base mb-3 leading-relaxed">
                    The relatively calm surface shows <strong>laminar flow</strong>—smooth, layered water movement 
                    without much disruption. In this protected section of the river, the gentle current moves 
                    steadily, carrying nutrients and dissolved oxygen throughout the water. This peaceful flow is 
                    typical of urban estuaries with controlled water levels.
                  </p>
                  <div className="bg-background p-3 rounded">
                    <p className="text-sm font-semibold mb-2">What This Tells Us:</p>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li><strong>Protected waters:</strong> Dams and structures calm the flow</li>
                      <li><strong>Stratification:</strong> Different water layers may not mix easily</li>
                      <li><strong>Oxygen exchange:</strong> Happens mainly at the surface</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Photo 6: Shoreline Morphology - Reverse */}
          <Card className="border-primary/20 shadow-lg">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-[1fr,1.2fr] gap-8">
                <div className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
                    <div className="text-center p-4">
                      <Camera className="h-12 w-12 mx-auto mb-2 text-muted-foreground/50" />
                      <p className="text-sm text-muted-foreground font-mono">
                        {"INSERT PHOTO: Shoreline showing gentle bank slope"}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-primary">Stable Shoreline Structure</h3>
                    <p className="text-muted-foreground mb-3">
                      Gently sloping banks showing natural stability and vegetation
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Stable Banks</Badge>
                      <Badge variant="secondary">Natural Protection</Badge>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-coral/10 p-6 rounded-lg space-y-3 border border-primary/20 order-first lg:order-last">
                  <h4 className="font-semibold text-primary text-lg mb-3">🌊 Bank Stability</h4>
                  <p className="text-base mb-3 leading-relaxed">
                    The <strong>gentle slope</strong> of this shoreline shows a stable, well-established bank. Unlike 
                    steeper eroding coastlines, this gradual transition from land to water indicates good soil stability 
                    and low erosion rates. The combination of compact soil and vegetation creates a naturally protected 
                    shoreline that resists wave action from boats and tides.
                  </p>
                  <div className="bg-background p-3 rounded">
                    <p className="text-sm font-semibold mb-2">Signs of Stability:</p>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li><strong>Gentle slope:</strong> Indicates minimal erosion over time</li>
                      <li><strong>Vegetation growth:</strong> Roots hold soil in place</li>
                      <li><strong>Low wave energy:</strong> Protected urban waterway</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Summary Card - Full Width */}
          <Card className="bg-gradient-ocean/10 border-primary/20 shadow-lg">
            <CardHeader className="py-8">
              <CardTitle className="text-3xl text-center">What We Learned</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground p-8">
              <p className="text-center text-lg">
                Even in this protected urban waterway, we saw real oceanography in action. The Charles River 
                shows how water, land, and human activity all interact:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-primary text-lg">Water Movement</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Tides push water up and down the river twice daily</li>
                    <li>Currents sort debris by size and weight</li>
                    <li>Calm sections allow particles to settle to the bottom</li>
                    <li>Boat wakes create waves in shallow areas</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-primary text-lg">Shoreline Features</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Gentle slopes show stable, protected banks</li>
                    <li>Plant roots hold soil in place naturally</li>
                    <li>Vegetation filters runoff before it reaches water</li>
                    <li>Accumulation zones reveal where currents slow down</li>
                  </ul>
                </div>
              </div>
              <p className="pt-4 text-center italic text-lg">
                Our cleanup work directly prevents pollution and sediment from disrupting these natural processes, 
                helping keep the Charles River healthy for people and wildlife.
              </p>
            </CardContent>
          </Card>

        </div>
      </section>
    </div>
  );
};

export default HumansOcean;
