import { Router } from "express";
import { getAllIngredientsSrv } from "../controllers/ingredients.controller.js";

const router = Router()

router.get('/ingredients', getAllIngredientsSrv)

export default router