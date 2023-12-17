import classes from "./block.module.css"
import RecipeForm from "./forms/recipeForm"

interface BlockProps {
  title?: string
  secondTitle?: string
  children?: React.ReactNode
}

const Block: React.FC<BlockProps> = (props) => {
  const { title, secondTitle, children } = props
  return (
    <>
      <div className={classes.mainElement}>
        <div className={classes.titleFixed}></div>
        <div className={classes.txt}></div>
        <div className={classes.titleFixed}></div>
        <h1>{children}</h1>
      </div>
    </>
  )
}

export default Block
