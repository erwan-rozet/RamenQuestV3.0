import * as Yup from "Yup"
import Button from "../button"
import { Field, Form, FormikProvider, useFormik } from "formik"
import Input from "../input"
import Select from "../select"
import { getIngredientsList } from "@/API/ingredients/clientSide"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

const IngredientSelector: React.FC = () => {
  const [selectedIngredient, setselectedIngredient] = useState("")
  const initialValues = {
    name: "",
    // quantity: "",
    // unit: "",
  }

  const { data: ingredients } = useQuery({
    queryKey: ["ingredients"],
    queryFn: () => getIngredientsList(),
  })
  console.log(ingredients)

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    // quantity: Yup.number().required("Required"),
    // unit: Yup.string().required("Required"),
  })

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values.name, null, 2))
      setselectedIngredient(values.name)
      console.log("values.name ===== ", selectedIngredient)
    },
    // onSubmit: (values) => {
    //   console.log("values.name ===== ", values.name)
    // },
  })

  return (
    <>
      <FormikProvider value={formik}>
        <Form>
          <Field
            id="name"
            name="name"
            placeholder="find ingredient"
            value={formik.values.name}
            label="name"
            type="select"
            as={Select}
            onChange={formik.handleChange}
          >
            {/* <option>Select ingredient</option> */}
            {ingredients &&
              ingredients.map((ingredient) => (
                <option key={ingredient.name} value={ingredient.name}>
                  {ingredient.name}
                </option>
              ))}
          </Field>

          <Button type="submit">"Console.log() la value sélectionnée"</Button>
        </Form>
      </FormikProvider>
    </>
  )
}

export default IngredientSelector
