import express from "express";
import { create_student, studentWithoutMentor, students } from "../controllers/studentContoller.js";

const router = express.Router();

router.post("/create", create_student);
router.get("/students_without_mentor", studentWithoutMentor)
router.get("/", students);


export default router;