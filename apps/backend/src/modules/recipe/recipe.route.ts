import { FastifyInstance } from "fastify";
import { $ref } from "./recipe.schema";
import { createRecipeHandler } from "./recipe.controller";

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
  );
}

export default recipeRoutes;
