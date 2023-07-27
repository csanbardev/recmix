import express from "express";

const app = express()

// MIDDLEWARES


// ROUTES

app.use((req, res, next) => {
  res.status(404).json({
    message: 'endpoint not found'
  })
})

export default app