import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Heart, Flame } from "lucide-react";

interface Meal {
  id: number;
  name: string;
  description: string;
  carbonFootprint: number;
  calories: number;
  healthScore: number;
  tags: string[];
  ingredients: string[];
}

const meals: Meal[] = [
  {
    id: 1,
    name: "Mediterranean Chickpea Bowl",
    description: "A vibrant mix of roasted chickpeas, fresh vegetables, and tahini dressing",
    carbonFootprint: 0.8,
    calories: 420,
    healthScore: 9,
    tags: ["Vegan", "High Protein", "Gluten-Free"],
    ingredients: ["Chickpeas", "Tomatoes", "Cucumber", "Tahini", "Olive Oil"]
  },
  {
    id: 2,
    name: "Lentil & Sweet Potato Curry",
    description: "Warming curry with red lentils, sweet potatoes, and aromatic spices",
    carbonFootprint: 0.9,
    calories: 380,
    healthScore: 9,
    tags: ["Vegan", "High Fiber", "Low Carbon"],
    ingredients: ["Red Lentils", "Sweet Potato", "Coconut Milk", "Spinach", "Curry Spices"]
  },
  {
    id: 3,
    name: "Quinoa Buddha Bowl",
    description: "Nutrient-packed bowl with quinoa, roasted vegetables, and avocado",
    carbonFootprint: 1.2,
    calories: 450,
    healthScore: 10,
    tags: ["Vegetarian", "Balanced", "Protein-Rich"],
    ingredients: ["Quinoa", "Broccoli", "Avocado", "Chickpeas", "Pumpkin Seeds"]
  },
  {
    id: 4,
    name: "Grilled Tofu Stir-Fry",
    description: "Asian-inspired stir-fry with crispy tofu and seasonal vegetables",
    carbonFootprint: 1.5,
    calories: 340,
    healthScore: 8,
    tags: ["Vegan", "Low Calorie", "Quick"],
    ingredients: ["Tofu", "Bell Peppers", "Bok Choy", "Ginger", "Soy Sauce"]
  },
  {
    id: 5,
    name: "Black Bean Tacos",
    description: "Delicious tacos filled with seasoned black beans and fresh toppings",
    carbonFootprint: 1.1,
    calories: 380,
    healthScore: 8,
    tags: ["Vegetarian", "Mexican", "High Fiber"],
    ingredients: ["Black Beans", "Corn Tortillas", "Avocado", "Salsa", "Cilantro"]
  },
  {
    id: 6,
    name: "Mushroom & Barley Risotto",
    description: "Creamy, comforting risotto made with hearty barley and wild mushrooms",
    carbonFootprint: 1.0,
    calories: 410,
    healthScore: 7,
    tags: ["Vegetarian", "Comfort Food", "Seasonal"],
    ingredients: ["Barley", "Mushrooms", "Vegetable Broth", "Parmesan", "Thyme"]
  }
];

const getCarbonBadge = (carbon: number) => {
  if (carbon < 1) return { label: "Ultra Low", variant: "default" as const, color: "bg-accent" };
  if (carbon < 2) return { label: "Low", variant: "secondary" as const, color: "bg-accent/70" };
  return { label: "Medium", variant: "outline" as const, color: "bg-yellow-100" };
};

const MealRecommendations = () => {
  return (
    <section id="meals" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <Leaf className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Meal Recommendations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sustainable & Delicious Meals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked recipes that are good for you and great for the planet
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {meals.map((meal) => {
            const carbonBadge = getCarbonBadge(meal.carbonFootprint);
            return (
              <Card key={meal.id} className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{meal.name}</CardTitle>
                    <div className={`px-2 py-1 rounded-full ${carbonBadge.color}`}>
                      <Leaf className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>
                  <CardDescription>{meal.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {meal.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Leaf className="w-4 h-4 text-accent" />
                      </div>
                      <p className="text-xs text-muted-foreground">Carbon</p>
                      <p className="text-sm font-bold text-foreground">{meal.carbonFootprint} kg</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Flame className="w-4 h-4 text-orange-500" />
                      </div>
                      <p className="text-xs text-muted-foreground">Calories</p>
                      <p className="text-sm font-bold text-foreground">{meal.calories}</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Heart className="w-4 h-4 text-red-500" />
                      </div>
                      <p className="text-xs text-muted-foreground">Health</p>
                      <p className="text-sm font-bold text-foreground">{meal.healthScore}/10</p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <p className="text-xs font-medium text-muted-foreground mb-2">Key Ingredients:</p>
                    <p className="text-sm text-foreground">{meal.ingredients.join(", ")}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MealRecommendations;
