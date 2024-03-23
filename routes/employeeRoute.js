import express from "express";
import { addEmployee } from "../controllers/employeeController.js";


const router = express.Router();

// google sign up handles register and login by itself
router.post('/add', addEmployee)




export default router;