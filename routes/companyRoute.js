import express from "express";
import { addCompany, getAllCompany } from "../controllers/companyController.js";


const router = express.Router();

// google sign up handles register and login by itself
router.post('/add', addCompany)
router.get('/all', getAllCompany)



export default router;