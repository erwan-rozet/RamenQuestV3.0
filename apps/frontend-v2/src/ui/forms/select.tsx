import classes from "./select.module.css"
import { FaChevronDown } from "react-icons/fa"

interface SelectProps
  extends Omit<React.HTMLProps<HTMLSelectElement>, "className"> {
  //nos attributs custom
  label?: string | undefined
  style_minimalist?: "true"
}

const Select: React.FC<SelectProps> = ({ ...props }) => {
  return (
    <div
      className={
        props.style_minimalist === "true"
          ? classes.selectMinimalist
          : classes.selectContainer
      }
    >
      <label className={classes.label}>{props.label && props.label}</label>
      <select className={classes.selectlocation} {...props} />
      <FaChevronDown className={classes.chevron} />
    </div>
  )
}

export default Select
