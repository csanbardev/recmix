import app from './app.js'
import { PORT } from './config.js'
import { filterRecipe, recipes } from './utils/mix.js'

filterRecipe(recipes)

app.listen(PORT)