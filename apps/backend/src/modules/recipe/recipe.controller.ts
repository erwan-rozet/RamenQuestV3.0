import { FastifyReply, FastifyRequest } from "fastify";
import { CreateRecipeInput } from "./recipe.schema";
import { createRecipe } from "./recipe.service";

export async function createRecipeHandler(
  request: FastifyRequest<{ Body: CreateRecipeInput }>,
  reply: FastifyReply
) {
  const body = request.body;
  try {
    const recipe = await createRecipe(body);
    return { data: recipe };
  } catch (error) {
    console.log(error);
    return reply.code(500).send(error);
  }
}
