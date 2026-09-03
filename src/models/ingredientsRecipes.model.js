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

export const insertIngredientsForRecipe = async (recipeId, ingredientsList) => {
  try {
    const values = ingredientsList.map(ingredient => [
      recipeId,
      ingredient.ire_ing_id,
      ingredient.ire_quantity
    ])
    const [rows] = await pool.query(
      "insert into t_ingredients_recipes (ire_rec_id, ire_ing_id, ire_quantity) values ?",
      [values]
    )
    return rows
  } catch (error) {
    throw error
  }
} 