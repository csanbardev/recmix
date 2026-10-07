import { getIngredientNameById } from "../models/ingredients.model.js";

/**
 * With an ingredients list, create a new one resume in ingredient - quantity
 * 
 * @param {*} ingredientsList 
 */
export const resumeIngredients = async (ingredientsList) => {
  const newIngredientList = new Map()

  ingredientsList.forEach(ingredient => {

    // increase quantity when the ingredient is already on the map
    if (newIngredientList.has(ingredient.ire_ing_id)) {
      let oldQuantity = newIngredientList.get(ingredient.ire_ing_id)
      let newQuantity = Number(oldQuantity) + Number(ingredient.ire_quantity)
      newIngredientList.set(ingredient.ire_ing_id, newQuantity)
    } else {
      // add ingredient to map
      newIngredientList.set(ingredient.ire_ing_id, Number(ingredient.ire_quantity))
    }

  });
  let formatedIngredientsMap = await formatIngredientsMap(newIngredientList)
  return formatedIngredientsMap
}

const formatIngredientsMap = async (map) => {
  const formatedIngredients = []

  for (let [clave, valor] of map) {
    let ingredientName = await getIngredientNameById(clave)

    formatedIngredients.push({
      ing_name: ingredientName.ing_name,
      ing_unit: ingredientName.ing_unit,
      ing_value: Number((Number(ingredientName.ing_value) * valor).toFixed(2)),
      ire_ing_id: clave,
      ire_quantity: valor
    })
  }

  return formatedIngredients
}

const calculateIngredientValue = (pricePerKg, quantity, unit) => {
  const quantityInGrams =
    unit === "kg" ? Number(quantity) * 1000 : Number(quantity);

  return Number(
    ((Number(pricePerKg) / 1000) * quantityInGrams).toFixed(2)
  );
};
