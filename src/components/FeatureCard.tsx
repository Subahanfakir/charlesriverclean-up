import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  gradient?: string;
}

const FeatureCard = ({ title, description, icon: Icon, link, gradient = "bg-gradient-ocean" }: FeatureCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className={`absolute inset-0 ${gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
      
      <CardHeader className="relative">
        <div className="flex items-center justify-between">
          <div className={`p-3 rounded-lg ${gradient} text-white`}>
            <Icon className="h-6 w-6" />
          </div>
          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative">
        <CardDescription className="text-foreground text-base md:text-lg mb-4 leading-relaxed">
          {description}
        </CardDescription>
        <Link to={link}>
          <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 font-medium">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;