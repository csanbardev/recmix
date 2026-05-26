import { Router } from "express";
import { addRecipesListSrv, getLastRecipesListSrv } from "../controllers/recipesList.controller.js";

const router = Router()

router.get('/recipes-list', getLastRecipesListSrv)
router.post('/recipes-list', addRecipesListSrv)

export default router