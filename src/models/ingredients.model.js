import { pool } from "../db.js";


export const getIngredientNameById = async (id) => {

  try {
    const [rows] = await pool.query("select ing_name, ing_unit, ing_value from t_ingredients where ing_id = ?", [id])

    if (rows.length <= 0) return { error: "no hay ingrediente no existe" }

    return rows[0]
  } catch (error) {
    throw error
  }
}

export const updateIngredient = async (id, ingredientData) => {
  try {
    const { ing_name, ing_unit, ing_value } = ingredientData
    const ingredientUpdate = {
      ...(ing_name !== undefined ? { ing_name } : {}),
      ...(ing_unit !== undefined ? { ing_unit } : {}),
      ...(ing_value !== undefined ? { ing_value } : {})
    }

    if (Object.keys(ingredientUpdate).length === 0) {
      return { error: "no hay datos para actualizar" }
    }

    const [result] = await pool.query("update t_ingredients set ? where ing_id = ?", [ingredientUpdate, id])

    if (result.affectedRows <= 0) return { error: "no hay ingrediente no existe" }

    return { message: "ingrediente actualizado", id }
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