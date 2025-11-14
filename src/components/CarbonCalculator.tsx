import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calculator, TrendingDown, TrendingUp } from "lucide-react";

interface FoodItem {
  name: string;
  carbonPerKg: number; // kg CO2 per kg of food
  category: string;
}

const foodDatabase: FoodItem[] = [
  { name: "Beef", carbonPerKg: 27.0, category: "Meat" },
  { name: "Lamb", carbonPerKg: 39.2, category: "Meat" },
  { name: "Pork", carbonPerKg: 12.1, category: "Meat" },
  { name: "Chicken", carbonPerKg: 6.9, category: "Meat" },
  { name: "Fish (farmed)", carbonPerKg: 5.1, category: "Seafood" },
  { name: "Cheese", carbonPerKg: 13.5, category: "Dairy" },
  { name: "Milk", carbonPerKg: 1.9, category: "Dairy" },
  { name: "Eggs", carbonPerKg: 4.8, category: "Dairy" },
  { name: "Rice", carbonPerKg: 2.7, category: "Grains" },
  { name: "Wheat", carbonPerKg: 1.4, category: "Grains" },
  { name: "Potatoes", carbonPerKg: 0.3, category: "Vegetables" },
  { name: "Tomatoes", carbonPerKg: 1.4, category: "Vegetables" },
  { name: "Beans", carbonPerKg: 0.8, category: "Legumes" },
  { name: "Tofu", carbonPerKg: 2.0, category: "Legumes" },
  { name: "Nuts", carbonPerKg: 2.3, category: "Nuts & Seeds" },
  { name: "Apples", carbonPerKg: 0.4, category: "Fruits" },
  { name: "Bananas", carbonPerKg: 0.7, category: "Fruits" },
];

const CarbonCalculator = () => {
  const [selectedFood, setSelectedFood] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("1");
  const [totalCarbon, setTotalCarbon] = useState<number | null>(null);

  const handleCalculate = () => {
    const food = foodDatabase.find(f => f.name === selectedFood);
    if (food && quantity) {
      const carbon = food.carbonPerKg * parseFloat(quantity);
      setTotalCarbon(carbon);
    }
  };

  const getImpactLevel = (carbon: number) => {
    if (carbon < 2) return { label: "Low Impact", color: "text-accent", icon: TrendingDown };
    if (carbon < 10) return { label: "Medium Impact", color: "text-yellow-600", icon: TrendingUp };
    return { label: "High Impact", color: "text-destructive", icon: TrendingUp };
  };

  const impact = totalCarbon !== null ? getImpactLevel(totalCarbon) : null;
  const ImpactIcon = impact?.icon;

  return (
    <section id="calculator" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Calculator className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Carbon Calculator</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Measure Your Meal's Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate the carbon footprint of your food choices and discover sustainable alternatives
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-medium">
          <CardHeader>
            <CardTitle>Food Carbon Calculator</CardTitle>
            <CardDescription>
              Select a food item and quantity to see its environmental impact
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="food-select">Food Item</Label>
              <Select value={selectedFood} onValueChange={setSelectedFood}>
                <SelectTrigger id="food-select">
                  <SelectValue placeholder="Select a food item" />
                </SelectTrigger>
                <SelectContent>
                  {foodDatabase.map((food) => (
                    <SelectItem key={food.name} value={food.name}>
                      {food.name} ({food.category})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity (kg)</Label>
              <Input
                id="quantity"
                type="number"
                min="0.1"
                step="0.1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Enter quantity"
              />
            </div>

            <Button 
              onClick={handleCalculate} 
              className="w-full"
              disabled={!selectedFood || !quantity}
            >
              Calculate Carbon Footprint
            </Button>

            {totalCarbon !== null && impact && ImpactIcon && (
              <div className="mt-6 p-6 rounded-lg bg-card border-2 border-border">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Carbon Footprint</p>
                    <p className="text-4xl font-bold text-foreground">
                      {totalCarbon.toFixed(2)} kg CO₂
                    </p>
                  </div>
                  <div className={`flex items-center gap-2 ${impact.color}`}>
                    <ImpactIcon className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${impact.color} bg-current/10`}>
                    {impact.label}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Equivalent to driving approximately {(totalCarbon * 4.6).toFixed(1)} km in a car
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CarbonCalculator;
