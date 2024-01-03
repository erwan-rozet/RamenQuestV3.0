import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";


const ingredientInputSchema = z.object({
  name: z.string(),
  unitId: z.number(),
  quantity: z.string().optional().nullable()
});

const ingredientsListResponseSchema = z.object({
  name: z.string(),

});

export type CreateIngredientInput = z.infer<typeof ingredientInputSchema>;
export type IngredientsListResponseSchema = z.infer<typeof ingredientsListResponseSchema>
const ingredientsArray = z.array(ingredientsListResponseSchema)

export const { schemas: ingredientSchemas, $ref } = buildJsonSchemas(
  {
    ingredientInputSchema,
    ingredientsArray
  },
  { $id: "IngredientSchema" }
);
