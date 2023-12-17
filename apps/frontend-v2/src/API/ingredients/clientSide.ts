import AxiosInstance from './axiosInstance'
import { IngredientsListResponseSchema } from '../../../../backend/src/modules/ingredient/ingredient.schema'


export const getIngredientsList = async () => {
  const response = await AxiosInstance.get<IngredientsListResponseSchema[]>(
    "api/ingredients/ingredientsList"
  )
  console.log('call api getIngredientsList_____________')
  return response.data
}