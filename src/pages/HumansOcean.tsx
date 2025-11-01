import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Waves, Camera } from "lucide-react";

const HumansOcean = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-coral text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Waves className="h-16 w-16 mx-auto mb-6 animate-wave" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Physical & Geological Processes
          </h1>
          <p className="text-xl text-white/90">
            Sediment Transport, Tidal Currents, and Estuarine Dynamics
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl space-y-16">
          
          {/* Introduction - Full Width */}
          <Card className="bg-gradient-coral/10 border-primary/20 shadow-lg">
            <CardHeader className="py-8">
              <CardTitle className="text-3xl text-center">Understanding Physical Oceanography in an Urban Estuary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <p>
                The Charles River demonstrates fundamental <strong>physical and geological oceanography principles</strong> 
                despite being an urban waterway. Through direct observation during the volunteer cleanup, I identified 
                several key processes that shape estuarine environments worldwide.
              </p>
              <div className="grid md:grid-cols-3 gap-4 pt-4">
                <div className="bg-background p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary mb-1">Tidal</div>
                  <div className="text-sm">Flood & Ebb Currents</div>
                </div>
                <div className="bg-background p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary mb-1">Sediment</div>
                  <div className="text-sm">Transport & Deposition</div>
                </div>
                <div className="bg-background p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary mb-1">Wave</div>
                  <div className="text-sm">Energy & Erosion</div>
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
                    <h3 className="font-semibold text-xl mb-2 text-primary">Sediment Transport & Erosion</h3>
                    <p className="text-muted-foreground mb-3">
                      Accumulated debris at the water's edge reveals active sediment transport and deposition patterns
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Sediment Transport</Badge>
                      <Badge variant="secondary">Erosion</Badge>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-coral/10 p-6 rounded-lg space-y-3 border border-primary/20">
                  <h4 className="font-semibold text-primary text-lg mb-3">🌊 Oceanography Connection</h4>
                  <p className="text-sm mb-3">
                    This accumulation shows <strong>poorly sorted sediment</strong>—a mixture of leaves, sticks, dirt, 
                    and anthropogenic trash deposited by water currents. The variety of particle sizes indicates that 
                    the current velocity fluctuates, carrying larger materials during high flow and depositing them 
                    when velocity decreases.
                  </p>
                  <div className="bg-background p-3 rounded">
                    <p className="text-xs font-semibold mb-2">Key Physical Processes:</p>
                    <ul className="text-xs space-y-1 list-disc list-inside">
                      <li><strong>Tidal forcing:</strong> Ebb and flow cycles transport material</li>
                      <li><strong>Velocity sorting:</strong> Larger particles settle first</li>
                      <li><strong>Bank erosion:</strong> Water movement removes shoreline material</li>
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
                  <p className="text-sm mb-3">
                    The Charles River is a classic <strong>partially mixed estuary</strong>—a semi-enclosed coastal 
                    body where freshwater from upstream mixes with saltwater from Boston Harbor. The Charles River Dam 
                    creates a controlled system, but tidal influence still affects water levels and salinity downstream.
                  </p>
                  <div className="bg-background p-3 rounded">
                    <p className="text-xs font-semibold mb-2">Estuarine Characteristics:</p>
                    <ul className="text-xs space-y-1 list-disc list-inside">
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
                    <h3 className="font-semibold text-xl mb-2 text-primary">Tidal Currents & Wave Behavior</h3>
                    <p className="text-muted-foreground mb-3">
                      Shallow water revealing tidal influence and wave-driven sediment redistribution
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Tidal Currents</Badge>
                      <Badge variant="secondary">Shallow Water Waves</Badge>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-coral/10 p-6 rounded-lg space-y-3 border border-primary/20">
                  <h4 className="font-semibold text-primary text-lg mb-3">🌊 Tidal Dynamics</h4>
                  <p className="text-sm mb-3">
                    This area experiences <strong>flood currents</strong> (incoming tide) and <strong>ebb currents</strong> 
                    (outgoing tide) that transport sediment in opposite directions. The shallow depth means boat wakes 
                    behave as <strong>shallow water waves</strong> (wavelength {'>'} 20× depth), where wave energy 
                    reaches the bottom and causes sediment suspension.
                  </p>
                  <div className="bg-background p-3 rounded">
                    <p className="text-xs font-semibold mb-2">Wave & Current Interactions:</p>
                    <ul className="text-xs space-y-1 list-disc list-inside">
                      <li><strong>Flood tide:</strong> Water moves upstream/inland</li>
                      <li><strong>Ebb tide:</strong> Water moves downstream/seaward</li>
                      <li><strong>Wave orbital motion:</strong> Affects bottom sediment</li>
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
                    <h3 className="font-semibold text-xl mb-2 text-primary">Natural Bank Stabilization</h3>
                    <p className="text-muted-foreground mb-3">
                      Dense riparian vegetation providing natural erosion control through root systems
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Root Stabilization</Badge>
                      <Badge variant="secondary">Erosion Prevention</Badge>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-coral/10 p-6 rounded-lg space-y-3 border border-primary/20 order-first lg:order-last">
                  <h4 className="font-semibold text-primary text-lg mb-3">🌊 Soft vs. Hard Stabilization</h4>
                  <p className="text-sm mb-3">
                    The dense vegetation represents <strong>soft stabilization</strong>—plant roots bind terrigenous 
                    sediment particles together, creating a cohesive mass that resists erosion. This is far more 
                    sustainable than <strong>hard stabilization</strong> (concrete seawalls, riprap) which can redirect 
                    wave energy and cause erosion elsewhere.
                  </p>
                  <div className="bg-background p-3 rounded">
                    <p className="text-xs font-semibold mb-2">Vegetation Benefits:</p>
                    <ul className="text-xs space-y-1 list-disc list-inside">
                      <li><strong>Root networks:</strong> Bind soil particles together</li>
                      <li><strong>Wave dampening:</strong> Vegetation absorbs energy</li>
                      <li><strong>Sediment trapping:</strong> Slows runoff, captures particles</li>
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
                        {"INSERT PHOTO: River surface showing flow patterns or ripples"}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-primary">Surface Flow & Mixing</h3>
                    <p className="text-muted-foreground mb-3">
                      Visible current patterns revealing water movement and turbulent mixing
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Laminar vs Turbulent</Badge>
                      <Badge variant="secondary">Current Velocity</Badge>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-coral/10 p-6 rounded-lg space-y-3 border border-primary/20">
                  <h4 className="font-semibold text-primary text-lg mb-3">🌊 Flow Dynamics</h4>
                  <p className="text-sm mb-3">
                    Surface ripples indicate <strong>turbulent flow</strong> rather than smooth laminar flow. Turbulence 
                    is crucial for <strong>vertical mixing</strong>—it brings oxygen from the surface down to deeper 
                    layers and helps distribute nutrients throughout the water column. The Reynolds number (Re = velocity × 
                    depth / viscosity) for rivers is typically {'>'} 2000, confirming turbulent conditions.
                  </p>
                  <div className="bg-background p-3 rounded">
                    <p className="text-xs font-semibold mb-2">Why Turbulence Matters:</p>
                    <ul className="text-xs space-y-1 list-disc list-inside">
                      <li><strong>Oxygen distribution:</strong> Prevents anoxic zones</li>
                      <li><strong>Sediment suspension:</strong> Keeps particles moving</li>
                      <li><strong>Nutrient cycling:</strong> Mixes dissolved compounds</li>
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
                        {"INSERT PHOTO: Shoreline showing bank slope or erosion features"}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-primary">Bank Morphology & Geology</h3>
                    <p className="text-muted-foreground mb-3">
                      Shoreline structure revealing geological composition and erosion history
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Geological Strata</Badge>
                      <Badge variant="secondary">Bank Angle</Badge>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-coral/10 p-6 rounded-lg space-y-3 border border-primary/20 order-first lg:order-last">
                  <h4 className="font-semibold text-primary text-lg mb-3">🌊 Geological Structure</h4>
                  <p className="text-sm mb-3">
                    The bank slope and composition reveal the balance between <strong>erosive forces</strong> (waves, 
                    currents) and <strong>resistance factors</strong> (soil cohesion, vegetation). Steeper banks indicate 
                    more resistant material or recent erosion. The <strong>angle of repose</strong> (maximum stable slope) 
                    depends on particle size and water content—sandy soils typically rest at 30-35°.
                  </p>
                  <div className="bg-background p-3 rounded">
                    <p className="text-xs font-semibold mb-2">Erosion Factors:</p>
                    <ul className="text-xs space-y-1 list-disc list-inside">
                      <li><strong>Soil type:</strong> Clay resists erosion better than sand</li>
                      <li><strong>Wave impact:</strong> Energy dissipated at shoreline</li>
                      <li><strong>Freeze-thaw:</strong> Seasonal weathering weakens banks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Summary Card - Full Width */}
          <Card className="bg-gradient-ocean text-white border-0 shadow-xl">
            <CardHeader className="py-8">
              <CardTitle className="text-3xl text-center">Physical & Geological Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 p-8">
              <p className="text-white/90 text-center max-w-4xl mx-auto text-lg">
                The Charles River estuary is a living laboratory for physical oceanography. Despite urban development, 
                it demonstrates fundamental processes that govern all estuarine and coastal systems worldwide. Understanding 
                these physical mechanisms is essential for effective river management and conservation planning.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <h4 className="font-semibold mb-3 text-white text-lg">Physical Processes</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-white/80">
                    <li>Tidal flood and ebb currents</li>
                    <li>Turbulent flow and mixing</li>
                    <li>Shallow water wave dynamics</li>
                    <li>Sediment transport mechanisms</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <h4 className="font-semibold mb-3 text-white text-lg">Geological Features</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-white/80">
                    <li>Terrigenous sediment inputs</li>
                    <li>Bank erosion patterns</li>
                    <li>Poorly sorted deposits</li>
                    <li>Angle of repose stability</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <h4 className="font-semibold mb-3 text-white text-lg">Human Impacts</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-white/80">
                    <li>Hard stabilization structures</li>
                    <li>Flow pattern modifications</li>
                    <li>Soft stabilization benefits</li>
                    <li>Conservation interventions</li>
                  </ul>
                </div>
              </div>

              <div className="bg-background p-5 rounded-lg border-l-4 border-primary">
                <p className="text-sm italic text-muted-foreground">
                  "The same physical principles that govern ocean currents, coastal erosion, and sediment transport 
                  in the world's great ocean basins also operate in urban estuaries like the Charles River. By observing 
                  these processes firsthand during volunteer work, we gain deeper appreciation for the interconnectedness 
                  of Earth's water systems."
                </p>
              </div>
            </CardContent>
          </Card>

        </div>
      </section>
    </div>
  );
};

export default HumansOcean;
