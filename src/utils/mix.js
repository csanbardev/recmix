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