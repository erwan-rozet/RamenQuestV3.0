import { getIngredientsList } from "@/API/ingredients/clientSide"
import Block from "@/ui/block"
import RecipeForm from "@/ui/forms/recipeForm"
import { GetServerSideProps } from "next"
import { IngredientsListResponseSchema } from "../../../../backend-v2/src/modules/ingredient/ingredient.schema"

interface AdvancedPageProps {
  ingredients: IngredientsListResponseSchema[]
}

const AdvancedIndex: React.FC<AdvancedPageProps> = (props) => {
  const { ingredients } = props
  return (
    <div>
      <Block title="Création de recette">
        <RecipeForm ingredients={ingredients} />
      </Block>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const ingredients = await getIngredientsList()

  return {
    props: {
      ingredients,
    },
  }
}

export default AdvancedIndex
