import { CreateRecipeInput } from "./recipe.schema";
import prisma from "../../utils/prisma";

export async function createRecipe(input: CreateRecipeInput) {
  const { description, title, ingredient } = input;

  const newRecipe = await prisma.recipe.create({
    data: {
      title,
      description,
      ingredients: {
        create: ingredient.map(({ name, unitId, quantity }) => ({
          ingredient: {
            connectOrCreate: {
              where: { name },
              create: { name, quantity, unitId },
            },
          },
        })),
      },
    },
    include: { ingredients: true },
  });

  return newRecipe;
}


export async function getRecipesList() {
  const list = await prisma.recipe.findMany({}
  )
}