
/**
 * With an ingredients list, create a new one resume in ingredient - quantity
 * 
 * @param {*} ingredientsList 
 */
export const resumeIngredients = (ingredientsList) => {
  const newIngredientList = new Map()

  ingredientsList.forEach(ingredient => {

    // increase quantity when the ingredient is already on the map
    if (newIngredientList.has(ingredient.ire_ing_id)) {
      let oldQuantity = newIngredientList.get(ingredient.ire_ing_id)
      let newQuantity = oldQuantity + ingredient.ire_quantity
      newIngredientList.set(ingredient.ire_ing_id, newQuantity)
    } else {
      // add ingredient to map
      newIngredientList.set(ingredient.ire_ing_id, ingredient.ire_quantity)
    }

  });

  return formatIngredientsMap(newIngredientList)
}

const formatIngredientsMap = (map) => {
  const formatedIngredients = []

  for (let [clave, valor] of map) {
    formatedIngredients.push({
      ire_ing_id: clave,
      ire_quantity: valor
    })
  }

  return formatedIngredients
}

