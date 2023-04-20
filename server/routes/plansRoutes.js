import { Router } from "express";

import { allForStatePlansController, searchPlan } from "../controller/plansController.js";

const router = Router();

router.post('/createPlan');

router.get('/r/:estado', allForStatePlansController);

router.get('/search/:search', searchPlan);

export default router;