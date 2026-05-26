import { getAllRecipes, getConditionalRecipes } from "../models/recipes.model.js"
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