import * as Yup from "Yup"
import Button from "../button"
import { Field, Form, FormikProvider, useFormik } from "formik"
import Input from "../input"
import Select from "../select"
import { getIngredientsList } from "@/API/ingredients/clientSide"
import { useQuery } from "@tanstack/react-query"

const IngredientSelector: React.FC = () => {
  const initialValues = {
    name: "",
    quantity: "",
    unit: "",
  }

  const { data: ingredients } = useQuery({
    queryKey: ["ingredients"],
    queryFn: getIngredientsList,
  })
  console.log(ingredients)

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    quantity: Yup.number().required("Required"),
    unit: Yup.string().required("Required"),
  })

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values)
    },
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
          >
            <option>Select ingredient</option>
          </Field>

          <Button type="submit">Submit</Button>
        </Form>
      </FormikProvider>
    </>
  )
}

export default IngredientSelector
