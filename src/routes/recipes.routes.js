import { Router } from "express";
import { createWeek, getAllRecipesSrv, insertRecipeSrv } from "../controllers/recipes.controller.js";

const router = Router()

//router.get('/recipes', createWeek)

router.get('/recipes', getAllRecipesSrv)
router.post('/recipes', insertRecipeSrv)


export default router
