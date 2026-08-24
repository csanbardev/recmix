import { getAllRecipesById } from "../models/recipes.model.js";
import { getLastRecipesList, addRecipesList } from "../models/recipesList.model.js";

export const getLastRecipesListSrv = async (req, res) => {
  try {
    // obtiene una lista de IDs de las últimas recetas
    const list = await getLastRecipesList()

    // crea una lista de los IDs
    const recipesIds = list.map(recipe => recipe.recl_rec_id);

    // recupera las recetas con los datos completos a partir de los IDs
    const recipesList = await getAllRecipesById(recipesIds)


    res.status(200).json({
      recl_fec: list[0].recl_fec,
      recipesList
    })
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