import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mountain, Waves, Zap, Layers } from "lucide-react";

const GeologicalOcean = () => {
  const topics = [
    {
      title: "The Birth of the Ocean",
      description: "Earth formed about 4.6 billion years ago from the accumulation of matter from the solar nebula. Initially, Earth was extremely hot, with temperatures high enough to keep the surface molten. As Earth cooled, water vapor in the atmosphere condensed and fell as rain, collecting in low areas to form the early oceans. This water likely came from two sources: volcanic outgassing from Earth's interior and delivery by comets and asteroids.",
      icon: Layers,
      color: "bg-gradient-depth",
      facts: [
        "Earth is approximately 4.6 billion years old",
        "Ocean water came from volcanic outgassing and comets",
        "Early oceans formed as the planet cooled",
        "Water vapor condensed to create the first oceans"
      ]
    },
    {
      title: "Plate Tectonics & Seafloor Spreading",
      description: "The theory of plate tectonics explains that Earth's outer shell is divided into several plates that move over the mantle. At divergent boundaries (mid-ocean ridges), new oceanic crust is formed as magma rises from below. The Mid-Atlantic Ridge, for example, is spreading at about 2.5 cm per year, creating new seafloor and pushing the continents apart.",
      icon: Mountain,
      color: "bg-gradient-ocean",
      facts: [
        "Mid-ocean ridges create new oceanic crust",
        "Seafloor spreading rate: ~2-18 cm/year",
        "Mid-Atlantic Ridge separates Americas from Europe/Africa",
        "Oldest oceanic crust is ~200 million years old"
      ]
    },
    {
      title: "Ocean Trenches & Subduction",
      description: "At convergent plate boundaries, one plate is pushed beneath another in a process called subduction. This creates the deepest parts of the ocean: trenches. The Mariana Trench, the deepest point on Earth, reaches nearly 11,000 meters (36,000 feet) below sea level. Subduction zones are also responsible for volcanic activity and earthquakes around the Pacific Ring of Fire.",
      icon: Waves,
      color: "bg-gradient-wave",
      facts: [
        "Mariana Trench: deepest at ~11,000 m (36,089 ft)",
        "Subduction zones create deep ocean trenches",
        "Associated with earthquakes and volcanoes",
        "Pacific Ring of Fire encircles the Pacific Ocean"
      ]
    },
    {
      title: "Hydrothermal Vents",
      description: "Hydrothermal vents form along mid-ocean ridges where seawater seeps into cracks in the oceanic crust, gets heated by magma chambers below, and then rises back up, carrying dissolved minerals. These vents can reach temperatures of 400°C and support unique ecosystems based on chemosynthesis rather than photosynthesis, including giant tube worms, unique crabs, and bacteria that convert chemicals into energy.",
      icon: Zap,
      color: "bg-gradient-coral",
      facts: [
        "Water temperatures can exceed 400°C (750°F)",
        "Support chemosynthetic life forms",
        "Discovered in 1977 near the Galápagos Islands",
        "Home to giant tube worms up to 2 m long"
      ]
    }
  ];

  const seafloorFeatures = [
    { feature: "Continental Shelf", depth: "0-200 m", description: "Shallow, gently sloping extension of continents" },
    { feature: "Continental Slope", depth: "200-4,000 m", description: "Steep descent from shelf to deep ocean" },
    { feature: "Abyssal Plain", depth: "4,000-6,000 m", description: "Flat, sediment-covered deep ocean floor" },
    { feature: "Mid-Ocean Ridge", depth: "2,500 m", description: "Underwater mountain range where new crust forms" },
    { feature: "Ocean Trench", depth: "6,000-11,000 m", description: "Deepest parts of the ocean at subduction zones" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-depth text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Mountain className="h-16 w-16 mx-auto mb-6 animate-wave" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Earth's Dynamic Ocean</h1>
            <p className="text-xl text-white/90 leading-relaxed mb-4">
              Geological Oceanography: Understanding the Ocean Floor
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Explore plate tectonics, the ocean floor, continental margins, marine sediments, 
              hydrothermal vents, and the geological history of ocean basins.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Mapping the Seafloor</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              For most of human history, the ocean floor was a complete mystery. Early depth measurements 
              used weighted lines, a slow and imprecise method. The development of sonar in the early 20th 
              century revolutionized our ability to map the seafloor, revealing underwater mountain ranges, 
              deep trenches, and vast plains.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, satellite altimetry and multibeam sonar create detailed three-dimensional maps of the 
              ocean floor, helping us understand Earth's geological processes and discover new features.
            </p>
          </div>
        </div>
      </section>

      {/* Main Topics */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-ocean bg-clip-text text-transparent">
              Geological Processes
            </h2>
            <p className="text-xl text-muted-foreground">
              The forces that shape our ocean floor
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

      {/* Seafloor Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-wave bg-clip-text text-transparent">
              Features of the Ocean Floor
            </h2>
            <p className="text-xl text-muted-foreground">
              From shallow continental shelves to the deepest trenches
            </p>
          </div>

          <div className="space-y-4">
            {seafloorFeatures.map((item, index) => (
              <Card key={item.feature} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{item.feature}</CardTitle>
                    <Badge variant="outline" className="text-sm">{item.depth}</Badge>
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

      {/* Fun Facts */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-l-4 border-l-primary shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Did You Know?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base leading-relaxed">
                🌊 The Mid-Atlantic Ridge is the longest mountain range on Earth, stretching over 10,000 miles 
                from the Arctic Ocean to near the southern tip of Africa.
              </p>
              <p className="text-base leading-relaxed">
                🔥 Hydrothermal vents were only discovered in 1977, revealing entirely new ecosystems that don't 
                depend on sunlight for energy.
              </p>
              <p className="text-base leading-relaxed">
                📏 If you could drain all the water from the oceans, the seafloor would reveal features more 
                dramatic than anything on the continents—deeper canyons, taller mountains, and vaster plains.
              </p>
              <p className="text-base leading-relaxed">
                🪨 All oceanic crust is relatively young (less than 200 million years old) because it is 
                constantly being created at mid-ocean ridges and destroyed at subduction zones.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default GeologicalOcean;