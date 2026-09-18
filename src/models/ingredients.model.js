import { pool } from "../db.js";


export const getIngredientNameById = async (id) => {

  try {
    const [rows] = await pool.query("select ing_name, ing_unit from t_ingredients where ing_id = ?", [id])

    if (rows.length <= 0) return { error: "no hay ingrediente no existe" }

    return rows[0]
  } catch (error) {
    throw error
  }
}

export const getAllIngredients = async () => {
  try {
    const [rows] = await pool.query("select * from t_ingredients")

    if (rows.length <= 0) return { error: "no hay ingredientes" }

    return rows
  } catch (error) {
    throw error
  }
}