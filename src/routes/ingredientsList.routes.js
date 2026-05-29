import { Router } from "express";
import { getIngredientsListSrv } from "../controllers/ingredientsList.controller.js";

const router = Router()


router.get('/ingredients-list/:reclFec', getIngredientsListSrv)


export default router
