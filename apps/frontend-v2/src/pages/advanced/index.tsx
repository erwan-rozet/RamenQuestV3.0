import Block from "@/ui/block"
import IngredientSelector from "@/ui/forms/ingredientSelector"
import RecipeForm from "@/ui/forms/recipeForm"

const AdvancedIndex: React.FC = () => {
  return (
    <div>
      <Block title="Your Title" secondTitle="Your Second Title">
        <RecipeForm />
        <IngredientSelector />
      </Block>
    </div>
  )
}

export default AdvancedIndex
