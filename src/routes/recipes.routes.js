import { Router } from "express";
import { createWeek } from "../controllers/recipes.controller.js";

const router = Router()

router.get('/recipes', createWeek)


export default router
