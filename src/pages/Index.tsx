import Hero from "@/components/Hero";
import CarbonCalculator from "@/components/CarbonCalculator";
import MealRecommendations from "@/components/MealRecommendations";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CarbonCalculator />
      <MealRecommendations />
      <footer className="bg-muted py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="text-sm">
            © 2025 EcoMeal. Making sustainable eating simple and delicious.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
