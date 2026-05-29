import { pool } from "../db.js";

export const getIngredientsByRecipes = async (recipesList) => {

  try {
    const values = recipesList.map(recipeId => 
      recipeId.recl_rec_id);
    const [rows] = await pool.query("select * from t_ingredients_recipes where ire_rec_id in (?)", [values])

    if (rows.length <= 0) return { error: "no hay ingredientes para estas recetas" }

    return rows
  } catch (error) {
    throw error
  }
}