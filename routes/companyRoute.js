import express from "express";
import { addCompany, deleteCompany, getAllCompany } from "../controllers/companyController.js";


const router = express.Router();

// google sign up handles register and login by itself
router.post('/add', addCompany)
router.get('/all', getAllCompany)
router.delete('/delete/:id', deleteCompany)



export default router;