import express from "express";
import recipesRoutes from './routes/recipes.routes.js'

const app = express()

// MIDDLEWARES
app.use(express.json())

// ROUTES

app.use(recipesRoutes)


app.use((req, res, next) => {
  res.status(404).json({
    message: 'endpoint not found'
  })
})

export default app