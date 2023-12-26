import { FastifyReply, FastifyRequest } from "fastify";
import { CreateIngredientInput } from "./ingredient.schema";
import { createIngredient, getIngredientsList } from "./ingredient.service";

export async function createIngredientHandler(
  request: FastifyRequest<{ Body: CreateIngredientInput }>,
  reply: FastifyReply
) {
  const body = request.body;
  try {
    const ingredient = await createIngredient(body);
    return ingredient;
  } catch (error) {
    console.log(error);
    return reply.code(500).send(error);
  }
}

export async function getIngredientsListHandler(
  _request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const list = await getIngredientsList()

    console.log(`Controller list_____________, }`)
    console.log(list)
    console.log(`Controller list_____________, `)

    return reply.send(list)
  } catch (error) {
    console.log(`Response status code: ${reply.statusCode}`);
    return reply.code(404).send({ error: 'Not found' });
  }
}
