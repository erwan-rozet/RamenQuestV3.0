import Fastify from "fastify";
import { recipeSchemas } from "./modules/recipe/recipe.schema";
import { ingredientSchemas } from "./modules/ingredient/ingredient.schema";
import ingredientRoutes from "./modules/ingredient/ingredient.route";
import recipeRoutes from "./modules/recipe/recipe.route";
import cors from "@fastify/cors"

export const server = Fastify();

server.get("/healthcheck", async function () {
  return { status: "OK les mecs" };
});

async function main() {
  // Attention, ici il est important d'ajouter les schemas au server AVANT d'enregistrer les routes
  for (const schema of [...recipeSchemas, ...ingredientSchemas]) {
    server.addSchema(schema);
  }

  // // Enregistrement des routes
  server.register(ingredientRoutes, { prefix: "api/ingredients" });
  server.register(recipeRoutes, { prefix: "api/recipes" });

  server.register(cors, {
    origin: "*",
  })
  try {
    await server.listen(3001, "0.0.0.0");
    console.log("Server ready at http://localhost:3001");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();

export default main;
