import classes from "./block.module.css"

interface BlockProps {
  title?: string
  secondTtile?: string
  children?: React.ReactNode
}

const Block: React.FC<BlockProps> = (props) => {
  const { title, secondTtile, children } = props
  return (
    <>
      <div className={classes.mainElement}>
        <div className={classes.titleFixed}></div>
        <div className={classes.txt}></div>
        <h1>123</h1>
      </div>
    </>
  )
}

export default Block
