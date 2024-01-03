import { FastifyInstance } from "fastify";
import { $ref } from "./ingredient.schema";
import { createIngredientHandler, getIngredientsListHandler } from "./ingredient.controller";

async function ingredientRoutes(server: FastifyInstance) {

  server.post(
    "/",
    {
      schema: {
        body: $ref("ingredientInputSchema"),
        response: {
          201: $ref("ingredientInputSchema"),
        },
      },
    },
    createIngredientHandler
  );

  server.get(
    "/list",
    {
      schema: {
        response: {
          200: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                name: { type: 'string' }
              }
            }
          }
        },
      },
    },
    getIngredientsListHandler
  )

  server.get("/ingredientsList",
    {
      schema: {
        response: {
          200: $ref("ingredientsArray")
        }
      }
    },
    getIngredientsListHandler
  )


}

export default ingredientRoutes;
