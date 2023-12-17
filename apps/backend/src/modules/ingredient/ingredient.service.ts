import prisma from "../../utils/prisma";

import { CreateIngredientInput } from "./ingredient.schema";

export async function createIngredient(data: CreateIngredientInput) {
  // console.log("---------typeof data = ", typeof data)
  return await prisma.ingredient.create({
    data,
  });
}


export async function getIngredientsList() {
  const result = await prisma.ingredient.findMany({
  })

  console.log(`Service result_____________, ${result}`)
  console.log(result)
  console.log(`Service result_____________, ${result}`)

  return result
}
