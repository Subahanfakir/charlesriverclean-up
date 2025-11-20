import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera } from "lucide-react";
// Use runtime URL for photos placed in project root Photos/ folder

const InsideOcean = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-400 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Project Overview & Photos
          </h1>
          <p className="text-xl text-white/90 mb-4">
            Charles River Conservancy Volunteer Cleanup
          </p>
          <p className="text-lg text-white/80">
            Herter Park, Allston/Brighton — October 25, 2025
          </p>
        </div>
      </section>

      {/* Project Context */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          
          {/* Introduction Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">The Charles River Conservancy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  The Charles River Conservancy (CRC) is a nonprofit organization dedicated to protecting and 
                  enhancing the Charles River parks. Each year, approximately <strong>2,000 volunteers</strong> contribute 
                  to vital park maintenance and permanent improvements.
                </p>
                <p>
                  Since 2002, over <strong>37,000 CRC volunteers</strong> have contributed more than <strong>$2.4 million</strong> of 
                  donated labor to improve the health, safety, and beauty of the Charles River parks.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl">My Volunteer Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-2 text-sm">
                  <div><strong>Date:</strong> Saturday, October 25, 2025</div>
                  <div><strong>Time:</strong> 10:00 AM – 12:00 PM</div>
                  <div><strong>Location:</strong> Herter Park, Allston/Brighton</div>
                  <div><strong>Activities:</strong> Litter cleanup, leaf raking, shoreline restoration</div>
                  <div><strong>Team:</strong> 25+ volunteers</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* What We Did Section - Full Width */}
          <Card className="mb-12 bg-gradient-ocean/10 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">What We Accomplished</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                  <div className="text-4xl font-bold text-primary mb-2">12+</div>
                  <div className="text-sm text-muted-foreground">Bags of Litter Removed</div>
                </div>
                <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Pounds of Organic Material</div>
                </div>
                <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                  <div className="text-4xl font-bold text-primary mb-2">2</div>
                  <div className="text-sm text-muted-foreground">Hours of Active Work</div>
                </div>
              </div>
              <p className="text-muted-foreground text-center max-w-4xl mx-auto">
                Our team focused on preventing <strong>terrigenous sediment</strong> (leaves, soil) and 
                anthropogenic pollutants (plastic, trash) from entering the Charles River estuary. By removing 
                this material before it could decompose or fragment, we helped maintain water quality and 
                reduce nutrient loading that contributes to eutrophication.
              </p>
            </CardContent>
          </Card>

          {/* Photo Gallery Header */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-ocean bg-clip-text text-transparent">Photo Documentation</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each photo below shows a moment from the cleanup event and connects it to an oceanography 
              principle observed in the Charles River estuarine system.
            </p>
          </div>

          <div className="space-y-12">
            
            {/* Photo 1: Group Instructions - Wider Layout */}
            <Card className="border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-[1.2fr,1fr] gap-8">
                  <div className="space-y-4">
                    {/* Replace dotted placeholder with actual image */}
                    <img
                      src={new URL("../../Photos/IMG_9325.jpeg", import.meta.url).href}
                      alt="Volunteers receiving instructions"
                      className="aspect-video w-full rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-xl mb-2 text-primary">Volunteer Orientation</h3>
                      <p className="text-muted-foreground mb-3">
                        Team gathering near the Charles River Conservancy truck to receive instructions and 
                        collect supplies (rakes, gloves, trash bags).
                      </p>
                      <Badge variant="secondary">Anthropogenic Intervention</Badge>
                    </div>
                  </div>
                  <div className="py-10 px-6 rounded-lg border border-primary/20 order-first lg:order-last self-center">
                    <h4 className="font-semibold text-primary text-lg mb-3">🌊 Oceanography Connection</h4>
                    <p className="text-base leading-relaxed">
                      This scene represents <strong>positive anthropogenic intervention</strong>, humans actively 
                      working to reverse environmental damage. Unlike negative anthropogenic impacts (pollution, 
                      development), volunteer cleanups help restore estuarine ecosystems by removing pollutants 
                      before they alter chemical and physical water properties.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Photo 2: Raking Leaves - Reverse Layout */}
            <Card className="border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-[1fr,1.2fr] gap-8">
                  <div className="space-y-4">
                    <img
                      src={new URL("../../Photos/IMG_9342.jpeg", import.meta.url).href}
                      alt="Raking leaves near shoreline"
                      className="aspect-video w-full rounded-lg object-cover h-[360px] sm:h-[440px] lg:h-[560px]"
                    />
                    <div>
                      <h3 className="font-semibold text-xl mb-2 text-primary">Sediment Management</h3>
                      <p className="text-muted-foreground mb-3">
                        Removing accumulated leaves and organic debris from the park grounds before they enter the river.
                      </p>
                      <Badge variant="secondary">Terrigenous Material</Badge>
                    </div>
                  </div>
                  <div className="bg-gradient-ocean/10 py-10 px-6 rounded-lg border border-primary/20 order-first lg:order-last self-center">
                    <h4 className="font-semibold text-primary text-lg mb-3">🌊 Preventing Sediment Load</h4>
                    <p className="text-base leading-relaxed">
                      Leaves are <strong>terrigenous material</strong> (land-derived sediment). If they enter the 
                      river, they decompose, releasing nutrients (nitrogen, phosphorus) that fuel <strong>eutrophication</strong> 
                      and create algal blooms. They also increase <strong>turbidity</strong> (cloudiness) by adding 
                      suspended particles to the water column.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Photo 3: Litter Collection */}
            <Card className="border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-[1.2fr,1fr] gap-8">
                  <div className="space-y-4">
                    <img
                      src={new URL("../../Photos/IMG_9409.jpeg", import.meta.url).href}
                      alt="Collecting litter along riverbank"
                      className="aspect-video w-full rounded-lg object-cover h-[360px] sm:h-[440px] lg:h-[560px]"
                    />
                    <div>
                      <h3 className="font-semibold text-xl mb-2 text-primary">Anthropogenic Pollution Removal</h3>
                      <p className="text-muted-foreground mb-3">
                        Picking up plastic bottles, wrappers, and other human-made debris along the waterfront.
                      </p>
                      <Badge variant="secondary">Microplastics Prevention</Badge>
                    </div>
                  </div>
                  <div className="bg-gradient-ocean/10 py-14 px-6 rounded-lg border border-primary/20 order-first lg:order-last self-center">
                    <h4 className="font-semibold text-primary text-lg mb-3">🌊 Stopping Pollution at the Source</h4>
                    <p className="text-base leading-relaxed">
                      Removing litter before it breaks down into <strong>microplastics</strong> prevents long-term 
                      contamination. Plastics don't biodegrade, they photodegrade into smaller fragments that are 
                      ingested by aquatic organisms, disrupting the food web and introducing toxins into the ecosystem.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Photo 4: Team Work - Reverse */}
            <Card className="border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-[1fr,1.2fr] gap-8">
                  <div className="space-y-4">
                    <img
                      src={new URL("../../Photos/IMG_9347.jpeg", import.meta.url).href}
                      alt="Volunteers working together"
                      className="aspect-video w-full rounded-lg object-cover h-[360px] sm:h-[440px] lg:h-[560px]"
                    />
                    <div>
                      <h3 className="font-semibold text-xl mb-2 text-primary">Community Conservation Effort</h3>
                      <p className="text-muted-foreground mb-3">
                        Multiple volunteers coordinating to fill bags and transport debris to collection points.
                      </p>
                      <Badge variant="secondary">Ecosystem Restoration</Badge>
                    </div>
                  </div>
                  <div className="bg-gradient-ocean/10 py-14 px-6 rounded-lg border border-primary/20 order-first lg:order-last self-center">
                    <h4 className="font-semibold text-primary text-lg mb-3">🌊 Collective Impact on Ecosystem Health</h4>
                    <p className="text-base leading-relaxed">
                      Estuaries like the Charles River are <strong>highly productive ecosystems</strong> that support 
                      diverse marine and terrestrial life. By removing pollutants collectively, volunteers help maintain 
                      the <strong>dissolved oxygen</strong> levels, water clarity, and nutrient balance necessary for 
                      healthy aquatic populations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Photo 5: Close-up of Collected Debris */}
            <Card className="border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-[1.2fr,1fr] gap-8">
                  <div className="space-y-4">
                    <img
                      src={new URL("../../Photos/IMG_9425.jpeg", import.meta.url).href}
                      alt="Bags of collected trash and debris"
                      className="aspect-video w-full rounded-lg object-cover h-[360px] sm:h-[440px] lg:h-[560px]"
                    />
                    <div>
                      <h3 className="font-semibold text-xl mb-2 text-primary">Quantifying the Impact</h3>
                      <p className="text-muted-foreground mb-3">
                        Multiple bags filled with removed litter, and debris ready for proper disposal.
                      </p>
                      <Badge variant="secondary">Waste Management</Badge>
                    </div>
                  </div>
                  <div className="bg-gradient-ocean/10 py-14 px-6 rounded-lg border border-primary/20 order-first lg:order-last self-center">
                    <h4 className="font-semibold text-primary text-lg mb-3">🌊 Measuring Conservation Success</h4>
                    <p className="text-base leading-relaxed">
                      Each bag represents pollutants kept out of the estuarine system. This prevents <strong>non-conservative 
                      ion</strong> additions (metals, chemicals from trash), reduces <strong>biological oxygen demand (BOD) </strong> 
                      from decomposing organic matter, and maintains the river's capacity to support aerobic life.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Add more photo placeholders as needed */}
            
          </div>

          {/* Closing Summary - Full Width Enhanced */}
          <Card className="mt-16 bg-gradient-ocean text-white border-0 shadow-xl">
            <CardHeader className="py-8">
              <CardTitle className="text-4xl text-center">Why This Work Matters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-8">
              <p className="text-white/90 text-center text-lg max-w-4xl mx-auto leading-relaxed">
                The Charles River is an <strong>estuarine ecosystem</strong>, a transition zone where freshwater 
                meets saltwater. It's one of the most productive and sensitive aquatic environments on Earth. 
                Our volunteer work directly impacts water quality by:
              </p>
              <ul className="list-disc list-inside space-y-3 text-white/90 max-w-3xl mx-auto text-lg">
                <li>Reducing nutrient loading that causes harmful algal blooms</li>
                <li>Preventing microplastic contamination of the food web</li>
                <li>Maintaining dissolved oxygen levels for aquatic organisms</li>
                <li>Preserving the natural beauty and recreational value of the river</li>
              </ul>
              <p className="italic pt-4 text-white/90 text-center max-w-4xl mx-auto text-lg leading-relaxed">
                Every piece of litter removed, every leaf raked, contributes to the long-term health of this 
                vital urban waterway. This is conservation in action, oceanography principles applied to real-world 
                environmental stewardship.
              </p>
            </CardContent>
          </Card>

        </div>
      </section>
    </div>
  );
};

export default InsideOcean;
