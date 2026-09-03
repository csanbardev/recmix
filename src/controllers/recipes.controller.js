import { getAllRecipes, insertRecipe } from "../models/recipes.model.js"
import { insertIngredientsForRecipe } from "../models/ingredientsRecipes.model.js"
import { mixRecipes } from "../utils/mix.js"


export const createWeek = async (req, res) => {
  try {
    const recipes = await getAllRecipes()

    const mix = mixRecipes(recipes)

    res.status(200).json(mix)

  } catch (error) {
    return res.status(500).json({
      message: 'Error al generar la semana',
      error
    })
  }
}

export const getAllRecipesSrv = async(req, res) => {
  try {
    const recipes = await getAllRecipes()

    res.status(200).json(recipes)
  } catch (error) {
    return res.status(500).json({
      message: 'Error al obtener recetas',
      error
    })
  }
}

export const insertRecipeSrv = async(req, res) => {
  try {
    const { ingredients, ...recipe } = req.body

    // inserta la receta nueva
    const newRecipe = await insertRecipe(recipe)

    // inserta los ingredientes de la receta nueva  
    const result = await insertIngredientsForRecipe(newRecipe.insertId, ingredients)


    res.status(200).json(result)
  } catch (error) {
    return res.status(500).json({
      message: 'Error al insertar receta',
      error
    })
  }
} 