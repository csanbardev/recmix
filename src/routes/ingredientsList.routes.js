import { Router } from "express";
import { getIngredientsListSrv, getIngredientsListByRecipeSrv } from "../controllers/ingredientsList.controller.js";

const router = Router()


router.get('/ingredients-list/:reclFec', getIngredientsListSrv)
router.get('/ingredients-list-by-recipe/:recId', getIngredientsListByRecipeSrv)


export default router
