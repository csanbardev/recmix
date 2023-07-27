import { pool } from "../db";


export const getAllRecipes = async () => {

  try {
    const [rows] = await pool.query("select * from recipes order by rand()")
  
    if (rows.length <= 0) return {error: "no hay recetas"}
  
    return rows
  } catch (error) {
    throw error
  }
}