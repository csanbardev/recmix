import { getAllIngredients, updateIngredient } from '../models/ingredients.model.js'

export const getAllIngredientsSrv = async (req, res) => { 
  try {
    const ingredients = await getAllIngredients()
    res.json(ingredients)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const updateIngredientSrv = async (req, res) => {
  try {
    const { id } = req.params
    const ingredientData = req.body

    const result = await updateIngredient(id, ingredientData)

    if (result?.error) {
      return res.status(400).json(result)
    }

    res.json(result)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

