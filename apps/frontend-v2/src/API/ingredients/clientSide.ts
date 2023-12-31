import AxiosInstance from '../axiosInstance'
import { IngredientsListResponseSchema } from '../../../../backend-v2/src/modules/ingredient/ingredient.schema'


export const getIngredientsList = async () => {
  const response = await AxiosInstance.get<IngredientsListResponseSchema[]>(
    "api/ingredients/ingredientsList"
  )
  console.log('call api getIngredientsList_____________')
  console.log(`response.data ===== `, response.data)
  return response.data
}