import prisma from "../../../src/utils/prisma";
import ingredients from "../../data/ingredients";

// async function run() {
//   const result = await seedIngredients();
//   console.log(result);
// }

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

    // Green color
    console.info("\x1b[32m%s\x1b[0m", "Success: Ingredients seeded")
  }

  // Yellow color
  console.info("\x1b[33m%s\x1b[0m", "Failed: there's already data in Ingredients table, seeding ignored.")

}


// // Call the function to execute the script
// run();