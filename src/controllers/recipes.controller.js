import { getAllRecipes } from "../models/recipes.model"


export const createWeek = async (req, res) => {
  try {
    const recipes = await getAllRecipes()

  } catch (error) {
    return res.status(500).json({
      message: 'Error al generar la semana',
      error
    })
  }
}