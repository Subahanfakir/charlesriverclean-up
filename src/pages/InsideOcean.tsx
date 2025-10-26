import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera } from "lucide-react";

const InsideOcean = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-ocean text-white">
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
        <div className="container mx-auto max-w-4xl">
          <Card className="mb-12 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">The Charles River Conservancy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Each year, the CRC works with approximately 2,000 volunteers to perform vital park 
                maintenance work and ensure permanent improvements in the parks. Since 2002, more than 
                37,000 CRC volunteers have contributed over $2.4 million of donated labor to improve 
                the health, safety, and beauty of the Charles River parks.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold text-foreground mb-2">My Volunteer Day:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Date: Saturday, October 25, 2025</li>
                  <li>Time: 10 a.m. – 12 p.m.</li>
                  <li>Location: Herter Park, Allston/Brighton</li>
                  <li>Projects: Litter cleanup, raking leaves</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Photo Gallery - INSERT YOUR PHOTOS HERE */}
          <div className="space-y-12">
            
            {/* Photo 1: Group Instructions */}
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
                      <div className="text-center p-4">
                        <Camera className="h-12 w-12 mx-auto mb-2 text-muted-foreground/50" />
                        <p className="text-sm text-muted-foreground font-mono">
                          {"<img src=\"YOUR_IMAGE_URL\" alt=\"Volunteers receiving instructions\" />"}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Volunteer Orientation</h3>
                      <p className="text-muted-foreground mb-3">
                        Group receiving instructions near the Charles River Conservancy truck
                      </p>
                      <Badge variant="secondary">Anthropogenic Intervention</Badge>
                    </div>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="font-semibold text-primary mb-3">🌊 Oceanography Connection</h4>
                    <p className="text-sm">
                      This shows <strong>positive anthropogenic intervention</strong>—humans actively improving 
                      the estuarine ecosystem by removing pollutants before they alter chemical/physical properties.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Photo 2: Raking Leaves */}
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
                      <div className="text-center p-4">
                        <Camera className="h-12 w-12 mx-auto mb-2 text-muted-foreground/50" />
                        <p className="text-sm text-muted-foreground font-mono">
                          {"<img src=\"YOUR_IMAGE_URL\" alt=\"Raking leaves\" />"}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Sediment Management</h3>
                      <Badge variant="secondary">Terrigenous Material</Badge>
                    </div>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="font-semibold text-primary mb-3">🌊 Sediment Load Management</h4>
                    <p className="text-sm">
                      Prevents <strong>terrigenous sediment</strong> (leaves, soil) from entering the river, 
                      which would increase turbidity, add excess nutrients, and fuel eutrophication.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Add more photo cards following the same pattern */}
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsideOcean;
