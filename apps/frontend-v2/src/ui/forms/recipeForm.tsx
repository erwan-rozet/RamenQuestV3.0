import * as Yup from "Yup"
import { Field, Form, FormikProvider, useFormik } from "formik"
import Button from "../button"
import Input from "../input"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { postRecipe } from "@/API/recipes/clientSide"
import { showToastMessage } from "@/helpers/toaster"
import { RecipeList } from "../../../../backend-v2/src/modules/recipe/recipe.schema"
import Preview from "@/components/preview"
// import IngredientSelector from "@/ui/forms/ingredientSelector"
import { useState } from "react"
import Select from "../select"
import { IngredientsListResponseSchema } from "../../../../backend-v2/src/modules/ingredient/ingredient.schema"

interface FormProps {
  ingredients: IngredientsListResponseSchema[]
}
const RecipeForm: React.FC<FormProps> = (props) => {
  const { ingredients } = props
  const queryClient = useQueryClient()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([])

  // Validation schema
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    // ingredient: Yup.array().of(Yup.string().required("Ingredient is required")),
    description: Yup.string().required("Description is required"),
    // quantity: Yup.string().required("Quantity is required"),
    // unit: Yup.string().required("Unit is required"),
    // instructions: Yup.string().required("Instructions are required"),
    // tags: Yup.string().required("Tags are required"),
  })

  // Initial values
  const initialValues = {
    title: "",
    ingredient: "",
    description: "",
    // quantity: "",
    // unit: "",
    // instructions: "",
    // notes: "",
    // tags: "",
    // image: "",
    // prepTime: "",
    // cookTime: "",
    // totalTime: "",
    // servings: "",
  }

  // Form declaration
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      mutation.mutate({
        title: values.title,
        ingredient: values.ingredient,
        description: values.description,
      })
      console.log("values from form ===> ", values)
    },
  })

  // Define mutation : executes API call
  const mutation = useMutation({
    mutationFn: postRecipe,
    onSuccess: (data) => {
      showToastMessage("Recette créée", "success", true)
      const previousRecipesList: RecipeList[] =
        queryClient.getQueryData(["myRecipes"]) || []
      queryClient.setQueryData(["myRecipes"], [...previousRecipesList, data])
      formik.resetForm()
    },
    onError: (error: string) => alert(JSON.stringify(error, null, 2)),
  })

  function handleChangeTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }
  function handleChangeDescription(event: React.ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value)
  }
  function handleChangeIngredients(
    event: React.ChangeEvent<HTMLSelectElement>,
  ) {
    const selectedIngredient = event.target.value
    setSelectedIngredients((prevIngredients: string[]) => [
      ...prevIngredients,
      selectedIngredient,
    ])
  }

  return (
    <>
      <FormikProvider value={formik}>
        <Form>
          <Field
            id="title"
            name="title"
            // placeholder="Title"
            label={"Title"}
            type="text"
            as={Input}
            onChange={handleChangeTitle}
            value={title}
            error={{
              name: formik.errors.title,
              touched: formik.touched.title,
            }}
          ></Field>
          <Field
            id="ingredient"
            name="ingredient"
            label={"Ingredient"}
            type="select"
            as={Select}
            onChange={handleChangeIngredients}
            value={selectedIngredients}
            error={{
              name: formik.errors.ingredient,
              touched: formik.touched.ingredient,
            }}
          >
            {Object.entries(ingredients).map(([key, ingredient]) => (
              <option key={key} value={ingredient.name}>
                {ingredient.name}
              </option>
            ))}
          </Field>
          <Field
            id="description"
            name="description"
            // placeholder="description"
            label={"Description"}
            type="text"
            as={Input}
            onChange={handleChangeDescription}
            value={description}
            error={{
              name: formik.errors.description,
              touched: formik.touched.description,
            }}
          ></Field>
          <Button type="submit">Créer la recettte</Button>
        </Form>
      </FormikProvider>
      <Preview
        title={title}
        description={description}
        ingredients={selectedIngredients}
      ></Preview>
    </>
  )
}

export default RecipeForm
