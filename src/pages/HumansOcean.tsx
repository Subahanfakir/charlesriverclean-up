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
        <div className="container mx-auto max-w-4xl space-y-12">
          
          {/* Photo 8: Water's Edge with Leaves and Trash */}
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
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
                    <h3 className="font-semibold text-lg mb-2">Sediment Transport & Erosion</h3>
                    <p className="text-muted-foreground mb-3">
                      Accumulated debris at the water's edge shows active sediment transport
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Sediment Transport</Badge>
                      <Badge variant="secondary">Erosion</Badge>
                    </div>
                  </div>
                </div>
                <div className="bg-muted p-6 rounded-lg space-y-3">
                  <h4 className="font-semibold text-primary mb-3">🌊 Oceanography Connection</h4>
                  <p className="text-sm mb-3">
                    This accumulation shows <strong>poorly sorted sediment</strong> (leaves, sticks, dirt, trash) 
                    deposited by the current. The mixture of materials reveals active transport processes.
                  </p>
                  <div className="bg-background p-3 rounded">
                    <p className="text-xs font-semibold mb-1">Key Concepts:</p>
                    <ul className="text-xs space-y-1 list-disc list-inside">
                      <li>Fluctuating tides drive erosion</li>
                      <li>Shallow water waves affect deposition</li>
                      <li>Common site for sediment accumulation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Photo 9: Wide Shot of River */}
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
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
                    <h3 className="font-semibold text-lg mb-2">Estuarine Environment</h3>
                    <p className="text-muted-foreground mb-3">
                      The Charles River estuary with urban development and hard stabilization
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Estuary</Badge>
                      <Badge variant="secondary">Hard Stabilization</Badge>
                    </div>
                  </div>
                </div>
                <div className="bg-muted p-6 rounded-lg space-y-3">
                  <h4 className="font-semibold text-primary mb-3">🌊 Estuarine Dynamics</h4>
                  <p className="text-sm mb-3">
                    This view confirms the Charles River as an <strong>estuary</strong>—a semi-enclosed coastal 
                    body where freshwater mixes with seawater. The docks and pilings are <strong>hard stabilization 
                    structures</strong> that affect local currents and erosion patterns.
                  </p>
                  <div className="bg-background p-3 rounded">
                    <p className="text-xs font-semibold mb-1">Key Concepts:</p>
                    <ul className="text-xs space-y-1 list-disc list-inside">
                      <li>Freshwater-saltwater mixing zone</li>
                      <li>Tidal influence on water level</li>
                      <li>Human structures alter flow patterns</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Photo 10: Submerged Dock Area */}
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
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
                    <h3 className="font-semibold text-lg mb-2">Tidal Currents & Wave Behavior</h3>
                    <p className="text-muted-foreground mb-3">
                      Shallow water reveals tidal influence and wave-driven sediment movement
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Tidal Currents</Badge>
                      <Badge variant="secondary">Shallow Water Waves</Badge>
                    </div>
                  </div>
                </div>
                <div className="bg-muted p-6 rounded-lg space-y-3">
                  <h4 className="font-semibold text-primary mb-3">🌊 Tidal & Wave Dynamics</h4>
                  <p className="text-sm mb-3">
                    This sheltered area is subject to <strong>flood and ebb currents</strong> driven by the tide. 
                    The shallow depth means any boat wakes behave as <strong>shallow water waves</strong> 
                    (wavelength {'>'} 20× water depth), impacting the surrounding banks.
                  </p>
                  <div className="bg-background p-3 rounded">
                    <p className="text-xs font-semibold mb-1">Key Concepts:</p>
                    <ul className="text-xs space-y-1 list-disc list-inside">
                      <li>Flood tide: incoming water</li>
                      <li>Ebb tide: outgoing water</li>
                      <li>Wave energy affects bank erosion</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Photo 11: Vegetated Bank */}
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
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
                    <h3 className="font-semibold text-lg mb-2">Ecosystem Health & Bank Stabilization</h3>
                    <p className="text-muted-foreground mb-3">
                      Dense vegetation provides natural erosion control through root systems
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Root Stabilization</Badge>
                      <Badge variant="secondary">Erosion Prevention</Badge>
                    </div>
                  </div>
                </div>
                <div className="bg-muted p-6 rounded-lg space-y-3">
                  <h4 className="font-semibold text-primary mb-3">🌊 Natural vs. Hard Stabilization</h4>
                  <p className="text-sm mb-3">
                    The dense vegetation on the bank is a form of <strong>soft stabilization</strong>. Root 
                    systems anchor the terrigenous sediment and prevent rapid erosion from water movement. 
                    This is far more sustainable than hard stabilization (concrete walls, pilings).
                  </p>
                  <div className="bg-background p-3 rounded">
                    <p className="text-xs font-semibold mb-1">Key Concepts:</p>
                    <ul className="text-xs space-y-1 list-disc list-inside">
                      <li>Roots bind soil particles together</li>
                      <li>Vegetation absorbs wave energy</li>
                      <li>Prevents sediment runoff into river</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Summary Card */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>Physical & Geological Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                The Charles River estuary demonstrates classic physical oceanography principles: tidal currents 
                drive sediment transport, wave action causes erosion, and both natural and human-made structures 
                influence water flow patterns. Understanding these processes is crucial for effective river 
                management and conservation.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-background p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Physical Processes:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Tidal flood and ebb currents</li>
                    <li>Shallow water wave behavior</li>
                    <li>Sediment transport and deposition</li>
                  </ul>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Geological Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Terrigenous sediment inputs</li>
                    <li>Bank erosion and stabilization</li>
                    <li>Hard vs. soft stabilization methods</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </section>
    </div>
  );
};

export default HumansOcean;
