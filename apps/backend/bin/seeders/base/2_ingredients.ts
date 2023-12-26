import prisma from "@/utils/prisma";
import ingredients from "../../data/ingredients";

export default async function seedIngredients() {
  const counter = await prisma.ingredient.count()
  if (counter < 1) {
    const ingredientsData = ingredients.map((item) => ({
      name: item.name,
      unit: { create: { name: item.unit } }, // Create the unit if it doesn't exist
      quantity: { create: { quantity: item.quantity } }, // Create the quantity if it doesn't exist
    }));

    await prisma.ingredient.createMany({
      data: ingredientsData,
    })

    return "Ingredients seeded";
  }
  
  return "Ingredients ignored";
}
