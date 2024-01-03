import prisma from "../../utils/prisma";

import { CreateIngredientInput } from "./ingredient.schema";

export async function createIngredient(data: CreateIngredientInput) {
  return await prisma.ingredient.create({
    data
  });
}


export async function getIngredientsList() {
  const result = await prisma.ingredient.findMany({
  })

  return result
}
