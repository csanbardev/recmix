import { pool } from "../db.js";

export const getLastRecipesList = async () => {
  try {
    const [rows] = await pool.query("select * from t_recipes_list where recl_fec in (select max(recl_fec) from t_recipes_list)");

    if (rows === null || rows.length <= 0) {
      throw new Error("404");
    }

    return rows
  } catch (error) {
    throw error
  }
}

export const getRecipesListByFec = async (reclFec) => {
  try {
    const [rows] = await pool.query("select recl_rec_id from t_recipes_list where recl_fec = ?", [reclFec]);

    if (rows === null || rows.length <= 0) {
      throw new Error("404");
    }

    return rows
  } catch (error) {
    throw error
  }
}

export const addRecipesList = async (recipeList) => {
  try {
    const TIMESTAMP_LIST = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const values = recipeList.map(recipeId => [recipeId, TIMESTAMP_LIST]);

    const [result] = await pool.query(`
        INSERT INTO t_recipes_list (recl_rec_id, recl_fec) 
        VALUES ?
    `, [values]);

    return result;
  } catch (error) {
    throw error
  }
}