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
        <h3 className={classes.titleFixed}>{title}</h3>
        <div className={classes.txt}>{secondTitle}</div>
        <div className={classes.children}>{children}</div>
      </div>
    </>
  )
}

export default Block
