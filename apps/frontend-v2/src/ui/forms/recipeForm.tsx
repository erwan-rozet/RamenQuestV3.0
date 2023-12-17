import * as Yup from "Yup"
import { Field, Form, FormikProvider, useFormik } from "formik"
import Button from "../button"
import Input from "../input"

const RecipeForm: React.FC = () => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    ingredient: Yup.string().required("Ingredient is required"),
    quantity: Yup.string().required("Quantity is required"),
    unit: Yup.string().required("Unit is required"),
    instructions: Yup.string().required("Instructions are required"),
    tags: Yup.string().required("Tags are required"),
  })

  const initialValues = {
    title: "",
    ingredient: "",
    quantity: "",
    unit: "",
    instructions: "",
    notes: "",
    tags: "",
    image: "",
    prepTime: "",
    cookTime: "",
    totalTime: "",
    servings: "",
    calories: "",
    fat: "",
    carbs: "",
    protein: "",
  }

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
            id="title"
            name="title"
            // placeholder="Title"
            label="Title"
            type="text"
            as={Input}
          ></Field>
          <Field
            id="ingredient"
            name="ingredient"
            // placeholder="Ingredient"
            label="Ingredient"
            type="text"
            as={Input}
          ></Field>
          <Field
            id="quantity"
            name="quantity"
            // placeholder="Quantity"
            label="Quantity"
            type="text"
            as={Input}
          ></Field>
          <Field
            id="unit"
            name="unit"
            // placeholder="Unit"
            label="Unit"
            type="text"
            as={Input}
          ></Field>
          <Field
            id="instructions"
            name="instructions"
            type="textarea"
            // placeholder="Instructions"
            label="Instructions"
            as={Input}
          ></Field>
          <Field
            id="step 1"
            name="step 1"
            type="textarea"
            // placeholder="step 1"
            label="step 1"
            as={Input}
          ></Field>

          <Button margin={"20px"} type="submit">
            Add step
          </Button>
          <Button type="submit">Submit</Button>
        </Form>
      </FormikProvider>
    </>
  )
}

export default RecipeForm
