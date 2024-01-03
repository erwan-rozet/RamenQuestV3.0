import React from "react"
import classes from "./input.module.css"
import { IoSearchCircleOutline } from "react-icons/io5"
import { PiWarningCircle } from "react-icons/pi"

interface InputProps {
  label: string
  type?: string
  name?: string
  value?: string
  // onChange: (
  //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  // ) => void
  icon?: string
  error?: {
    name: string
    touched: boolean
  }
}

const Input: React.FC<
  React.HTMLProps<HTMLInputElement | HTMLTextAreaElement> & InputProps
> = ({ label, type, name, value, icon, error, ...props }) => {
  const inputElement =
    type && type.toLowerCase() === "textarea" ? (
      <textarea
        rows={4}
        cols={50}
        className={classes.textarea}
        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    ) : (
      <input
        className={classes.input}
        {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
      />
    )

  return (
    <div className={classes.container}>
      <div
        className={
          (error && error.name && error.touched && classes.controlError) ||
          classes.control
        }
      >
        {icon && (
          <div className={classes.icon}>
            <IoSearchCircleOutline />
          </div>
        )}
        <label className={classes.label}>{label}</label>
        {inputElement}
      </div>
      {error && error.name && error.touched ? (
        <div className={classes.errorDetails}>
          <PiWarningCircle size={12} /> {error.name}
        </div>
      ) : null}
    </div>
  )
}

export default Input
