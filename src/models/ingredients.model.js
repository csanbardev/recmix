import { pool } from "../db.js";


export const getIngredientNameById = async (id) => {

  try {
    const [rows] = await pool.query("select ing_name from t_ingredients where ing_id = ?", [id])

    if (rows.length <= 0) return { error: "no hay ingrediente no existe" }

    return rows[0]
  } catch (error) {
    throw error
  }
}