import { Router } from "express";
const router = Router();

import { allDataController, authenticateProfesionalUser, createProfesionalUser, deleteAllUsers } from "../controller/usersController.js";

router.post('/createUser', createProfesionalUser);

router.post('/authenticateUser', authenticateProfesionalUser);

router.get('/allUsers', allDataController);

router.delete('/', deleteAllUsers);

export default router;