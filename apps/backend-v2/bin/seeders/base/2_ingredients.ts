import prisma from "../../../src/utils/prisma"
import ingredientsData from "../../data/ingredients"
import { colors } from "../../../ANSI_colors"


export default async function seedIngredients() {
  const counter = await prisma.ingredient.count()
  const units = await prisma.unit.findMany()
  const unitsMap = new Map<string, number>()
  units.forEach((item) => unitsMap.set(item.name, item.id))
  console.log(`unitsMap ===== `, unitsMap)

  if (counter < 1) {
    const ingredients = ingredientsData.map((item) => ({
      name: item.name,
      quantity: item.quantity,
      // unit: item.unit,
      unitId: unitsMap.get(item.unit) ?? 0
    }))

    await prisma.ingredient.createMany({
      data: ingredients,
    })

    console.info(`${colors.green}, Success: Ingredients seeded`)
    return

  }

  console.info(`${colors.orange}, Warning: there's already data in Ingredients table, seeding ignored.`)
  return

}


