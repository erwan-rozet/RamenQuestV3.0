import * as Yup from "Yup"
import { Field, Form, FormikProvider, useFormik } from "formik"
import Button from "../button"
import Input from "../input"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { postRecipe } from "@/API/recipes/clientSide"
import { showToastMessage } from "@/helpers/toaster"
import { RecipeList } from "../../../../backend/src/modules/recipe/recipe.schema"

const RecipeForm: React.FC = () => {
  const queryClient = useQueryClient()

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
    // calories: "",
    // fat: "",
    // carbs: "",
    // protein: "",
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
  // const mutation = useMutation(postRecipe, {
  //   onSuccess: (data) => {
  //     showToastMessage("Recette créée", "success", true)
  //     const previousRecipesList: RecipeList[] =
  //       queryClient.getQueryData(["myRecipes"]) || []
  //     queryClient.setQueryData(["myRecipes"], [...previousRecipesList, data])
  //     formik.resetForm()
  //   },
  //   onError: (error: string) => alert(JSON.stringify(error, null, 2)),
  // })

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
            onChange={formik.handleChange}
            value={formik.values.title}
            error={{
              name: formik.errors.title,
              touched: formik.touched.title,
            }}
          ></Field>
          <Field
            id="ingredient"
            name="ingredient"
            // placeholder="Ingredient"
            label={"Ingredient"}
            type="text"
            as={Input}
            onChange={formik.handleChange}
            value={formik.values.ingredient}
            error={{
              name: formik.errors.ingredient,
              touched: formik.touched.ingredient,
            }}
          ></Field>
          <Field
            id="description"
            name="description"
            // placeholder="description"
            label={"Description"}
            type="text"
            as={Input}
            onChange={formik.handleChange}
            value={formik.values.description}
            error={{
              name: formik.errors.description,
              touched: formik.touched.description,
            }}
          ></Field>
          {/* <Field
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
          ></Field> */}

          {/* <Button margin={"20px"} type="submit">
            Add step
          </Button> */}
          <Button type="submit">Créer la recettte</Button>
        </Form>
      </FormikProvider>
    </>
  )
}

export default RecipeForm
