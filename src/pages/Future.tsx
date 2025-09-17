import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Lightbulb, ExternalLink, TreePine, BookOpen, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Future = () => {
  const actions = [
    {
      category: "Individual Actions",
      icon: Heart,
      color: "bg-gradient-coral",
      items: [
        { action: "Reduce plastic use", impact: "Prevents ocean pollution", difficulty: "Easy" },
        { action: "Choose sustainable seafood", impact: "Supports healthy fisheries", difficulty: "Medium" },
        { action: "Reduce carbon footprint", impact: "Helps prevent ocean acidification", difficulty: "Medium" },
        { action: "Support ocean conservation organizations", impact: "Funds research and protection", difficulty: "Easy" },
        { action: "Participate in beach cleanups", impact: "Removes harmful debris", difficulty: "Easy" }
      ]
    },
    {
      category: "Community Engagement",
      icon: Users,
      color: "bg-gradient-wave",
      items: [
        { action: "Educate others about ocean issues", impact: "Spreads awareness", difficulty: "Medium" },
        { action: "Advocate for marine protected areas", impact: "Protects critical habitats", difficulty: "Hard" },
        { action: "Support sustainable fishing policies", impact: "Ensures long-term food security", difficulty: "Hard" },
        { action: "Join citizen science projects", impact: "Contributes to research", difficulty: "Medium" },
        { action: "Vote for environmentally conscious leaders", impact: "Creates policy change", difficulty: "Easy" }
      ]
    }
  ];

  const resources = [
    {
      title: "The Oceanography Society",
      description: "Professional society promoting oceanographic research and education",
      url: "https://tos.org/",
      type: "Professional"
    },
    {
      title: "IPCC Ocean Reports",
      description: "Scientific assessments on climate change impacts on oceans",
      url: "https://www.ipcc.ch/",
      type: "Research"
    },
    {
      title: "Women in Ocean Science",
      description: "Supporting women pursuing careers in marine sciences",
      url: "https://www.whoi.edu/what-we-do/educate/undergraduate-programs/",
      type: "Education"
    },
    {
      title: "Ocean Conservancy",
      description: "Leading organization working to protect ocean health",
      url: "https://oceanconservancy.org/",
      type: "Conservation"
    },
    {
      title: "National Geographic Ocean",
      description: "Educational resources and ocean exploration content",
      url: "https://www.nationalgeographic.com/environment/oceans/",
      type: "Education"
    },
    {
      title: "Monterey Bay Aquarium Seafood Watch",
      description: "Guide to sustainable seafood choices",
      url: "https://www.seafoodwatch.org/",
      type: "Practical"
    }
  ];

  const reflections = [
    {
      title: "The Ocean's Gift to Us",
      content: "Through studying oceanography, I've come to understand that the ocean isn't just a body of water—it's the life support system of our planet. Every breath we take, every drop of rain, every stable climate pattern we depend on is connected to the ocean.",
      icon: Heart
    },
    {
      title: "Our Responsibility",
      content: "We are the first generation to truly understand our impact on the ocean, and we may be the last that can do something meaningful about it. This knowledge comes with responsibility—to act, to advocate, and to ensure future generations inherit healthy oceans.",
      icon: Lightbulb
    },
    {
      title: "Hope for the Future",
      content: "Despite the challenges, I'm hopeful. Young people around the world are rising to protect our oceans. Science is advancing rapidly. New technologies offer solutions. When we work together, we can create positive change.",
      icon: TreePine
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-depth text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <TreePine className="h-16 w-16 mx-auto mb-6 animate-wave" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Future of Our Oceans</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              The choices we make today will determine the health of our oceans tomorrow. 
              Together, we can create a sustainable future for our blue planet.
            </p>
          </div>
        </div>
      </section>

      {/* What You Can Do */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-ocean bg-clip-text text-transparent">
              What You Can Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every action matters. Here are concrete steps you can take to help protect our oceans.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {actions.map((category, categoryIndex) => (
              <Card key={category.category} className="overflow-hidden">
                <div className={`h-2 ${category.color}`} />
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg ${category.color} text-white mr-4`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-base">{item.action}</h4>
                          <Badge 
                            variant={item.difficulty === "Easy" ? "secondary" : item.difficulty === "Medium" ? "default" : "destructive"}
                            className="text-xs"
                          >
                            {item.difficulty}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.impact}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Reflection */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-4xl font-bold mb-6 bg-gradient-wave bg-clip-text text-transparent">
              Personal Reflection
            </h2>
            <p className="text-xl text-muted-foreground">
              What I've learned from studying oceanography
            </p>
          </div>

          <div className="space-y-8">
            {reflections.map((reflection, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-primary text-primary-foreground mr-4">
                      <reflection.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl">{reflection.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed text-foreground">
                    {reflection.content}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Further Reading */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <ExternalLink className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-4xl font-bold mb-6 bg-gradient-coral bg-clip-text text-transparent">
              Continue Your Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore these resources to deepen your understanding of oceanography
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {resource.type}
                    </Badge>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-primary hover:text-primary/80"
                    onClick={() => window.open(resource.url, '_blank')}
                  >
                    Visit Resource
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-ocean text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">The Ocean Needs You</h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              You now understand the science behind our oceans and the challenges they face. 
              The question is: what will you do with this knowledge?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
              >
                Explore More
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                onClick={() => window.open('https://oceanconservancy.org/', '_blank')}
              >
                Take Action Today
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Future;