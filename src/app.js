import express from "express";
import recipesRoutes from './routes/recipes.routes.js'
import recipesListRoutes from './routes/recipesList.routes.js'
import ingredientsListRoutes from './routes/ingredientsList.routes.js'
import ingredientsRoutes from './routes/ingredients.routes.js'
import cors from 'cors'

const app = express()

// MIDDLEWARES
app.use(cors())
app.use(express.json())

// ROUTES

app.use(recipesRoutes)
app.use(recipesListRoutes)
app.use(ingredientsListRoutes)
app.use(ingredientsRoutes)


app.use((req, res, next) => {
  res.status(404).json({
    message: 'endpoint not found'
  })
})

export default app