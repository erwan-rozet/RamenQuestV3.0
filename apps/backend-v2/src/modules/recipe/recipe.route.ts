import { FastifyInstance } from "fastify";
import { $ref } from "./recipe.schema";
import { createRecipeHandler, getRecipeHandler } from "./recipe.controller";

async function recipeRoutes(server: FastifyInstance) {
  server.post(
    "/",
    {
      schema: {
        body: $ref("recipeInputSchema"),
        response: {
          201: $ref("recipeInputSchema"),
        },
      },
    },
    createRecipeHandler
  )


  server.get(
    "/recipes",
    {
      schema: {
        response: {
          200: $ref("recipeListSchema")
        }
      }
    },
    getRecipeHandler
  )
}

export default recipeRoutes;
