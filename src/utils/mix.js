import { getConditionalRecipes } from "../models/recipes.model.js";

export const mixRecipes = (recipes) => {

  if (recipes.length >= 14) {
    const recetas = filtrarRecetas(recipes)
    return recetas
  } else {
    throw Error("No hay recetas suficientes")
  }

}


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function filtrarRecetas(recipes) {
  // COUNT VARIABLES
  let meatCount = 0
  let pastaCount = 0
  let potatoCount = 0

  // MAIN CONSTS AND VARIABLES
  const filtrado = []
  let recetas = recipes

  // CONDITIONALS
  const ENOUGHT_MEAT = meatCount <= 2
  const ENOUGHT_PASTA = pastaCount <= 3
  const ENOUGHT_POTATO = potatoCount <= 3

  for (let i = 0; i < 14; i++) {
    if (filtrado[i] === undefined) {
      filtrado[i] = recetas[i]

      if (recetas[i].kind === 'carne') {
        meatCount++
      } else if (recetas[i].kind === 'pasta') {
        pastaCount++
      }

      if (i === 0) {

      } else if (recipes[i].kind === filtrado[i - 1].kind && ENOUGHT_MEAT && ENOUGHT_PASTA && ENOUGHT_POTATO) {
        recetas = shuffleArray(recipes) // barajo las recetas
        filtrado[i] = undefined
        i-- // intentará volver a insertar una receta
      }
    }
  }

  return filtrado
}
// TODO: comprobar que funciona
/**
 * Get an recipes array & return a new array filtered
 * 
 * @param {array} recetas 
 */
export const filterRecipe = async (recetas) => {

  // filter recipes & get how many recipes have deleted
  let { newRecipes, delections } = cleanRecipes(recetas)

  // if there were delections, it adds new recipes
  if (newRecipes.length < 14) {
    newRecipes = await fillRecipes(newRecipes, delections)
  }

}

const fillRecipes = async (recipes, delections) => {

  let many = 0
  let existed = []
  let typesAvoid = []

  // I get numeric values from delections
  let values = Object.values(delections)

  // I get how many recipes were deleted
  many = values.reduce((acumulador, valor) => acumulador + valor, 0)

  // I get ID for all existed recipes
  recipes.forEach(rec => {
    existed.push(rec.rec_id)
  })

  // I get types to avoid in delections
  typesAvoid = Object.keys(delections)


  const conditions = `WHERE rec_id NOT IN (${existed.join(', ')}) AND rec_kind NOT IN ('${typesAvoid.join("', '")}')`

  return await getConditionalRecipes(conditions, many)
}

/**
 * Filter a recipes array & make delections
 * @param {*} recipes 
 * @returns 
 */
const cleanRecipes = (recipes) => {

  // get types inside the array
  const definedTypes = countTypes(recipes)

  // copy from the original array
  let newRecipes = [...recipes]

  const LIMITS = {
    "carne": 2,
    "pasta": 3
  }

  let delections = {}


  // types to filter
  const sensibledTypes = ["carne", "pasta", "patata"]

  definedTypes.forEach(item => {
    if (sensibledTypes.includes(item.type) && item.count > LIMITS[item.type]) {
      let manyDeletes = item.count - LIMITS[item.type]

      newRecipes = deleteRecipesByType(newRecipes, item.type, manyDeletes)
      delections[item.type] = manyDeletes
    }
  })

  return { newRecipes, delections }

}

const deleteRecipesByType = (recipes, type, many) => {
  let eliminables = many


  for (let j = 0; j <= recipes.length; j++) {
    if (recipes[j].rec_kind === type) {
      recipes.splice(j, 1)
      eliminables--
      if (eliminables === 0) j = recipes.length + 1
    }
  }



  return recipes
}

/**
 * Count types from an recipes array
 * 
 * @param {*} recetas 
 * @returns array with types and count of each one
 */
const countTypes = (recetas) => {
  const definedTypes = []

  recetas.forEach(rec => {
    let index = definedTypes.findIndex(element => element.type === rec.rec_kind)

    if (index !== -1) {
      definedTypes[index].count++
    } else {
      definedTypes.push({
        type: rec.rec_kind,
        count: 1
      })
    }

  });

  return definedTypes

}

export const recipes = [
  {
    rec_name: "1",
    rec_kind: "patata"
  },
  {
    rec_name: "2",
    rec_kind: "pasta"
  },
  {
    rec_name: "3",
    rec_kind: "verdura"
  },
  {
    rec_name: "4",
    rec_kind: "carne"
  },
  {
    rec_name: "5",
    rec_kind: "carne"
  },
  {
    rec_name: "6",
    rec_kind: "patata"
  },
  {
    rec_name: "11",
    rec_kind: "carne"
  },
  {
    rec_name: "7",
    rec_kind: "verdura"
  },
  {
    rec_name: "8",
    rec_kind: "pasta"
  },
  {
    rec_name: "9",
    rec_kind: "otro"
  },
]