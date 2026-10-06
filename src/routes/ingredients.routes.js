import { Router } from "express";
import { getAllIngredientsSrv, updateIngredientSrv } from "../controllers/ingredients.controller.js";

const router = Router()

router.get('/ingredients', getAllIngredientsSrv)
router.put('/ingredients/:id', updateIngredientSrv)

export default router