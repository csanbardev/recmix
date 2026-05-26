import { pool } from "../db.js";


export const getAllRecipes = async () => {

  try {
    const [rows] = await pool.query("select * from t_recipes")

    if (rows.length <= 0) return { error: "no hay recetas" }

    return rows
  } catch (error) {
    throw error
  }
}

export const getConditionalRecipes = async (conditions, many) => {
  try {
    const [rows] = await pool.query(`select * from t_recipes ${conditions} order by rand() limit ${many}`)
  } catch (error) {

  }
}