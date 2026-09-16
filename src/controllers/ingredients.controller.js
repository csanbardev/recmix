import { getAllIngredients } from '../models/ingredients.model.js'

export const getAllIngredientsSrv = async (req, res) => { 
  try {
    const ingredients = await getAllIngredients()
    res.json(ingredients)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}