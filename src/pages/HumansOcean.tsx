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
                During our Charles River cleanup, I saw how water constantly moves, carries things, and shapes the shoreline. 
                These same forces work along every river, bay, and ocean coast. Understanding them helps us see why trash 
                ends up in certain spots and how nature protects itself from erosion.
              </p>
              <div className="grid md:grid-cols-3 gap-4 pt-4">
                <div className="bg-background p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary mb-1">Tides</div>
                  <div className="text-sm">Water moves up & down twice daily</div>
                </div>
                <div className="bg-background p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary mb-1">Currents</div>
                  <div className="text-sm">Water carries and sorts debris</div>
                </div>
                <div className="bg-background p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary mb-1">Plants</div>
                  <div className="text-sm">Roots hold the shore in place</div>
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
                  <h4 className="font-semibold text-primary text-lg mb-3">🌊 How Moving Water Sorts Trash & Debris</h4>
                  <p className="text-base mb-3 leading-relaxed">
                    Think of the river like a conveyor belt that suddenly stops. When water flows, it carries leaves, 
                    sticks, and trash along with it. But when the current slows down—like when the tide stops rising—the 
                    water drops its load. Heavy things (like waterlogged wood) sink first. Lighter things (like plastic 
                    bottles and dry leaves) keep drifting until the water is completely still.
                  </p>
                  <div className="bg-background p-3 rounded">
                    <p className="text-sm font-semibold mb-2">Why Debris Piles Up Here:</p>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Tides move water up and down the river twice every day</li>
                      <li>When current slows, heavy items drop first, light items last</li>
                      <li>Calm spots near shores become natural "trash traps"</li>
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
                  <h4 className="font-semibold text-primary text-lg mb-3">🌊 Where River Meets Ocean</h4>
                  <p className="text-base mb-3 leading-relaxed">
                    The Charles River is what scientists call an <strong>estuary</strong>—a place where river water 
                    mixes with ocean water. Fresh water flows down from upstream while salty water pushes in from 
                    Boston Harbor. The Charles River Dam controls this mixing, but you can still see the tide pushing 
                    water levels up and down twice a day. The docks and walls built along the shore change how water flows.
                  </p>
                  <div className="bg-background p-3 rounded">
                    <p className="text-sm font-semibold mb-2">What Makes This an Estuary:</p>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Fresh river water mixes with salty harbor water</li>
                      <li>Ocean tides push water upstream, then pull it back</li>
                      <li>Human structures like docks affect how water moves</li>
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
                  <h4 className="font-semibold text-primary text-lg mb-3">🌊 How Tides Work</h4>
                  <p className="text-base mb-3 leading-relaxed">
                    Even with the dam upstream, you can see tides affecting the Charles River. Twice a day, the water 
                    level rises (called "flood tide") as ocean water pushes in, then falls (called "ebb tide") as it 
                    flows back out. In this shallow area, when boats pass by, their waves stir up the leaves sitting 
                    on the bottom. The clear water means there's not much pollution or dirt floating around.
                  </p>
                  <div className="bg-background p-3 rounded">
                    <p className="text-sm font-semibold mb-2">What You Can See:</p>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Clear water shows the river is relatively clean here</li>
                      <li>You can see the bottom because it's shallow near shore</li>
                      <li>Leaves settle when water stops moving between tides</li>
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
                  <h4 className="font-semibold text-primary text-lg mb-3">🌊 How Plants Protect the Shore</h4>
                  <p className="text-base mb-3 leading-relaxed">
                    These plants aren't just for looks—they're doing important work. Underground, their roots spread 
                    out like a giant web, grabbing onto soil particles and holding them in place. Without these plants, 
                    rain and waves would wash the soil right into the river. This natural protection works better than 
                    concrete walls because it also slows down runoff and filters out pollution before it reaches the water.
                  </p>
                  <div className="bg-background p-3 rounded">
                    <p className="text-sm font-semibold mb-2">Three Ways Plants Help:</p>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Roots grip soil underground like fingers holding sand</li>
                      <li>Stems and leaves slow down waves and reduce their power</li>
                      <li>Plants catch dirt and pollution before it washes into the river</li>
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
                  <h4 className="font-semibold text-primary text-lg mb-3">🌊 Smooth Water Flow</h4>
                  <p className="text-base mb-3 leading-relaxed">
                    The calm, smooth surface shows gentle water movement. Unlike a rushing mountain stream with white 
                    water and splashing, this part of the river flows peacefully in layers, almost like a slow-moving 
                    highway. The dam upstream and buildings around it protect the water from wind and fast currents. 
                    As the water moves, it carries oxygen from the surface and spreads nutrients around for plants and fish.
                  </p>
                  <div className="bg-background p-3 rounded">
                    <p className="text-sm font-semibold mb-2">Why the Water is So Calm:</p>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>The dam controls water flow and prevents rushing currents</li>
                      <li>Buildings and docks block wind from creating big waves</li>
                      <li>Oxygen from air mixes in mainly at the water's surface</li>
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
                  <h4 className="font-semibold text-primary text-lg mb-3">🌊 A Stable, Protected Shore</h4>
                  <p className="text-base mb-3 leading-relaxed">
                    Notice how the shore slopes gently into the water instead of dropping off like a cliff? That's a 
                    good sign—it means the soil isn't washing away quickly. Steep, crumbling banks show active erosion, 
                    but this gradual slope means the shoreline has been stable for a long time. The plants growing here 
                    help too, with their roots holding everything together. Plus, this section of river doesn't get big 
                    waves, so there's less force trying to tear the bank apart.
                  </p>
                  <div className="bg-background p-3 rounded">
                    <p className="text-sm font-semibold mb-2">Signs This Shore is Healthy:</p>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Gentle slope means very little soil is washing away</li>
                      <li>Plants grow well when the ground is stable</li>
                      <li>Protected location means smaller waves hit the shore</li>
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
                Even though this is a city river, the same forces that shape ocean coasts are at work here. 
                Understanding these natural processes helps us see why cleaning up matters:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-primary text-lg">How Water Moves</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Ocean tides push water upstream twice a day, then pull it back</li>
                    <li>Flowing water carries debris and drops heavy items first</li>
                    <li>Calm areas let particles settle on the bottom</li>
                    <li>Boat wakes stir up shallow water</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-primary text-lg">How the Shore Stays Healthy</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Gentle slopes mean the bank isn't eroding quickly</li>
                    <li>Plant roots grip soil like an underground net</li>
                    <li>Vegetation catches pollution before it washes in</li>
                    <li>Trash piles up where the current slows down</li>
                  </ul>
                </div>
              </div>
              <p className="pt-4 text-center italic text-lg">
                When we remove trash, we protect these natural processes and help keep the Charles River 
                healthy for everyone who depends on it.
              </p>
            </CardContent>
          </Card>

        </div>
      </section>
    </div>
  );
};

export default HumansOcean;
