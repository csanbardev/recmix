import { pool } from "../db.js";

export const getIngredietsListByRecipes = async (recipesList) => {

  try {
    const [rows] = await pool.query("select * from t_ingredients_recipes where ire_rec_id in ?")

    if (rows.length <= 0) return { error: "no hay recetas" }

    return rows
  } catch (error) {
    throw error
  }
}