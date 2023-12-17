import Block from "@/ui/block"
import RecipeForm from "@/ui/forms/recipeForm"

const AdvancedIndex: React.FC = () => {
  return (
    <div>
      <Block title="Your Title" secondTitle="Your Second Title">
        <RecipeForm />
      </Block>
    </div>
  )
}

export default AdvancedIndex
