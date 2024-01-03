import AxiosInstance from "../axiosInstance"
import { CreateRecipeInput } from "../../../../backend-v2/src/modules/recipe/recipe.schema"


interface NewRecipe {

  title: string,
  ingredient: string,
  description: string,

  // quantity: string,
  // unit: string,
  // instructions: string,
  // notes?: string,
  // tags?: string,
  // image?: string,
  // prepTime?: string,
  // cookTime?: string,
  // totalTime?: string,
  // servings?: string,
  // calories?: string,
  // fat?: string,
  // carbs?: string,
  // protein?: string,
}


export const postRecipe = async (data: NewRecipe) => {
  const { data: response } =
    await AxiosInstance.post<CreateRecipeInput>(
      "api/recipes",
      data
    )
  console.log('call api postRecipe_____________')
  return response
}