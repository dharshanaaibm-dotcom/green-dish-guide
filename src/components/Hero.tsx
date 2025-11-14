import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";

const Hero = () => {
  const scrollToCalculator = () => {
    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToMeals = () => {
    document.getElementById("meals")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <Leaf className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Sustainable Eating Made Simple</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
          Eat Better,
          <br />
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            For You & The Planet
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Discover delicious, eco-friendly meals tailored to your taste. Track your carbon footprint and make sustainable choices effortlessly.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 shadow-medium hover:shadow-soft transition-all"
            onClick={scrollToMeals}
          >
            Explore Meals
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-6 border-2 hover:bg-accent/5 transition-smooth"
            onClick={scrollToCalculator}
          >
            Calculate Impact
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
