import { getLastRecipesList, addRecipesList } from "../models/recipesList.model.js";

export const getLastRecipesListSrv = async (req, res) => {
  try {
    const list = await getLastRecipesList()

    res.status(200).json(list)
  } catch (error) {
    return res.status(500).json({
      message: 'Error al obtener lista',
      error
    })
  }
}

export const addRecipesListSrv = async (req, res) => {
  try {
    const { recipesList } = req.body

    const result = await addRecipesList(recipesList)
    res.status(200).json({})
  } catch (error) {
    return res.status(500).json({
      message: 'Error al añadir lista',
      error
    })
  }
}