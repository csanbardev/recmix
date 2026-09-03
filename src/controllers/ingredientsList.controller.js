import { getIngredientsByRecipes } from "../models/ingredientsRecipes.model.js";
import { getRecipesListByFec } from "../models/recipesList.model.js";
import { resumeIngredients } from "../utils/ingredients.utils.js";

export const getIngredientsListSrv = async (req, res) => {
  try {
    const { reclFec } = req.params

    const recipesList = await getRecipesListByFec(reclFec)

    const ingredientsByRecipes = await getIngredientsByRecipes(recipesList)

    const ingredientsResume = await resumeIngredients(ingredientsByRecipes)

    res.status(200).json(ingredientsResume)
  } catch (error) {
    return res.status(500).json({
      message: 'Error al obtener recetas',
      error
    })
  }
}

export const getIngredientsListByRecipeSrv = async (req, res) => {
  try {
    const { recId } = req.params

    const ingredientsByRecipes = await getIngredientsByRecipes([
      { recl_rec_id: recId }
    ])

    // recupera los ingredientes con los datos completos a partir de los IDs
    const ingredientsResume = await resumeIngredients(ingredientsByRecipes)

  

    res.status(200).json(ingredientsResume)
  } catch (error) {
    return res.status(500).json({
      message: 'Error al obtener ingredientes por receta',
      error
    })
  }
}