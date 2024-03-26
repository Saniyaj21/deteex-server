import express from "express";
import { addEmployee, getAllEmp } from "../controllers/employeeController.js";


const router = express.Router();

// google sign up handles register and login by itself
router.get('/all', getAllEmp)
router.post('/add', addEmployee)




export default router;