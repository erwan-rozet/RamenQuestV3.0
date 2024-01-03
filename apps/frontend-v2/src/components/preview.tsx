interface PreviewProps {
  title: string
  description: string
  ingredients: string[]
}

const Preview: React.FC<PreviewProps> = (props) => {
  const { title, description, ingredients } = props

  let ingredientsToDisplay: React.ReactNode | null = null
  if (ingredients && ingredients.length > 0) {
    ingredientsToDisplay = (
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    )
  }
  return (
    <div>
      Titre: {title}
      Description: {description}
      Ingredients: {ingredientsToDisplay}
    </div>
  )
}

export default Preview
