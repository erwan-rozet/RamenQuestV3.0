import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const recipeInputSchema = z.object({
  title: z.string(),
  description: z.string(),
  ingredient: z.array(z.string()),
});

export type CreateRecipeInput = z.infer<typeof recipeInputSchema>;

export const { schemas: recipeSchemas, $ref } = buildJsonSchemas(
  {
    recipeInputSchema,
  },
  { $id: "RecipeSchema" }
);
