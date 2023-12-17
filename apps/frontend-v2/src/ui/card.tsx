import classes from "../ui/card.module.css"
import { CgChevronDownO } from "react-icons/cg"
import { BiChevronUpCircle } from "react-icons/bi"
import { LuChevronDownSquare } from "react-icons/lu"
import { LuChevronUpSquare } from "react-icons/lu"

interface CardProps {
  title: string
  imageUrl?: string
  onClick?: () => void
  children?: React.ReactNode
  className?: string
  setOpen?: boolean
}

const Card: React.FC<CardProps> = ({
  title,
  imageUrl,
  onClick,
  className,
  setOpen,
  children,
}) => {
  return (
    <div className={`card ${classes.cardContainer}`} onClick={onClick}>
      {imageUrl && <img src={imageUrl} alt={title} />}
      <div className={classes.cardContent}>
        <div className={classes.titleContainer}>
          <h3 className={classes.cardTitle}>{title}</h3>
        </div>
        {children && <div className={classes.cardChildren}>{children}</div>}
      </div>
      {setOpen ? (
        // <BiChevronUpCircle className={classes.cardIcon} />
        <LuChevronUpSquare className={classes.cardIcon} />
      ) : (
        // <CgChevronDownO className={classes.cardIcon} />
        <LuChevronDownSquare className={classes.cardIcon} />
      )}
    </div>
  )
}

export default Card
