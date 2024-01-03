import React from "react"
import classes from "../ui/button.module.css"

interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, "className"> {
  //
  // Ici mes attributs custom
  //
  type: "reset" | "submit" | "button"
  color?: string
  children?: React.ReactNode
  margin?: string
}

const Button: React.FC<ButtonProps> = ({ children, margin, ...props }) => {
  function classesNamesProvider() {
    let classesNames = `${classes.btn}`
    if (props.color === "success") classesNames += ` ${classes.btnSuccess}`
    if (props.color === "noodles") classesNames += ` ${classes.btnNoodles}`
    return classesNames
  }
  //
  // Ici ça me permet de définir de façon dynimque le margin (ou autre) du Button
  //
  const buttonStyle: React.CSSProperties = {
    margin: margin || 0,
  }

  return (
    <button style={buttonStyle} className={classesNamesProvider()} {...props}>
      <span>{children}</span>
    </button>
  )
}

export default Button
