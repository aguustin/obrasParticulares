import { Router } from "express";

import { allForStatePlansController, getPlansController, searchPlan } from "../controller/plansController.js";

const router = Router();

router.get('/all', getPlansController);

router.post('/createPlan');

router.get('/estados/:estado', allForStatePlansController);

router.get('/search/:search', searchPlan);

export default router;