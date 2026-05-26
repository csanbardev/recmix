import { Router } from "express";
import { createWeek, getAllRecipesSrv } from "../controllers/recipes.controller.js";

const router = Router()

//router.get('/recipes', createWeek)

router.get('/recipes', getAllRecipesSrv)


export default router
